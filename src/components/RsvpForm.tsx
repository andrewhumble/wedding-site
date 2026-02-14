'use client'
import { useState } from 'react'
import { Guest } from '@/types/rsvp'

interface RsvpFormProps {
  partyId: string;
  initialParty: Guest[];
  onSuccess: () => void;
}

export default function RsvpForm({ partyId, initialParty, onSuccess }: RsvpFormProps) {
  const [email, setEmail] = useState(initialParty[0]?.email || '')
  const [responses, setResponses] = useState<Record<string, string>>(() => {
    return initialParty.reduce((acc: Record<string, string>, guest: Guest) => {
      acc[guest.id] = guest.rsvp_status === 'yes' ? 'yes' : 'no'
      return acc
    }, {})
  })
  const [mealPreferences, setMealPreferences] = useState<Record<string, 'Beef' | 'Chicken'>>(() => {
    return initialParty.reduce((acc: Record<string, 'Beef' | 'Chicken'>, guest: Guest) => {
      if (guest.meal_preference) {
        acc[guest.id] = guest.meal_preference
      }
      return acc
    }, {})
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const rsvps = initialParty.map((g) => ({
      guest_id: g.id,
      status: responses[g.id],
      meal_preference: responses[g.id] === 'yes' ? mealPreferences[g.id] : null,
    }))

    const titlePrecedence = (title: string | null | undefined): number => {
      if (!title) return 4
      const t = title.toLowerCase()
      if (t.includes('dr')) return 0
      if (t.includes('mr.') && !t.includes('mrs')) return 1
      if (t.includes('mrs') || t.includes('ms')) return 2
      return 3
    }

    const sortedGuests = [...initialParty].sort(
      (a, b) => titlePrecedence(a.title) - titlePrecedence(b.title)
    )

    const formattedNames = sortedGuests.map((g) =>
      g.title ? `${g.title} ${g.full_name}` : g.full_name
    )
    const guestNames =
      formattedNames.length <= 2
        ? formattedNames.join(' & ')
        : `${formattedNames.slice(0, -1).join(', ')} & ${formattedNames.at(-1)}`

    const res = await fetch('/api/rsvp', {
      method: 'POST',
      body: JSON.stringify({ party_id: partyId, rsvps, email, guestNames }),
    })

    if (res.ok) {
      onSuccess()
    } else {
      alert('Failed to submit RSVP')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
      <h2 className="text-2xl font-serif mb-6">Which guests will be attending?</h2>
      <div className="space-y-4">
        {initialParty.map((guest) => (
          <div key={guest.id} className="border rounded-lg overflow-hidden transition-all duration-200">
            <div
              className={`flex items-center justify-between p-4 transition-colors duration-200 ${
                responses[guest.id] === 'yes'
                  ? 'bg-stone-200 border-stone-300'
                  : 'bg-white'
              }`}
            >
              <label
                htmlFor={`rsvp-${guest.id}`}
                className="font-serif text-lg flex-grow cursor-pointer"
              >
                {guest.title ? `${guest.title} ${guest.full_name}` : guest.full_name}
              </label>
              <input
                type="checkbox"
                id={`rsvp-${guest.id}`}
                checked={responses[guest.id] === 'yes'}
                onChange={(e) => setResponses(prev => ({
                  ...prev,
                  [guest.id]: e.target.checked ? 'yes' : 'no'
                }))}
                className="h-5 w-5 cursor-pointer accent-stone-800"
              />
            </div>
            <div
              className="grid transition-all duration-300 ease-out"
              style={{
                gridTemplateRows: responses[guest.id] === 'yes' ? '1fr' : '0fr',
              }}
            >
              <div className="overflow-hidden">
                <div className={`px-4 pb-4 pt-2 bg-stone-50 border-t border-stone-200 transition-opacity duration-300 ${
                  responses[guest.id] === 'yes' ? 'opacity-100' : 'opacity-0'
                }`}>
                  <p className="text-sm text-stone-600 mb-3 font-serif">Select meal preference:</p>
                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={() => setMealPreferences(prev => ({ ...prev, [guest.id]: 'Beef' }))}
                      className={`w-full text-left p-3 rounded-lg font-serif text-sm transition-colors duration-200 ${
                        mealPreferences[guest.id] === 'Beef'
                          ? 'bg-stone-800 text-white'
                          : 'bg-white border border-stone-300 text-stone-800 hover:bg-stone-100'
                      }`}
                    >
                      Slow-Cooked Short Rib, Mashed Potatoes, Green Beans
                    </button>
                    <button
                      type="button"
                      onClick={() => setMealPreferences(prev => ({ ...prev, [guest.id]: 'Chicken' }))}
                      className={`w-full text-left p-3 rounded-lg font-serif text-sm transition-colors duration-200 ${
                        mealPreferences[guest.id] === 'Chicken'
                          ? 'bg-stone-800 text-white'
                          : 'bg-white border border-stone-300 text-stone-800 hover:bg-stone-100'
                      }`}
                    >
                      Roasted Chicken, Vidalia Onion Cream Sauce, Root Vegetables
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <label className="block font-serif">Email for Confirmation (optional)</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded mt-1 font-serif focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-stone-800 text-white px-4 py-3 rounded font-serif hover:bg-stone-600 transition-colors duration-200 cursor-pointer"
      >
        Confirm RSVP
      </button>
    </form>
  )
}

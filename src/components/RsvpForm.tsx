'use client'
import { useState } from 'react'

interface Guest {
  id: string;
  full_name: string;
  email?: string;
}

interface RsvpFormProps {
  partyId: string;
  initialParty: Guest[];
}

export default function RsvpForm({ partyId, initialParty }: RsvpFormProps) {
  const [email, setEmail] = useState(initialParty[0]?.email || '')
  const [responses, setResponses] = useState<Record<string, string>>(() => {
    return initialParty.reduce((acc: Record<string, string>, guest: Guest) => {
      acc[guest.id] = 'no'
      return acc
    }, {})
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const rsvps = initialParty.map((g) => ({
      guest_id: g.id,
      status: responses[g.id],
    }))

    const res = await fetch('/api/rsvp', {
      method: 'POST',
      body: JSON.stringify({ party_id: partyId, rsvps, email }),
    })

    if (res.ok) {
      window.location.href = '/rsvp/thanks'
    } else {
      alert('Failed to submit RSVP')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
      <h2 className="text-2xl font-sans mb-6">Which guests will be attending?</h2>
      <div className="grid gap-4">
        {initialParty.map((guest) => (
          <div 
            key={guest.id} 
            className={`p-4 border rounded-lg transition-colors duration-200 ${
              responses[guest.id] === 'yes' ? 'bg-stone-200 border-stone-300' : 'bg-white border-gray-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <label 
                htmlFor={`rsvp-${guest.id}`} 
                className="font-sans text-lg flex-grow cursor-pointer"
              >
                {guest.full_name}
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
          </div>
        ))}
      </div>
      <div className="mt-8">
        <label className="block font-sans">Email for Confirmation (optional)</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded mt-1"
        />
      </div>
      <button 
        type="submit" 
        className="w-full bg-stone-800 text-white px-4 py-3 rounded font-sans hover:bg-stone-600 transition-colors duration-200 cursor-pointer"
      >
        Confirm RSVP
      </button>
    </form>
  )
}

'use client'
import { useEffect, useState } from 'react'

interface Guest {
  id: string;
  full_name: string;
  email?: string;
}

interface RsvpFormProps {
  partyId: string;
}

export default function RsvpForm({ partyId }: RsvpFormProps) {
  const [party, setParty] = useState<Guest[]>([])
  const [email, setEmail] = useState('')
  const [responses, setResponses] = useState<Record<string, string>>({})

  useEffect(() => {
    async function loadParty() {
      const res = await fetch(`/api/lookup?partyId=${partyId}`)
      const data = await res.json()
      setParty(data.guests)
      setEmail(data.guests[0]?.email || '')
      const initialResponses = data.guests.reduce((acc: Record<string, string>, guest: Guest) => {
        acc[guest.id] = 'no'
        return acc
      }, {})
      setResponses(initialResponses)
    }
    loadParty()
  }, [partyId])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const rsvps = party.map((g) => ({
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
        {party.map((guest) => (
          <div 
            key={guest.id} 
            className={`p-4 border rounded-lg transition-colors duration-200 ${
              responses[guest.id] === 'yes' ? 'bg-stone-200 border-stone-300' : 'bg-white border-gray-200'
            }`}
          >
            <div className="flex items-start justify-between">
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
                className="h-5 w-5 cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <label className="block font-sans">Your Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded mt-1"
          required
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

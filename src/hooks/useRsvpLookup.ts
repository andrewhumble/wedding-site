import { useState } from 'react'
import { Party } from '@/types/rsvp'

interface UseRsvpLookupProps {
    onPartySelected: (party: Party) => void;
}

export function useRsvpLookup({ onPartySelected }: UseRsvpLookupProps) {
    const [availableParties, setAvailableParties] = useState<Party[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleNameLookup = async (name: string) => {
        setError(null)
        setIsLoading(true)
        try {
            const res = await fetch(`/api/lookup?name=${encodeURIComponent(name)}`)
            const data = await res.json()

            if (data.partyIds) {
                const parties = await Promise.all(
                    data.partyIds.map(async (id: string) => {
                        const partyRes = await fetch(`/api/lookup?partyId=${id}`)
                        const partyData = await partyRes.json()
                        return { id, guests: partyData.guests, party: partyData.party }
                    })
                )
                const uniqueParties = [...new Set(parties.map(p => p.party))];
                if (uniqueParties.length > 1) {
                    setAvailableParties(parties)
                } else {
                    onPartySelected(parties[0])
                }
            } else {
                setError('Hmm... we can\'t find your name. Make sure you enter your name exactly as it appears on your invitation.')
            }
        } catch {
            setError('An error occurred while looking up your name. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    const selectParty = (id: string) => {
        const selectedParty = availableParties.find(p => p.id === id)
        if (selectedParty) {
            onPartySelected(selectedParty)
            setAvailableParties([])
        }
    }

    return {
        availableParties,
        isLoading,
        error,
        handleNameLookup,
        selectParty
    }
} 
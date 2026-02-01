import { useState } from 'react'
import { Party } from '@/types/rsvp'

interface UseRsvpLookupProps {
    onPartySelected: (party: Party) => void;
}

// Error message identifiers
export const ERROR_MESSAGES = {
    NOT_FOUND: 'NOT_FOUND',
    GENERIC_ERROR: 'GENERIC_ERROR',
} as const

export type ErrorMessageType = keyof typeof ERROR_MESSAGES | string

export function useRsvpLookup({ onPartySelected }: UseRsvpLookupProps) {
    const [availableParties, setAvailableParties] = useState<Party[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<ErrorMessageType | null>(null)

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
                setError(ERROR_MESSAGES.NOT_FOUND)
            }
        } catch {
            setError(ERROR_MESSAGES.GENERIC_ERROR)
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
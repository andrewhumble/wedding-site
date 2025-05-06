'use client'

import { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import RsvpForm from '@/components/RsvpForm'
import PageLayout from '@/components/PageLayout'
import { Guest, Party } from '@/types/rsvp'
import { useRsvpLookup } from '@/hooks/useRsvpLookup'
import { NameLookupForm } from '@/components/NameLookupForm'
import { PartySelection } from '@/components/PartySelection'
import { ExistingRsvpDisplay } from '@/components/ExistingRsvpDisplay'

export default function RSVP() {
    const [partyId, setPartyId] = useState<string | null>(null)
    const [party, setParty] = useState<Guest[]>([])
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [hasExistingRsvp, setHasExistingRsvp] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false)

    const {
        availableParties,
        isLoading,
        error,
        handleNameLookup,
        selectParty
    } = useRsvpLookup({
        onPartySelected: (selectedParty: Party) => {
            setPartyId(selectedParty.id)
            setParty(selectedParty.guests)
            const hasRsvp = selectedParty.guests.some(
                guest => guest.rsvp_status === 'yes' || guest.rsvp_status === 'no'
            )
            setHasExistingRsvp(hasRsvp)
        }
    })

    const handleSuccess = () => {
        setIsSubmitted(true)
    }

    const handleBack = () => {
        setPartyId(null)
        setShowEditForm(false)
    }

    return (
        <PageLayout title="RSVP">
            <div className="relative max-w-3xl mx-auto px-6 md:px-16">
                <div className="bg-white border-1 p-1 border-stone-800">
                    <div className="border-1 border-spacing-8 border-stone-800 pb-14 px-6 py-14 md:px-12 flex flex-col items-center text-center relative overflow-hidden">
                        {partyId && !isLoading && !isSubmitted && (
                            <button
                                onClick={handleBack}
                                className="absolute top-4 left-4 text-stone-800 hover:text-stone-600"
                            >
                                <ArrowLeft className="w-6 h-6" />
                            </button>
                        )}
                        <div className="w-full max-w-md mx-auto">
                            {isSubmitted ? (
                                <div className="text-center space-y-6">
                                    <h2 className="text-2xl font-serif text-stone-800">Thank You!</h2>
                                    <p className="text-stone-600">Your RSVP has been submitted successfully. We look forward to celebrating with you!</p>
                                </div>
                            ) : !partyId || isLoading ? (
                                <>
                                    <NameLookupForm
                                        onSubmit={handleNameLookup}
                                        isLoading={isLoading}
                                        error={error}
                                    />
                                    {availableParties.length > 0 && (
                                        <PartySelection
                                            parties={availableParties}
                                            onSelect={selectParty}
                                        />
                                    )}
                                </>
                            ) : (
                                <>
                                    {hasExistingRsvp && !showEditForm ? (
                                        <ExistingRsvpDisplay
                                            party={party}
                                            onEdit={() => setShowEditForm(true)}
                                        />
                                    ) : (
                                        <RsvpForm
                                            partyId={partyId}
                                            initialParty={party}
                                            onSuccess={handleSuccess}
                                        />
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}

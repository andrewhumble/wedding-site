'use client'

import { useState } from 'react'
import { ArrowLeft, Loader2 } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DashedBorder from '@/ui/DashedBorder'
import RsvpForm from '@/components/RsvpForm'

interface Guest {
    id: string;
    full_name: string;
    email?: string;
}

export default function RSVP() {
    const [name, setName] = useState('')
    const [partyId, setPartyId] = useState<string | null>(null)
    const [party, setParty] = useState<Guest[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [availableParties, setAvailableParties] = useState<{id: string, guests: Guest[]}[]>([])

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setError(null)
        setIsLoading(true)
        const res = await fetch(`/api/lookup?name=${encodeURIComponent(name)}`)
        const data = await res.json()

        if (data.partyIds) {
            // If multiple parties found, load all of them
            const parties = await Promise.all(
                data.partyIds.map(async (id: string) => {
                    const partyRes = await fetch(`/api/lookup?partyId=${id}`)
                    const partyData = await partyRes.json()
                    return { id, guests: partyData.guests }
                })
            )
            if (parties.length > 1) {
                setAvailableParties(parties)
            } else {
                setPartyId(parties[0].id)
                setParty(parties[0].guests)
            }
        } else {
            setError('Hmm... we can\'t find your name. Make sure you enter your name exactly as it appears on your invitation.')
        }
        setIsLoading(false)
    }

    function selectParty(id: string) {
        const selectedParty = availableParties.find(p => p.id === id)
        if (selectedParty) {
            setPartyId(id)
            setParty(selectedParty.guests)
            setAvailableParties([])
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-[#FAF5F1]">
            <Navbar />
            <div className="px-4 pt-36 md:pt-42 pb-24 bg-[#58373E]" style={{ backgroundImage: 'url(/images/stripesImproved.png)', backgroundSize: '25% 100%' }}>
                <div className="text-center px-4 md:w-1/2 mx-auto">
                    <h1 className="text-2xl md:text-4xl font-sans-bold tracking-widest text-white mb-16">RSVP</h1>
                </div>
            </div>
            <DashedBorder className="hidden relative md:flex items-center mt-[-3] mb-[-3] z-10" />
            <DashedBorder length={10} className="md:hidden relative flex items-center mt-[-3] mb-[-3] z-10" />
            <section className="relative w-full bg-[#FAF5F1] py-16">
                <div className="relative max-w-3xl mx-auto px-6 md:px-16">
                    <div className="border-1 p-1 border-stone-800">
                        <div className="border-1 border-spacing-8 border-stone-800 pb-14 px-6 py-20 md:px-12 flex flex-col items-center text-center relative overflow-hidden">
                            {partyId && !isLoading && <button onClick={() => setPartyId(null)} className="absolute top-4 left-4 text-stone-800 hover:text-stone-600">
                                <ArrowLeft className="w-6 h-6" />
                            </button>}
                            <div className="w-full max-w-md mx-auto">
                                {!partyId || isLoading ? (
                                    <>
                                        <h1 className="max-w-3xl text-xl md:text-2xl font-sans text-stone-800 mb-6">Please enter the first and last name of one member of your party below.</h1>
                                        <form className="w-full space-y-6 text-left font-sans">
                                            <div>
                                                <label className="block mb-2 text-md text-stone-800">Guest Name</label>
                                                <input
                                                    type="text"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    required
                                                    className={`w-full px-4 py-2 border ${error ? 'border-red-500' : 'border-stone-300'} rounded-md bg-white text-stone-800`}
                                                />
                                                {error && (
                                                    <p className="mt-2 text-sm text-red-500">{error}</p>
                                                )}
                                            </div>
                                            <div className="flex justify-center">
                                                <button
                                                    type="submit"
                                                    onClick={handleSubmit}
                                                    disabled={isLoading}
                                                    className="px-6 py-3 bg-stone-800 text-[#FAF5F1] hover:bg-stone-700 hover:text-white rounded-md w-full flex justify-center"
                                                >
                                                    {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : 'Next'}
                                                </button>
                                            </div>
                                        </form>
                                        {availableParties.length > 0 && (
                                            <div className="mt-8 space-y-4">
                                                <h2 className="text-xl font-sans text-stone-800">Multiple parties found. Please select yours:</h2>
                                                {availableParties.map((party) => (
                                                    <button
                                                        key={party.id}
                                                        onClick={() => selectParty(party.id)}
                                                        className="w-full p-4 border border-stone-300 rounded-md hover:bg-stone-100 transition-colors"
                                                    >
                                                        <div className="text-left">
                                                            <p className="font-sans text-stone-800">Party Members:</p>
                                                            <ul className="mt-2 space-y-1">
                                                                {party.guests.map(guest => (
                                                                    <li key={guest.id} className="text-stone-600">{guest.full_name}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <RsvpForm partyId={partyId} initialParty={party} />
                                )}
                            </div>
                        </div>
                    </div>
                    {/* <div className="absolute right-[-10] top-[-70] md:right-0 md:top-[-120] pointer-events-none w-[120px] h-[168px] md:w-[220px] md:h-[320px]">
                        <Image
                            src="/images/hydrangea.png"
                            alt="Decorative flowers"
                            fill
                            className="object-contain"
                        />
                    </div> */}
                </div>
            </section>
            <Footer />
        </div>
    );
}

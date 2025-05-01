'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DashedBorder from '@/ui/DashedBorder'
import RsvpForm from '@/components/RsvpForm'

export default function RSVP() {
    const [name, setName] = useState('')
    const [partyId, setPartyId] = useState<string | null>(null)

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        const res = await fetch(`/api/lookup?name=${encodeURIComponent(name)}`)
        const data = await res.json()

        if (data.partyId) {
            setPartyId(data.partyId)
        } else {
            alert('No matching guest found.')
        }
    }

    return (
        <div className="min-h-screen bg-[#FAF5F1]">
            <Navbar />
            <div className="px-4 pt-36 md:pt-42 pb-24 bg-[#58373E]" style={{ backgroundImage: 'url(/images/stripesImproved.png)', backgroundSize: '25% 100%' }}>
                <div className="text-center px-4 md:w-1/2 mx-auto">
                    <h1 className="text-xl md:text-4xl font-sans-bold tracking-widest text-white mb-16">RSVP</h1>
                </div>
            </div>
            <DashedBorder className="hidden relative md:flex items-center mt-[-3] mb-[-3] z-10" />
            <DashedBorder length={10} className="md:hidden relative flex items-center mt-[-3] mb-[-3] z-10" />
            <section className="relative w-full bg-[#FAF5F1] py-16">
                <div className="relative max-w-3xl mx-auto px-6 md:px-16">
                    <div className="border-1 p-1 border-stone-800">
                        <div className="border-1 border-spacing-8 border-stone-800 pb-14 px-6 py-20 md:px-12 flex flex-col items-center text-center relative overflow-hidden">
                            {!partyId ? (
                                <>
                                    <h1 className="max-w-3xl text-xl md:text-2xl font-sans-light text-stone-800 mb-6">Please enter the first and last name of one member of your party below.</h1>
                                    <form className="w-full max-w-sm space-y-6 text-left font-sans">
                                        <div>
                                            <label className="block mb-2 text-md text-stone-800">Guest Name</label>
                                            <input
                                                type="text"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                                className="w-full px-4 py-2 border border-stone-300 rounded-md bg-white text-stone-800"
                                            />
                                        </div>
                                        <div className="text-center">
                                            <button
                                                type="submit"
                                                onClick={handleSubmit}
                                                className="px-6 py-3 bg-stone-800 text-[#FAF5F1] hover:bg-stone-700 hover:text-white rounded-md"
                                            >
                                                Next
                                            </button>
                                        </div>
                                    </form>
                                </>
                            ) : (
                                <RsvpForm partyId={partyId} />
                            )}
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

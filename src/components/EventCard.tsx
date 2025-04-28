import Image from 'next/image'

interface EventCardProps {
    className?: string;
}

export default function EventCard({ className }: EventCardProps) {
    return (
        <div className={className}>
            <section className="relative w-full bg-[#FAF5F1] py-24">
                <div className="absolute top-0 left-0 right-0 h-2 bg-[url('/images/dashed-border.png')] bg-repeat-x"></div>
                <div className="relative max-w-6xl mx-auto px-6 md:px-16">
                    <div className="border border-[#2c5836] py-10 px-6 md:px-12 flex flex-col items-center text-center relative overflow-hidden">
                        <h2 className="font-script italic text-[#2c5836] text-3xl md:text-4xl text-script">
                            We&apos;re getting married!
                        </h2>
                        <p className="font-sans-light max-w-3xl mx-auto text-[#2c5836] leading-relaxed text-3xl md:text-5xl pt-6">
                            Saturday, April 18th, 2026
                        </p>
                        <p className="font-sans-light max-w-3xl mx-auto text-[#2c5836] leading-relaxed text-2xl md:text-3xl">
                            at 5:30 PM
                        </p>
                        <p className="font-sans-light max-w-3xl mx-auto text-[#2c5836] leading-relaxed text-lg md:text-xl pt-6 underline underline-offset-5 decoration-1">
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=7845+Bethel+Rd+Gainesville+GA+30506"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                7845 Bethel Rd, Gainesville, GA, 30506
                            </a>
                        </p>
                    </div>

                </div>
                <div className="absolute right-[-10] top-5 md:right-45 md:top-[-30] pointer-events-none w-[120px] h-[168px] md:w-[220px] md:h-[320px]">
                    <Image
                        src="/hydrangea.png"
                        alt="Decorative flowers"
                        fill
                        className="opacity-90 object-contain"
                    />
                </div>
            </section>
        </div>
    )
}
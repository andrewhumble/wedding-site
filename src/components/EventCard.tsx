import Image from 'next/image'

interface EventCardProps {
    className?: string;
}

export default function EventCard({ className }: EventCardProps) {
    return (
        <div className={className}>
            <section className="relative w-full bg-[#FAF5F1] py-16">
                <div className="relative max-w-6xl mx-auto px-6 md:px-16">
                    <div className="border-1 border-stone-800 pb-10 px-6 py-12 md:px-12 flex flex-col items-center text-center relative overflow-hidden">
                        <h2 className="font-script italic text-stone-800 text-3xl md:text-4xl text-script">
                            We&apos;re getting married!
                        </h2>
                        <p className="font-sans-light max-w-3xl mx-auto text-stone-800 leading-relaxed text-3xl md:text-5xl pt-6">
                            Saturday, April 18th, 2026
                        </p>
                        <p className="font-sans-light max-w-3xl mx-auto text-stone-800 leading-relaxed text-2xl md:text-3xl">
                            at 5:30 PM
                        </p>
                        <Image
                            src="/images/gloryplace-transparent.png"
                            alt="Gloryplace Drawing"
                            width={500}
                            height={500}
                            style={{
                                WebkitMaskImage: `
                                linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%),
                                linear-gradient(to bottom, black 0%, black 85%, transparent 100%)
                                `,
                                WebkitMaskComposite: 'destination-in',
                                maskImage: `
                                linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%),
                                linear-gradient(to bottom, black 0%, black 85%, transparent 100%)
                                `,
                                maskComposite: 'destination-in',
                                WebkitMaskRepeat: 'no-repeat',
                                maskRepeat: 'no-repeat',
                            }}
                            className="pt-6 pb-4"
                        />
                        <p className="font-sans-light max-w-3xl mx-auto text-stone-800 leading-relaxed text-2xl md:text-3xl">
                            Gloryplace
                        </p>
                        <p className="font-sans-light max-w-3xl mx-auto text-stone-800 leading-relaxed text-lg md:text-xl underline underline-offset-5 decoration-1">
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=7855+Bethel+Rd+Gainesville+GA+30506"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                7855 Bethel Rd, Gainesville, GA, 30506
                            </a>
                        </p>
                    </div>

                </div>
                <div className="absolute right-[-5] top-0 md:right-45 md:top-[-55] pointer-events-none w-[120px] h-[168px] md:w-[220px] md:h-[320px]">
                    <Image
                        src="/images/hydrangea.png"
                        alt="Decorative flowers"
                        fill
                        className="object-contain"
                    />
                </div>
            </section>
        </div>
    )
}
import DoubleBorderCard from '@/ui/DoubleBorderCard';
import Image from 'next/image'

interface EventCardProps {
    className?: string;
}

export default function EventCard({ className }: EventCardProps) {
    return (
        <div className={className}>
            <section className="relative w-full bg-secondary py-16">
                <div className="relative max-w-5xl mx-auto px-6 md:px-16">
                    <DoubleBorderCard>
                        <h2 className="font-script text-stone-800 text-3xl md:text-4xl">
                            We&apos;re getting married!
                        </h2>
                        <p className="font-serif-light max-w-3xl mx-auto text-stone-800 leading-relaxed text-3xl md:text-4xl">
                            Saturday, April 18th, 2026
                        </p>
                        <p className="font-serif-light max-w-3xl mx-auto text-stone-800 leading-relaxed text-xl md:text-2xl mt-[-6]">
                            at 5:30 PM
                        </p>
                        <Image
                            src="/images/gloryplace-transparent.png"
                            alt="Gloryplace Drawing"
                            width={400}
                            height={400}
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
                        />
                        <p className="font-serif-light max-w-3xl mx-auto text-stone-800 leading-relaxed text-xl md:text-2xl">
                            Gloryplace
                        </p>
                        <p className="font-serif-light max-w-3xl mx-auto text-stone-800 leading-relaxed text-md md:text-lg underline underline-offset-5 decoration-1 mt-[-4]">
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=7855+Bethel+Rd+Gainesville+GA+30506"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                7855 Bethel Rd, Gainesville, GA, 30506
                            </a>
                        </p>
                    </DoubleBorderCard>
                    {/* <div className="absolute right-[-10] top-[-70] md:right-[-15] md:top-[-135] pointer-events-none w-[120px] h-[168px] md:w-[220px] md:h-[320px]">
                        <Image
                            src="/images/hydrangea.png"
                            alt="Decorative flowers"
                            fill
                            className="object-contain"
                        />
                    </div> */}
                </div>
            </section>
        </div>
    )
}
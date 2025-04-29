import Link from 'next/link';

interface FooterProps {
    className?: string;
}

export default function Footer({ className }: FooterProps) {
    return (
        <div className={className}>
            <section className="relative w-full bg-[#FAF5F1] pt-48 pb-12 px-4 md:px-24 flex justify-between items-end">
                <div className="flex flex-wrap gap-4">
                    <Link href="/details">
                        <p className="font-sans-light max-w-xl mx-auto text-stone-800 leading-relaxed text-lg md:text-xl pt-6">Love,</p>
                        <p className="font-sans-light max-w-xl mx-auto text-stone-800 leading-relaxed text-lg md:text-xl">Maggie & Andrew</p>
                    </Link>
                </div>
                <div className="flex flex-wrap gap-4">
                    <Link href="/details">
                        <p className="font-sans-light max-w-xl mx-auto text-stone-800 leading-relaxed text-lg md:text-xl pt-6 underline underline-offset-5 decoration-1">Details</p>
                    </Link>
                    <Link href="/registry">
                        <p className="font-sans-light max-w-xl mx-auto text-stone-800 leading-relaxed text-lg md:text-xl pt-6 underline underline-offset-5 decoration-1">Registry</p>
                    </Link>
                    <Link href="/rsvp">
                        <p className="font-sans-light max-w-xl mx-auto text-stone-800 leading-relaxed text-lg md:text-xl pt-6 underline underline-offset-5 decoration-1">RSVP</p>
                    </Link>
                </div>
            </section>
        </div>
    );
}

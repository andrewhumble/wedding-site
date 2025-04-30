import Link from 'next/link';
import Image from 'next/image';

interface FooterProps {
    className?: string;
}

export default function Footer({ className }: FooterProps) {
    return (
        <div className={className}>
            <section className="relative w-full bg-[#FAF5F1] pt-28 md:pt-48 pb-8 md:pb-12 px-4 md:px-24">
                <Image
                    src="/images/murphy.png"
                    alt="Murphy"
                    width={150}
                    height={150}
                    className="mx-auto md:hidden"
                />
                <div className="flex justify-between items-end">
                    <div className="flex flex-wrap gap-4">
                        <Link href="/">
                            <p className="font-sans-light max-w-xl mx-auto text-stone-800 leading-relaxed text-lg md:text-xl pt-4">Love,</p>
                            <p className="font-sans-light max-w-xl mx-auto text-stone-800 leading-relaxed text-lg md:text-xl">Maggie & Andrew</p>
                        </Link>
                    </div>
                    <Image
                        src="/images/murphy.png"
                        alt="Murphy"
                        width={200}
                        height={200}
                        className="mx-auto hidden md:block"
                    />
                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link href="/#details">
                            <p className="font-sans-light max-w-xl mx-auto text-stone-800 leading-relaxed text-lg md:text-xl underline underline-offset-5 decoration-1">Details</p>
                        </Link>
                        <Link href="/registry">
                            <p className="font-sans-light max-w-xl mx-auto text-stone-800 leading-relaxed text-lg md:text-xl underline underline-offset-5 decoration-1">Registry</p>
                        </Link>
                        <Link href="/rsvp">
                            <p className="font-sans-light max-w-xl mx-auto text-stone-800 leading-relaxed text-lg md:text-xl underline underline-offset-5 decoration-1">RSVP</p>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

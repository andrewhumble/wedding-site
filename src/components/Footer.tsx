"use client"

import Link from 'next/link';
import Image from 'next/image';
import NavItem from "@/components/NavItem";

interface FooterProps {
    className?: string;
}

export default function Footer({ className }: FooterProps) {
    return (
        <div className={className}>
            <section className="relative w-full bg-[#FAF5F1] pt-28 md:pt-48 pb-8 md:pb-12 px-4 md:px-24">
                <Image
                    src="/images/murphy_acrylic.png"
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
                        src="/images/murphy_acrylic.png"
                        alt="Murphy"
                        width={200}
                        height={200}
                        className="hidden md:block ml-12"
                    />
                    <div className="flex flex-wrap gap-4 pt-4 font-sans-light max-w-xl leading-relaxed text-lg md:text-xl underline underline-offset-5 decoration-1">
                        <NavItem href="/#details">Details</NavItem>
                        <NavItem href="/registry">Registry</NavItem>
                        <NavItem href="/gallery">Gallery</NavItem>
                    </div>
                </div>
            </section>
        </div>
    );
}

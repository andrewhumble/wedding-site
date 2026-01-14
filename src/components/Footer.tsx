"use client"

import Link from 'next/link';
import NavItem from "@/components/NavItem";

interface FooterProps {
    className?: string;
}

export default function Footer({ className }: FooterProps) {
    return (
        <div className={className}>
            <section className="relative w-full bg-secondary pt-12 md:pt-24 pb-8 md:pb-12 px-4 md:px-24">
                <div className="flex flex-col items-center md:flex-row md:justify-between md:items-end">
                    <div className="flex flex-wrap gap-4">
                        <Link href="/">
                            <p className="font-serif max-w-xl text-stone-800 leading-relaxed text-lg md:text-xl pt-4">Always and forever,</p>
                            <p className="font-serif max-w-xl text-stone-800 leading-relaxed text-lg md:text-xl">Maggie & Andrew</p>
                        </Link>
                    </div>
                    <div className="flex flex-wrap gap-4 pt-6 font-serif max-w-xl leading-relaxed text-lg md:text-xl underline underline-offset-5 decoration-1">
                        <NavItem href="/">Details</NavItem>
                        <NavItem href="/gallery">Gallery</NavItem>
                        <NavItem href="/registry">Registry</NavItem>
                        <NavItem href="/faq">FAQ</NavItem>
                    </div>
                </div>
            </section>
        </div>
    );
}

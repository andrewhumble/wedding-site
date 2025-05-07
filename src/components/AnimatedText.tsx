'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import TheHumblesLogo from './TheHumblesLogo';

gsap.registerPlugin(DrawSVGPlugin);

export default function DrawnText() {
    const pathRef = useRef<SVGPathElement | null>(null);
    const bordersRef = useRef<SVGGElement | null>(null);
    const textRef = useRef<SVGTextElement | null>(null);
    const [pathOpacity, setPathOpacity] = useState(0);

    useEffect(() => {
        if (pathRef.current) {
            const tl = gsap.timeline();
            setPathOpacity(1);
            
            tl.fromTo(
                pathRef.current,
                { drawSVG: '0% 0%' },
                { drawSVG: '0% 100%', duration: 3, ease: 'power2.inOut' }
            )
            .fromTo(
                [bordersRef.current, textRef.current],
                { opacity: 0 },
                { opacity: 1, duration: 1, ease: 'power2.inOut' },
                '-=2.25'
            );
        }
    }, []);

    return (
        <TheHumblesLogo height='300px' width='w-3/4 md:w-1/4' bordersRef={bordersRef} pathRef={pathRef} textRef={textRef} pathOpacity={pathOpacity} />
    );
}

'use client';

import { useEffect, useState } from 'react';
import AnimatedText from './AnimatedText';

export default function InitialFadeIn() {
    const [isVisible, setIsVisible] = useState(true);
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFadingOut(true);
            // Wait for the fade-out animation to complete before removing the component
            setTimeout(() => {
                setIsVisible(false);
            }, 1000);
        }, 2100); // 2.1 seconds for VaraText + 1 second wait

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className={`fixed inset-0 bg-primary bg-[url(/images/stripesImproved.png)] bg-[length:25%_100%] flex flex-col items-center justify-center z-50 transition-opacity duration-300 ${isFadingOut ? 'opacity-0' : 'opacity-100'} text-white flex flex-col items-center justify-center`}>
            <AnimatedText />
        </div>
    );
} 
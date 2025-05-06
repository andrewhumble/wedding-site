'use client';

import { useEffect, useState } from 'react';
import AnimatedText from './AnimatedText';

export default function InitialFadeIn() {
    const [isVisible, setIsVisible] = useState(true);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFadingOut(true);
            // Wait for the fade-out animation to complete before removing the component
            setTimeout(() => {
                setIsVisible(false);
            }, 1000);
        }, 2500); // 2 seconds for VaraText + 1 second wait

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className={`fixed inset-0 bg-primary flex flex-col items-center justify-center z-50 transition-opacity duration-200 ${isFadingOut ? 'opacity-0' : 'opacity-100'} text-white flex flex-col items-center justify-center`}>
            <AnimatedText onVisibilityChange={setShowText} />
            <div className={`w-fit items-end flex flex-col transition-opacity duration-1000 ${showText ? 'opacity-100' : 'opacity-0'}`}>
                <h1 className="text-6xl font-serif mt-[-18]">Humbles</h1>
                <h1 className="text-2xl font-serif-italic mt-[-10] pr-2">4.18.26</h1>
            </div>
        </div>
    );
} 
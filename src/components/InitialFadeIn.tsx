'use client';

import { useEffect, useState } from 'react';
import TheHumblesLogo from './TheHumblesLogo';

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
        }, 2000); // Start fade out after 2 seconds

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className={`fixed inset-0 bg-[#58373E] flex items-center justify-center z-50 transition-opacity duration-200 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>
            <TheHumblesLogo />
        </div>
    );
} 
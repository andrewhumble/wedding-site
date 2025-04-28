"use client";

import { useState, useEffect } from "react"

interface MovieMarqueeProps {
    title?: string;
    date?: string;
}

export default function MovieMarquee({ 
    title = "THE HUMBLES",
    date = "4-18-26",
}: MovieMarqueeProps) {
    const [isBlinking] = useState(true)
    const [countdown, setCountdown] = useState("")

    const rows = 4;
    const cols = 17;

    const getTextPosition = (text: string) => {
        const start = Math.floor((cols - text.length) / 2);
        const end = start + text.length;
        return { start, end };
    };

    const getTextForPosition = (rowIndex: number, colIndex: number) => {
        if (rowIndex === Math.floor(rows / 2) - 1) {
            const { start, end } = getTextPosition(title);
            if (colIndex >= start && colIndex < end) {
                return title[colIndex - start];
            }
        }
        if (rowIndex === Math.floor(rows / 2)) {
            const { start, end } = getTextPosition(countdown);
            if (colIndex >= start && colIndex < end) {
                return countdown[colIndex - start];
            }
        }
        return null;
    };

    useEffect(() => {
        const updateCountdown = () => {
            const targetDate = new Date(date);
            const now = new Date();
            const diff = targetDate.getTime() - now.getTime();

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        };

        // Update immediately
        updateCountdown();
        
        // Then update every second
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, [date]);

    useEffect(() => {
        if (!isBlinking) return

        const interval = setInterval(() => {
            const bulbs = document.querySelectorAll(".light-bulb")
            bulbs.forEach((bulb) => {
                // Random brightness effect
                const brightness = 0.7 + Math.random() * 0.3
                    ; (bulb as HTMLElement).style.opacity = brightness.toString()
            })
        }, 500)

        return () => clearInterval(interval)
    }, [isBlinking])

    return (
        <div className="w-fit relative p-8 bg-zinc-800 rounded-2xl font-marquee" >
            {/* Circles - border lights */}
            <div className="absolute inset-0 flex flex-wrap justify-between items-between p-2 pointer-events-none">
                {/* Top side */}
                <div className="flex justify-center gap-4 w-full">
                    {Array.from({ length: cols + 3 }).map((_, i) => (
                        <div key={`top-${i}`} className="light-bulb w-3 h-3 rounded-full bg-yellow-200 border-2 border-yellow-600 shadow-[0_0_10px_rgba(255,255,0,0.7)]" />
                    ))}
                </div>
                {/* Left and right sides */}
                <div className="flex justify-between w-full h-full absolute top-0 left-0 pl-2">
                    <div className="flex flex-col justify-center gap-4 h-full">
                        {Array.from({ length: rows + 3 }).map((_, i) => (
                            <div key={`left-${i}`} className="light-bulb w-3 h-3 rounded-full bg-yellow-200 border-2 border-yellow-600 shadow-[0_0_10px_rgba(255,255,0,0.7)]" />
                        ))}
                    </div>
                    <div className="flex flex-col justify-center gap-4 h-full pr-2">
                        {Array.from({ length: rows + 3 }).map((_, i) => (
                            <div key={`right-${i}`} className="light-bulb w-3 h-3 rounded-full bg-yellow-200 border-2 border-yellow-600 shadow-[0_0_10px_rgba(255,255,0,0.7)]" />
                        ))}
                    </div>
                </div>
                {/* Bottom side */}
                <div className="flex justify-center gap-4 w-full absolute bottom-0 left-0 pb-2">
                    {Array.from({ length: cols + 3 }).map((_, i) => (
                        <div key={`bottom-${i}`} className="light-bulb w-3 h-3 rounded-full bg-yellow-200 border-2 border-yellow-600 shadow-[0_0_10px_rgba(255,255,0,0.7)]" />
                    ))}
                </div>
            </div>

            {/* Main marquee */}
            <div className="flex flex-col bg-white mx-auto">
                {Array.from({ length: rows }).map((_, rowIndex) => (
                    <div key={rowIndex} className="flex">
                        {Array.from({ length: cols }).map((_, colIndex) => (
                            <div
                                key={colIndex}
                                className="text-zinc-900 text-3xl font-bold border-y-3 border-x-[0.1px] border-gray-300 flex items-center justify-center h-12 w-8"
                            >
                                {getTextForPosition(rowIndex, colIndex) && (
                                    <span>{getTextForPosition(rowIndex, colIndex)}</span>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

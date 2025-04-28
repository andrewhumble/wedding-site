import { useState, useEffect } from 'react';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const weddingDate = new Date('2026-04-18T17:30:00');
        
        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = weddingDate.getTime() - now.getTime();
            
            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col items-center gap-2">
            <div className="flex gap-4 md:gap-8">
                <div className="text-center">
                    <div className="text-2xl md:text-4xl font-bold text-[#2c5836]">{timeLeft.days}</div>
                    <div className="text-sm md:text-base text-[#2c5836]">Days</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl md:text-4xl font-bold text-[#2c5836]">{timeLeft.hours}</div>
                    <div className="text-sm md:text-base text-[#2c5836]">Hours</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl md:text-4xl font-bold text-[#2c5836]">{timeLeft.minutes}</div>
                    <div className="text-sm md:text-base text-[#2c5836]">Minutes</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl md:text-4xl font-bold text-[#2c5836]">{timeLeft.seconds}</div>
                    <div className="text-sm md:text-base text-[#2c5836]">Seconds</div>
                </div>
            </div>
        </div>
    );
}

import Image from 'next/image'

interface EventCardProps {
    className?: string;
}

export default function EventCard({ className }: EventCardProps) {
    return (
        <div className={className}>
            <section className="relative w-full bg-secondary py-8">
                <div className="flex justify-center items-center relative max-w-5xl mx-auto px-6 md:px-16">
                    <div className="relative shadow-2xl [transform:perspective(1000px)_rotateX(2deg)]">
                        <Image
                            src="/save_the_date.svg"
                            alt="Save the Date"
                            width={600}
                            height={600}
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
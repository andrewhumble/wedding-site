import DashedBorder from '@/ui/DashedBorder'
import Image from 'next/image';

interface GalleryCardProps {
    className?: string;
}

export default function GalleryCard({ className }: GalleryCardProps) {
    return (
        <div className={className}>
            <section className="relative w-full bg-primary py-24 px-24 flex flex-col items-center bg-[url(/images/stripesImproved.png)] bg-[length:50%_100%] md:bg-[length:25%_100%]">
                <div className="flex flex-col md:flex-row gap-24">
                    <Image
                        src="/images/pose.jpg"
                        alt="Your Photo"
                        width={300}
                        height={300}
                    />
                    <Image
                        src="/images/closeup.jpg"
                        alt="Your Photo"
                        width={300}
                        height={300}
                    />
                    <Image
                        src="/images/hugging.jpg"
                        alt="Your Photo"
                        width={300}
                        height={300}
                    />
                </div>
            </section>
            <DashedBorder length={10} className="md:hidden relative flex items-center mt-[-3] mb-[-3] z-10" />
        </div>
    )
}
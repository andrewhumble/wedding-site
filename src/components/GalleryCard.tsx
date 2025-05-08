import Image from 'next/image';
import ScallopBorder from './ScallopBorder';

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
            <ScallopBorder className="relative z-10" />
        </div>
    )
}
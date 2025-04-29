import FramedPhoto from '@/ui/FramedPhoto';
import DashedBorder from '@/ui/DashedBorder'

interface GalleryCardProps {
    className?: string;
}

export default function GalleryCard({ className }: GalleryCardProps) {
    return (
        <div className={className}>
            <section className="relative w-full bg-[#58373E] py-24 px-24 flex flex-col items-center" style={{ backgroundImage: 'url(/images/stripesImproved.png)', backgroundSize: '25% 100%' }}>
                <div className="flex flex-col md:flex-row gap-2">
                    <FramedPhoto
                        photoPath="/images/pose.jpg"
                        framePath="/images/vertical-frame.png"
                        objectPosition="center 20%"
                        inset="10% 10% 10% 10%"
                        scale="80"
                    />
                    <FramedPhoto
                        photoPath="/images/hugging.jpg"
                        framePath="/images/frame.png"
                        objectPosition="center 60%"
                        inset="20% 10% 20% 10%"
                        scale="80"
                    />
                    <FramedPhoto
                        photoPath="/images/closeup.jpg"
                        framePath="/images/horizontal-frame-2.png"
                        objectPosition="0% 80%"
                        inset="10% 20% 10% 20%"
                        scale="90"
                        rotation='90'
                    />
                </div>
            </section>
            <DashedBorder length={10} className="md:hidden relative flex items-center mt-[-3] mb-[-3] z-10" />
        </div>
    )
}
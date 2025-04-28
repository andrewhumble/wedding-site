import FramedPhoto from '@/ui/FramedPhoto';

export default function GalleryCard() {
    return (
        <section className="relative w-full bg-[#58373E] py-24 px-24 flex flex-col items-center" style={{ backgroundImage: 'url(/stripesImproved.png)', backgroundSize: '25% 100%' }}>
            <div className="flex flex-col md:flex-row gap-2">
                <FramedPhoto
                    photoPath="/pose.jpg"
                    framePath="/vertical-frame.png"
                    objectPosition="center 20%"
                    inset="10% 10% 10% 10%"
                    scale="80"
                />
                <FramedPhoto
                    photoPath="/hugging.jpg"
                    framePath="/frame.png"
                    objectPosition="center 60%"
                    inset="20% 10% 20% 10%"
                    scale="80"
                />
                <FramedPhoto
                    photoPath="/closeup.jpg"
                    framePath="/horizontal-frame-2.png"
                    objectPosition="0% 80%"
                    inset="10% 20% 10% 20%"
                    scale="90"
                    rotation='90'
                />
            </div>
        </section>
    )
}
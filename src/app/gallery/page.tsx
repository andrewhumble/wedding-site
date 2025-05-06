import Image from 'next/image'
import PageLayout from '@/components/PageLayout'

const images = [
    { src: "/images/closeup.jpg" },
    { src: "/images/hugging.jpg" },
    { src: "/images/intro.jpg" },
    { src: "/images/pose.jpg" },
    { src: "/images/portrait.jpg" },
    { src: "/images/kneeling.jpg" },
    { src: "/images/silhouette.jpg" },
    { src: "/images/candid.jpg" },
    { src: "/images/selfie.jpg" },
];

export default function Gallery() {
    return (
        <PageLayout title="Gallery">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((image, index) => (
                        <div key={index} className="overflow-hidden rounded-lg">
                            <Image 
                                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" 
                                src={image.src} 
                                alt=""
                                width={500} 
                                height={500} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </PageLayout>
    )
}

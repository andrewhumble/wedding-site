import Button from '@/ui/Button'
import Image from 'next/image'
import PageLayout from '@/components/PageLayout'
import DoubleBorderCard from '@/ui/DoubleBorderCard';

export default function Registry() {
    return (
        <PageLayout title="Registry">
            <div className="relative max-w-6xl mx-auto px-6 md:px-16">
                <DoubleBorderCard>
                    <h1 className="max-w-3xl text-xl md:text-2xl font-serif text-stone-800 mb-10">Your presence is a gift to us, but if you&apos;d like to help us start our lives as newlyweds, we are registered at the following places.</h1>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button
                            href="https://www.amazon.com/wedding/share/thehumbles"
                            target="_blank"
                            className="flex px-6 py-3 bg-stone-800 hover:bg-stone-700 justify-center items-center w-32 h-15"
                        >
                            <Image
                                src="/images/amazon.png"
                                alt="Amazon logo"
                                width={100}
                                height={100}
                                className="object-contain"
                            />
                        </Button>
                        <Button
                            href="https://www.crateandbarrel.com/gift-registry/maggie-mcswain-and-andrew-humble/r7456474"
                            target="_blank"
                            className="flex px-6 py-3 bg-white hover:bg-gray-100 border-3 border-gray-300 justify-center items-center w-32 h-15"
                        >
                            <Image
                                src="/images/crate-and-barrel-logo.png"
                                alt="Crate and Barrel logo"
                                width={100}
                                height={100}
                                className="object-contain"
                            />
                        </Button>
                        <Button
                            href="https://www.zola.com/registry/andrewandmaggieapril18"
                            target="_blank"
                            className="relative w-32 h-15 overflow-hidden"
                        >
                            <Image
                                src="/images/Zola_All_the_Days.jpeg"
                                alt="Zola Registry"
                                fill
                                className="object-cover"
                            />
                        </Button>
                    </div>
                </DoubleBorderCard>
            </div>
        </PageLayout>
    );
}
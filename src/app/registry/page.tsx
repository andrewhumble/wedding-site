import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DashedBorder from '@/ui/DashedBorder'
import Button from '@/ui/Button'
import Image from 'next/image'

export default function Registry() {

    return (
        <div className="min-h-screen bg-[#FAF5F1]">
            <Navbar />
            <div className="px-4 pt-36 md:pt-42 pb-24 bg-[#58373E]" style={{ backgroundImage: 'url(/images/stripesImproved.png)', backgroundSize: '25% 100%' }}>
                <div className="text-center px-4 md:w-1/2 mx-auto">
                    <h1 className="text-xl md:text-4xl font-sans-bold tracking-wider text-white mb-16">Registry</h1>
                </div>
            </div>
            <DashedBorder className="hidden relative md:flex items-center mt-[-3] mb-[-3] z-10" />
            <DashedBorder length={10} className="md:hidden relative flex items-center mt-[-3] mb-[-3] z-10" />
            <section className="relative w-full bg-[#FAF5F1] py-16">
                <div className="relative max-w-6xl mx-auto px-6 md:px-16">
                    <div className="border-1 border-stone-800 pb-14 px-6 py-20 md:px-12 flex flex-col items-center text-center relative overflow-hidden">
                        <h1 className="max-w-3xl text-xl md:text-3xl font-sans text-stone-800 mb-10">Many of you are traveling from far and wide to celebrate with us, so your presence means the world and is all we ask for. If you&apos;d still like to contribute to our registry or honeymoon funds, please use the links below.</h1>
                        <div className="flex justify-center">
                            <Button
                                href="https://www.amazon.com/wedding/share/thehumbles"
                                target="_blank"
                                className="px-6 py-3 bg-stone-800 text-[#FAF5F1] hover:bg-stone-700 hover:text-white"
                            >
                                <div className="flex items-center space-x-2 pt-1">
                                    <Image
                                        src="/images/amazon.png"
                                        alt="Amazon logo"
                                        width={100}
                                        height={100}
                                        className="object-contain"
                                    />
                                </div>
                            </Button>
                        </div>
                    </div>
                    <div className="absolute right-[-10] top-[-70] md:right-0 md:top-[-120] pointer-events-none w-[120px] h-[168px] md:w-[220px] md:h-[320px]">
                        <Image
                            src="/images/hydrangea.png"
                            alt="Decorative flowers"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
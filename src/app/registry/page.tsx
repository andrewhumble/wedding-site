import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DashedBorder from '@/ui/DashedBorder'
import Button from '@/ui/Button'

export default function Registry() {

    return (
        <div className="min-h-screen bg-[#FAF5F1]">
            <Navbar />
            <div className="px-4 pt-36 md:pt-42 pb-24 bg-[#58373E]" style={{ backgroundImage: 'url(/images/stripesImproved.png)', backgroundSize: '25% 100%' }}>
                <div className="text-center px-4 md:w-1/2 mx-auto">
                    <h1 className="text-xl md:text-3xl font-sans-light tracking-wider text-[#FAF5F1] mb-16">Many of you are traveling from far and wide to celebrate with us, so your presence means the world and is all we ask for. If you&apos;d still like to contribute to our registry or honeymoon funds, please use the link below.</h1>
                    <Button label="OUR REGISTRY" className='font-sans-bold px-18 py-6 bg-[#FAF5F1] text-stone-800 hover:bg-[#e8d8bf] hover:text-[#3d232a]' />
                </div>
            </div>
            <DashedBorder className="hidden relative md:flex items-center mt-[-3] mb-[-3] z-10" />
            <DashedBorder length={10} className="md:hidden relative flex items-center mt-[-3] mb-[-3] z-10" />
            <Footer />
        </div>
    );
}
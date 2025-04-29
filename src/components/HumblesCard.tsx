import Image from 'next/image'
import DashedBorder from '@/ui/DashedBorder'

export default function HumblesCard() {
    return (
        <div className="flex flex-col md:flex-row">
        {/* Left Panel - Red, striped background with logo */}
        <div className="mb-[-3] md:mb-0 w-full md:w-1/2 flex flex-col reative bg-[#58373E] h-[60vh] md:h-[calc(100vh-50px)] items-center" style={{ backgroundImage: 'url(/images/stripesImproved.png)', backgroundSize: '50% 100%' }}>

          {/* Logo container */}
          <div className="text-white flex w-fit flex-col items-center justify-center flex-grow md:mb-10">
            <h1 className="text-5xl font-script pr-12 mb-[-6]">The</h1>
            <h1 className="text-6xl font-sans">Humbles</h1>
            <h1 className="text-2xl font-sans-light mt-[-8] pr-1 self-end">4.18.26</h1>
          </div>
        </div>

        <DashedBorder length={10} className="md:hidden relative flex items-center z-10" />

        {/* Right Panel - Image content */}
        <div className="w-full md:w-1/2 mt-[-3] md:mt-0 relative h-[45vh] md:h-[calc(100vh-50px)]">
          <Image
            src="/intro.jpg"
            alt="Elegant cafe setting with flowers and teacups"
            fill
            className="object-cover"
            priority
          />
        </div>

      </div>
    )
}
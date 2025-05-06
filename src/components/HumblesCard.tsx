import Image from 'next/image'
import DashedBorder from '@/ui/DashedBorder'
import TheHumblesLogo from './TheHumblesLogo'

export default function HumblesCard() {
    return (
        <div className="flex flex-col md:flex-row">
        {/* Left Panel - Red, striped background with logo */}
        <div className="mb-[-3] md:mb-0 w-full md:w-1/2 flex flex-col relative bg-[#58373E] h-[60vh] md:h-[calc(100vh-50px)] items-center bg-[url(/images/stripesImproved.png)] bg-[length:50%_100%]">

          {/* Logo container */}
          <div className="flex w-fit flex-col items-center justify-center flex-grow md:mb-10">
            <TheHumblesLogo />
          </div>
        </div>

        <DashedBorder length={10} className="md:hidden relative flex items-center z-10" />

        {/* Right Panel - Image content */}
        <div className="w-full md:w-1/2 mt-[-3] md:mt-0 relative h-[45vh] md:h-[calc(100vh-50px)]">
          <Image
            src="/images/intro.jpg"
            alt="The Humbles"
            fill
            className="object-cover"
            priority
          />
        </div>

      </div>
    )
}
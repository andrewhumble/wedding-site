import Image from 'next/image'
import TheHumblesLogo from './TheHumblesLogo'
import ScallopBorder from './ScallopBorder'

export default function HumblesCard() {
    return (
      <div className="relative">
        <div className="flex flex-col md:flex-row">
        {/* Left Panel - Red, striped background with logo */}
        <div className="mb-[-3] md:mb-0 w-full md:w-1/2 flex flex-col relative bg-primary h-[60vh] md:h-[calc(100vh-50px)] items-center bg-[url(/images/stripesImproved.png)] bg-[length:50%_100%]">

          {/* Logo container */}
          <div className="flex w-fit flex-col items-center justify-center flex-grow md:mb-10">
            <TheHumblesLogo height='250px' width='w-52 md:w-72' />
          </div>
        </div>
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
      <ScallopBorder />
      </div>
    )
}
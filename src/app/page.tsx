import DashedBorder from '@/ui/DashedBorder'
import EventCard from '@/components/EventCard'
import HumblesCard from '@/components/HumblesCard'
import GalleryCard from '@/components/GalleryCard';
import '@/app/globals.css';

export default function Home() {

  return (
    <main className="flex flex-col min-h-screen">
      <HumblesCard />
      <DashedBorder className="hidden relative md:flex items-center mt-[-3] mb-[-3] z-10" />
      <a id="details" className="scroll-mt-16" aria-hidden="true" />
      <EventCard className="relative z-0" />
      <GalleryCard />
      <DashedBorder className="hidden relative md:flex items-center mt-[-3] mb-[-3] z-10" />
    </main>
  );
}
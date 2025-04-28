import DashedBorder from '@/ui/DashedBorder'
import EventCard from '@/components/EventCard'
import HumblesCard from '@/components/HumblesCard'
import Navbar from '@/components/Navbar'
import GalleryCard from '@/components/GalleryCard';
import '@/app/globals.css';

export default function Home() {

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <HumblesCard />
      <DashedBorder className="hidden relative md:flex items-center mt-[-3] z-10" />
      <EventCard className="mt-[-3] relative z-0" />
      <GalleryCard />
    </main>
  );
}
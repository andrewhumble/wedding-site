import DashedBorder from '@/ui/DashedBorder'

interface PageLayoutProps {
    title: string;
    children: React.ReactNode;
}

export default function PageLayout({ title, children }: PageLayoutProps) {
    return (
        <div className="min-h-screen bg-secondary">
            <div className="px-4 py-36 bg-primary" style={{ backgroundImage: 'url(/images/stripesImproved.png)', backgroundSize: '25% 100%' }}>
                <div className="text-center px-4 md:w-1/2 mx-auto">
                    <h1 className="text-4xl font-serif-bold tracking-wider text-white">{title}</h1>
                </div>
            </div>
            <DashedBorder className="hidden relative md:flex items-center mt-[-3] mb-[-3] z-10" />
            <section className="relative w-full py-16">
                {children}
            </section>
        </div>
    );
} 
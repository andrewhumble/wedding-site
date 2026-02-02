
interface EventCardProps {
    className?: string;
}

export default function EventCard({ className }: EventCardProps) {
    return (
        <div className={`${className} bg-secondary flex justify-center items-center`}>
            <div className="flex flex-col gap-6 max-w-xl mx-6 text-center font-bodoni tracking-[0.25em] my-12 py-8 px-2 text-md md:text-lg border-1 border-stone-800 bg-white">
                <span className="uppercase flex justify-center items-center text-stone-800">
                    Together with their families
                </span>
                <div className="flex flex-col">
                    <span className="flex justify-center items-center font-script tracking-normal text-stone-800 text-4xl md:text-5xl">
                        Maggie Grace McSwain
                    </span>
                    <span className="flex justify-center items-center text-stone-800">
                        and
                    </span>
                    <span className="flex justify-center items-center font-script tracking-normal text-stone-800 text-4xl md:text-5xl">
                        Charles Andrew Humble
                    </span>
                </div>
                <span className="max-w-lg uppercase text-center flex justify-center items-center text-stone-800">
                    Request the honor of your presence at the celebration of their marriage
                </span>
                <div className="flex flex-col">
                    <span className="uppercase flex justify-center items-center text-stone-800">
                        Saturday, the eighteenth of April
                    </span>
                    <span className="flex justify-center items-center text-stone-800">
                        two thousand and twenty six
                    </span>
                    <span className="uppercase flex justify-center items-center text-stone-800">
                        At five o&apos;clock in the afternoon
                    </span>
                </div>
                <div className="flex flex-col">
                    <span className="flex justify-center items-center font-script tracking-normal text-stone-800 text-4xl md:text-5xl">
                        Gloryplace
                    </span>
                    <span className="uppercase flex justify-center items-center text-stone-800">
                        7845 Bethel Road
                    </span>
                    <span className="uppercase flex justify-center items-center text-stone-800">
                        Gainesville, Georgia 30506
                    </span>
                </div>
                <span className="uppercase flex justify-center items-center text-stone-800">
                    Black Tie Preferred
                </span>
            </div>
        </div>
    )
}
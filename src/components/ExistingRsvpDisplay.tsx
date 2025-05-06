import { Guest } from '@/types/rsvp'

interface ExistingRsvpDisplayProps {
    party: Guest[];
    onEdit: () => void;
}

export function ExistingRsvpDisplay({ party, onEdit }: ExistingRsvpDisplayProps) {
    return (
        <div className="font-serif">
            <h2 className="text-xl md:text-2xl text-stone-800 mb-6">Looks like your party has already RSVP&apos;d</h2>
            <div className="py-4 px-4 border-1 border-stone-400 rounded-md">
                {party.map(guest => (
                    <div key={guest.id} className="flex justify-between items-center">
                        <span className="text-stone-800">{guest.full_name}</span>
                        <span className={`${guest.rsvp_status === 'yes' ? 'text-green-600' : 'text-red-600'}`}>
                            {guest.rsvp_status === 'yes' ? 'Attending' : 'Not Attending'}
                        </span>
                    </div>
                ))}
            </div>
            <div className="mt-6 space-y-4">
                <button
                    onClick={onEdit}
                    className="w-full bg-stone-800 text-white px-4 py-3 rounded font-serif hover:bg-stone-600 transition-colors duration-200"
                >
                    Update RSVP
                </button>
            </div>
        </div>
    )
} 
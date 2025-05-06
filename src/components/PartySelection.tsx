import { Party } from '@/types/rsvp'

interface PartySelectionProps {
    parties: Party[];
    onSelect: (id: string) => void;
}

export function PartySelection({ parties, onSelect }: PartySelectionProps) {
    return (
        <div className="mt-8 space-y-4">
            <h2 className="text-xl font-serif text-stone-800">Multiple parties found. Please select yours:</h2>
            {parties.map((party) => (
                <button
                    key={party.id}
                    onClick={() => onSelect(party.id)}
                    className="w-full p-4 border border-stone-300 rounded-md hover:bg-stone-100 transition-colors"
                >
                    <div className="text-left">
                        <p className="font-serif text-stone-800">Party Members:</p>
                        <ul className="mt-2 space-y-1">
                            {party.guests.map(guest => (
                                <li key={guest.id} className="text-stone-600">{guest.full_name}</li>
                            ))}
                        </ul>
                    </div>
                </button>
            ))}
        </div>
    )
} 
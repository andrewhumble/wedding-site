import { Loader2 } from 'lucide-react'
import { ERROR_MESSAGES, ErrorMessageType } from '@/hooks/useRsvpLookup'

interface NameLookupFormProps {
    onSubmit: (name: string) => void;
    isLoading: boolean;
    error: ErrorMessageType | null;
}

function getErrorMessage(error: ErrorMessageType) {
    switch (error) {
        case ERROR_MESSAGES.NOT_FOUND || ERROR_MESSAGES.GENERIC_ERROR:
            return (
                <>
                    Hmm... we can&apos;t find your name. Make sure you enter your name exactly as it appears on your invitation.
                    {'\n\n'}
                    If you&apos;re still having trouble, please rsvp directly to{' '}
                    <a 
                        href="mailto:maggiegracehumble@gmail.com" 
                        className="underline hover:text-red-900"
                    >
                        maggiegracehumble@gmail.com
                    </a>.
                </>
            )
        default:
            return error
    }
}

export function NameLookupForm({ onSubmit, isLoading, error }: NameLookupFormProps) {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const name = formData.get('name') as string
        onSubmit(name)
    }

    return (
        <>
            <h1 className="text-center max-w-3xl text-xl md:text-2xl font-serif text-stone-800 mb-6">
                Please enter the first and last name of one member of your party below.
            </h1>
            <form onSubmit={handleSubmit} className="w-full space-y-6 text-left font-serif">
                <div>
                    <label className="block mb-2 text-md text-stone-800">Guest Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        className={`w-full px-4 py-2 border ${error ? 'border-red-800' : 'border-stone-300'} rounded-md bg-white text-stone-800 focus:outline-none focus:ring-2 focus:ring-secondary`}
                    />
                    {error && (
                        <p className="mt-2 text-sm text-red-800 whitespace-pre-line">
                            {getErrorMessage(error)}
                        </p>
                    )}
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="px-6 py-3 bg-stone-800 hover:bg-stone-700 text-white rounded-md w-full flex justify-center"
                    >
                        {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : 'Next'}
                    </button>
                </div>
            </form>
        </>
    )
} 
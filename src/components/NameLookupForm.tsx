import { Loader2 } from 'lucide-react'

interface NameLookupFormProps {
    onSubmit: (name: string) => void;
    isLoading: boolean;
    error: string | null;
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
                        className={`w-full px-4 py-2 border ${error ? 'border-red-500' : 'border-stone-300'} rounded-md bg-white text-stone-800`}
                    />
                    {error && (
                        <p className="mt-2 text-sm text-red-500">{error}</p>
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
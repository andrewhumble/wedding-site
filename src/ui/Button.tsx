interface ButtonProps {
    label: string;
    className?: string;
}

export default function Button({ label, className }: ButtonProps) {
    return (
        <button
            className={`mx-auto flex items-center justify-center rounded-sm transition-colors duration-500 focus:outline-none shadow-md cursor-pointer pointer-events-auto hover:shadow-lg ${className}`}
            aria-label={label}
        >
            {label}
        </button>
    );
}
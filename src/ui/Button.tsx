interface ButtonProps {
    label: string;
    className?: string;
}

export default function Button({ label, className }: ButtonProps) {
    return (
        <button
            className={`mx-auto inline-flex items-center justify-center rounded-sm transition-colors duration-500 focus:outline-none shadow-md cursor-pointer pointer-events-auto hover:shadow-lg h-10 text-sm font-sans tracking-tight ${className}`}
            aria-label={label}
        >
            <span className="relative top-[1px]">{label}</span>
        </button>
    );
}

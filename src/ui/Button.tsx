import React from 'react';

interface ButtonProps {
    className?: string;
    onClick?: () => void;
    href?: string;
    children: React.ReactNode;
}

export default function Button({ className, onClick, href, children }: ButtonProps) {
    if (href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-sm transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-105 hover:border-gray-300 tracking-tight group ${className}`}
                aria-label={typeof children === 'string' ? children : undefined}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            onClick={onClick}
            className={`rounded-sm transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-105 hover:border-gray-300 tracking-tight ${className}`}
            aria-label={typeof children === 'string' ? children : undefined}
        >
            {children}
        </button>
    );
}
import React from 'react';
import Link from 'next/link';

interface ButtonProps {
    className?: string;
    onClick?: () => void;
    href?: string;
    target?: string;
    children: React.ReactNode;
}

const getBaseClassName = (className?: string) => 
    `rounded-sm transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-105 hover:border-gray-300 tracking-tight ${className || ''}`;

const getAriaLabel = (children: React.ReactNode) => 
    typeof children === 'string' ? children : undefined;

export default function Button({ className, onClick, href, target = "_self", children }: ButtonProps) {
    const baseClassName = getBaseClassName(className);
    const ariaLabel = getAriaLabel(children);

    if (href) {
        if (target == "_blank") {
            return (
                <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={baseClassName}
                    aria-label={ariaLabel}
                >
                    {children}
                </Link>
            );
        }
        return (
            <Link
                href={href}
                target={target}
                className={baseClassName}
                aria-label={ariaLabel}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            onClick={onClick}
            className={baseClassName}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
}
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface NavItemProps {
    href: string;
    showActive?: boolean;
    children: React.ReactNode;
}

export default function NavItem({ href, showActive = false, children }: NavItemProps) {
    const pathname = usePathname();

    const getLinkClasses = (href: string) => {
        const baseClasses = "transition-colors duration-200 cursor-pointer";

        if (showActive && isActive(href)) {
            return `${baseClasses} text-stone-400 cursor-default`;
        }

        return `${baseClasses} text-gray-800 hover:text-stone-500`;
    };

    // Active link check
    const isActive = (href: string) => {
        if (href === '/#details' && pathname === '/') return true;
        return href === pathname;
    };

    const className = getLinkClasses(href);

    if (isActive(href)) {
        return <span className={className}>{children}</span>;
    }

    return (
        <Link href={href} className={className}>
            {children}
        </Link>
    );
}

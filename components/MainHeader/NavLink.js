'use client';
/**
 * # Nav Link
 */

/**
 * ## Imports
 */
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * ## Component
 */
export default function NavLink({ href, label }) {
    const path = usePathname();
    const isActivePath = path.startsWith(href);

    return (
        isActivePath ? (
            <strong
                className="link active"
            >
                {label}
            </strong>
        ) : (
            <Link href={href} className="link">{label}</Link>
        )
    );
};

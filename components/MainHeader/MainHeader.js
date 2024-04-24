/**
 * # Main Header
 */

/**
 * ## Imports
 */
import NavLink from '@/components/MainHeader/NavLink';
import Link from 'next/link';

/**
 * ## Component
 */
export default function MainHeader() {
    return (
        <header id="main-header">
            <div id="logo">
                <Link href="/">NextNews</Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink href="/news" label="News" />
                    </li>
                    <li>
                        <NavLink href="/archive" label="Archive" />
                    </li>
                </ul>
            </nav>
        </header>
    );
};
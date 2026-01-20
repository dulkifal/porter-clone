'use client';

import Link from 'next/link';
import styles from './Header.module.css';

interface NavLink {
  href: string;
  label: string;
}

const NAV_LINKS: NavLink[] = [
  { href: '/enterprise', label: 'For Enterprise' },
  { href: '/partners', label: 'Delivery Partners' },
  { href: '/support', label: 'Support' },
];

/**
 * Header - Navigation header component with logo and main navigation links
 * Provides access to key sections and authentication actions
 */
export default function Header(): React.ReactElement {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logo} aria-label="Porter Home">
          PORTER
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <button className={styles.secondaryBtn} aria-label="Track your order">
            Track Order
          </button>
          <button className={styles.primaryBtn} aria-label="Login to account">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

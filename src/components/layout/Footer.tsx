import styles from './Footer.module.css';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Offers', href: '/offers' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'City Tempo', href: '/services/city-tempo' },
      { label: 'Packers & Movers', href: '/services/packers-movers' },
      { label: 'Driver Partners', href: '/partners' },
      { label: 'Enterprise', href: '/enterprise' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/help' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
  {
    title: 'Download App',
    links: [
      { label: 'Android', href: 'https://play.google.com/store' },
      { label: 'iOS', href: 'https://apps.apple.com' },
    ],
  },
];

const SOCIAL_LINKS = [
  { icon: 'F', label: 'Facebook', href: '#' },
  { icon: 'T', label: 'Twitter', href: '#' },
  { icon: 'I', label: 'Instagram', href: '#' },
  { icon: 'L', label: 'LinkedIn', href: '#' },
];

const CURRENT_YEAR = new Date().getFullYear();

/**
 * Footer - Application footer with company information, navigation links, and social media
 * Provides comprehensive navigation and legal information
 */
export default function Footer(): React.ReactElement {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h4 className={styles.columnTitle}>{column.title}</h4>
              <nav className={styles.linkList} aria-label={`${column.title} links`}>
                {column.links.map((link) => (
                  <a key={link.href} href={link.href} className={styles.link}>
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <p>© {CURRENT_YEAR} Porter. All rights reserved.</p>
          <div className={styles.socials} aria-label="Social media links">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className={styles.socialIcon}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

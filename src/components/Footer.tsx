import Link from 'next/link';
import styles from './Footer.module.css';

const navLinks = [
  { href: '/shows', label: 'Shows' },
  { href: '/music', label: 'Music' },
  { href: '/videos', label: 'Videos' },
  { href: '/merch', label: 'Merch' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://www.instagram.com/justdizzyizzy', label: 'Instagram' },
  { href: 'https://open.spotify.com/artist/0zivcUeYnXj4nR0jl8735K', label: 'Spotify' },
  { href: 'https://music.apple.com/us/artist/dizzy-izzy/1853730221', label: 'Apple Music' },
  { href: 'https://music.youtube.com/channel/UCw8RIQdp_79fxJoYzrkic0A', label: 'YouTube Music' },
  { href: 'https://www.youtube.com/@music.cameronphan', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logo}>Dizzy Izzy</span>
            <p className={styles.tagline}>New wave. Disco. Rock. Pop. Whatever it needs.</p>
          </div>

          <div className={styles.cols}>
            <div className={styles.col}>
              <p className={styles.colLabel}>Navigate</p>
              <ul className={styles.colLinks}>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.footerLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.col}>
              <p className={styles.colLabel}>Listen & Follow</p>
              <ul className={styles.colLinks}>
                {socialLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.footerLink}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>© {new Date().getFullYear()} Dizzy Izzy. All rights reserved.</p>
          <Link href="/contact" className={styles.bookingLink}>
            Booking & Press Inquiries →
          </Link>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';
import {
  SpotifyIcon,
  AppleMusicIcon,
  YoutubeMusicIcon,
  YoutubeIcon,
  InstagramIcon,
} from './Icons';
import styles from './Footer.module.css';

const socialLinks = [
  { href: 'https://open.spotify.com/artist/0zivcUeYnXj4nR0jl8735K', icon: <SpotifyIcon />,        label: 'Spotify'       },
  { href: 'https://music.apple.com/us/artist/dizzy-izzy/1853730221', icon: <AppleMusicIcon />,     label: 'Apple Music'   },
  { href: 'https://music.youtube.com/channel/UCw8RIQdp_79fxJoYzrkic0A', icon: <YoutubeMusicIcon />, label: 'YouTube Music' },
  { href: 'https://www.youtube.com/@music.cameronphan',               icon: <YoutubeIcon />,        label: 'YouTube'       },
  { href: 'https://www.instagram.com/justdizzyizzy',                  icon: <InstagramIcon />,      label: 'Instagram'     },
];

const navLinks = [
  { href: '/shows',   label: 'Shows'   },
  { href: '/music',   label: 'Music'   },
  { href: '/videos',  label: 'Videos'  },
  { href: '/merch',   label: 'Merch'   },
  { href: '/about',   label: 'About'   },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <span className={styles.logo}>Dizzy Izzy</span>
        <div className={styles.icons}>
          {socialLinks.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="platform-icon"
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <div className={styles.rule} />

      <div className={styles.bottom}>
        <nav className={styles.nav}>
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className={styles.navLink}>
              {l.label}
            </Link>
          ))}
        </nav>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Dizzy Izzy. All rights reserved.
        </p>
        <Link href="/contact" className={styles.bookingLink}>
          Booking & Press →
        </Link>
      </div>
    </footer>
  );
}

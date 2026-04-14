'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SpotifyIcon,
  AppleMusicIcon,
  YoutubeMusicIcon,
  InstagramIcon,
  YoutubeIcon,
} from './Icons';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/shows',   label: 'Shows'   },
  { href: '/music',   label: 'Music'   },
  { href: '/videos',  label: 'Videos'  },
  { href: '/merch',   label: 'Merch'   },
  { href: '/about',   label: 'About'   },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://open.spotify.com/artist/0zivcUeYnXj4nR0jl8735K', icon: <SpotifyIcon />,      label: 'Spotify'       },
  { href: 'https://music.apple.com/us/artist/dizzy-izzy/1853730221', icon: <AppleMusicIcon />,   label: 'Apple Music'   },
  { href: 'https://music.youtube.com/channel/UCw8RIQdp_79fxJoYzrkic0A', icon: <YoutubeMusicIcon />, label: 'YouTube Music' },
  { href: 'https://www.youtube.com/@music.cameronphan',               icon: <YoutubeIcon />,      label: 'YouTube'       },
  { href: 'https://www.instagram.com/justdizzyizzy',                  icon: <InstagramIcon />,    label: 'Instagram'     },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          Dizzy<br />Izzy
        </Link>

        {/* Center nav links */}
        <ul className={styles.links}>
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`${styles.link} ${pathname === l.href ? styles.active : ''}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: platform icons */}
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

        {/* Mobile hamburger */}
        <button
          className={styles.burger}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.b} ${open ? styles.b1open : ''}`} />
          <span className={`${styles.b} ${open ? styles.b2open : ''}`} />
          <span className={`${styles.b} ${open ? styles.b3open : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className={styles.mobile}>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`${styles.mobileLink} ${pathname === l.href ? styles.active : ''}`}
            >
              {l.label}
            </Link>
          ))}
          <div className={styles.mobileIcons}>
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
      )}
    </>
  );
}

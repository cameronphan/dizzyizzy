'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SpotifyIcon, AppleMusicIcon, YoutubeMusicIcon, YoutubeIcon, InstagramIcon } from './Icons';
import s from './Navbar.module.css';

const nav = [
  { href: '/shows',   label: 'Shows'   },
  { href: '/music',   label: 'Music'   },
  { href: '/merch',   label: 'Merch'   },
  { href: '/about',   label: 'About'   },
];

const social = [
  { href: 'https://open.spotify.com/artist/0zivcUeYnXj4nR0jl8735K',      icon: <SpotifyIcon />,        label: 'Spotify'       },
  { href: 'https://music.apple.com/us/artist/dizzy-izzy/1853730221',      icon: <AppleMusicIcon />,     label: 'Apple Music'   },
  { href: 'https://music.youtube.com/channel/UCw8RIQdp_79fxJoYzrkic0A',  icon: <YoutubeMusicIcon />,   label: 'YouTube Music' },
  { href: 'https://www.youtube.com/@music.cameronphan',                   icon: <YoutubeIcon />,        label: 'YouTube'       },
  { href: 'https://www.instagram.com/justdizzyizzy',                      icon: <InstagramIcon />,      label: 'Instagram'     },
];

export default function Navbar() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => setOpen(false), [path]);

  return (
    <>
      <nav className={`${s.nav} ${scrolled ? s.scrolled : ''}`}>
        <Link href="/" className={s.logo}>Dizzy Izzy</Link>

        <ul className={s.links}>
          {nav.map(l => (
            <li key={l.href}>
              <Link href={l.href} className={`${s.link} ${path === l.href ? s.active : ''}`}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={s.right}>
          {social.map(s2 => (
            <a key={s2.href} href={s2.href} target="_blank" rel="noopener noreferrer"
               className="icon-btn" aria-label={s2.label}>
              {s2.icon}
            </a>
          ))}
        </div>

        <button className={s.burger} onClick={() => setOpen(!open)} aria-label="Menu">
          <span className={`${s.b} ${open ? s.b1 : ''}`} />
          <span className={`${s.b} ${open ? s.b2 : ''}`} />
          <span className={`${s.b} ${open ? s.b3 : ''}`} />
        </button>
      </nav>

      {open && (
        <div className={s.mobile}>
          {nav.map(l => (
            <Link key={l.href} href={l.href}
              className={`${s.mLink} ${path === l.href ? s.active : ''}`}>
              {l.label}
            </Link>
          ))}
          <div className={s.mIcons}>
            {social.map(s2 => (
              <a key={s2.href} href={s2.href} target="_blank" rel="noopener noreferrer"
                 className="icon-btn" aria-label={s2.label}>
                {s2.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

'use client';
import { useState } from 'react';
import Link from 'next/link';
import { SpotifyIcon, AppleMusicIcon, InstagramIcon, YoutubeIcon } from './Icons';
import s from './MobileNav.module.css';

const nav = [
  { href: '/#shows', label: 'Shows' },
  { href: '/#merch', label: 'Merch' },
  { href: '/about',  label: 'About' },
];

const social = [
  { href: 'https://open.spotify.com/artist/0zivcUeYnXj4nR0jl8735K', icon: <SpotifyIcon />,    label: 'Spotify'     },
  { href: 'https://music.apple.com/us/artist/dizzy-izzy/1853730221', icon: <AppleMusicIcon />, label: 'Apple Music' },
  { href: 'https://www.instagram.com/justdizzyizzy',                 icon: <InstagramIcon />,  label: 'Instagram'   },
  { href: 'https://www.youtube.com/@music.cameronphan',              icon: <YoutubeIcon />,    label: 'YouTube'     },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className={s.wrap}>
      <div className={s.bar}>
        <Link href="/" className={s.logo}>Dizzy Izzy</Link>
        <button className={s.burger} onClick={() => setOpen(!open)} aria-label="Menu">
          <span className={`${s.b} ${open ? s.b1 : ''}`} />
          <span className={`${s.b} ${open ? s.b2 : ''}`} />
          <span className={`${s.b} ${open ? s.b3 : ''}`} />
        </button>
      </div>
      {open && (
        <div className={s.menu}>
          {nav.map(l => (
            <Link key={l.href} href={l.href} className={s.link} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <div className={s.icons}>
            {social.map(x => (
              <a key={x.href} href={x.href} target="_blank" rel="noopener noreferrer"
                 className={s.icon} aria-label={x.label}>
                {x.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

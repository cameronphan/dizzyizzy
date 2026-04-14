'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SpotifyIcon, AppleMusicIcon, InstagramIcon, YoutubeIcon } from './Icons';
import s from './Sidebar.module.css';

const nav = [
  { href: '/#shows', label: 'Shows'  },
  { href: '/#merch', label: 'Merch'  },
  { href: '/about',  label: 'About'  },
];

const social = [
  { href: 'https://open.spotify.com/artist/0zivcUeYnXj4nR0jl8735K',     icon: <SpotifyIcon />,     label: 'Spotify'     },
  { href: 'https://music.apple.com/us/artist/dizzy-izzy/1853730221',     icon: <AppleMusicIcon />,  label: 'Apple Music' },
  { href: 'https://www.instagram.com/justdizzyizzy',                     icon: <InstagramIcon />,   label: 'Instagram'   },
  { href: 'https://www.youtube.com/@music.cameronphan',                  icon: <YoutubeIcon />,     label: 'YouTube'     },
];

export default function Sidebar() {
  const path = usePathname();

  return (
    <aside className={s.sidebar}>
      <Link href="/" className={s.logo}>
        Dizzy<br />Izzy
      </Link>

      <nav className={s.nav}>
        {nav.map(l => (
          <Link
            key={l.href}
            href={l.href}
            className={`${s.link} ${path === l.href ? s.active : ''}`}
          >
            {l.label}
          </Link>
        ))}
      </nav>

      <div className={s.icons}>
        {social.map(x => (
          <a
            key={x.href}
            href={x.href}
            target="_blank"
            rel="noopener noreferrer"
            className={s.icon}
            aria-label={x.label}
          >
            {x.icon}
          </a>
        ))}
      </div>
    </aside>
  );
}

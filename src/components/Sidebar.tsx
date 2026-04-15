'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SpotifyIcon, AppleMusicIcon, InstagramIcon, YoutubeIcon } from './Icons';
import s from './Sidebar.module.css';

const nav = [
  { href: '/',        label: 'Home',    sectionId: null      },
  { href: '/#shows',  label: 'Shows',   sectionId: 'shows'   },
  { href: '/#merch',  label: 'Merch',   sectionId: 'merch'   },
  { href: '/about',   label: 'About',   sectionId: null      },
  { href: '/contact', label: 'Contact', sectionId: null      },
];

const social = [
  { href: 'https://open.spotify.com/artist/0zivcUeYnXj4nR0jl8735K',    icon: <SpotifyIcon />,    label: 'Spotify'     },
  { href: 'https://music.apple.com/us/artist/dizzy-izzy/1853730221',    icon: <AppleMusicIcon />, label: 'Apple Music' },
  { href: 'https://www.instagram.com/justdizzyizzy',                    icon: <InstagramIcon />,  label: 'Instagram'   },
  { href: 'https://www.youtube.com/@music.cameronphan',                 icon: <YoutubeIcon />,    label: 'YouTube'     },
];

export default function Sidebar() {
  const path = usePathname();
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    // Only run scroll detection on home page
    if (path !== '/') {
      setActiveSection(path.replace('/', '') || 'home');
      return;
    }

    const sectionIds = ['shows', 'merch'];

    const handleScroll = () => {
      const windowH = window.innerHeight;

      // Default to home
      let current = 'home';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        // Section is "active" when it's in the top half of the viewport
        if (rect.top <= windowH * 0.45) {
          current = id;
        }
      }

      // If scrolled near bottom, keep last section active
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [path]);

  const isActive = (item: typeof nav[0]) => {
    if (path !== '/') {
      // On sub-pages, match by path
      return path === item.href;
    }
    // On home page, match by scroll section
    if (item.sectionId) return activeSection === item.sectionId;
    if (item.href === '/') return activeSection === 'home';
    return false;
  };

  return (
    <aside className={s.sidebar}>
      {/* Logo wordmark */}
      <Link href="/" className={s.logo}>
        <span className={s.logoAccent} />
        <span className={s.logoText}>Dizzy<br />Izzy</span>
      </Link>

      {/* Nav with scroll-aware active state */}
      <nav className={s.nav}>
        {nav.map(item => (
          <Link
            key={item.href}
            href={item.href}
            className={`${s.link} ${isActive(item) ? s.active : ''}`}
          >
            <span className={s.dash}>—</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Platform icons */}
      <div className={s.icons}>
        {social.map(x => (
          <a key={x.href} href={x.href} target="_blank"
             rel="noopener noreferrer" className={s.icon} aria-label={x.label}>
            {x.icon}
          </a>
        ))}
      </div>
    </aside>
  );
}

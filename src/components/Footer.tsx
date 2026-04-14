import Link from 'next/link';
import { SpotifyIcon, AppleMusicIcon, YoutubeMusicIcon, YoutubeIcon, InstagramIcon } from './Icons';
import s from './Footer.module.css';

const social = [
  { href: 'https://open.spotify.com/artist/0zivcUeYnXj4nR0jl8735K',     icon: <SpotifyIcon />,       label: 'Spotify'       },
  { href: 'https://music.apple.com/us/artist/dizzy-izzy/1853730221',     icon: <AppleMusicIcon />,    label: 'Apple Music'   },
  { href: 'https://music.youtube.com/channel/UCw8RIQdp_79fxJoYzrkic0A', icon: <YoutubeMusicIcon />,  label: 'YouTube Music' },
  { href: 'https://www.youtube.com/@music.cameronphan',                  icon: <YoutubeIcon />,       label: 'YouTube'       },
  { href: 'https://www.instagram.com/justdizzyizzy',                     icon: <InstagramIcon />,     label: 'Instagram'     },
];

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div className={s.top}>
          <span className={s.logo}>Dizzy Izzy</span>
          <div className={s.icons}>
            {social.map(x => (
              <a key={x.href} href={x.href} target="_blank" rel="noopener noreferrer"
                 className="icon-btn" aria-label={x.label}>
                {x.icon}
              </a>
            ))}
          </div>
        </div>
        <div className={s.rule} />
        <div className={s.bottom}>
          <nav className={s.nav}>
            {['/shows','Music','/music','Videos','/videos','Merch','/merch','About','/about','Contact','/contact'].reduce<{href:string,label:string}[]>((acc, v, i, arr) => {
              if (i % 2 === 0) acc.push({ href: v, label: arr[i+1] as string });
              return acc;
            }, []).map(l => (
              <Link key={l.href} href={l.href} className={s.navLink}>{l.label}</Link>
            ))}
          </nav>
          <p className={s.copy}>© {new Date().getFullYear()} Dizzy Izzy</p>
          <Link href="/contact" className={s.booking}>Booking & Press →</Link>
        </div>
      </div>
    </footer>
  );
}

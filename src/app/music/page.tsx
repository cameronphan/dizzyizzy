import type { Metadata } from 'next';
import s from './page.module.css';

export const metadata: Metadata = { title: 'Music' };

const platforms = [
  { name: 'Spotify',       url: 'https://open.spotify.com/artist/0zivcUeYnXj4nR0jl8735K' },
  { name: 'Apple Music',   url: 'https://music.apple.com/us/artist/dizzy-izzy/1853730221' },
  { name: 'YouTube Music', url: 'https://music.youtube.com/channel/UCw8RIQdp_79fxJoYzrkic0A' },
];

export default function Music() {
  return (
    <div className={s.page}>
      <div className="wrap page-header">
        <span className="eyebrow">Discography</span>
        <h1 className="page-title">Music</h1>
        <p className="page-sub">Stream Dizzy Izzy on all major platforms.</p>
      </div>
      <div className="wrap">
        <div className={s.grid}>
          <div>
            <span className="eyebrow">Platforms</span>
            {platforms.map(p => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className={s.row}>
                <span>{p.name}</span><span>↗</span>
              </a>
            ))}
          </div>
          <div>
            <iframe
              src="https://open.spotify.com/embed/artist/0zivcUeYnXj4nR0jl8735K?utm_source=generator&theme=0"
              width="100%" height="420" frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy" style={{ borderRadius: 8 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

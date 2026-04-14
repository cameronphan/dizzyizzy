import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Music',
  description: 'Stream Dizzy Izzy on Spotify, Apple Music, and YouTube Music.',
};

const platforms = [
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/artist/0zivcUeYnXj4nR0jl8735K',
    label: 'Listen on Spotify →',
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/us/artist/dizzy-izzy/1853730221',
    label: 'Listen on Apple Music →',
  },
  {
    name: 'YouTube Music',
    url: 'https://music.youtube.com/channel/UCw8RIQdp_79fxJoYzrkic0A',
    label: 'Listen on YouTube Music →',
  },
];

export default function MusicPage() {
  return (
    <div className="container">
      <div className={styles.header}>
        <p className="section-label">Discography</p>
        <h1 className="section-title">Music</h1>
        <p className={styles.subtitle}>
          Stream Dizzy Izzy on all major platforms.
        </p>
      </div>

      {/* Spotify Embed — main feature */}
      <div className={styles.mainEmbed}>
        <iframe
          src="https://open.spotify.com/embed/artist/0zivcUeYnXj4nR0jl8735K?utm_source=generator&theme=0"
          width="100%"
          height="452"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          style={{ borderRadius: '12px' }}
        />
      </div>

      {/* Platform links */}
      <div className={styles.platforms}>
        <p className={styles.platformsLabel}>Also available on</p>
        <div className={styles.platformGrid}>
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.platformCard}
            >
              <span className={styles.platformName}>{p.name}</span>
              <span className={styles.platformLink}>{p.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

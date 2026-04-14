import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Dizzy Izzy — Official Site',
  description: 'New wave, disco, rock, pop. Whatever it needs.',
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Official Site</p>
          <h1 className={styles.heroTitle}>
            Dizzy<br />Izzy
          </h1>
          <p className={styles.heroSub}>
            New wave. Disco. Rock. Pop.<br />Whatever it needs.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/shows" className={styles.ctaPrimary}>
              See Shows
            </Link>
            <Link href="/music" className={styles.ctaSecondary}>
              Listen Now
            </Link>
          </div>
        </div>
        <div className={styles.heroDecor}>
          <div className={styles.heroLine} />
          <div className={styles.heroCircle} />
        </div>
      </section>

      {/* Latest Release */}
      <section className={styles.release}>
        <div className="container">
          <div className={styles.releaseInner}>
            <div className={styles.releaseText}>
              <p className="section-label">Now Streaming</p>
              <h2 className={styles.releaseTitle}>Listen on all platforms</h2>
              <p className={styles.releaseDesc}>
                Find Dizzy Izzy on Spotify, Apple Music, and YouTube Music.
              </p>
              <div className={styles.streamLinks}>
                <a
                  href="https://open.spotify.com/artist/0zivcUeYnXj4nR0jl8735K"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.streamLink}
                >
                  Spotify
                </a>
                <a
                  href="https://music.apple.com/us/artist/dizzy-izzy/1853730221"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.streamLink}
                >
                  Apple Music
                </a>
                <a
                  href="https://music.youtube.com/channel/UCw8RIQdp_79fxJoYzrkic0A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.streamLink}
                >
                  YouTube Music
                </a>
              </div>
            </div>
            <div className={styles.spotifyEmbed}>
              <iframe
                src="https://open.spotify.com/embed/artist/0zivcUeYnXj4nR0jl8735K?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ borderRadius: '12px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Shows teaser */}
      <section className={styles.showsTeaser}>
        <div className="container">
          <div className={styles.showsTeaserInner}>
            <div>
              <p className="section-label">Live</p>
              <h2 className={styles.showsTeaserTitle}>Catch a Show</h2>
              <p className={styles.showsTeaserDesc}>
                Dizzy Izzy plays live. Check the full schedule and grab tickets before they&apos;re gone.
              </p>
            </div>
            <Link href="/shows" className={styles.ctaPrimary}>
              View All Shows →
            </Link>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className={styles.aboutTeaser}>
        <div className="container">
          <div className={styles.aboutTeaserGrid}>
            <div className={styles.aboutTeaserImg}>
              <div className={styles.imgPlaceholder}>
                <span>Photo Coming Soon</span>
              </div>
            </div>
            <div className={styles.aboutTeaserText}>
              <p className="section-label">About</p>
              <blockquote className={styles.aboutQuote}>
                &ldquo;Some projects have a sound. Dizzy Izzy has a feeling.&rdquo;
              </blockquote>
              <p className={styles.aboutSnippet}>
                Born out of a desire to write freely — disco one day, rock the next,
                pop whenever it feels right.
              </p>
              <Link href="/about" className={styles.ctaSecondary}>
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social bar */}
      <section className={styles.socialBar}>
        <div className="container">
          <div className={styles.socialBarInner}>
            <p className={styles.socialBarText}>Follow along</p>
            <div className={styles.socialLinks}>
              <a href="https://www.instagram.com/justdizzyizzy" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                Instagram
              </a>
              <span className={styles.socialDot}>·</span>
              <a href="https://www.youtube.com/@music.cameronphan" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                YouTube
              </a>
              <span className={styles.socialDot}>·</span>
              <a href="https://open.spotify.com/artist/0zivcUeYnXj4nR0jl8735K" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                Spotify
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

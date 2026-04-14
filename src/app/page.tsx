import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Dizzy Izzy — Official Site',
};

export default function HomePage() {
  return (
    <>
      {/* HERO — full screen poster */}
      <section className={styles.hero}>
        {/* Background photo zone */}
        <div className={styles.heroBg}>
          {/*
            PHOTO PLACEHOLDER
            To add your photo:
            1. Upload image to /public/images/ in GitHub
            2. Replace this div with:
               <img src="/images/hero.jpg" alt="Dizzy Izzy" className={styles.heroImg} />
          */}
          <div className={styles.heroPhotoPlaceholder} />
          <div className={styles.heroVignette} />
        </div>

        {/* Big poster title — bleeds over the image */}
        <div className={styles.heroContent}>
          <h1 className={styles.heroName} aria-label="Dizzy Izzy">
            <span className={styles.heroD} aria-hidden="true">Dizzy</span>
            <span className={styles.heroI} aria-hidden="true">Izzy</span>
          </h1>
          <div className={styles.heroMeta}>
            <span className={styles.heroGenre}>New Wave · Disco · Rock · Pop</span>
            <div className={styles.heroCtas}>
              <Link href="/shows" className={styles.ctaPrimary}>Get Tickets</Link>
              <Link href="/music" className={styles.ctaGhost}>Listen</Link>
            </div>
          </div>
        </div>

        {/* Vertical label */}
        <span className={styles.heroVertical}>Official Site — 2025</span>
      </section>

      {/* MUSIC STRIP */}
      <section className={styles.musicStrip}>
        <div className={styles.musicStripInner}>
          <div className={styles.stripLeft}>
            <span className="eyebrow">Now Streaming</span>
            <h2 className={styles.stripTitle}>Listen on<br />all platforms</h2>
          </div>
          <div className={styles.stripEmbed}>
            <iframe
              src="https://open.spotify.com/embed/artist/0zivcUeYnXj4nR0jl8735K?utm_source=generator&theme=0"
              width="100%"
              height="200"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              style={{ borderRadius: '8px' }}
            />
          </div>
          <div className={styles.stripLinks}>
            <a href="https://open.spotify.com/artist/0zivcUeYnXj4nR0jl8735K" target="_blank" rel="noopener noreferrer" className={styles.platformRow}>
              <span className={styles.platformName}>Spotify</span>
              <span className={styles.platformArrow}>↗</span>
            </a>
            <a href="https://music.apple.com/us/artist/dizzy-izzy/1853730221" target="_blank" rel="noopener noreferrer" className={styles.platformRow}>
              <span className={styles.platformName}>Apple Music</span>
              <span className={styles.platformArrow}>↗</span>
            </a>
            <a href="https://music.youtube.com/channel/UCw8RIQdp_79fxJoYzrkic0A" target="_blank" rel="noopener noreferrer" className={styles.platformRow}>
              <span className={styles.platformName}>YouTube Music</span>
              <span className={styles.platformArrow}>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* SHOWS TEASER */}
      <section className={styles.showsSection}>
        <div className={styles.showsInner}>
          <div className={styles.showsLeft}>
            <span className="eyebrow">Live</span>
            <h2 className={styles.showsTitle}>Shows</h2>
            <p className={styles.showsDesc}>
              Dizzy Izzy and associated acts.<br />Tickets below.
            </p>
            <Link href="/shows" className={styles.showsLink}>
              Full Schedule →
            </Link>
          </div>
          <div className={styles.showsRight}>
            <div className={styles.noShowsMsg}>
              <span>Upcoming dates coming soon.</span>
              <span>Follow <a href="https://www.instagram.com/justdizzyizzy" target="_blank" rel="noopener noreferrer">@justdizzyizzy</a> for updates.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PULL QUOTE */}
      <section className={styles.quoteSection}>
        <div className={styles.quoteInner}>
          <blockquote className={styles.quote}>
            &ldquo;Some projects have a sound.<br />
            <em>Dizzy Izzy has a feeling.</em>&rdquo;
          </blockquote>
          <Link href="/about" className={styles.quoteLink}>Read More →</Link>
        </div>
      </section>
    </>
  );
}

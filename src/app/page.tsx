import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import s from './page.module.css';

export const metadata: Metadata = { title: 'Dizzy Izzy — Official Site' };

export default function Home() {
  return (
    <>
      {/* ── HERO ── full screen, your photo, big title */}
      <section className={s.hero}>
        <Image
          src="/photos/PP-2-Shrunk-Legs.png"
          alt="Dizzy Izzy"
          fill
          priority
          className={s.heroBg}
          sizes="100vw"
        />
        <div className={s.heroVignette} />
        <div className={s.heroContent}>
          <p className={s.heroEye}>Official Site</p>
          <h1 className={s.heroTitle}>
            <span className={s.t1}>Dizzy</span>
            <span className={s.t2}>Izzy</span>
          </h1>
          <p className={s.heroSub}>New Wave · Disco · Rock · Pop</p>
          <div className={s.heroCtas}>
            <Link href="/shows" className="cta-solid">Get Tickets</Link>
            <Link href="/music" className="cta-outline">Listen</Link>
          </div>
        </div>
        <span className={s.heroScroll}>Scroll ↓</span>
      </section>

      {/* ── SHOWS ── ticket tailor embed right on home page */}
      <section className={s.section} id="shows">
        <div className={s.sectionHead}>
          <span className="eyebrow">Live</span>
          <h2 className={s.sectionTitle}>Shows</h2>
          <p className={s.sectionSub}>Dizzy Izzy and associated acts. Grab tickets below.</p>
        </div>
        <div className={s.ticketEmbed}>
          <div dangerouslySetInnerHTML={{ __html: `
            <div class="tt-widget">
              <div class="tt-widget-fallback">
                <p><a href="https://www.tickettailor.com/all-tickets/cameronphanmusic/?ref=website_widget" target="_blank">Click here to buy tickets</a></p>
              </div>
              <script src="https://cdn.tickettailor.com/js/widgets/min/widget.js"
                data-url="https://www.tickettailor.com/all-tickets/cameronphanmusic/?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true"
                data-type="inline" data-inline-minimal="true" data-inline-show-logo="false"
                data-inline-bg-fill="false" data-inline-inherit-ref-from-url-param=""
                data-inline-ref="website_widget"></script>
            </div>
          `}} />
        </div>
        <p className={s.bookNote}>
          Booking inquiries → <Link href="/contact" className={s.bookLink}>contact us</Link>
        </p>
      </section>

      {/* ── TAPE DIVIDER ── */}
      <div className={s.tapeDivider}>
        <Image
          src="/photos/Tape-Player.png"
          alt="Dizzy Izzy cassette tape"
          fill
          className={s.tapeImg}
          sizes="100vw"
        />
        <div className={s.tapeOverlay} />
        <p className={s.tapeText}>Now Streaming</p>
      </div>

      {/* ── MUSIC ── */}
      <section className={s.section} id="music">
        <div className={s.musicGrid}>
          <div className={s.musicLeft}>
            <span className="eyebrow">Listen</span>
            <h2 className={s.sectionTitle}>Music</h2>
            <div className={s.platformList}>
              {[
                { name: 'Spotify',       url: 'https://open.spotify.com/artist/0zivcUeYnXj4nR0jl8735K' },
                { name: 'Apple Music',   url: 'https://music.apple.com/us/artist/dizzy-izzy/1853730221' },
                { name: 'YouTube Music', url: 'https://music.youtube.com/channel/UCw8RIQdp_79fxJoYzrkic0A' },
              ].map(p => (
                <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className={s.platformRow}>
                  <span>{p.name}</span><span className={s.arrow}>↗</span>
                </a>
              ))}
            </div>
          </div>
          <div className={s.musicRight}>
            <iframe
              src="https://open.spotify.com/embed/artist/0zivcUeYnXj4nR0jl8735K?utm_source=generator&theme=0"
              width="100%" height="380" frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy" style={{ borderRadius: '8px' }}
            />
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ── photo + quote */}
      <section className={s.aboutStrip}>
        <div className={s.aboutPhoto}>
          <Image
            src="/photos/WP-Tub-1.png"
            alt="Dizzy Izzy"
            fill
            className={s.aboutImg}
            sizes="50vw"
          />
        </div>
        <div className={s.aboutText}>
          <span className="eyebrow">About</span>
          <blockquote className={s.aboutQuote}>
            &ldquo;Some projects have a sound.<br />
            <em>Dizzy Izzy has a feeling.</em>&rdquo;
          </blockquote>
          <p className={s.aboutBody}>
            Born out of a desire to write freely — disco one day, rock the next,
            pop whenever it feels right. Equal parts ABBA, The Beatles, and new
            wave restlessness.
          </p>
          <Link href="/about" className="cta-outline" style={{ marginTop: '2rem', display: 'inline-block' }}>
            Full Story →
          </Link>
        </div>
      </section>

      {/* ── PHOTO STRIP ── 3 photos side by side */}
      <div className={s.photoStrip}>
        {[
          { src: '/photos/B-Dark-Eyes-12.png', alt: 'Dizzy Izzy portrait' },
          { src: '/photos/C-Dark-Eyes-11_result.jpg', alt: 'Dizzy Izzy live' },
          { src: '/photos/B-Dark-Eyes-13.png', alt: 'Dizzy Izzy portrait' },
        ].map((p, i) => (
          <div key={i} className={s.photoStripItem}>
            <Image src={p.src} alt={p.alt} fill className={s.photoStripImg} sizes="33vw" />
          </div>
        ))}
      </div>

      {/* ── FOLLOW ── */}
      <section className={s.followSection}>
        <div className={s.followInner}>
          <p className={s.followLabel}>Follow along</p>
          <div className={s.followLinks}>
            <a href="https://www.instagram.com/justdizzyizzy" target="_blank" rel="noopener noreferrer" className={s.followLink}>Instagram</a>
            <span className={s.followDot}>·</span>
            <a href="https://open.spotify.com/artist/0zivcUeYnXj4nR0jl8735K" target="_blank" rel="noopener noreferrer" className={s.followLink}>Spotify</a>
            <span className={s.followDot}>·</span>
            <a href="https://www.youtube.com/@music.cameronphan" target="_blank" rel="noopener noreferrer" className={s.followLink}>YouTube</a>
          </div>
        </div>
      </section>
    </>
  );
}

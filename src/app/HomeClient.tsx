'use client';
import Image from 'next/image';
import Marquee from '@/components/Marquee';
import Footer from '@/components/Footer';
import { useReveal } from '@/hooks/useReveal';
import s from './page.module.css';

export default function HomeClient() {
  const revealRef = useReveal();

  return (
    <div ref={revealRef}>
      {/* ── 1. HERO ── */}
      <section className={s.hero}>
        <Image
          src="/photos/PP-2-Shrunk-Legs.png"
          alt="Dizzy Izzy"
          fill
          priority
          className={s.heroBg}
          sizes="100vw"
        />
        <div className={s.heroColorGrade} />
        <div className={s.heroVignette} />

        {/* DIZZY solid + IZZY triple VHS glitch */}
        <div className={s.heroTitle}>
          <span className={s.t1}>Dizzy</span>
          <div className={s.izzyWrap}>
            <span className={s.izzy1} aria-hidden="true">Izzy</span>
            <span className={s.izzy2} aria-hidden="true">Izzy</span>
            <span className={s.izzy3}>Izzy</span>
          </div>
        </div>

        {/* Dark Eyes — pulsing cover + now playing */}
        <div className={s.release}>
          <span className={s.releaseLabel}>Latest Release</span>
          <div className={s.releaseCard}>
            {/* Cover with pulse glow */}
            <a
              href="https://open.spotify.com/artist/0zivcUeYnXj4nR0jl8735K"
              target="_blank"
              rel="noopener noreferrer"
              className={s.releaseCoverWrap}
              aria-label="Listen to Dark Eyes"
            >
              <div className={s.coverGlow} />
              <Image
                src="/photos/dark-eyes-cover.png"
                alt="Dark Eyes"
                width={180}
                height={180}
                className={s.releaseCover}
              />
            </a>
            {/* Track info */}
            <div className={s.releaseInfo}>
              <div className={s.nowPlaying}>
                <span className={s.eq}>
                  <span className={s.bar} />
                  <span className={s.bar} />
                  <span className={s.bar} />
                  <span className={s.bar} />
                </span>
                <span className={s.nowPlayingText}>Now Playing</span>
              </div>
              <span className={s.releaseTrack}>Dark Eyes</span>
              <span className={s.releaseArtist}>Dizzy Izzy</span>
              <div className={s.streamIcons}>
                <a
                  href="https://open.spotify.com/artist/0zivcUeYnXj4nR0jl8735K"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.streamBtn}
                  aria-label="Listen on Spotify"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                  <span>Spotify</span>
                </a>
                <a
                  href="https://music.apple.com/us/artist/dizzy-izzy/1853730221"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.streamBtn}
                  aria-label="Listen on Apple Music"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a6.304 6.304 0 00-1.792-.808c-.766-.216-1.55-.273-2.335-.253H7.502c-.745.014-1.494.082-2.23.279a6.096 6.096 0 00-1.973.941A5.97 5.97 0 001.5 3.44a6.482 6.482 0 00-.765 2.165c-.19.89-.22 1.79-.23 2.692V15.7c.01.9.04 1.802.23 2.692.175.85.498 1.644.965 2.355a5.989 5.989 0 002.065 1.773 6.274 6.274 0 002.055.808c.877.197 1.769.237 2.66.243H16.5c.892-.006 1.784-.046 2.66-.243a6.274 6.274 0 002.055-.808 5.989 5.989 0 002.065-1.773 6.482 6.482 0 00.965-2.355c.19-.89.22-1.792.23-2.692V8.297c-.01-.9-.04-1.802-.48-2.173zM12 18.145a6.145 6.145 0 110-12.29 6.145 6.145 0 010 12.29zm6.406-11.063a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88zM12 7.855A4.145 4.145 0 1016.145 12 4.15 4.15 0 0012 7.855z"/></svg>
                  <span>Apple Music</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* ── 2. SHOWS ── */}
      <section className={s.section} id="shows">
        <span className="eyebrow reveal" data-delay="0">Live</span>
        <h2 className="sec-title reveal" data-delay="80">Shows</h2>
        <div className={`${s.ticketWrap} reveal`} data-delay="160">
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
      </section>

      <div className="purple-rule" />

      {/* ── 3. PHOTO BREAK — Ken Burns zoom ── */}
      <div className={s.photoBreak}>
        <Image
          src="/photos/background-larger.png"
          alt="Dizzy Izzy"
          fill
          className={s.photoBreakImg}
          sizes="100vw"
        />
        <div className={s.photoBreakOverlay} />
      </div>

      {/* ── 4. MERCH ── */}
      <section className={s.section} id="merch">
        <span className="eyebrow reveal" data-delay="0">Shop</span>
        <h2 className="sec-title reveal" data-delay="80">Merch</h2>
        <div className={`${s.merchScroll} reveal`} data-delay="160">
          {[
            { label: 'Classic Tee' },
            { label: 'Dark Eyes Tee' },
            { label: 'Hoodie' },
            { label: 'Cap' },
            { label: 'Tote Bag' },
            { label: 'Long Sleeve' },
          ].map((item) => (
            <div key={item.label} className={s.merchItem}>
              <div className={s.merchShirt}>
                <svg viewBox="0 0 100 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 90, height: 90 }}>
                  <path d="M30 5 L15 20 L0 15 L10 40 L20 40 L20 85 L80 85 L80 40 L90 40 L100 15 L85 20 L70 5 Q62 12 50 12 Q38 12 30 5Z" fill="rgba(237,232,245,1)" />
                </svg>
              </div>
              <span className={s.merchItemLabel}>{item.label}</span>
              <span className={s.merchItemPrice}>Coming Soon</span>
            </div>
          ))}
        </div>
        <a
          href="https://www.instagram.com/justdizzyizzy"
          target="_blank"
          rel="noopener noreferrer"
          className={`${s.merchCta} reveal`}
          data-delay="240"
        >
          Follow for updates ↗
        </a>
      </section>

      <div className="purple-rule" />

      {/* ── 5. EMAIL ── */}
      <section className={s.emailSection}>
        <div className={s.emailGallery}>
          {[
            '/photos/email_gallery_1.jpg',
            '/photos/email_gallery_2.jpg',
            '/photos/email_gallery_3.jpg',
            '/photos/email_gallery_4.jpg',
          ].map((src, i) => (
            <div key={i} className={s.emailGalleryItem}>
              <Image src={src} alt="" fill className={s.emailGalleryImg} sizes="25vw" />
            </div>
          ))}
        </div>
        <div className={s.emailOverlay} />
        <div className={`${s.emailContent} reveal`} data-delay="0">
          <span className="eyebrow">Stay in the loop</span>
          <h2 className="sec-title">Join<br />the list</h2>
          <div className={s.emailInputWrap} title="Coming soon">
            <input className={s.emailInput} type="email" placeholder="Coming soon" disabled readOnly />
            <button className={s.emailBtn} disabled>Subscribe</button>
          </div>
          <p className={s.emailNote}>Show announcements and new music only.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

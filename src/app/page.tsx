import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import s from './page.module.css';

export const metadata: Metadata = { title: 'Dizzy Izzy — Official Site' };

export default function Home() {
  return (
    <>
      {/* ── 1. HERO ───────────────────────────────────── */}
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
          {/* Big title */}
          <div className={s.heroTitle}>
            <span className={s.t1}>Dizzy</span>
            <span className={s.t2}>Izzy</span>
          </div>

          {/* Dark Eyes release card — bottom right */}
          <div className={s.releaseCard}>
            <span className={s.releaseLabel}>Latest Release</span>
            <a
              href="https://open.spotify.com/artist/0zivcUeYnXj4nR0jl8735K"
              target="_blank"
              rel="noopener noreferrer"
              className={s.releaseInner}
            >
              <Image
                src="/photos/dark-eyes-cover.png"
                alt="Dark Eyes"
                width={80}
                height={80}
                className={s.releaseCover}
              />
              <div className={s.releaseInfo}>
                <span className={s.releaseTrack}>Dark Eyes</span>
                <span className={s.releaseArtist}>Dizzy Izzy</span>
                <span className={s.releaseListen}>Listen now ↗</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. SHOWS ──────────────────────────────────── */}
      <section className={s.section} id="shows">
        <span className="eyebrow">Live</span>
        <h2 className="sec-title">Shows</h2>
        <div className={s.ticketWrap}>
          <div dangerouslySetInnerHTML={{ __html: `
            <div class="tt-widget">
              <div class="tt-widget-fallback">
                <p><a href="https://www.tickettailor.com/all-tickets/cameronphanmusic/?ref=website_widget" target="_blank">Click here to buy tickets</a></p>
              </div>
              <script src="https://cdn.tickettailor.com/js/widgets/min/widget.js"
                data-url="https://www.tickettailor.com/all-tickets/cameronphanmusic/?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true"
                data-type="inline"
                data-inline-minimal="true"
                data-inline-show-logo="false"
                data-inline-bg-fill="false"
                data-inline-inherit-ref-from-url-param=""
                data-inline-ref="website_widget">
              </script>
            </div>
          `}} />
        </div>
        <p className={s.bookNote}>
          Booking inquiries →{' '}
          <Link href="/contact" className={s.bookLink}>contact us</Link>
        </p>
      </section>

      {/* ── 3. WIDE PHOTO BREAK ───────────────────────── */}
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

      {/* ── 4. MERCH ──────────────────────────────────── */}
      <section className={s.section} id="merch">
        <span className="eyebrow">Shop</span>
        <h2 className="sec-title">Merch</h2>
        {/* Replace this placeholder with Printful embed when ready */}
        <div className={s.merchPlaceholder}>
          <p className={s.merchPlaceholderText}>Store coming soon</p>
          <a
            href="https://www.instagram.com/justdizzyizzy"
            target="_blank"
            rel="noopener noreferrer"
            className={s.merchCta}
          >
            Follow for updates ↗
          </a>
        </div>
      </section>

      {/* ── 5. EMAIL SIGNUP ───────────────────────────── */}
      <section className={s.emailSection}>
        {/* Gallery photos tiled as background */}
        <div className={s.emailGallery}>
          {[
            '/photos/B-Dark-Eyes-12.png',
            '/photos/C-Dark-Eyes-13_result.jpg',
            '/photos/B-Dark-Eyes-13.png',
            '/photos/C-Dark-Eyes-11_result.jpg',
          ].map((src, i) => (
            <div key={i} className={s.emailGalleryItem}>
              <Image src={src} alt="" fill className={s.emailGalleryImg} sizes="25vw" />
            </div>
          ))}
        </div>
        <div className={s.emailOverlay} />

        <div className={s.emailContent}>
          <span className="eyebrow">Stay in the loop</span>
          <h2 className="sec-title">Join<br />the list</h2>
          <div className={s.emailFormWrap}>
            <div className={s.emailInputWrap} title="Coming soon">
              <input
                className={s.emailInput}
                type="email"
                placeholder="Coming soon"
                disabled
                readOnly
              />
              <button className={s.emailBtn} disabled>Subscribe</button>
            </div>
            <p className={s.emailNote}>Show announcements and new music only.</p>
          </div>
        </div>
      </section>
    </>
  );
}

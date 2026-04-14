import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Marquee from '@/components/Marquee';
import s from './page.module.css';

export const metadata: Metadata = { title: 'Dizzy Izzy — Official Site' };

export default function Home() {
  return (
    <>
      {/* ── 1. HERO ── full bleed, photo stretches way down */}
      <section className={s.hero}>
        <Image
          src="/photos/PP-2-Shrunk-Legs.png"
          alt="Dizzy Izzy"
          fill
          priority
          className={s.heroBg}
          sizes="100vw"
        />
        {/* Purple color grade overlay */}
        <div className={s.heroColorGrade} />
        {/* Vignette — only fades at the very bottom */}
        <div className={s.heroVignette} />

        {/* Stacked title — DIZZY solid, IZZY outline, offset right */}
        <div className={s.heroTitle}>
          <span className={s.t1}>Dizzy</span>
          <span className={s.t2}>Izzy</span>
        </div>

        {/* Dark Eyes — raw floating, no card */}
        <div className={s.release}>
          <span className={s.releaseLabel}>Latest Release</span>
          <a
            href="https://open.spotify.com/artist/0zivcUeYnXj4nR0jl8735K"
            target="_blank"
            rel="noopener noreferrer"
            className={s.releaseLink}
          >
            <Image
              src="/photos/dark-eyes-cover.png"
              alt="Dark Eyes"
              width={130}
              height={130}
              className={s.releaseCover}
            />
            <span className={s.releaseTrack}>Dark Eyes</span>
            <span className={s.releaseArtist}>Dizzy Izzy</span>
            <span className={s.releaseListen}>
              {/* Animated pulse dots */}
              <span className={s.pulse}>
                <span className={s.dot1} />
                <span className={s.dot2} />
                <span className={s.dot3} />
              </span>
              Listen Now
            </span>
          </a>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <Marquee />

      {/* ── 2. SHOWS ── */}
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
                data-type="inline" data-inline-minimal="true" data-inline-show-logo="false"
                data-inline-bg-fill="false" data-inline-inherit-ref-from-url-param=""
                data-inline-ref="website_widget"></script>
            </div>
          `}} />
        </div>
        <p className={s.bookNote}>
          Booking inquiries →{' '}
          <Link href="/contact" className={s.bookLink}>contact us</Link>
        </p>
      </section>

      <div className="purple-rule" />

      {/* ── 3. WIDE PHOTO BREAK ── */}
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

      {/* ── 4. MERCH ── big type, minimal */}
      <section className={s.section} id="merch">
        <span className="eyebrow">Shop</span>
        <h2 className="sec-title">Merch</h2>
        <p className={s.comingSoon}>Coming Soon</p>
        <a
          href="https://www.instagram.com/justdizzyizzy"
          target="_blank"
          rel="noopener noreferrer"
          className={s.merchCta}
        >
          Follow for updates ↗
        </a>
      </section>

      <div className="purple-rule" />

      {/* ── 5. EMAIL ── gallery background */}
      <section className={s.emailSection}>
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
      </section>

      {/* ── FOOTER — one line ── */}
      <footer className={s.footer}>
        <span>© {new Date().getFullYear()} Dizzy Izzy</span>
        <div className={s.footerRule} />
        <Link href="/contact" className={s.footerContact}>Booking &amp; Press</Link>
      </footer>
    </>
  );
}

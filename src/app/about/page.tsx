import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import s from './page.module.css';

export const metadata: Metadata = { title: 'About' };

export default function About() {
  return (
    <>
      {/* Full bleed hero */}
      <div className={s.heroPhoto}>
        <Image src="/photos/WP-Tub-1.png" alt="Dizzy Izzy" fill priority className={s.heroImg} sizes="100vw" />
        <div className={s.heroOverlay} />
        <div className={s.heroText}>
          <span className="eyebrow">About</span>
          <h1 className={s.heroTitle}>The<br />Project</h1>
        </div>
      </div>

      {/* Magazine pull quote — huge italic */}
      <div className={s.pullSection}>
        <blockquote className={s.pullQuote}>
          &ldquo;Some projects<br />have a sound.<br />
          <em>Dizzy Izzy has<br />a feeling.&rdquo;</em>
        </blockquote>
      </div>

      <div className="purple-rule" />

      {/* Bio */}
      <div className={s.bioSection}>
        <div className={s.bioCopy}>
          <p>Born out of a desire to write freely — disco one day, rock the next, pop whenever it feels right — Dizzy Izzy is a solo project that doesn&apos;t sit still.</p>
          <p>If ABBA, The Beatles, and the new wave movement had a late night conversation, this is what came out of it. Equal parts euphoric and restless, it&apos;s music made for people who think genre is just a starting point.</p>
        </div>
        <div className={s.bioTags}>
          {['ABBA','The Beatles','Talking Heads','New Wave','Disco','Art Rock'].map(t => (
            <span key={t} className={s.tag}>{t}</span>
          ))}
        </div>
      </div>

      {/* Press grid */}
      <div className={s.pressGrid}>
        {[
          { src: '/photos/B-Dark-Eyes-12.png',        alt: 'Dizzy Izzy portrait'  },
          { src: '/photos/PP-FishEye-Tub.png',        alt: 'Dizzy Izzy fisheye'   },
          { src: '/photos/C-Dark-Eyes-13_result.jpg', alt: 'Dizzy Izzy live'       },
          { src: '/photos/B-Dark-Eyes-13.png',        alt: 'Dizzy Izzy portrait'  },
        ].map((p, i) => (
          <div key={i} className={s.pressItem}>
            <Image src={p.src} alt={p.alt} fill className={s.pressImg} sizes="25vw" />
          </div>
        ))}
      </div>
      <p className={s.pressNote}>
        High-res photos for press —{' '}
        <Link href="/contact" className={s.pressLink}>request here →</Link>
      </p>

      {/* Wide night shot */}
      <div className={s.wideShot}>
        <Image src="/photos/C-Dark-Eyes-11_result.jpg" alt="Dizzy Izzy" fill className={s.wideShotImg} sizes="100vw" />
        <div className={s.wideShotOverlay} />
      </div>

      {/* Booking CTA */}
      <div className={s.ctaSection}>
        <div>
          <span className="eyebrow">Work Together</span>
          <h2 className={s.ctaTitle}>Venues<br />&amp; Press</h2>
          <p className={s.ctaText}>For booking, press inquiries, interviews, or collaborations.</p>
        </div>
        <Link href="/contact" className={s.ctaBtn}>Get in Touch</Link>
      </div>

      <Footer />
    </>
  );
}

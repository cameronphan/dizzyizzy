import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import s from './page.module.css';

export const metadata: Metadata = { title: 'About' };

const pressPhotos = [
  { src: '/photos/B-Dark-Eyes-12.png',            alt: 'Dizzy Izzy portrait' },
  { src: '/photos/PP-FishEye-Tub.png',            alt: 'Dizzy Izzy fisheye' },
  { src: '/photos/C-Dark-Eyes-13_result.jpg',     alt: 'Dizzy Izzy live'    },
  { src: '/photos/B-Dark-Eyes-13.png',            alt: 'Dizzy Izzy portrait' },
];

export default function About() {
  return (
    <div className={s.page}>
      {/* Header */}
      <div className="wrap page-header">
        <span className="eyebrow">About</span>
        <h1 className="page-title">The<br />Project</h1>
      </div>

      {/* Bio + hero photo */}
      <div className={s.bioGrid}>
        <div className={s.bioPhoto}>
          <Image
            src="/photos/WP-Tub-1.png"
            alt="Dizzy Izzy"
            fill
            className={s.bioImg}
            sizes="50vw"
            priority
          />
        </div>
        <div className={s.bioText}>
          <blockquote className={s.pullQuote}>
            &ldquo;Some projects have a sound.<br />
            <em>Dizzy Izzy has a feeling.</em>&rdquo;
          </blockquote>
          <div className={s.bioCopy}>
            <p>Born out of a desire to write freely — disco one day, rock the next, pop whenever it feels right — Dizzy Izzy is a solo project that doesn&apos;t sit still.</p>
            <p>If ABBA, The Beatles, and the new wave movement had a late night conversation, this is what came out of it. Equal parts euphoric and restless, it&apos;s music made for people who think genre is just a starting point.</p>
          </div>
          <div className={s.tags}>
            {['ABBA','The Beatles','Talking Heads','New Wave','Disco','Art Rock'].map(t => (
              <span key={t} className={s.tag}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Press photos */}
      <div className={s.pressSection}>
        <div className="wrap">
          <span className="eyebrow">Press Photos</span>
          <div className={s.pressGrid}>
            {pressPhotos.map((p, i) => (
              <div key={i} className={s.pressItem}>
                <Image src={p.src} alt={p.alt} fill className={s.pressImg} sizes="25vw" />
              </div>
            ))}
          </div>
          <p className={s.pressNote}>
            High-res photos for press use — <Link href="/contact" className={s.pressLink}>request here →</Link>
          </p>
        </div>
      </div>

      {/* Night shot full width */}
      <div className={s.widePhoto}>
        <Image
          src="/photos/C-Dark-Eyes-11_result.jpg"
          alt="Dizzy Izzy"
          fill
          className={s.wideImg}
          sizes="100vw"
        />
        <div className={s.wideOverlay} />
      </div>

      {/* Booking CTA */}
      <div className="wrap">
        <div className={s.ctaBlock}>
          <div>
            <span className="eyebrow">Work Together</span>
            <h2 className={s.ctaTitle}>Venues &amp; Press</h2>
            <p className={s.ctaText}>For booking, press inquiries, interviews, or collaborations.</p>
          </div>
          <Link href="/contact" className="cta-solid">Get in Touch</Link>
        </div>
      </div>
    </div>
  );
}

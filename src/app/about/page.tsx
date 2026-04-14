import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <div className={styles.page}>

      {/* Header */}
      <div className={styles.header}>
        <span className="eyebrow">About</span>
        <h1 className={styles.title}>The<br />Project</h1>
      </div>

      {/* Bio + photo grid */}
      <div className={styles.bioGrid}>
        <div className={styles.bioLeft}>
          {/*
            PHOTO — replace this div with your actual photo:
            <img src="/images/portrait.jpg" alt="Dizzy Izzy" className={styles.photo} />
          */}
          <div className={styles.photoPlaceholder}>
            <span>Press Photo</span>
          </div>
        </div>

        <div className={styles.bioRight}>
          <blockquote className={styles.pullQuote}>
            &ldquo;Some projects have a sound.<br />
            <em>Dizzy Izzy has a feeling.</em>&rdquo;
          </blockquote>

          <div className={styles.bioCopy}>
            <p>
              Born out of a desire to write freely — disco one day, rock the next,
              pop whenever it feels right — Dizzy Izzy is a solo project that
              doesn&apos;t sit still.
            </p>
            <p>
              If ABBA, The Beatles, and the new wave movement had a late night
              conversation, this is what came out of it. Equal parts euphoric and
              restless, it&apos;s music made for people who think genre is just a
              starting point.
            </p>
          </div>

          <div className={styles.tags}>
            {['ABBA', 'The Beatles', 'Talking Heads', 'New Wave', 'Disco', 'Art Rock'].map((t) => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Press photo grid */}
      <div className={styles.pressSection}>
        <span className="eyebrow">Press Photos</span>
        <div className={styles.photoGrid}>
          {/*
            Replace each placeholder with real photos:
            <img src="/images/photo-1.jpg" alt="Dizzy Izzy live" className={styles.pressPhoto} />
          */}
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className={styles.pressPlaceholder}>
              <span>Photo {n}</span>
            </div>
          ))}
        </div>
        <p className={styles.pressNote}>
          High-res photos available for press use.{' '}
          <Link href="/contact" className={styles.pressLink}>Request here →</Link>
        </p>
      </div>

      {/* Booking CTA */}
      <div className={styles.ctaBlock}>
        <div className={styles.ctaLeft}>
          <span className="eyebrow">Work Together</span>
          <h2 className={styles.ctaTitle}>Venues &amp;<br />Press</h2>
        </div>
        <div className={styles.ctaRight}>
          <p className={styles.ctaText}>
            For booking, press inquiries, interviews, or collaborations.
          </p>
          <Link href="/contact" className={styles.ctaBtn}>Get in Touch</Link>
        </div>
      </div>

    </div>
  );
}

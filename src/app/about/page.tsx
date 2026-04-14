import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Dizzy Izzy — the artist, the project, the music.',
};

const pressLinks = [
  {
    label: 'Spotify',
    url: 'https://open.spotify.com/artist/0zivcUeYnXj4nR0jl8735K',
  },
  {
    label: 'Apple Music',
    url: 'https://music.apple.com/us/artist/dizzy-izzy/1853730221',
  },
  {
    label: 'YouTube Music',
    url: 'https://music.youtube.com/channel/UCw8RIQdp_79fxJoYzrkic0A',
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/justdizzyizzy',
  },
  {
    label: 'YouTube',
    url: 'https://www.youtube.com/@music.cameronphan',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <p className="section-label">About</p>
              <h1 className={styles.heroTitle}>The Project</h1>
              <blockquote className={styles.heroQuote}>
                &ldquo;Some projects have a sound.<br />Dizzy Izzy has a feeling.&rdquo;
              </blockquote>
            </div>
            <div className={styles.heroImg}>
              {/* 
                IMAGE PLACEHOLDER 
                To add your photo: 
                1. Add your image to the /public/images/ folder in GitHub
                2. Replace this div with:
                   <img src="/images/your-photo.jpg" alt="Dizzy Izzy" />
              */}
              <div className={styles.imgPlaceholder}>
                <span>Press Photo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className={styles.bio}>
        <div className="container">
          <div className={styles.bioInner}>
            <div className={styles.bioText}>
              <p className="section-label">Bio</p>
              <div className={styles.bioCopy}>
                <p>
                  Some projects have a sound. Dizzy Izzy has a feeling. Born out of a desire
                  to write freely — disco one day, rock the next, pop whenever it feels right —
                  it&apos;s a solo project that doesn&apos;t sit still.
                </p>
                <p>
                  If ABBA, The Beatles, and the new wave movement had a late night conversation,
                  this is what came out of it. Dizzy Izzy is the product of refusing to pick a lane,
                  and finding that the most interesting music lives right at the intersection of all of them.
                </p>
                <p>
                  Equal parts euphoric and restless, it&apos;s music made for people who think
                  genre is just a starting point.
                </p>
              </div>
            </div>

            <div className={styles.bioSidebar}>
              <div className={styles.sidebarBlock}>
                <p className={styles.sidebarLabel}>Sounds Like</p>
                <ul className={styles.sidebarList}>
                  <li>ABBA</li>
                  <li>The Beatles</li>
                  <li>Talking Heads</li>
                  <li>New wave</li>
                  <li>Disco</li>
                  <li>Art rock</li>
                </ul>
              </div>

              <div className={styles.sidebarBlock}>
                <p className={styles.sidebarLabel}>Listen</p>
                <ul className={styles.sidebarList}>
                  {pressLinks.slice(0, 3).map((l) => (
                    <li key={l.label}>
                      <a href={l.url} target="_blank" rel="noopener noreferrer" className={styles.sidebarLink}>
                        {l.label} →
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.sidebarBlock}>
                <p className={styles.sidebarLabel}>Follow</p>
                <ul className={styles.sidebarList}>
                  {pressLinks.slice(3).map((l) => (
                    <li key={l.label}>
                      <a href={l.url} target="_blank" rel="noopener noreferrer" className={styles.sidebarLink}>
                        {l.label} →
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press / Photo gallery */}
      <section className={styles.photos}>
        <div className="container">
          <p className="section-label">Press Photos</p>
          <div className={styles.photoGrid}>
            {/* 
              PHOTO PLACEHOLDERS
              To add real photos:
              1. Upload images to /public/images/ in GitHub
              2. Replace each placeholder div with:
                 <img src="/images/photo-name.jpg" alt="Dizzy Izzy" />
            */}
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className={styles.photoPlaceholder}>
                <span>Photo {n}</span>
              </div>
            ))}
          </div>
          <p className={styles.photoNote}>
            For press use, high-resolution photos available upon request.{' '}
            <Link href="/contact" className={styles.photoLink}>
              Contact us →
            </Link>
          </p>
        </div>
      </section>

      {/* Booking CTA */}
      <section className={styles.bookingCta}>
        <div className="container">
          <div className={styles.bookingCtaInner}>
            <div>
              <p className="section-label">Work Together</p>
              <h2 className={styles.bookingCtaTitle}>Venues &amp; Press</h2>
              <p className={styles.bookingCtaText}>
                For booking, press inquiries, interviews, or collaborations — get in touch.
              </p>
            </div>
            <Link href="/contact" className={styles.bookingCtaBtn}>
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

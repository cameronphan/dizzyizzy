import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = { title: 'Merch' };

export default function MerchPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <span className="eyebrow">Shop</span>
        <h1 className={styles.title}>Merch</h1>
        <p className={styles.sub}>Official Dizzy Izzy merchandise.</p>
      </div>

      {/*
        STORE PLACEHOLDER
        When your Printful store is ready:
        1. Get the embed code from Printful
        2. Replace the placeholder div below with your embed code
      */}
      <div className={styles.placeholder}>
        <p className={styles.csLabel}>Coming Soon</p>
        <h2 className={styles.csTitle}>Store launching soon</h2>
        <p className={styles.csText}>
          Official Dizzy Izzy merch is on its way. Follow on Instagram to be the first to know when the store goes live.
        </p>
        <a
          href="https://www.instagram.com/justdizzyizzy"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaBtn}
        >
          Follow @justdizzyizzy
        </a>
      </div>
    </div>
  );
}

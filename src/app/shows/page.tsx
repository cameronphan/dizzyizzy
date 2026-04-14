import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = { title: 'Shows' };

export default function ShowsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <span className="eyebrow">Live</span>
        <h1 className={styles.title}>Shows</h1>
        <p className={styles.sub}>
          Dizzy Izzy and associated acts. All tickets below.
        </p>
      </div>

      <div className={styles.embedWrap}>
        {/* Ticket Tailor Box Office Widget */}
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <div class="tt-widget">
                <div class="tt-widget-fallback">
                  <p><a href="https://www.tickettailor.com/all-tickets/cameronphanmusic/?ref=website_widget" target="_blank">Click here to buy tickets</a></p>
                </div>
                <script
                  src="https://cdn.tickettailor.com/js/widgets/min/widget.js"
                  data-url="https://www.tickettailor.com/all-tickets/cameronphanmusic/?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true"
                  data-type="inline"
                  data-inline-minimal="true"
                  data-inline-show-logo="false"
                  data-inline-bg-fill="false"
                  data-inline-inherit-ref-from-url-param=""
                  data-inline-ref="website_widget">
                </script>
              </div>
            `,
          }}
        />
      </div>

      <div className={styles.bookingNote}>
        <p>
          Interested in booking Dizzy Izzy or an associated act?{' '}
          <Link href="/contact" className={styles.bookingLink}>Get in touch →</Link>
        </p>
      </div>
    </div>
  );
}

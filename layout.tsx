import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Shows',
  description: 'Upcoming Dizzy Izzy shows and events. Get your tickets here.',
};

export default function ShowsPage() {
  return (
    <div className="container">
      <div className={styles.header}>
        <p className="section-label">Live</p>
        <h1 className="section-title">Shows</h1>
        <p className={styles.subtitle}>
          Dizzy Izzy and associated acts. Tickets available below.
        </p>
      </div>

      <div className={styles.embedWrapper}>
        {/* Ticket Tailor Box Office Widget */}
        <div
          className="tt-widget"
          dangerouslySetInnerHTML={{
            __html: `
              <div class="tt-widget-fallback">
                <p>
                  <a href="https://www.tickettailor.com/all-tickets/cameronphanmusic/?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true" target="_blank">
                    Click here to buy tickets
                  </a>
                </p>
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
            `,
          }}
        />
      </div>

      <div className={styles.bookingNote}>
        <p>
          Interested in booking Dizzy Izzy or an associated act for your venue?{' '}
          <a href="/contact" className={styles.bookingLink}>
            Get in touch →
          </a>
        </p>
      </div>
    </div>
  );
}

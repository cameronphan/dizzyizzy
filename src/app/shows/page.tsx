import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Shows' };

export default function Shows() {
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem 6rem' }}>
      <div className="page-header wrap">
        <span className="eyebrow">Live</span>
        <h1 className="page-title">Shows</h1>
        <p className="page-sub">Dizzy Izzy and associated acts. All tickets below.</p>
      </div>
      <div style={{ marginBottom: '3rem', minHeight: 250 }}
        dangerouslySetInnerHTML={{ __html: `
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
        `}}
      />
      <p style={{ fontSize: 10, color: 'var(--faint)', letterSpacing: '0.06em', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
        Booking inquiries → <Link href="/contact" style={{ color: 'var(--purple)' }}>contact us</Link>
      </p>
    </div>
  );
}

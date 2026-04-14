import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Merch' };

export default function Merch() {
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem 6rem' }}>
      <div className="page-header">
        <span className="eyebrow">Shop</span>
        <h1 className="page-title">Merch</h1>
        <p className="page-sub">Official Dizzy Izzy merchandise.</p>
      </div>
      {/* Replace this placeholder with Printful embed when ready */}
      <div style={{ border: '1px solid var(--border)', background: 'var(--surface)', padding: '8rem 2rem', textAlign: 'center' }}>
        <p style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--purple)', marginBottom: '1.5rem' }}>Coming Soon</p>
        <h2 style={{ fontFamily: 'var(--font-poster)', fontSize: 'clamp(2.5rem,6vw,5rem)', textTransform: 'uppercase', color: 'var(--cream)', marginBottom: '1.25rem' }}>Store launching soon</h2>
        <p style={{ fontSize: 11, color: 'var(--muted)', maxWidth: 400, margin: '0 auto 3rem', lineHeight: 1.8 }}>Official Dizzy Izzy merch is on its way. Follow on Instagram to be first to know.</p>
        <a href="https://www.instagram.com/justdizzyizzy" target="_blank" rel="noopener noreferrer" className="cta-solid">
          Follow @justdizzyizzy
        </a>
      </div>
    </div>
  );
}

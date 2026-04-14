import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Videos' };

const videos: { id: string; title: string; category: string }[] = [
  // Add videos here: { id: 'YOUTUBE_ID', title: 'Title', category: 'Music Video' }
];

export default function Videos() {
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem 6rem' }}>
      <div className="page-header">
        <span className="eyebrow">Watch</span>
        <h1 className="page-title">Videos</h1>
        <p className="page-sub">Music videos, live performances, and more.</p>
      </div>
      {videos.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px,1fr))', gap: '2rem' }}>
          {videos.map(v => (
            <div key={v.id} style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                <iframe src={`https://www.youtube.com/embed/${v.id}`} title={v.title}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                  frameBorder="0" allowFullScreen loading="lazy" />
              </div>
              <div style={{ padding: '1rem 1.25rem' }}>
                <p style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--purple)' }}>{v.category}</p>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--cream)', marginTop: '0.3rem' }}>{v.title}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ border: '1px solid var(--border)', background: 'var(--surface)', padding: '7rem 2rem', textAlign: 'center' }}>
          <p style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--purple)', marginBottom: '1rem' }}>Coming Soon</p>
          <h2 style={{ fontFamily: 'var(--font-poster)', fontSize: 'clamp(2.5rem,6vw,5rem)', textTransform: 'uppercase', color: 'var(--cream)', marginBottom: '1rem' }}>Videos on the way</h2>
          <p style={{ fontSize: 11, color: 'var(--muted)', maxWidth: 400, margin: '0 auto 2.5rem', lineHeight: 1.8 }}>New visual content is in the works. Visit the YouTube channel in the meantime.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { name: 'YouTube',       url: 'https://www.youtube.com/@music.cameronphan' },
              { name: 'YouTube Music', url: 'https://music.youtube.com/channel/UCw8RIQdp_79fxJoYzrkic0A' },
            ].map(c => (
              <a key={c.url} href={c.url} target="_blank" rel="noopener noreferrer"
                style={{ padding: '0.85rem 2rem', border: '1px solid var(--border-hi)', fontSize: 9, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--purple)', transition: 'border-color 0.2s' }}>
                {c.name} ↗
              </a>
            ))}
          </div>
        </div>
      )}
      <p style={{ fontSize: 10, color: 'var(--faint)', marginTop: '3rem', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
        Press / sync inquiries → <Link href="/contact" style={{ color: 'var(--purple)' }}>contact us →</Link>
      </p>
    </div>
  );
}

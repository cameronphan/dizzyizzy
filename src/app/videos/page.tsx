import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = { title: 'Videos' };

// Add videos here when ready:
// { id: 'YOUTUBE_VIDEO_ID', title: 'Video Title', category: 'Music Video' }
const videos: { id: string; title: string; category: string }[] = [];

const channels = [
  { name: 'YouTube', url: 'https://www.youtube.com/@music.cameronphan', desc: 'Official channel' },
  { name: 'YouTube Music', url: 'https://music.youtube.com/channel/UCw8RIQdp_79fxJoYzrkic0A', desc: 'Stream on YouTube Music' },
];

export default function VideosPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <span className="eyebrow">Watch</span>
        <h1 className={styles.title}>Videos</h1>
        <p className={styles.sub}>Music videos, live performances, and more.</p>
      </div>

      {videos.length > 0 ? (
        <div className={styles.videoGrid}>
          {videos.map((v) => (
            <div key={v.id} className={styles.videoCard}>
              <div className={styles.videoEmbed}>
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className={styles.videoMeta}>
                <span className={styles.videoCategory}>{v.category}</span>
                <p className={styles.videoTitle}>{v.title}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.comingSoon}>
          <p className={styles.csLabel}>Coming Soon</p>
          <h2 className={styles.csTitle}>Videos on the way</h2>
          <p className={styles.csText}>New visual content is in the works. Visit the YouTube channel in the meantime.</p>
          <div className={styles.channelGrid}>
            {channels.map((c) => (
              <a key={c.url} href={c.url} target="_blank" rel="noopener noreferrer" className={styles.channelCard}>
                <span className={styles.channelName}>{c.name}</span>
                <span className={styles.channelDesc}>{c.desc} ↗</span>
              </a>
            ))}
          </div>
        </div>
      )}

      <div className={styles.bookingNote}>
        <p>For press or sync inquiries — <Link href="/contact" className={styles.bookingLink}>contact us →</Link></p>
      </div>
    </div>
  );
}

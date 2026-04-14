import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Videos',
  description: 'Watch Dizzy Izzy music videos, live footage, and more.',
};

// To add new videos: add an object to this array with the YouTube video ID
// You can find the video ID in the YouTube URL after "watch?v="
// Example: https://www.youtube.com/watch?v=ABC123 → id: 'ABC123'
const videos = [
  // Placeholder — replace with real video IDs when available
  // { id: 'YOUR_VIDEO_ID', title: 'Video Title', category: 'Music Video' },
];

// Channel links
const channels = [
  {
    name: 'Dizzy Izzy on YouTube',
    url: 'https://www.youtube.com/@music.cameronphan',
    desc: 'Official music channel',
  },
  {
    name: 'YouTube Music',
    url: 'https://music.youtube.com/channel/UCw8RIQdp_79fxJoYzrkic0A',
    desc: 'Stream on YouTube Music',
  },
];

export default function VideosPage() {
  return (
    <div className="container">
      <div className={styles.header}>
        <p className="section-label">Watch</p>
        <h1 className="section-title">Videos</h1>
        <p className={styles.subtitle}>
          Music videos, live performances, and more.
        </p>
      </div>

      {videos.length > 0 ? (
        <div className={styles.videoGrid}>
          {videos.map((video: { id: string; title: string; category: string }) => (
            <div key={video.id} className={styles.videoCard}>
              <div className={styles.videoEmbed}>
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className={styles.videoMeta}>
                <span className={styles.videoCategory}>{video.category}</span>
                <p className={styles.videoTitle}>{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.comingSoon}>
          <div className={styles.comingSoonInner}>
            <p className={styles.comingSoonLabel}>Coming Soon</p>
            <h2 className={styles.comingSoonTitle}>Videos on the way</h2>
            <p className={styles.comingSoonText}>
              New visual content is in the works. In the meantime, visit the YouTube channel.
            </p>
            <div className={styles.channelLinks}>
              {channels.map((ch) => (
                <a
                  key={ch.url}
                  href={ch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.channelLink}
                >
                  <span className={styles.channelName}>{ch.name}</span>
                  <span className={styles.channelDesc}>{ch.desc} →</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className={styles.channelSection}>
        <p className={styles.channelSectionLabel}>Channels</p>
        <div className={styles.channelGrid}>
          {channels.map((ch) => (
            <a
              key={ch.url}
              href={ch.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.channelCard}
            >
              <span className={styles.channelCardName}>{ch.name}</span>
              <span className={styles.channelCardDesc}>{ch.desc} →</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

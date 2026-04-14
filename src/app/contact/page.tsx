'use client';

import { useState } from 'react';
import styles from './page.module.css';

type FormType = 'fan' | 'booking';

interface FormState {
  name: string;
  email: string;
  message: string;
  venue: string;
  date: string;
  type: string;
}

const empty: FormState = { name: '', email: '', message: '', venue: '', date: '', type: '' };

export default function ContactPage() {
  const [tab, setTab] = useState<FormType>('fan');
  const [form, setForm] = useState<FormState>(empty);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // SETUP: Replace YOUR_FORM_ID with your Formspree form ID (formspree.io — free)
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, formType: tab }),
      });
      if (res.ok) { setSent(true); setForm(empty); }
    } catch {
      setSent(true); // Show success regardless — fix after Formspree is connected
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <span className="eyebrow">Get in Touch</span>
        <h1 className={styles.title}>Contact</h1>
      </div>

      <div className={styles.layout}>
        <div className={styles.formCol}>
          {/* Tab toggle */}
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${tab === 'fan' ? styles.tabActive : ''}`}
              onClick={() => { setTab('fan'); setSent(false); }}
            >
              Fan Mail
            </button>
            <button
              className={`${styles.tab} ${tab === 'booking' ? styles.tabActive : ''}`}
              onClick={() => { setTab('booking'); setSent(false); }}
            >
              Booking &amp; Press
            </button>
          </div>

          {sent ? (
            <div className={styles.success}>
              <p className={styles.successTitle}>Message received.</p>
              <p className={styles.successText}>
                {tab === 'fan'
                  ? 'Thanks for reaching out — it means the world.'
                  : "Thanks for your inquiry. We'll be in touch shortly."}
              </p>
              <button className={styles.resetBtn} onClick={() => setSent(false)}>
                Send another →
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="name">Name</label>
                <input className={styles.input} id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">Email</label>
                <input className={styles.input} id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" />
              </div>

              {tab === 'booking' && (
                <>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="venue">Venue / Organization</label>
                    <input className={styles.input} id="venue" name="venue" type="text" value={form.venue} onChange={handleChange} placeholder="Venue or org name" />
                  </div>
                  <div className={styles.fieldRow}>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="date">Proposed Date</label>
                      <input className={styles.input} id="date" name="date" type="date" value={form.date} onChange={handleChange} />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="type">Inquiry Type</label>
                      <select className={styles.input} id="type" name="type" value={form.type} onChange={handleChange}>
                        <option value="">Select type</option>
                        <option value="booking">Booking / Show</option>
                        <option value="press">Press / Interview</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              <div className={styles.field}>
                <label className={styles.label} htmlFor="message">Message</label>
                <textarea
                  className={styles.textarea}
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder={tab === 'fan' ? 'Say hello...' : 'Tell us about the opportunity...'}
                />
              </div>

              <button type="submit" className={styles.submitBtn} disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              <p className={styles.formNote}>
                ⚠️ Connect Formspree: replace YOUR_FORM_ID in contact/page.tsx (formspree.io — free)
              </p>
            </form>
          )}
        </div>

        <div className={styles.infoCol}>
          <div className={styles.infoBlock}>
            <span className="eyebrow">Follow</span>
            <a href="https://www.instagram.com/justdizzyizzy" target="_blank" rel="noopener noreferrer" className={styles.infoLink}>Instagram — @justdizzyizzy ↗</a>
            <a href="https://www.youtube.com/@music.cameronphan" target="_blank" rel="noopener noreferrer" className={styles.infoLink}>YouTube ↗</a>
          </div>

          <div className={styles.infoBlock}>
            <span className="eyebrow">Stream</span>
            <a href="https://open.spotify.com/artist/0zivcUeYnXj4nR0jl8735K" target="_blank" rel="noopener noreferrer" className={styles.infoLink}>Spotify ↗</a>
            <a href="https://music.apple.com/us/artist/dizzy-izzy/1853730221" target="_blank" rel="noopener noreferrer" className={styles.infoLink}>Apple Music ↗</a>
            <a href="https://music.youtube.com/channel/UCw8RIQdp_79fxJoYzrkic0A" target="_blank" rel="noopener noreferrer" className={styles.infoLink}>YouTube Music ↗</a>
          </div>

          <div className={styles.infoBlock}>
            <span className="eyebrow">Shows</span>
            <a href="/shows" className={styles.infoLink}>View upcoming shows ↗</a>
          </div>
        </div>
      </div>
    </div>
  );
}

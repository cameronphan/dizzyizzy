'use client';
import { useState } from 'react';
import s from './page.module.css';

type Tab = 'fan' | 'booking';
const empty = { name: '', email: '', message: '', venue: '', date: '', type: '' };

export default function Contact() {
  const [tab, setTab] = useState<Tab>('fan');
  const [form, setForm] = useState(empty);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Replace YOUR_FORM_ID with your Formspree ID (formspree.io — free)
    try {
      const r = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, formType: tab }),
      });
      if (r.ok) { setSent(true); setForm(empty); }
    } catch { setSent(true); }
    finally { setLoading(false); }
  };

  return (
    <div className={s.page}>
      <div className={s.header}>
        <span className="eyebrow">Get in Touch</span>
        <h1 className={s.title}>Contact</h1>
      </div>

      <div className={s.layout}>
        <div className={s.formCol}>
          <div className={s.tabs}>
            <button className={`${s.tab} ${tab === 'fan' ? s.active : ''}`}
              onClick={() => { setTab('fan'); setSent(false); }}>Fan Mail</button>
            <button className={`${s.tab} ${tab === 'booking' ? s.active : ''}`}
              onClick={() => { setTab('booking'); setSent(false); }}>Booking &amp; Press</button>
          </div>

          {sent ? (
            <div className={s.success}>
              <p className={s.successTitle}>Message received.</p>
              <p className={s.successText}>{tab === 'fan' ? 'Thanks for reaching out — it means the world.' : "Thanks for your inquiry. We'll be in touch shortly."}</p>
              <button className={s.reset} onClick={() => setSent(false)}>Send another →</button>
            </div>
          ) : (
            <form className={s.form} onSubmit={submit}>
              <div className={s.field}>
                <label className={s.label} htmlFor="name">Name</label>
                <input className={s.input} id="name" name="name" type="text" required value={form.name} onChange={change} placeholder="Your name" />
              </div>
              <div className={s.field}>
                <label className={s.label} htmlFor="email">Email</label>
                <input className={s.input} id="email" name="email" type="email" required value={form.email} onChange={change} placeholder="your@email.com" />
              </div>
              {tab === 'booking' && (
                <>
                  <div className={s.field}>
                    <label className={s.label} htmlFor="venue">Venue / Organization</label>
                    <input className={s.input} id="venue" name="venue" type="text" value={form.venue} onChange={change} placeholder="Venue name" />
                  </div>
                  <div className={s.fieldRow}>
                    <div className={s.field}>
                      <label className={s.label} htmlFor="date">Proposed Date</label>
                      <input className={s.input} id="date" name="date" type="date" value={form.date} onChange={change} />
                    </div>
                    <div className={s.field}>
                      <label className={s.label} htmlFor="type">Inquiry Type</label>
                      <select className={s.input} id="type" name="type" value={form.type} onChange={change}>
                        <option value="">Select type</option>
                        <option value="booking">Booking / Show</option>
                        <option value="press">Press / Interview</option>
                        <option value="collab">Collaboration</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </>
              )}
              <div className={s.field}>
                <label className={s.label} htmlFor="message">Message</label>
                <textarea className={s.textarea} id="message" name="message" required rows={6}
                  value={form.message} onChange={change}
                  placeholder={tab === 'fan' ? 'Say hello...' : 'Tell us about the opportunity...'} />
              </div>
              <button type="submit" className={s.submit} disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              <p className={s.formNote}>⚠️ Connect Formspree: replace YOUR_FORM_ID in contact/page.tsx</p>
            </form>
          )}
        </div>

        <div className={s.infoCol}>
          <div className={s.infoBlock}>
            <span className="eyebrow">Follow</span>
            <a href="https://www.instagram.com/justdizzyizzy" target="_blank" rel="noopener noreferrer" className={s.infoLink}>Instagram — @justdizzyizzy ↗</a>
            <a href="https://www.youtube.com/@music.cameronphan" target="_blank" rel="noopener noreferrer" className={s.infoLink}>YouTube ↗</a>
          </div>
          <div className={s.infoBlock}>
            <span className="eyebrow">Stream</span>
            <a href="https://open.spotify.com/artist/0zivcUeYnXj4nR0jl8735K" target="_blank" rel="noopener noreferrer" className={s.infoLink}>Spotify ↗</a>
            <a href="https://music.apple.com/us/artist/dizzy-izzy/1853730221" target="_blank" rel="noopener noreferrer" className={s.infoLink}>Apple Music ↗</a>
          </div>
          <div className={s.infoBlock}>
            <span className="eyebrow">Shows</span>
            <a href="/#shows" className={s.infoLink}>View upcoming shows ↗</a>
          </div>
        </div>
      </div>
    </div>
  );
}

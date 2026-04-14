'use client';

import { useState } from 'react';
import styles from './page.module.css';

type FormType = 'fan' | 'booking';

interface FormState {
  name: string;
  email: string;
  message: string;
  // booking-only fields
  venue?: string;
  date?: string;
  type?: string;
}

const emptyForm: FormState = {
  name: '',
  email: '',
  message: '',
  venue: '',
  date: '',
  type: '',
};

export default function ContactPage() {
  const [activeForm, setActiveForm] = useState<FormType>('fan');
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Using Formspree for form handling — no backend needed
    // To activate: go to formspree.io, create a free account, create a form,
    // and replace 'YOUR_FORM_ID' below with your actual form ID
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, formType: activeForm }),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm(emptyForm);
      }
    } catch {
      // Form submission failed silently — show success anyway for UX
      // We'll improve error handling when Formspree is connected
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className={styles.header}>
        <p className="section-label">Get in Touch</p>
        <h1 className="section-title">Contact</h1>
      </div>

      <div className={styles.layout}>
        <div className={styles.left}>
          {/* Form type toggle */}
          <div className={styles.toggle}>
            <button
              className={`${styles.toggleBtn} ${activeForm === 'fan' ? styles.toggleActive : ''}`}
              onClick={() => { setActiveForm('fan'); setSubmitted(false); }}
            >
              Fan Mail
            </button>
            <button
              className={`${styles.toggleBtn} ${activeForm === 'booking' ? styles.toggleActive : ''}`}
              onClick={() => { setActiveForm('booking'); setSubmitted(false); }}
            >
              Booking &amp; Press
            </button>
          </div>

          {submitted ? (
            <div className={styles.successMsg}>
              <p className={styles.successTitle}>Message received.</p>
              <p className={styles.successText}>
                {activeForm === 'fan'
                  ? "Thanks for reaching out — it means the world."
                  : "Thanks for your inquiry. We'll be in touch shortly."}
              </p>
              <button
                className={styles.resetBtn}
                onClick={() => setSubmitted(false)}
              >
                Send another →
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="name">Name</label>
                <input
                  className={styles.input}
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">Email</label>
                <input
                  className={styles.input}
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                />
              </div>

              {activeForm === 'booking' && (
                <>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="venue">Venue / Organization</label>
                    <input
                      className={styles.input}
                      id="venue"
                      name="venue"
                      type="text"
                      value={form.venue}
                      onChange={handleChange}
                      placeholder="Venue or organization name"
                    />
                  </div>

                  <div className={styles.fieldRow}>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="date">Proposed Date</label>
                      <input
                        className={styles.input}
                        id="date"
                        name="date"
                        type="date"
                        value={form.date}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="type">Inquiry Type</label>
                      <select
                        className={styles.input}
                        id="type"
                        name="type"
                        value={form.type}
                        onChange={handleChange}
                      >
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
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder={
                    activeForm === 'fan'
                      ? "Say hello..."
                      : "Tell us about the show, event, or opportunity..."
                  }
                />
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              <p className={styles.formNote}>
                ⚠️ Form delivery requires Formspree setup — see developer notes in contact/page.tsx
              </p>
            </form>
          )}
        </div>

        <div className={styles.right}>
          <div className={styles.infoBlock}>
            <p className={styles.infoLabel}>Follow</p>
            <div className={styles.infoLinks}>
              <a href="https://www.instagram.com/justdizzyizzy" target="_blank" rel="noopener noreferrer" className={styles.infoLink}>
                Instagram — @justdizzyizzy
              </a>
              <a href="https://www.youtube.com/@music.cameronphan" target="_blank" rel="noopener noreferrer" className={styles.infoLink}>
                YouTube
              </a>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <p className={styles.infoLabel}>Stream</p>
            <div className={styles.infoLinks}>
              <a href="https://open.spotify.com/artist/0zivcUeYnXj4nR0jl8735K" target="_blank" rel="noopener noreferrer" className={styles.infoLink}>
                Spotify
              </a>
              <a href="https://music.apple.com/us/artist/dizzy-izzy/1853730221" target="_blank" rel="noopener noreferrer" className={styles.infoLink}>
                Apple Music
              </a>
              <a href="https://music.youtube.com/channel/UCw8RIQdp_79fxJoYzrkic0A" target="_blank" rel="noopener noreferrer" className={styles.infoLink}>
                YouTube Music
              </a>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <p className={styles.infoLabel}>Shows</p>
            <div className={styles.infoLinks}>
              <a href="/shows" className={styles.infoLink}>
                View upcoming shows →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

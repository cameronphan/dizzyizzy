'use client';
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Footer from '@/components/Footer';
import s from './page.module.css';

type Tab = 'fan' | 'booking';

/**
 * Contact page — uses @formspree/react for proper state management,
 * built-in validation error display, and submission handling.
 * Form ID: xykovqyg
 */
export default function Contact() {
  const [tab, setTab] = useState<Tab>('fan');
  const [state, handleSubmit] = useForm('xykovqyg');

  return (
    <>
      <div className={s.page}>
        <div className={s.header}>
          <span className="eyebrow">Get in Touch</span>
          <h1 className={s.title}>Contact</h1>
        </div>
        <div className={s.layout}>
          <div className={s.formCol}>
            <div className={s.tabs}>
              <button
                className={`${s.tab} ${tab==='fan' ? s.active : ''}`}
                onClick={() => setTab('fan')}
              >
                Fan Mail
              </button>
              <button
                className={`${s.tab} ${tab==='booking' ? s.active : ''}`}
                onClick={() => setTab('booking')}
              >
                Booking &amp; Press
              </button>
            </div>

            {/* Success state — shown after Formspree confirms submission */}
            {state.succeeded ? (
              <div className={s.success}>
                <p className={s.successTitle}>Message received.</p>
                <p className={s.successText}>
                  {tab === 'fan' ? 'Thanks for reaching out.' : "We'll be in touch shortly."}
                </p>
                <button className={s.reset} onClick={() => window.location.reload()}>
                  Send another →
                </button>
              </div>
            ) : (
              <form className={s.form} onSubmit={handleSubmit}>
                {/* Hidden field so Formspree knows which tab was used */}
                <input type="hidden" name="formType" value={tab} />

                <div className={s.field}>
                  <label className={s.label} htmlFor="name">Name</label>
                  <input className={s.input} id="name" name="name" type="text" required placeholder="Your name" />
                  <ValidationError field="name" prefix="Name" errors={state.errors} className={s.fieldError} />
                </div>

                <div className={s.field}>
                  <label className={s.label} htmlFor="email">Email</label>
                  <input className={s.input} id="email" name="email" type="email" required placeholder="your@email.com" />
                  <ValidationError field="email" prefix="Email" errors={state.errors} className={s.fieldError} />
                </div>

                {/* Booking-only fields */}
                {tab === 'booking' && (<>
                  <div className={s.field}>
                    <label className={s.label} htmlFor="venue">Venue</label>
                    <input className={s.input} id="venue" name="venue" type="text" placeholder="Venue name" />
                  </div>
                  <div className={s.fieldRow}>
                    <div className={s.field}>
                      <label className={s.label} htmlFor="date">Date</label>
                      <input className={s.input} id="date" name="date" type="date" />
                    </div>
                    <div className={s.field}>
                      <label className={s.label} htmlFor="type">Type</label>
                      <select className={s.input} id="type" name="type">
                        <option value="">Select</option>
                        <option value="booking">Booking</option>
                        <option value="press">Press</option>
                        <option value="collab">Collaboration</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </>)}

                <div className={s.field}>
                  <label className={s.label} htmlFor="message">Message</label>
                  <textarea
                    className={s.textarea}
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder={tab === 'fan' ? 'Say hello...' : 'Tell us about the opportunity...'}
                  />
                  <ValidationError field="message" prefix="Message" errors={state.errors} className={s.fieldError} />
                </div>

                <button type="submit" className={s.submit} disabled={state.submitting}>
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          <div className={s.infoCol}>
            <div className={s.infoBlock}>
              <span className="eyebrow">Follow</span>
              <a href="https://www.instagram.com/justdizzyizzy" target="_blank" rel="noopener noreferrer" className={s.infoLink}>Instagram ↗</a>
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
      <Footer />
    </>
  );
}

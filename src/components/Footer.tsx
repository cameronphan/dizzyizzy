import Link from 'next/link';
import s from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <span>© {new Date().getFullYear()} Dizzy Izzy</span>
      <div className={s.rule} />
      <Link href="/contact" className={s.contact}>Booking &amp; Press</Link>
    </footer>
  );
}

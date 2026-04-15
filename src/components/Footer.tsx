import s from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <span>© {new Date().getFullYear()} Dizzy Izzy</span>
    </footer>
  );
}

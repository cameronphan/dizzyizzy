import type { Metadata } from 'next';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { default: 'Dizzy Izzy', template: '%s — Dizzy Izzy' },
  description: 'Official site of Dizzy Izzy. New wave, disco, rock, pop.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="page">{children}</div>
        {/* Ticker */}
        <div className="ticker-outer">
          <div className="ticker-inner">
            {Array(2).fill(['Dizzy Izzy','New Wave','Disco','Rock','Pop','Live Shows','Stream Now','Houston TX']).flat().map((t,i) => (
              <span key={i} className="ticker-item">{t}<span className="ticker-sep">✦</span></span>
            ))}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}

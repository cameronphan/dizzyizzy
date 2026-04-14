import type { Metadata } from 'next';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Ticker from '@/components/Ticker';

export const metadata: Metadata = {
  title: { default: 'Dizzy Izzy', template: '%s — Dizzy Izzy' },
  description: 'Official site of Dizzy Izzy. New wave, disco, rock, pop. Shows, music, merch.',
  openGraph: {
    title: 'Dizzy Izzy',
    description: 'New wave, disco, rock, pop. Whatever it needs.',
    url: 'https://cameronphan.com',
    siteName: 'Dizzy Izzy',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="page">
          {children}
        </div>
        <Ticker />
        <Footer />
      </body>
    </html>
  );
}

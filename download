import type { Metadata } from 'next';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Dizzy Izzy',
    template: '%s | Dizzy Izzy',
  },
  description: 'Official website of Dizzy Izzy — new wave, disco, rock, pop. Shows, music, merch and more.',
  openGraph: {
    title: 'Dizzy Izzy',
    description: 'Official website of Dizzy Izzy — new wave, disco, rock, pop.',
    url: 'https://dizzyizzy.com',
    siteName: 'Dizzy Izzy',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="grain">
        <Navbar />
        <main className="page-wrapper">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

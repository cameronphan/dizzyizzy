import type { Metadata } from 'next';
import '../styles/globals.css';
import Sidebar from '@/components/Sidebar';
import MobileNav from '@/components/MobileNav';

export const metadata: Metadata = {
  title: { default: 'Dizzy Izzy', template: '%s — Dizzy Izzy' },
  description: 'Official site of Dizzy Izzy. New wave, disco, rock, pop.',
  openGraph: {
    title: 'Dizzy Izzy',
    description: 'New wave, disco, rock, pop.',
    url: 'https://cameronphan.com',
    siteName: 'Dizzy Izzy',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MobileNav />
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <Sidebar />
          <main style={{ flex: 1, minWidth: 0 }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

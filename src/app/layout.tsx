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
        <Sidebar />
        {/* Offset main content by sidebar width on desktop */}
        <main style={{
          marginLeft: 'var(--sidebar-w)',
        }}>
          {children}
        </main>
      </body>
    </html>
  );
}

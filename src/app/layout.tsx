import type { Metadata } from 'next';
import '../styles/globals.css';
import Sidebar from '@/components/Sidebar';
import MobileNav from '@/components/MobileNav';
import AnimatedGrain from '@/components/AnimatedGrain';

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
        {/*
          AnimatedGrain — canvas-based animated noise overlay.
          Sits fixed above all content (z-index 9999, pointer-events none).
          opacity and fps are tunable props — keep opacity 0.04–0.07 to stay subtle.
        */}
        <AnimatedGrain opacity={0.055} fps={12} />
        {/*
          Main content starts at 0 — images go full width behind sidebar.
          Sections that need text offset use padding-left via .section class.
        */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

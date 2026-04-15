import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = { title: 'Dizzy Izzy — Official Site' };

export default function Home() {
  return <HomeClient />;
}

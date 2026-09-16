import type { Metadata } from 'next';
import Link from 'next/link';
import { Arrow } from '@/components/portfolio';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main id="main" className="container case-study">
      <section className="case-header" aria-labelledby="not-found-title">
        <p className="eyebrow">404 / Page not found</p>
        <h1 id="not-found-title">That page isn&apos;t here.</h1>
        <p className="case-introduction">The address may have changed, or the page may never have existed.</p>
        <Link className="button" href="/">Return home <Arrow /></Link>
      </section>
    </main>
  );
}

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { WaitlistForms } from '@/components/WaitlistForms';
import { LANGS } from '@/lib/content';

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  title: 'Rejoindre DRESSING · parrainage et beta',
  description:
    'Deux façons d’entrer avant tout le monde : parraine deux amis pour un mois offert, ou candidate au programme beta (50 places).',
};

export default function JoinPage({ params }: { params: { lang: string } }) {
  if (!(LANGS as string[]).includes(params.lang)) notFound();

  return (
    <>
      <section className="wl-hero">
        <div className="container">
          <p className="kicker">AVANT LE LANCEMENT</p>
          <h1>Deux façons d’entrer en premier.</h1>
          <p className="sub">
            L’une prend dix secondes, l’autre deux semaines. Elles ne se cumulent pas : choisis
            celle qui te ressemble.
          </p>
        </div>
      </section>

      <section className="wl-section">
        <div className="container">
          <WaitlistForms />
        </div>
      </section>
    </>
  );
}

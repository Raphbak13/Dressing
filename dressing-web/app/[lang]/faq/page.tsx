import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ContactForm } from '@/components/ContactForm';
import { Faq } from '@/components/Faq';
import { FAQ_TOTAL } from '@/lib/faq-data';
import { LANGS } from '@/lib/content';

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  title: 'FAQ et aide · DRESSING',
  description:
    "Toutes les réponses sur DRESSING : prise en main, garde-robe, Léon le styliste IA, tenue du jour, abonnements, données personnelles, et contact du support.",
};

// La FAQ est rédigée en français (choix produit) — servie telle quelle sur /en.
export default function FaqPage({ params }: { params: { lang: string } }) {
  if (!(LANGS as string[]).includes(params.lang)) notFound();

  return (
    <>
      <section className="faq-hero">
        <div className="container">
          <p className="kicker">CENTRE D’AIDE</p>
          <h1>Une question ?</h1>
          <p className="sub">
            {FAQ_TOTAL} réponses précises, écrites par l’équipe. Et si tu ne trouves pas, le support
            est en bas de page — un vrai humain répond.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Faq />
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container narrow">
          <h2>Contacter le support</h2>
          <p className="sub">
            Tu rencontres un problème ou tu n’as pas trouvé ta réponse dans la FAQ ? Écris-nous —
            réponse rapide, en français.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

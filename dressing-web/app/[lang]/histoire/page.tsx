import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Reveal } from '@/components/Reveal';
import { LANGS } from '@/lib/content';

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  title: 'L’histoire de DRESSING · pourquoi cette app existe',
  description:
    'DRESSING est né d’un constat simple : on possède beaucoup de vêtements et on porte toujours les mêmes. Voilà pourquoi l’app existe et ce qu’elle refuse de faire.',
};

/**
 * L'HISTOIRE — sans photo, sans nom de famille (décision user 14/08).
 *
 * Ce que la liste appelle « team photo » : on humanise par le RÉCIT et par les
 * partis pris, pas par un portrait. Publier la photo d'un mineur sur un site
 * commercial est irréversible — indexation, capture par des tiers — et
 * n'ajoute rien que ce texte ne dise déjà.
 *
 * Aucune mention de taille d'équipe : ni « nous sommes une équipe », ni un
 * effectif inventé.
 */
export default function StoryPage({ params }: { params: { lang: string } }) {
  if (!(LANGS as string[]).includes(params.lang)) notFound();
  const lang = params.lang;
  const fr = lang === 'fr';

  const blocks = fr
    ? [
        {
          h: 'Le problème n’est pas d’avoir trop peu',
          p: 'Une armoire pleine, et toujours les trois mêmes tenues. Ce ne sont pas les vêtements qui manquent, c’est la vue d’ensemble : on oublie ce qu’on possède, on rachète ce qu’on a déjà, et on s’habille par défaut.',
        },
        {
          h: 'Une app qui part de ta garde-robe, pas d’une boutique',
          p: 'La plupart des applications de mode servent à te vendre quelque chose. DRESSING travaille dans l’autre sens : elle ne propose que ce que tu possèdes déjà. Aucun lien d’achat, aucune commission, aucune marque partenaire.',
        },
        {
          h: 'Ce que l’app refuse de faire',
          p: 'Pas de publicité. Pas de revente de données. Aucune génération d’image qui parte sans que tu l’aies demandée : chaque appel à l’IA coûte, et il suit toujours un geste de ta part. L’abonnement paie ce travail, et rien d’autre.',
        },
        {
          h: 'Construit avec ceux qui l’utilisent',
          p: 'Cinquante beta testeurs, sélectionnés à la main, deux semaines d’engagement réel. Ce qu’ils remontent change l’app pour tout le monde. C’est plus lent que de deviner, et bien plus juste.',
        },
      ]
    : [
        {
          h: 'The problem is not owning too little',
          p: 'A full wardrobe, and always the same three outfits. Clothes are not what is missing, the overview is: you forget what you own, rebuy what you already have, and dress by default.',
        },
        {
          h: 'An app that starts from your wardrobe, not a shop',
          p: 'Most fashion apps exist to sell you something. DRESSING works the other way: it only ever suggests what you already own. No purchase links, no commission, no partner brands.',
        },
        {
          h: 'What the app refuses to do',
          p: 'No advertising. No data resale. No image generated unless you asked for it: every AI call costs money, and always follows an action of yours. The subscription pays for that work, and nothing else.',
        },
        {
          h: 'Built with the people using it',
          p: 'Fifty beta testers, hand-picked, two weeks of real commitment. What they report changes the app for everyone. Slower than guessing, and far more honest.',
        },
      ];

  return (
    <>
      <section className="sub-hero">
        <div className="container narrow">
          <p className="kicker">{fr ? 'L’HISTOIRE' : 'THE STORY'}</p>
          <h1>{fr ? 'Pourquoi DRESSING existe.' : 'Why DRESSING exists.'}</h1>
          <p className="sub">
            {fr
              ? 'Un projet indépendant, sans investisseur, sans régie publicitaire.'
              : 'An independent project, no investors, no ad network.'}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          {blocks.map((b, i) => (
            <Reveal key={b.h} delay={i * 80}>
              <article className="value">
                <span className="value-n">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h2>{b.h}</h2>
                  <p>{b.p}</p>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal delay={340}>
            <p className="plans-compare">
              <Link className="btn" href={`/${lang}/rejoindre/`}>
                {fr ? 'Rejoindre le projet' : 'Join the project'}
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

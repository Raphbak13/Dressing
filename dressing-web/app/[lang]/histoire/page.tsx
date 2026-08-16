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
          h: 'On possède déjà beaucoup',
          p: 'Une armoire pleine, et toujours les trois mêmes tenues. Ce qui manque, c’est la vue d’ensemble : savoir ce qu’on a, s’en souvenir au bon moment, et voir les associations qu’on n’avait pas imaginées.',
        },
        {
          h: 'Une app qui part de ta garde-robe',
          p: 'Tout ce que Léon propose vient de ce que tu as déjà chez toi. Le modèle est simple et tient en une ligne : tu paies l’abonnement, et c’est la seule chose que DRESSING gagne. Ni commission, ni marque partenaire, ni lien d’achat.',
        },
        {
          h: 'Nos engagements',
          p: 'Tes données restent les tiennes, et servent uniquement à t’habiller. Chaque appel à l’IA suit un geste de ta part, jamais une décision de l’app : c’est ton tap qui déclenche, toujours. L’abonnement paie ce travail, et c’est tout.',
        },
        {
          h: 'Construit avec ceux qui l’utilisent',
          p: 'Cinquante beta testeurs, sélectionnés à la main, deux semaines d’engagement réel. Chaque retour est lu, et beaucoup ont déjà changé l’app pour tout le monde. C’est la façon la plus sûre de construire quelque chose de juste.',
        },
      ]
    : [
        {
          h: 'You already own plenty',
          p: 'A full wardrobe, and always the same three outfits. What is missing is the overview: knowing what you own, remembering it at the right moment, and seeing pairings you had not imagined.',
        },
        {
          h: 'An app that starts from your wardrobe',
          p: 'Everything Léon suggests comes from what you already own. The model fits in one line: you pay the subscription, and that is the only thing DRESSING earns.',
        },
        {
          h: 'Our commitments',
          p: 'Your data stays yours, and only ever serves to dress you. Every AI call follows an action of yours, never a decision of the app. The subscription pays for that work, and that is all.',
        },
        {
          h: 'Built with the people using it',
          p: 'Fifty beta testers, hand-picked, two weeks of real commitment. Every report is read, and many have already changed the app for everyone.',
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
              ? 'Un projet indépendant, financé par ses abonnés.'
              : 'An independent project, funded by its subscribers.'}
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

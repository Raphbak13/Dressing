import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Reveal } from '@/components/Reveal';
import { CONTENT, LANGS, type Lang } from '@/lib/content';

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: { params: { lang: string } }) {
  if (!(LANGS as string[]).includes(params.lang)) return {};
  const t = CONTENT[params.lang as Lang].pricing;
  return { title: `DRESSING · ${t.title}`, description: t.sub };
}

/**
 * CE QUE TU OBTIENS — pas un paywall.
 *
 * L'ancienne page était une grille de tarifs : deux cartes, deux gros prix, une
 * pastille « le plus complet », une liste de puces. C'est la page qu'on ferme.
 *
 * Ici, on décrit d'abord CE QU'ON REÇOIT, en phrases. Le prix arrive à la fin,
 * une fois qu'il veut dire quelque chose, et sans hiérarchie criarde entre les
 * deux formules : ce sont deux usages, pas un piège et sa version chère.
 *
 * L'essai gratuit est annoncé EN HAUT, parce que c'est la seule chose qui
 * compte avant d'avoir essayé.
 */
export default function PricingPage({ params }: { params: { lang: string } }) {
  if (!(LANGS as string[]).includes(params.lang)) notFound();
  const lang = params.lang as Lang;
  const fr = lang === 'fr';
  const t = CONTENT[lang].pricing;

  const essential = t.tiers.find((x) => x.key === 'essential')!;
  const elite = t.tiers.find((x) => x.key === 'elite')!;

  return (
    <>
      <section className="sub-hero">
        <div className="container narrow">
          <p className="kicker">{fr ? 'CE QUE TU OBTIENS' : 'WHAT YOU GET'}</p>
          <h1>{fr ? 'Un styliste, pas un abonnement.' : 'A stylist, not a subscription.'}</h1>
          <p className="sub">{t.sub}</p>
          <p className="sub-trial">{t.trialText}</p>
        </div>
      </section>

      {/* ——— Ce qu'on reçoit, raconté ——— */}
      <section className="section">
        <div className="container narrow">
          {(fr
            ? [
                {
                  n: '01',
                  h: 'Une tenue t’attend chaque matin',
                  p: 'Léon regarde la météo du jour, ce que tu as prévu, et ce que tu possèdes vraiment. Il compose, il explique son choix, et il retient ce que tu portes pour faire mieux demain.',
                },
                {
                  n: '02',
                  h: 'Ta garde-robe se range toute seule',
                  p: 'Tu photographies une pièce, elle est détourée, identifiée, classée : catégorie, couleur, matière, coupe, marque. En rafale, une garde-robe entière tient en une soirée.',
                },
                {
                  n: '03',
                  h: 'Tu te vois porter la tenue',
                  p: 'Une photo de toi, et Léon te montre le look sur toi, avec tes propres vêtements. Tu vois le résultat avant de t’habiller.',
                },
                {
                  n: '04',
                  h: 'Quelqu’un à qui demander',
                  p: 'Une question à 7 h du matin, un mariage dans trois semaines, une pièce vue dans la rue que tu veux décrypter. Léon répond, retient ta situation, et reprend la conversation là où vous l’aviez laissée.',
                },
              ]
            : [
                {
                  n: '01',
                  h: 'An outfit waits for you each morning',
                  p: 'Léon reads the weather, your plans, and what you actually own. He composes, explains his choice, and remembers what you wear to do better tomorrow.',
                },
                {
                  n: '02',
                  h: 'Your wardrobe files itself',
                  p: 'Photograph a piece: it is cut out, identified and sorted — category, colour, fabric, cut, brand. In burst mode, a whole wardrobe fits into one evening.',
                },
                {
                  n: '03',
                  h: 'You see yourself wearing it',
                  p: 'One photo of you, and Léon shows the look on you. Not a generic silhouette, not a drawing: you, in your own clothes.',
                },
                {
                  n: '04',
                  h: 'Someone to ask',
                  p: 'A question at 7am, a wedding in three weeks, a piece spotted on the street. Léon answers, remembers your situation, and picks the conversation back up where you left it.',
                },
              ]
          ).map((b, i) => (
            <Reveal key={b.n} delay={i * 80}>
              <article className="value">
                <span className="value-n">{b.n}</span>
                <div>
                  <h2>{b.h}</h2>
                  <p>{b.p}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ——— Le prix, une fois qu'il veut dire quelque chose ——— */}
      <section className="section price-sec">
        <div className="container narrow">
          <Reveal>
            <p className="kicker">{fr ? 'LE PRIX' : 'THE PRICE'}</p>
            <h2 className="price-h">
              {fr
                ? 'Deux formules. Le même Léon dans les deux.'
                : 'Two plans. The same Léon in both.'}
            </h2>
            <p className="price-intro">
              {fr
                ? 'Les deux formules donnent le même conseil, avec la même exigence. Ce qui change, c’est le volume : Léon appelle une IA à chaque tenue et chaque analyse, et les Crowns mesurent ce travail.'
                : 'Both plans give the same advice, held to the same standard. What changes is the volume: Léon calls an AI for every outfit and every analysis, and Crowns measure that work.'}
            </p>
          </Reveal>

          <div className="price-rows">
            {[essential, elite].map((tier, i) => (
              <Reveal key={tier.key} delay={i * 90}>
                <div className="price-row">
                  <div className="price-row-head">
                    <h3>{tier.name}</h3>
                    <p className="price-row-tag">{tier.tagline}</p>
                  </div>
                  <div className="price-row-num">
                    <b>{tier.monthly}</b>
                    <span>{t.perMonth}</span>
                    <em>
                      {t.orYearly} {tier.yearly} — {t.perMonthEq} {tier.yearlyPerMonth}
                    </em>
                  </div>
                  <p className="price-row-crowns">
                    {tier.crowns} {t.crownsLabel}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160}>
            <p className="plans-compare">
              <Link className="btn secondary" href={`/${lang}/fonctionnalites/`}>
                {t.compareCta}
              </Link>
            </p>
          </Reveal>

          <p className="note">{t.storeNote}</p>
          <p className="note">{t.aiNote}</p>
        </div>
      </section>
    </>
  );
}

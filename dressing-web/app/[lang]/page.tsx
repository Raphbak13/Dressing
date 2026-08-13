import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Bento } from '@/components/bento/Bento';
import { BeforeAfter } from '@/components/BeforeAfter';
import { Reveal } from '@/components/Reveal';
import { CONTENT, LANGS, type Lang } from '@/lib/content';

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

/**
 * ACCUEIL — structure reprise de fashn.ai (demande user 13/08).
 *
 * Leur enchaînement : promesse en une phrase → la transformation MONTRÉE
 * avant/après → « vois-le en action » → ce que ça fait, en quatre blocs → appel
 * final. On garde exactement cette colonne vertébrale.
 *
 * DEUX SECTIONS DE FASHN SONT VOLONTAIREMENT ABSENTES : les témoignages
 * clients et les logos « utilisé par ». DRESSING n'a ni l'un ni l'autre à ce
 * jour, et les inventer serait un faux. À leur place, une section vraie : le
 * programme fondateurs et beta, qui est justement ce qu'on cherche.
 */
export default function Home({ params }: { params: { lang: string } }) {
  if (!(LANGS as string[]).includes(params.lang)) notFound();
  const lang = params.lang as Lang;
  const t = CONTENT[lang].home;
  const fr = lang === 'fr';

  const features = fr
    ? [
        {
          tag: 'TENUE DU JOUR',
          h: 'Léon s’habille avec ce que tu as',
          p: 'Il lit la météo, ton agenda et ta garde-robe réelle. Il compose, il explique son choix, et il retient ce que tu portes pour faire mieux demain.',
          to: 'fonctionnalites',
        },
        {
          tag: 'GARDE-ROBE',
          h: 'Une photo, la pièce est rangée',
          p: 'Catégorie, couleur, matière, coupe, marque : tout est reconnu et classé. En rafale, une garde-robe entière tient en une soirée.',
          to: 'fonctionnalites',
        },
        {
          tag: 'RENDU PORTÉ',
          h: 'La tenue, sur toi',
          p: 'Une photo de toi suffit. Pas une silhouette générique, pas un dessin : toi, habillé de tes propres vêtements.',
          to: 'abonnements',
        },
        {
          tag: 'DRESSING REAL',
          h: 'Le rituel de 15 h',
          p: 'Deux photos, une pour la tenue et une pour toi. Tes amis voient ce que tu portes vraiment, ce jour-là, pas ce que tu as mis en scène.',
          to: 'fonctionnalites',
        },
      ]
    : [
        {
          tag: 'DAILY OUTFIT',
          h: 'Léon dresses you from what you own',
          p: 'He reads the weather, your plans and your real wardrobe. He composes, explains his choice, and remembers what you wear to do better tomorrow.',
          to: 'fonctionnalites',
        },
        {
          tag: 'WARDROBE',
          h: 'One photo, the piece is filed',
          p: 'Category, colour, fabric, cut, brand: all recognised and sorted. In burst mode, a whole wardrobe fits into one evening.',
          to: 'fonctionnalites',
        },
        {
          tag: 'WORN RENDER',
          h: 'The outfit, on you',
          p: 'One photo of you is enough. Not a generic silhouette, not a drawing: you, in your own clothes.',
          to: 'abonnements',
        },
        {
          tag: 'DRESSING REAL',
          h: 'The 3pm ritual',
          p: 'Two photos, one for the outfit and one for you. Your friends see what you actually wear that day, not what you staged.',
          to: 'fonctionnalites',
        },
      ];

  return (
    <>
      {/* ═══ 1. HÉROS — la promesse en une phrase, puis la preuve ═══ */}
      <section className="fh">
        <div className="fh-glow" aria-hidden />
        <div className="container">
          <Reveal>
            <p className="fh-eyebrow">
              {fr ? 'BIENTÔT SUR L’APP STORE' : 'COMING SOON ON THE APP STORE'}
            </p>
            <h1 className="fh-title">
              {fr ? (
                <>
                  Habille-toi avec ce que
                  <br />
                  tu possèdes déjà.
                </>
              ) : (
                <>
                  Get dressed with what
                  <br />
                  you already own.
                </>
              )}
            </h1>
            <p className="fh-sub">
              {fr
                ? 'DRESSING numérise ta garde-robe, compose ta tenue chaque matin selon la météo, et te la montre portée par toi.'
                : 'DRESSING digitises your wardrobe, composes your outfit every morning from the weather, and shows it worn by you.'}
            </p>
            <div className="fh-cta">
              <Link className="btn" href={`/${lang}/rejoindre/`}>
                {fr ? 'Rejoindre avant tout le monde' : 'Join before everyone'}
              </Link>
              <span className="fh-note">
                {fr ? 'Aucune carte bancaire requise' : 'No credit card required'}
              </span>
            </div>
          </Reveal>
        </div>

        {/* La transformation, montrée. C'est le cœur du héros de fashn.ai :
            on ne décrit pas, on met l'avant et l'après côte à côte. */}
        <Reveal delay={120}>
          <BeforeAfter
            before="/dr/real-3-fit.jpg"
            after="/dr/real-2.jpg"
            labelBefore={fr ? 'tes pièces' : 'your pieces'}
            labelAfter={fr ? 'porté' : 'worn'}
          />
        </Reveal>
      </section>

      {/* ═══ 2. EN ACTION — les trois écrans vivants ═══ */}
      <Bento fr={fr} />

      {/* ═══ 3. CE QUE ÇA FAIT — quatre blocs, façon fashn ═══ */}
      <section className="section fx">
        <div className="container">
          <Reveal>
            <p className="kicker">{fr ? 'TOUT CE QU’IL FAIT' : 'EVERYTHING IT DOES'}</p>
            <h2 className="fx-h">
              {fr ? 'Une garde-robe qui travaille pour toi.' : 'A wardrobe that works for you.'}
            </h2>
          </Reveal>
          <div className="fx-grid">
            {features.map((f, i) => (
              <Reveal key={f.tag} delay={i * 70}>
                <article className="fx-card">
                  <p className="fx-tag">{f.tag}</p>
                  <h3>{f.h}</h3>
                  <p className="fx-p">{f.p}</p>
                  <Link className="fx-link" href={`/${lang}/${f.to}/`}>
                    {fr ? 'En savoir plus' : 'Learn more'} <span aria-hidden>→</span>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. FONDATEURS & BETA — la section honnête à la place des faux
             témoignages : DRESSING n'a pas encore de clients à citer ═══ */}
      <section className="section fj">
        <div className="container">
          <Reveal>
            <p className="kicker">{fr ? 'AVANT LE LANCEMENT' : 'BEFORE LAUNCH'}</p>
            <h2 className="fx-h">
              {fr ? 'Deux façons d’entrer en premier.' : 'Two ways to get in first.'}
            </h2>
          </Reveal>
          <div className="fj-grid">
            <Reveal>
              <article className="fj-card fj-card--gold">
                <p className="fx-tag">{fr ? 'PARRAINAGE' : 'REFERRAL'}</p>
                <h3>{fr ? 'Devenir fondateur' : 'Become a founder'}</h3>
                <p className="fx-p">
                  {fr
                    ? 'Ton email, un lien à partager. Deux amis inscrits, et tu reçois un mois d’abonnement offert au lancement, avec le badge Fondateur.'
                    : 'Your email, a link to share. Two friends signed up, and you get a free month at launch, plus the Founder badge.'}
                </p>
                <Link className="btn sm" href={`/${lang}/rejoindre/`}>
                  {fr ? 'Obtenir mon lien' : 'Get my link'}
                </Link>
              </article>
            </Reveal>
            <Reveal delay={90}>
              <article className="fj-card">
                <p className="fx-tag">{fr ? '50 PLACES' : '50 SEATS'}</p>
                <h3>{fr ? 'Devenir beta testeur' : 'Become a beta tester'}</h3>
                <p className="fx-p">
                  {fr
                    ? 'Deux semaines d’engagement réel, sélection à la main, et un mois ELITE offert à la clé. Exigeant, et c’est voulu.'
                    : 'Two weeks of real commitment, hand-picked, and a free ELITE month at the end. Demanding, and deliberately so.'}
                </p>
                <Link className="btn sm secondary" href={`/${lang}/rejoindre/`}>
                  {fr ? 'Candidater' : 'Apply'}
                </Link>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ 5. APPEL FINAL ═══ */}
      <section className="section fcta">
        <div className="container narrow">
          <Reveal>
            <h2 className="fcta-h">
              {fr
                ? 'Prêt à ne plus jamais fixer ton armoire ?'
                : 'Ready to stop staring at your wardrobe?'}
            </h2>
            <p className="sub">
              {fr
                ? 'Les premières analyses et les premières tenues sont offertes.'
                : 'Your first analyses and outfits are on the house.'}
            </p>
            <div className="fh-cta">
              <Link className="btn" href={`/${lang}/rejoindre/`}>
                {fr ? 'Rejoindre' : 'Join'}
              </Link>
              <Link className="btn secondary" href={`/${lang}/abonnements/`}>
                {t.tiersCta}
              </Link>
            </div>
            <p className="note">{t.aiNote}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

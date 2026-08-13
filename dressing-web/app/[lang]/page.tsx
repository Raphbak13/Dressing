import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Bento } from '@/components/bento/Bento';
import { Reveal } from '@/components/Reveal';
import { CONTENT, LANGS, type Lang } from '@/lib/content';

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

// Accueil « vitrine immersive » (refonte 2026-07-14 v2, choix user) :
// héros = un VRAI écran Aujourd'hui en grand ; puis un seul téléphone fixe dont
// l'écran se transforme au scroll (Showcase). Écrans reproduits fidèles à l'app,
// DRESSING Real avec de vraies photos mode. Tout sombre.
export default function Home({ params }: { params: { lang: string } }) {
  if (!(LANGS as string[]).includes(params.lang)) notFound();
  const lang = params.lang as Lang;
  const t = CONTENT[lang].home;
  const fr = lang === 'fr';

  return (
    <>
      {/* ——— HÉROS ÉDITORIAL : couverture magazine, vraies photos mode ——— */}
      <section className="hero-ed">
        <div className="hero-ed-glow" aria-hidden />
        {/* photos streetstyle qui fondent dans le noir (feathering au mask) */}
        <div className="hero-ed-photos" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hp hp-1" src="/dr/dr-1.jpg" alt="" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hp hp-2" src="/dr/dr-capture.jpg" alt="" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hp hp-3" src="/dr/dr-2.jpg" alt="" />
        </div>

        <div className="hero-ed-center">
          <p className="hero-ed-issue">{fr ? 'LE VESTIAIRE INTELLIGENT · PARIS' : 'THE SMART WARDROBE · PARIS'}</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hero-ed-logo" src="/logo.png" alt="DRESSING" />
          <div className="hero-ed-word">DRESSING</div>
          <h1 className="hero-ed-title">
            {fr ? (
              <>
                Ton styliste,
                <br />
                chaque matin.
              </>
            ) : (
              <>
                Your stylist,
                <br />
                every morning.
              </>
            )}
          </h1>
          <p className="hero-ed-sub">
            {fr
              ? 'Léon compose ta tenue avec ta garde-robe, la météo et ton agenda.'
              : 'Léon builds your outfit from your wardrobe, the weather and your calendar.'}
          </p>
          <div className="hero-ed-cta">
            <span className="btn disabled">{t.ctaDownload}</span>
            <span className="soon">{t.soon}</span>
          </div>
        </div>
      </section>

      {/* ——— GRILLE BENTO : tuiles animées + points forts ——— */}
      <Bento fr={fr} />

      {/* ——— ABONNEMENTS — offres payantes uniquement, l'essai est annoncé à part ——— */}
      <section className="section">
        <div className="container">
          <Reveal>
            <h2 className="h-x" style={{ textAlign: 'center' }}>
              {t.tiersTitle}
            </h2>
            <p className="sub" style={{ textAlign: 'center', margin: '0 auto 30px' }}>
              {t.tiersSub}
            </p>
          </Reveal>
          <div className="tiers">
            {t.tiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 90}>
                <div className={`tier${tier.name === 'ELITE' ? ' elite' : ''}`}>
                  <div className="name">{tier.name}</div>
                  {tier.price ? <div className="price">{tier.price}</div> : null}
                  <ul>
                    {tier.perks.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={180}>
            <p className="tiers-trial">
              {fr
                ? 'Les premières analyses et les premières tenues sont offertes. Aucune carte bancaire requise.'
                : 'Your first analyses and outfits are on the house. No credit card required.'}
            </p>
            <p className="plans-compare">
              <Link className="btn secondary" href={`/${lang}/abonnements/`}>
                {t.tiersCta}
              </Link>
            </p>
          </Reveal>
          <p className="note">{t.aiNote}</p>
        </div>
      </section>

      {/* ——— FAQ TEASER ——— */}
      <section className="section faq-teaser">
        <div className="container narrow">
          <Reveal>
            <h2 className="h-x">{fr ? 'Une question ?' : 'Questions?'}</h2>
            <p className="sub">
              {fr
                ? 'Toutes les réponses sont déjà écrites, et le support répond vite.'
                : 'Every answer is already written, and support replies fast.'}
            </p>
            <Link className="btn" href={`/${lang}/faq/`}>
              {fr ? 'Ouvrir le centre d’aide' : 'Open the help center'}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

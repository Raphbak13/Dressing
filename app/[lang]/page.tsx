import { notFound } from 'next/navigation';

import { CONTENT, LANGS, type Lang } from '@/lib/content';

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export default function Home({ params }: { params: { lang: string } }) {
  if (!(LANGS as string[]).includes(params.lang)) notFound();
  const lang = params.lang as Lang;
  const t = CONTENT[lang].home;

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>{t.heroTitle}</h1>
          <p>{t.heroSubtitle}</p>
          <span className="btn disabled">{t.ctaDownload}</span>
          <span className="soon">{t.soon}</span>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>{t.featuresTitle}</h2>
          <div className="grid">
            {t.features.map((f) => (
              <div key={f.title} className="card">
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>{t.tiersTitle}</h2>
          <div className="tiers">
            {t.tiers.map((tier, i) => (
              <div key={tier.name} className={`tier${i === 1 ? ' elite' : ''}`}>
                <div className="name">{tier.name}</div>
                <ul>
                  {tier.perks.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="note">{t.aiNote}</p>
        </div>
      </section>
    </>
  );
}

import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Reveal } from '@/components/Reveal';
import { CONTENT, LANGS, type FeatureRow, type Lang } from '@/lib/content';

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: { params: { lang: string } }) {
  if (!(LANGS as string[]).includes(params.lang)) return {};
  const t = CONTENT[params.lang as Lang].features;
  return { title: `DRESSING · ${t.title}`, description: t.sub };
}

/** Coche, croix ou valeur — accompagnée d'un libellé lisible aux lecteurs d'écran. */
function Cell({ value, yes, no }: { value: FeatureRow['essential']; yes: string; no: string }) {
  if (value === true) {
    return (
      <span className="fx-yes">
        <svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true">
          <path
            d="M3 8.4 6.3 11.6 13 4.8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="sr-only">{yes}</span>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="fx-no" aria-hidden="true">
        —<span className="sr-only">{no}</span>
      </span>
    );
  }
  return <span className="fx-val">{value}</span>;
}

export default function FeaturesPage({ params }: { params: { lang: string } }) {
  if (!(LANGS as string[]).includes(params.lang)) notFound();
  const lang = params.lang as Lang;
  const t = CONTENT[lang].features;
  const nav = CONTENT[lang].nav;

  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <p className="kicker">{nav.abonnements.toUpperCase()}</p>
          <h1>{t.title}</h1>
          <p className="sub">{t.sub}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {t.groups.map((group, gi) => (
            <Reveal key={group.title} delay={Math.min(gi, 3) * 70}>
              <div className="fx-group">
                <div className="fx-group-head">
                  <h2>{group.title}</h2>
                  <p>{group.intro}</p>
                </div>

                {/* Le tableau défile seul si l'écran est étroit ; la page, jamais. */}
                <div className="fx-scroll">
                  <table className="fx-table">
                    <caption className="sr-only">{group.title}</caption>
                    <thead>
                      <tr>
                        <th scope="col" className="fx-th-label">
                          <span className="sr-only">{group.title}</span>
                        </th>
                        <th scope="col">{t.colEssential}</th>
                        <th scope="col" className="fx-th-elite">
                          {t.colElite}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.rows.map((row) => (
                        <tr key={row.label}>
                          <th scope="row">{row.label}</th>
                          <td>
                            <Cell value={row.essential} yes={t.yes} no={t.no} />
                          </td>
                          <td className="fx-td-elite">
                            <Cell value={row.elite} yes={t.yes} no={t.no} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal>
            <div className="trial-card fx-cta">
              <h2>{t.ctaTitle}</h2>
              <p>{t.ctaText}</p>
              <Link className="btn" href={`/${lang}/abonnements/`}>
                {t.ctaButton}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

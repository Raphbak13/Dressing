import Link from 'next/link';

import { CONTACT_EMAIL, CONTENT, DOC_SLUGS, type Lang } from '@/lib/content';

export function Footer({ lang }: { lang: Lang }) {
  const t = CONTENT[lang];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <Link href={`/${lang}/abonnements`}>{t.nav.abonnements}</Link>
          <Link href={`/${lang}/fonctionnalites`}>{t.nav.fonctionnalites}</Link>
          <Link href={`/${lang}/faq`}>{t.nav.faq}</Link>
          {DOC_SLUGS.map((s) => (
            <Link key={s} href={`/${lang}/${s}`}>
              {t.nav[s]}
            </Link>
          ))}
        </div>
        <small>
          © {new Date().getFullYear()} DRESSING. {t.footer.rights} · {t.footer.madeIn}
        </small>
        <p className="footer-press">
          Presse, partenariats, affiliation : <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      </div>
    </footer>
  );
}

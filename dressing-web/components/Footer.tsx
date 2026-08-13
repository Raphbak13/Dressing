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
        {/* Les réseaux, avant la mention légale : c'est là qu'on suit une
            marque de mode, pas dans une liste de liens juridiques. */}
        <div className="socials">
          <a
            href="https://instagram.com/dressing_official"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg
              viewBox="0 0 24 24"
              width="19"
              height="19"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
            </svg>
            <span>@dressing_official</span>
          </a>
          <a
            href="https://tiktok.com/@dressing_official"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <svg
              viewBox="0 0 24 24"
              width="19"
              height="19"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M14 3.5v10.9a3.6 3.6 0 1 1-3-3.55" />
              <path d="M14 3.5c.5 2.6 2 4.1 4.6 4.4" />
            </svg>
            <span>@dressing_official</span>
          </a>
        </div>
        <small>
          © {new Date().getFullYear()} DRESSING. {t.footer.rights} · {t.footer.madeIn}
        </small>
        <p className="footer-press">
          Presse, partenariats, affiliation :{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      </div>
    </footer>
  );
}

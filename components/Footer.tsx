import Link from 'next/link';

import { CONTENT, DOC_SLUGS, type Lang } from '@/lib/content';

export function Footer({ lang }: { lang: Lang }) {
  const t = CONTENT[lang];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          {DOC_SLUGS.map((s) => (
            <Link key={s} href={`/${lang}/${s}`}>
              {t.nav[s]}
            </Link>
          ))}
        </div>
        <small>
          © {new Date().getFullYear()} DRESSING. {t.footer.rights} · {t.footer.madeIn}
        </small>
      </div>
    </footer>
  );
}

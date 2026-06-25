import Link from 'next/link';

import { CONTENT, type Lang } from '@/lib/content';
import { LangSwitcher } from './LangSwitcher';

export function Header({ lang }: { lang: Lang }) {
  const t = CONTENT[lang];
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href={`/${lang}`} className="brand">
          DRESSING
        </Link>
        <nav className="nav">
          <Link href={`/${lang}`}>{t.nav.home}</Link>
          <Link href={`/${lang}/telecharger`}>{t.nav.telecharger}</Link>
          <Link href={`/${lang}/confidentialite`}>{t.nav.confidentialite}</Link>
          <LangSwitcher current={lang} />
        </nav>
      </div>
    </header>
  );
}

import Link from 'next/link';

import { CONTENT, type Lang } from '@/lib/content';
import { LangSwitcher } from './LangSwitcher';
import { NavDropdown } from './NavDropdown';

export function Header({ lang }: { lang: Lang }) {
  const t = CONTENT[lang];
  const fr = lang === 'fr';
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href={`/${lang}`} className="brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="" className="brand-logo" />
          <span>DRESSING</span>
        </Link>
        <nav className="nav">
          <Link href={`/${lang}`}>{t.nav.home}</Link>
          <NavDropdown
            label={t.nav.abonnements}
            items={[
              {
                href: `/${lang}/abonnements/`,
                label: t.nav.offres,
                hint: fr ? 'ESSENTIAL et ELITE, mensuel ou annuel' : 'ESSENTIAL and ELITE, monthly or yearly',
              },
              {
                href: `/${lang}/fonctionnalites/`,
                label: t.nav.fonctionnalites,
                hint: fr ? 'Le détail de ce que débloque chaque offre' : 'What each plan unlocks, in detail',
              },
            ]}
          />
          <Link href={`/${lang}/faq`}>{t.nav.faq}</Link>
          {/* Avant le lancement, c'est LE lien qui compte : il est mis en
              avant plutôt que noyé dans le menu déroulant. */}
          <Link href={`/${lang}/rejoindre`} className="nav-cta">
            {t.nav.rejoindre}
          </Link>
          <Link href={`/${lang}/telecharger`}>{t.nav.telecharger}</Link>
          <LangSwitcher current={lang} />
        </nav>
      </div>
    </header>
  );
}

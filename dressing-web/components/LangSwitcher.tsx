'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import type { Lang } from '@/lib/content';

export function LangSwitcher({ current }: { current: Lang }) {
  const pathname = usePathname() || `/${current}`;
  const swap = (lang: Lang) => {
    const parts = pathname.split('/');
    parts[1] = lang; // /<lang>/...
    return parts.join('/') || `/${lang}`;
  };
  return (
    <div className="lang">
      <Link className={current === 'fr' ? 'active' : ''} href={swap('fr')}>
        FR
      </Link>
      <Link className={current === 'en' ? 'active' : ''} href={swap('en')}>
        EN
      </Link>
    </div>
  );
}

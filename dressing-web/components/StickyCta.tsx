'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

/**
 * APPEL À L'ACTION COLLANT — MOBILE UNIQUEMENT.
 *
 * Sur téléphone, le bouton du héros disparaît au premier défilement et ne
 * revient qu'en bas de page. Celui-ci reprend le relais dès qu'on a dépassé le
 * héros.
 *
 * Il ne s'affiche PAS sur `/rejoindre` : proposer de rejoindre à quelqu'un qui
 * est déjà en train de remplir le formulaire, c'est lui masquer son champ de
 * saisie avec un lien vers la page où il se trouve.
 */
export function StickyCta({ lang, label }: { lang: string; label: string }) {
  const path = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (path?.includes('/rejoindre')) return null;

  return (
    <div className={`sticky-cta ${show ? 'in' : ''}`} aria-hidden={!show}>
      <Link className="btn" href={`/${lang}/rejoindre/`} tabIndex={show ? 0 : -1}>
        {label}
      </Link>
    </div>
  );
}

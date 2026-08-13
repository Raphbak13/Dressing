'use client';

import { useEffect } from 'react';

/**
 * Le lien de parrainage partagé est `dressing-app.com/rejoindre?ref=CODE`,
 * SANS préfixe de langue : c'est un lien qu'on envoie par SMS, il doit être
 * court et lisible. Cette page le renvoie vers /fr/rejoindre en CONSERVANT le
 * paramètre — le perdre en route ferait échouer silencieusement tous les
 * parrainages, ce qui est le pire cas possible : personne ne s'en apercevrait.
 */
export default function JoinRedirect() {
  useEffect(() => {
    const q = window.location.search;
    window.location.replace(`/fr/rejoindre/${q}`);
  }, []);
  return null;
}

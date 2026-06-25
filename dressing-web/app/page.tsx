'use client';

import { useEffect } from 'react';

// Redirection racine vers la version FR (compatible export statique : pas de
// redirect() serveur, on redirige côté client).
export default function Index() {
  useEffect(() => {
    window.location.replace('/fr/');
  }, []);
  return null;
}

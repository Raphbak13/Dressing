'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

/**
 * TRANSITION ENTRE LES PAGES.
 *
 * Un export statique n'a pas de router animé : chaque navigation repeint
 * brutalement. On rejoue donc une entrée courte à chaque changement d'URL —
 * assez brève pour ne jamais retarder la lecture (280 ms), assez présente pour
 * que le site ne « saute » pas d'une page à l'autre.
 *
 * ⚠️ `prefers-reduced-motion` coupe tout : c'est un réglage d'accessibilité,
 * pas une préférence esthétique.
 */
export function PageMotion({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [key, setKey] = useState(path);
  const first = useRef(true);

  useEffect(() => {
    // La première peinture n'est pas une transition : rejouer l'animation au
    // chargement ferait clignoter la page pour rien.
    if (first.current) {
      first.current = false;
      return;
    }
    setKey(path);
  }, [path]);

  return (
    <main key={key} className="page-motion">
      {children}
    </main>
  );
}

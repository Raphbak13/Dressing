'use client';

import { useEffect, useRef, useState } from 'react';

// ============================================================================
// Moteur des démos animées (« vidéos » en HTML/CSS) :
// - useDemo(ref) → { inView, reduced } : démarre quand la section entre à
//   l'écran, coupe quand elle sort ; « réduire les animations » → état final fixe.
// - runLoop(fn) : boucle le scénario tant que le composant est visible, avec
//   annulation propre au démontage.
// ============================================================================

export function useDemo(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    const el = ref.current;
    if (!el) return;
    // Repli par position : si l'IntersectionObserver tarde ou est suspendu
    // (onglet en arrière-plan, IO lent sur mobile), on évalue la visibilité au
    // scroll + une passe initiale → la démo démarre quand même quand elle est
    // à l'écran, et se met en pause quand elle en sort.
    const check = () => {
      const r = el.getBoundingClientRect();
      const h = window.innerHeight || 800;
      setInView(r.top < h * 0.75 && r.bottom > h * 0.25);
    };
    const io = new IntersectionObserver(
      (entries) => setInView(entries.some((e) => e.isIntersecting)),
      { threshold: 0.35 },
    );
    io.observe(el);
    check();
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, [ref]);

  return { inView, reduced };
}

export type Ctl = { sleep: (ms: number) => Promise<void>; alive: () => boolean };

/** Boucle un scénario async tant que `run` est vrai. */
export function useLoop(run: boolean, scenario: (ctl: Ctl) => Promise<void>) {
  const scenarioRef = useRef(scenario);
  scenarioRef.current = scenario;
  useEffect(() => {
    if (!run) return;
    let alive = true;
    const ctl: Ctl = {
      alive: () => alive,
      sleep: (ms) =>
        new Promise((res) => {
          const id = setTimeout(res, ms);
          if (!alive) clearTimeout(id);
        }),
    };
    (async () => {
      while (alive) {
        await scenarioRef.current(ctl);
        if (!alive) break;
        await ctl.sleep(1800); // respiration entre deux boucles
      }
    })();
    return () => {
      alive = false;
    };
  }, [run]);
}

/** Tape un texte caractère par caractère dans un setState. */
export async function typeText(
  ctl: Ctl,
  text: string,
  set: (t: string) => void,
  speed = 34,
) {
  set('');
  for (let i = 1; i <= text.length; i++) {
    if (!ctl.alive()) return;
    set(text.slice(0, i));
    await ctl.sleep(speed);
  }
}

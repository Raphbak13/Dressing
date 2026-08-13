'use client';

import { useEffect, useRef } from 'react';

// Révèle ses enfants quand ils entrent dans le viewport (fade + translateY).
// CSS : .reveal / .reveal.in — voir globals.css.
// Robustesse : la classe `in` est posée APRÈS un frame peint (via rAF) pour que
// la transition parte proprement de opacity:0 (sinon elle peut rester bloquée à
// 0 sur les gros éléments), + un filet de sécurité qui révèle quoi qu'il arrive.
export function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let done = false;
    const show = () => {
      if (done) return;
      done = true;
      requestAnimationFrame(() => el.classList.add('in'));
    };
    if (!('IntersectionObserver' in window)) {
      show();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            show();
            io.disconnect();
          }
        }
      },
      { threshold: 0.01, rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(el);
    // Filet de sécurité : jamais d'élément définitivement invisible.
    const t = setTimeout(show, 1600);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

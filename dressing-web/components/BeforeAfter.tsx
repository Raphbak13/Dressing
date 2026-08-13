'use client';

import { useCallback, useRef, useState } from 'react';

/**
 * AVANT / APRÈS À CURSEUR.
 *
 * C'est le geste central du héros de fashn.ai : on ne DÉCRIT pas la
 * transformation, on la met sous le doigt. Ici : les pièces d'un côté, la tenue
 * portée de l'autre.
 *
 * Souris ET tactile, plus les flèches du clavier : un curseur qui ne répond
 * qu'à la souris exclut la moitié des visiteurs, et un site de mode se regarde
 * surtout au téléphone.
 */
export function BeforeAfter({
  before,
  after,
  labelBefore,
  labelAfter,
}: {
  before: string;
  after: string;
  labelBefore: string;
  labelAfter: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(52);
  const [dragging, setDragging] = useState(false);

  const move = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.max(4, Math.min(96, ((clientX - r.left) / r.width) * 100)));
  }, []);

  return (
    <div className="container">
      <div
        ref={ref}
        className={`ba ${dragging ? 'ba--drag' : ''}`}
        onPointerDown={(e) => {
          setDragging(true);
          e.currentTarget.setPointerCapture(e.pointerId);
          move(e.clientX);
        }}
        onPointerMove={(e) => dragging && move(e.clientX)}
        onPointerUp={() => setDragging(false)}
        onPointerCancel={() => setDragging(false)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="ba-img" src={after} alt="" draggable={false} />
        <div className="ba-clip" style={{ width: `${pos}%` }}>
          {/* La largeur de l'image intérieure est FIXÉE à celle du cadre, pas à
              100 % du masque : sinon elle se comprimerait au lieu de se
              dévoiler, et les deux photos ne seraient plus alignées. */}
          <div className="ba-clip-in">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="ba-img" src={before} alt="" draggable={false} />
          </div>
          <span className="ba-label ba-label--l">{labelBefore}</span>
        </div>
        <span className="ba-label ba-label--r">{labelAfter}</span>

        <div className="ba-handle" style={{ left: `${pos}%` }} aria-hidden>
          <span />
        </div>

        {/* Accessible au clavier : le curseur est une vraie commande, pas une
            décoration réservée à la souris. */}
        <input
          className="ba-range"
          type="range"
          min={4}
          max={96}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`${labelBefore} / ${labelAfter}`}
        />
      </div>
    </div>
  );
}

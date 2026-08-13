'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useId, useRef, useState } from 'react';

export type NavDropdownItem = { href: string; label: string; hint: string };

/**
 * Entrée de nav avec menu déroulant (« Abonnements ▾ »).
 * Ouverture au survol sur pointeur fin, au clic partout (tactile inclus),
 * fermeture par Échap, clic extérieur, perte de focus ou changement de page.
 */
export function NavDropdown({ label, items }: { label: string; items: NavDropdownItem[] }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuId = useId();
  const pathname = usePathname();

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  // Petit délai à la sortie : sinon le menu se ferme en traversant le vide
  // entre le bouton et le panneau.
  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 140);
  }, [cancelClose]);

  useEffect(() => cancelClose, [cancelClose]);

  // Toute navigation referme le menu.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        wrapRef.current?.querySelector('button')?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [open]);

  const hoverOpen = () => {
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      cancelClose();
      setOpen(true);
    }
  };

  return (
    <div
      className="navdd"
      ref={wrapRef}
      onMouseEnter={hoverOpen}
      onMouseLeave={scheduleClose}
      onFocus={cancelClose}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <button
        type="button"
        className="navdd-trigger"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <svg className="navdd-caret" viewBox="0 0 12 12" width="11" height="11" aria-hidden="true">
          <path
            d="M2.5 4.5 6 8l3.5-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="navdd-menu" id={menuId} role="menu" data-open={open} aria-hidden={!open}>
        {items.map((item) => (
          <Link key={item.href} href={item.href} role="menuitem" className="navdd-item" tabIndex={open ? 0 : -1}>
            <span className="navdd-item-label">{item.label}</span>
            <span className="navdd-item-hint">{item.hint}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

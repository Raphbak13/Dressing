'use client';

import { useMemo, useState } from 'react';

import { FAQ, FAQ_TOTAL } from '@/lib/faq-data';

// Normalisation accents/casse pour la recherche.
function norm(s: string) {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}

// Surligne les occurrences de `query` dans `text`.
function Highlight({ text, query }: { text: string; query: string }) {
  if (!query) return <>{text}</>;
  const nText = norm(text);
  const nQuery = norm(query);
  const parts: React.ReactNode[] = [];
  let i = 0;
  let idx = nText.indexOf(nQuery);
  let k = 0;
  while (idx !== -1) {
    if (idx > i) parts.push(text.slice(i, idx));
    parts.push(<mark key={k++}>{text.slice(idx, idx + query.length)}</mark>);
    i = idx + query.length;
    idx = nText.indexOf(nQuery, i);
  }
  parts.push(text.slice(i));
  return <>{parts}</>;
}

export function Faq() {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState<string>(FAQ[0].key);
  const [open, setOpen] = useState<string | null>(null);

  const searching = query.trim().length > 1;
  const nq = norm(query.trim());

  // En recherche : on filtre TOUTES les catégories (questions ET réponses).
  const results = useMemo(() => {
    if (!searching) return null;
    return FAQ.map((c) => ({
      ...c,
      items: c.items.filter((it) => norm(it.q).includes(nq) || norm(it.a).includes(nq)),
    })).filter((c) => c.items.length > 0);
  }, [searching, nq]);

  const shown = results ?? FAQ.filter((c) => c.key === cat);
  const resultCount = results?.reduce((n, c) => n + c.items.length, 0) ?? 0;

  return (
    <div className="faq">
      <div className="faq-search">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        <input
          type="search"
          placeholder={`Rechercher parmi ${FAQ_TOTAL} questions…`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Rechercher dans la FAQ"
        />
      </div>

      {!searching ? (
        <div className="faq-tabs" role="tablist">
          {FAQ.map((c) => (
            <button
              key={c.key}
              role="tab"
              aria-selected={cat === c.key}
              className={cat === c.key ? 'active' : ''}
              onClick={() => {
                setCat(c.key);
                setOpen(null);
              }}>
              {c.label} <span>({c.items.length})</span>
            </button>
          ))}
        </div>
      ) : (
        <p className="faq-count">
          {resultCount > 0
            ? `${resultCount} réponse${resultCount > 1 ? 's' : ''} pour « ${query.trim()} »`
            : null}
        </p>
      )}

      {searching && resultCount === 0 ? (
        <div className="faq-empty">
          <p>Tu n’as pas trouvé ta réponse ?</p>
          <a className="btn" href="#contact">
            Contacte le support
          </a>
        </div>
      ) : (
        shown.map((c) => (
          <section key={c.key} className="faq-cat">
            {searching ? <h3>{c.label}</h3> : null}
            {c.items.map((it) => {
              const id = `${c.key}:${it.q}`;
              const isOpen = open === id || (searching && resultCount <= 3);
              return (
                <div key={id} className={`faq-item${isOpen ? ' open' : ''}`}>
                  <button
                    className="faq-q"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : id)}>
                    <span>
                      <Highlight text={it.q} query={searching ? query.trim() : ''} />
                    </span>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  <div className="faq-a">
                    <div>
                      <p>
                        <Highlight text={it.a} query={searching ? query.trim() : ''} />
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        ))
      )}
    </div>
  );
}

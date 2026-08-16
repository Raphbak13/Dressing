'use client';

import { useEffect, useState } from 'react';

/**
 * WAITLIST — deux parcours, jamais cumulables.
 *
 * Ils sont volontairement présentés côte à côte et visuellement distincts : un
 * seul formulaire avec un menu « je veux être parrain ou beta » ferait choisir
 * au hasard. Ce sont deux engagements très différents, l'un prend dix secondes,
 * l'autre deux semaines.
 *
 * Poste vers l'Edge Function `waitlist` (service_role côté serveur, RPC
 * validées, rate limit par IP). Aucune clé, aucun accès direct à la base : une
 * page statique ne doit pouvoir écrire nulle part par elle-même.
 */

const FN_URL = 'https://uotwnjwlfnkjtaxwmeqs.supabase.co/functions/v1/waitlist';

const FREQUENCIES = ['Quotidien', 'Plusieurs fois par semaine', 'Occasionnel'];

const ERRORS: Record<string, string> = {
  invalid_email: 'Cette adresse ne ressemble pas à un email.',
  invalid_age: 'Indique un âge valide.',
  already_beta:
    'Cette adresse est déjà candidate au programme beta. Les deux voies sont exclusives.',
  already_waitlist:
    'Cette adresse est déjà inscrite comme parrain. Les deux voies sont exclusives.',
  rate_limited: 'Trop de tentatives. Réessaie dans un moment.',
};

function message(reason: string | undefined): string {
  return ERRORS[reason ?? ''] ?? 'L’envoi n’a pas abouti. Réessaie dans un instant.';
}

export function WaitlistForms() {
  const [ref, setRef] = useState<string | null>(null);

  // Le code de parrainage arrive par l'URL (?ref=CODE). Lu au montage, jamais
  // affiché : c'est le lien du parrain, pas une information pour le filleul.
  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get('ref');
    if (p) setRef(p.toUpperCase().trim());
  }, []);

  return (
    <div className="wl-grid">
      <SponsorForm incomingRef={ref} />
      <BetaForm />
    </div>
  );
}

function SponsorForm({ incomingRef }: { incomingRef: string | null }) {
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState(''); // honeypot
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [error, setError] = useState('');
  const [result, setResult] = useState<{ code: string; count: number; unlocked: boolean } | null>(
    null,
  );
  const [copied, setCopied] = useState(false);

  const link = result ? `https://dressing-app.com/rejoindre?ref=${result.code}` : '';

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (state === 'sending') return;
    setState('sending');
    setError('');
    try {
      const res = await fetch(FN_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'join', email, ref: incomingRef, website }),
      });
      const d = await res.json();
      if (!d.ok) {
        setError(message(d.reason));
        setState('error');
        return;
      }
      setResult({ code: d.code, count: d.count, unlocked: d.unlocked });
      setState('done');
    } catch {
      setError('Connexion impossible. Vérifie ton réseau.');
      setState('error');
    }
  }

  if (state === 'done' && result) {
    return (
      <div className="wl-card wl-card--sponsor">
        <p className="wl-kicker">TON LIEN EST PRÊT</p>
        <h2>{result.unlocked ? 'C’est débloqué.' : 'Partage, et c’est à toi.'}</h2>
        <p className="wl-sub">
          {result.unlocked
            ? 'Ton mois offert t’attend : il s’applique tout seul à la création de ton compte, avec la même adresse email.'
            : 'Deux amis inscrits avec ton lien, et ton mois MAISON est débloqué.'}
        </p>

        <div className="wl-progress" aria-label={`${result.count} sur 2 amis parrainés`}>
          <span className={result.count >= 1 ? 'on' : ''} />
          <span className={result.count >= 2 ? 'on' : ''} />
          <em>{Math.min(result.count, 2)}/2 amis parrainés</em>
        </div>

        <div className="wl-linkbox">
          <code>{link}</code>
          <button
            type="button"
            className="wl-copy"
            onClick={() => {
              navigator.clipboard?.writeText(link);
              setCopied(true);
              setTimeout(() => setCopied(false), 2200);
            }}
          >
            {copied ? 'Copié' : 'Copier'}
          </button>
        </div>

        <div className="wl-share">
          <a
            href={`https://wa.me/?text=${encodeURIComponent(`Je rejoins DRESSING, tu viens ? ${link}`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <a href={`sms:&body=${encodeURIComponent(`Je rejoins DRESSING, tu viens ? ${link}`)}`}>
            SMS
          </a>
          <a
            href={`mailto:?subject=${encodeURIComponent('DRESSING')}&body=${encodeURIComponent(link)}`}
          >
            Email
          </a>
        </div>
      </div>
    );
  }

  return (
    <form className="wl-card wl-card--sponsor" onSubmit={submit}>
      <p className="wl-kicker">VOIE 1 · PARRAINAGE</p>
      <h2>Devenir parrain</h2>
      <p className="wl-sub">
        Ton email, un lien à partager. Deux amis inscrits, et tu reçois un mois d’abonnement MAISON
        offert au lancement.
      </p>

      <label className="wl-label" htmlFor="wl-email">
        Ton email
      </label>
      <input
        id="wl-email"
        className="wl-input"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="toi@exemple.com"
      />

      {/* Honeypot : invisible pour un humain, rempli par les robots. */}
      <input
        className="wl-hp"
        tabIndex={-1}
        autoComplete="off"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        aria-hidden="true"
      />

      {error ? <p className="wl-error">{error}</p> : null}

      <button className="wl-btn" type="submit" disabled={state === 'sending'}>
        {state === 'sending' ? 'Un instant…' : 'Obtenir mon lien'}
      </button>
      <p className="wl-fine">Un email suffit. Rien à payer.</p>
    </form>
  );
}

function BetaForm() {
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [frequency, setFrequency] = useState(FREQUENCIES[0]);
  const [competitor, setCompetitor] = useState('');
  const [commit, setCommit] = useState(false);
  const [website, setWebsite] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [error, setError] = useState('');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (state === 'sending') return;
    setState('sending');
    setError('');
    try {
      const res = await fetch(FN_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'apply',
          email,
          age: Number(age),
          frequency,
          competitor,
          website,
        }),
      });
      const d = await res.json();
      if (!d.ok) {
        setError(message(d.reason));
        setState('error');
        return;
      }
      setState('done');
    } catch {
      setError('Connexion impossible. Vérifie ton réseau.');
      setState('error');
    }
  }

  if (state === 'done') {
    return (
      <div className="wl-card wl-card--beta">
        <p className="wl-kicker">CANDIDATURE REÇUE</p>
        <h2>On revient vers toi.</h2>
        <p className="wl-sub">
          Cinquante places, sélection à la main. Si tu es retenu, tu recevras un email avec
          l’invitation TestFlight et l’accès au groupe privé. Nous écrivons uniquement aux personnes
          sélectionnées.
        </p>
      </div>
    );
  }

  return (
    <form className="wl-card wl-card--beta" onSubmit={submit}>
      <p className="wl-kicker">VOIE 2 · BETA TESTEUR</p>
      <h2>Devenir beta testeur</h2>
      <p className="wl-sub">
        Cinquante places, sélectionnées à la main. Deux semaines d’engagement réel, et un mois ELITE
        offert à la clé.
      </p>

      <label className="wl-label" htmlFor="bt-email">
        Ton email
      </label>
      <input
        id="bt-email"
        className="wl-input"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="toi@exemple.com"
      />

      <label className="wl-label" htmlFor="bt-age">
        Ton âge
      </label>
      <input
        id="bt-age"
        className="wl-input"
        type="number"
        min={13}
        max={120}
        required
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="18"
      />

      <label className="wl-label" htmlFor="bt-freq">
        Tu t’intéresses à la mode
      </label>
      <select
        id="bt-freq"
        className="wl-input"
        value={frequency}
        onChange={(e) => setFrequency(e.target.value)}
      >
        {FREQUENCIES.map((f) => (
          <option key={f}>{f}</option>
        ))}
      </select>

      <label className="wl-label" htmlFor="bt-comp">
        Une app de mode que tu utilises déjà ? (facultatif)
      </label>
      <input
        id="bt-comp"
        className="wl-input"
        value={competitor}
        onChange={(e) => setCompetitor(e.target.value)}
        placeholder="Whering, Pinterest…"
      />

      <label className="wl-check">
        <input type="checkbox" checked={commit} onChange={(e) => setCommit(e.target.checked)} />
        <span>
          Je m’engage à utiliser l’app au moins 5 minutes par jour et à répondre au questionnaire
          beta pendant 2 semaines si je suis sélectionné.
        </span>
      </label>

      <input
        className="wl-hp"
        tabIndex={-1}
        autoComplete="off"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        aria-hidden="true"
      />

      {error ? <p className="wl-error">{error}</p> : null}

      <button
        className="wl-btn wl-btn--ghost"
        type="submit"
        disabled={!commit || state === 'sending'}
      >
        {state === 'sending' ? 'Un instant…' : 'Envoyer ma candidature'}
      </button>
      <p className="wl-fine">
        L’engagement est le cœur du programme : coche-le pour envoyer ta candidature.
      </p>
    </form>
  );
}

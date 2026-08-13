'use client';

import { useState } from 'react';

import { FAQ } from '@/lib/faq-data';
import { SUPPORT_EMAIL } from '@/lib/content';

// Le formulaire poste vers l'Edge Function Supabase `contact-form` (Resend →
// support@). Si l'envoi échoue (fonction pas déployée, réseau), on bascule sur
// un mailto pré-rempli — l'utilisateur n'est jamais bloqué.
const FN_URL = 'https://uotwnjwlfnkjtaxwmeqs.supabase.co/functions/v1/contact-form';

type State = 'idle' | 'sending' | 'sent' | 'error';

export function ContactForm() {
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState(FAQ[0].label);
  const [message, setMessage] = useState('');
  const [shot, setShot] = useState<{ name: string; type: string; base64: string } | null>(null);
  const [state, setState] = useState<State>('idle');
  const [website, setWebsite] = useState(''); // honeypot anti-bots (doit rester vide)

  async function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return setShot(null);
    if (f.size > 3 * 1024 * 1024) {
      alert('Capture trop lourde (3 Mo max).');
      e.target.value = '';
      return;
    }
    const buf = await f.arrayBuffer();
    let bin = '';
    const bytes = new Uint8Array(buf);
    for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
    setShot({ name: f.name, type: f.type || 'image/png', base64: btoa(bin) });
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (state === 'sending') return;
    setState('sending');
    try {
      const res = await fetch(FN_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, category, message, screenshot: shot, website }),
      });
      const d = await res.json().catch(() => null);
      if (res.ok && d?.ok) {
        setState('sent');
      } else {
        setState('error');
      }
    } catch {
      setState('error');
    }
  }

  const mailto = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(`[Support] ${category}`)}&body=${encodeURIComponent(message + '\n\nEnvoyé depuis dressing-app.com')}`;

  if (state === 'sent') {
    return (
      <div className="contact-done">
        <p>
          ✓ Message envoyé — on te répond à <strong>{email}</strong> au plus vite.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <label>
        Ton email
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="toi@exemple.com"
          autoComplete="email"
        />
      </label>

      <label>
        Catégorie
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {FAQ.map((c) => (
            <option key={c.key} value={c.label}>
              {c.label}
            </option>
          ))}
          <option value="Autre">Autre</option>
        </select>
      </label>

      <label>
        Décris ton problème
        <textarea
          required
          minLength={20}
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ce qui se passe, sur quel écran, depuis quand… plus c'est précis, plus vite on règle."
        />
      </label>

      <label className="file-label">
        Capture d’écran (optionnel)
        <input type="file" accept="image/*" onChange={onFile} />
      </label>

      {/* honeypot invisible */}
      <input
        type="text"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', height: 0, opacity: 0 }}
      />

      <button className="btn" type="submit" disabled={state === 'sending'}>
        {state === 'sending' ? 'Envoi…' : 'Envoyer au support'}
      </button>

      {state === 'error' ? (
        <p className="contact-error">
          L’envoi n’a pas abouti. <a href={mailto}>Écris-nous directement par email</a> — ton
          message est prêt.
        </p>
      ) : null}
    </form>
  );
}

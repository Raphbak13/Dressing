'use client';

import { useRef, useState } from 'react';

import { typeText, useDemo, useLoop } from '../demos/engine';

// Grille bento (choix user 2026-07-14 v3, itéré v4) : des tuiles variées en
// relief, riches et vivantes. Écrans animés (chat Léon, Rafale) + tuiles de
// FONCTIONNALITÉS (Rapports, Colorimétrie, Wishlist, Passport) qui remplacent la
// mascotte + Carats (choix user). DRESSING Real = crossfade 100% CSS (toujours
// animé, indépendant du JS/observer). Le héros (vrai écran en grand) reste au-dessus.

// ——— LÉON : chat animé ———
const SCRIPT = [
  {
    q: 'Je mets quoi avec mon short gris ce soir ?',
    a: 'Ta chemise en lin noir rentrée devant + des sneakers claires. Parfait pour 21°. ✨',
  },
  {
    q: 'Mariage samedi, tu proposes quoi ?',
    a: 'Costume bleu marine, chemise blanche, richelieus. Coupe ajustée pour ta carrure. 🤵',
  },
  {
    q: 'Il pleut demain…',
    a: 'Trench + pull col roulé gris. Chaussures cuir traité, pas les suédées. ☔',
  },
];

type Msg = { role: 'user' | 'leon'; text: string };
// Conversation de départ (toujours visible → la tuile n'est jamais vide, même
// avant animation / si l'onglet est en veille) : les 2 derniers messages.
const SEED: Msg[] = [
  { role: 'user', text: SCRIPT[0].q },
  { role: 'leon', text: SCRIPT[0].a },
  { role: 'user', text: SCRIPT[1].q },
  { role: 'leon', text: SCRIPT[1].a },
  { role: 'user', text: SCRIPT[2].q },
  { role: 'leon', text: SCRIPT[2].a },
];

function TileLeon({ fr }: { fr: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { inView, reduced } = useDemo(ref);
  const [typed, setTyped] = useState('');
  const [dots, setDots] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>(SEED);

  // garde les 6 derniers messages (3 échanges) → la tuile reste PLEINE ;
  // à 4, la conversation flottait au fond d'une carte de 420 px
  const push = (m: Msg) => setMsgs((prev) => [...prev, m].slice(-6));

  useLoop(inView && !reduced, async (ctl) => {
    for (const s of SCRIPT) {
      if (!ctl.alive()) return;
      await ctl.sleep(700);
      await typeText(ctl, s.q, setTyped);
      await ctl.sleep(280);
      setTyped('');
      push({ role: 'user', text: s.q });
      await ctl.sleep(480);
      setDots(true);
      await ctl.sleep(1350);
      setDots(false);
      push({ role: 'leon', text: s.a });
      await ctl.sleep(3200);
    }
  });

  return (
    <div className="tile t-leon" ref={ref}>
      <div className="tile-inner">
        <div className="chat-head">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/leon-mascot.png" alt="Léon" />
          <span>
            <b>Léon</b>
            <small>{fr ? 'ton styliste, il retient tout' : 'your stylist, he remembers'}</small>
          </span>
        </div>
        <div className="chat-body">
          {msgs.map((m, i) =>
            m.role === 'user' ? (
              <div className="bubble user" key={i}>
                {m.text}
              </div>
            ) : (
              <div className="msg-leon" key={i}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/leon-mascot.png" alt="" />
                <div className="bubble leon">{m.text}</div>
              </div>
            ),
          )}
          {dots ? (
            <div className="msg-leon">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/leon-mascot.png" alt="" />
              <div className="bubble leon dots">
                <i />
                <i />
                <i />
              </div>
            </div>
          ) : null}
        </div>
        <div className="chat-input">
          <span className={typed ? 'chat-typed' : 'chat-ph'}>
            {typed || (fr ? 'Écris à Léon…' : 'Write to Léon…')}
            {typed ? <i className="caret" /> : null}
          </span>
          <span className="chat-send">↑</span>
        </div>
      </div>
    </div>
  );
}

// ——— RAFALE : pièces analysées ———
const RAF = [
  { img: '/shots/rafale-1.jpg', label: 'short · gris clair · coton' },
  { img: '/shots/rafale-2.jpg', label: 'chemise · noir · lin' },
  { img: '/shots/rafale-3.jpg', label: 'tshirt · blanc · coton' },
];

function TileRafale({ fr }: { fr: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { inView, reduced } = useDemo(ref);
  const [shot, setShot] = useState(RAF.length);
  const [ana, setAna] = useState(RAF.length);

  useLoop(inView && !reduced, async (ctl) => {
    setShot(0);
    setAna(0);
    await ctl.sleep(500);
    for (let i = 1; i <= RAF.length; i++) {
      if (!ctl.alive()) return;
      setShot(i);
      await ctl.sleep(520);
    }
    for (let i = 1; i <= RAF.length; i++) {
      if (!ctl.alive()) return;
      await ctl.sleep(520);
      setAna(i);
    }
    await ctl.sleep(2800);
  });

  return (
    <div className="tile t-rafale" ref={ref}>
      <div className="tile-inner">
        <div className="t-rafale-head">
          <b>{fr ? 'La Rafale · garde-robe en 2 min' : 'Burst · wardrobe in 2 min'}</b>
          <span className="tile-k">{shot}/3</span>
        </div>
        <div className="raf-list">
          {RAF.map((r, i) => (
            <div key={r.img} className={`raf-item${i < shot ? ' in' : ''}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={r.img} alt={r.label} />
              <div className="raf-meta">
                {i < ana ? (
                  <>
                    <span className="raf-check">✓ {fr ? 'analysée' : 'analyzed'}</span>
                    <span className="raf-label">{r.label}</span>
                  </>
                ) : i < shot ? (
                  <span className="raf-label dim">{fr ? 'Léon analyse…' : 'Léon analyzing…'}</span>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ——— DRESSING REAL : façon BeReal — la tenue en grand + le visage en vignette
// (double capture de l'app : dos → selfie). Crossfade 100% CSS, même personne
// sur les deux photos de chaque slide (crédible, comme un vrai post).
const POSTS = [
  // ⚠️ Seulement des tenues POSÉES, jamais une photo au miroir : celle-ci
  // montrait déjà une personne, et la vignette y collait le visage de
  // quelqu'un d'autre. Deux personnes sur la même publication, c'est
  // exactement ce qui « faisait bizarre ».
  {
    img: '/dr/real-1-fit.jpg',
    face: '/dr/real-1-face.jpg',
    user: '@lena',
    react: '😍',
    at: '15:02',
  },
  {
    img: '/dr/real-3-fit.jpg',
    face: '/dr/real-3-face.jpg',
    user: '@sofiane',
    react: '👏',
    at: '15:11',
  },
];

/**
 * DRESSING Real — la DOUBLE capture.
 *
 * La grande image, c'est LA TENUE, cadrée comme on la photographie sur soi :
 * pas de tête, pas de pose de studio. Le visage vit dans la vignette, prise au
 * même instant par la caméra avant. C'était tout le problème de la version
 * précédente : elle montrait un portrait de mode entier, donc l'inverse de ce
 * que fait la fonctionnalité.
 *
 * Crossfade 100 % CSS : l'onglet en arrière-plan étrangle le JS, pas les
 * @keyframes.
 */
function TileReal({ fr }: { fr: boolean }) {
  return (
    <div className="tile t-real">
      <div className="rtop">
        <b>DRESSING Real</b>
        <span className="rclock">15:00</span>
      </div>
      {POSTS.map((p, i) => (
        <div
          className="rslide"
          style={{
            animationDelay: `${i * 3}s`,
            animationDuration: `${POSTS.length * 3}s`,
          }}
          key={p.img}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.img} alt={`Tenue publiée par ${p.user} sur DRESSING Real`} />
          <div className="rscrim" />
          <div className="rface-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="rface" src={p.face} alt={`Selfie de ${p.user}, pris au même moment`} />
          </div>
          <div className="rbot">
            <span className="ruser">{p.user}</span>
            <span className="rat">{p.at}</span>
            <span className="rreact">{p.react}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

// ——— TUILES FONCTIONNALITÉS (conservées pour /fonctionnalites) ———
// Chaque tuile montre un APERÇU CONCRET de ce que la feature produit (échantillon
// fixe, pas de données réelles → 100% statique, pas de JS/animation à throttler).
function FeatTile({
  area,
  icon,
  title,
  tag,
  preview,
}: {
  area: string;
  icon: React.ReactNode;
  title: string;
  tag?: string;
  preview: React.ReactNode;
}) {
  return (
    <div className={`tile t-feat ${area}`}>
      <div className="tile-inner">
        <div className="feat-top">
          <span className="feat-ic">{icon}</span>
          {tag ? <span className="feat-tag">{tag}</span> : null}
        </div>
        <div className="feat-body">
          <div className="feat-t">{title}</div>
          {preview}
        </div>
      </div>
    </div>
  );
}

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function Bento({ fr = true }: { fr?: boolean }) {
  return (
    <section className="bento-sec">
      <div className="container">
        <div className="bento-head">
          <p className="kicker">{fr ? 'EN ACTION' : 'IN ACTION'}</p>
          <h2>{fr ? 'Trois écrans, en vrai.' : 'Three screens, for real.'}</h2>
          <p>
            {fr
              ? 'Ce sont les écrans de l’app, qui tournent en direct devant toi.'
              : 'These are the app’s real screens, running live in front of you.'}
          </p>
        </div>

        <div className="bento">
          <TileLeon fr={fr} />
          <TileRafale fr={fr} />
          <TileReal fr={fr} />
        </div>
      </div>
    </section>
  );
}

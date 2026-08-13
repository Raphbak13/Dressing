'use client';

import { useState } from 'react';

import { typeText, useLoop } from '../demos/engine';

// Écrans de l'app reproduits FIDÈLEMENT (tokens premium-theme.ts + vraie tab bar).
// Chacun prend `run` : anime en boucle quand true, sinon montre un état figé
// représentatif. Utilisés par le héros (run=false) et la vitrine (run=active).

// ——— Icônes fines de la tab bar (fidèles à icons.tsx) ———
const TabIcon = ({ name }: { name: string }) => {
  switch (name) {
    case 'today':
      return (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" />
        </svg>
      );
    case 'wardrobe':
      return (
        <svg viewBox="0 0 24 24">
          <path d="M12 6.5a2 2 0 1 1 1.4 1.9L12 9l-9 5.5a1.5 1.5 0 0 0 .8 2.8h16.4a1.5 1.5 0 0 0 .8-2.8L12 9" />
        </svg>
      );
    case 'leon':
      return (
        <svg viewBox="0 0 24 24">
          <path d="M12 3l1.8 5.4L19 10l-5.2 1.6L12 17l-1.8-5.4L5 10l5.2-1.6z" />
        </svg>
      );
    case 'tenues':
      return (
        <svg viewBox="0 0 24 24">
          <path d="M5 4.5h11a2 2 0 0 1 2 2V20l-4-2-4 2V6.5a2 2 0 0 0-2-2H5zM5 4.5V20" />
        </svg>
      );
    case 'amis':
      return (
        <svg viewBox="0 0 24 24">
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="9.5" r="2.4" />
          <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5M15 14.2c2.6.2 4.5 2 4.5 4.8" />
        </svg>
      );
    default:
      return null;
  }
};

const TABS: { id: string; label: string }[] = [
  { id: 'today', label: 'Aujourd’hui' },
  { id: 'wardrobe', label: 'Garde-robe' },
  { id: 'leon', label: 'Léon' },
  { id: 'tenues', label: 'Tenues' },
  { id: 'amis', label: 'Amis' },
];

function TabBar({ active }: { active: string }) {
  return (
    <div className="tabbar">
      {TABS.map((t) => (
        <span key={t.id} className={`tab${t.id === active ? ' on' : ''}`}>
          <TabIcon name={t.id} />
          {t.label}
        </span>
      ))}
    </div>
  );
}

// ═══════════════ AUJOURD'HUI — tenue du jour (fidèle index.tsx) ═══════════════
const PIECES = [
  { img: '/shots/rafale-2.jpg', label: 'chemise' }, // haut
  { img: '/shots/rafale-1.jpg', label: 'short' }, // bas — tenue COHÉRENTE (1 haut, 1 bas)
];

export function TodayScreen({ run, fr }: { run: boolean; fr?: boolean }) {
  type P = 'idle' | 'pressed' | 'composing' | 'reveal' | 'worn';
  const [p, setP] = useState<P>('reveal');

  useLoop(run, async (ctl) => {
    setP('idle');
    await ctl.sleep(1100);
    if (!ctl.alive()) return;
    setP('pressed');
    await ctl.sleep(260);
    setP('composing');
    await ctl.sleep(2400);
    if (!ctl.alive()) return;
    setP('reveal');
    await ctl.sleep(3200);
    if (!ctl.alive()) return;
    setP('worn');
    await ctl.sleep(2400);
  });

  const showCard = p === 'reveal' || p === 'worn';

  return (
    <div className="scr">
      <div className="scr-body">
        <div className="scr-head-row">
          <div>
            <div className="scr-date">{fr ? 'LUNDI 14 JUILLET' : 'MONDAY, JULY 14'}</div>
            <div className="scr-title">{fr ? 'Aujourd’hui' : 'Today'}</div>
          </div>
          <div className="scr-weather">
            ☀︎ <b>21°</b> · Paris
          </div>
        </div>

        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginTop: 12,
          }}
        >
          {p === 'composing' ? (
            <div className="oc-compose">
              <div className="oc-halo" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/leon-mascot.png" alt="Léon" />
              <p>{fr ? 'Léon compose…' : 'Léon is composing…'}</p>
            </div>
          ) : showCard ? (
            <div className="oc" style={{ animation: 'fade-up .5s cubic-bezier(.23,1,.32,1)' }}>
              <span className="oc-tag">✦ {fr ? 'PROPOSITION DE LÉON' : 'LÉON’S PICK'}</span>
              <span className="oc-name">Lin &amp; Béton</span>
              <span className="oc-desc">
                {fr
                  ? 'Chemise en lin, short structuré. Sobre et frais pour tes 21° à Paris.'
                  : 'Linen shirt, structured shorts. Clean and cool for your 21° in Paris.'}
              </span>
              <div className="oc-note">
                <span>
                  ♥{' '}
                  {fr
                    ? 'Noir en haut, gris clair en bas : le contraste que tu préfères.'
                    : 'Black on top, light grey below: the contrast you prefer.'}
                </span>
              </div>
              <div className="oc-strip">
                {PIECES.map((piece) => (
                  <div className="oc-piece" key={piece.img}>
                    <div className="oc-thumb">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={piece.img} alt="" />
                    </div>
                    <span className="oc-plabel">{piece.label}</span>
                  </div>
                ))}
              </div>
              <div className="oc-dots">
                <i className="on" />
                <i />
                <i />
              </div>
              <button
                className={`oc-cta${p === 'worn' ? ' done' : ''}`}
                type="button"
                tabIndex={-1}
              >
                {p === 'worn'
                  ? fr
                    ? '✓ Tenue validée'
                    : '✓ Outfit logged'
                  : fr
                    ? 'Je porte ça'
                    : 'Wearing this'}
              </button>
            </div>
          ) : (
            <div className="oc-idle">
              <p className="oc-idle-t">{fr ? 'Ta tenue du jour t’attend' : 'Your outfit awaits'}</p>
              <button
                className={`oc-gen${p === 'pressed' ? ' press' : ''}`}
                type="button"
                tabIndex={-1}
              >
                {fr ? 'Générer ma tenue du jour' : 'Generate my outfit'}
              </button>
            </div>
          )}
        </div>
      </div>
      <TabBar active="today" />
    </div>
  );
}

// ═══════════════ LÉON — chat (fidèle stylist.tsx) ═══════════════
const SCRIPT = [
  {
    q: 'Qu’est-ce que je mets avec mon short gris ce soir ?',
    a: 'Ta chemise en lin noir, rentrée devant + des sneakers claires. 21° à 21h, tu seras parfait. ✨',
  },
  {
    q: 'Mariage samedi, je mets quoi ?',
    a: 'Costume bleu marine, chemise blanche, richelieus. Coupe ajustée pour ta carrure. 🤵',
  },
  {
    q: 'Il pleut demain…',
    a: 'Trench + ton pull col roulé gris. Chaussures en cuir traité, pas les suédées. ☔',
  },
];

export function LeonScreen({ run, fr }: { run: boolean; fr?: boolean }) {
  const [typed, setTyped] = useState('');
  const [sentQ, setSentQ] = useState<string | null>(SCRIPT[0].q);
  const [dots, setDots] = useState(false);
  const [answer, setAnswer] = useState<string | null>(SCRIPT[0].a);

  useLoop(run, async (ctl) => {
    for (const { q, a } of SCRIPT) {
      if (!ctl.alive()) return;
      setSentQ(null);
      setAnswer(null);
      setDots(false);
      await ctl.sleep(600);
      await typeText(ctl, q, setTyped);
      await ctl.sleep(340);
      setTyped('');
      setSentQ(q);
      await ctl.sleep(520);
      setDots(true);
      await ctl.sleep(1500);
      setDots(false);
      setAnswer(a);
      await ctl.sleep(3600);
    }
  });

  return (
    <div className="scr">
      <div className="scr-body">
        <div className="chat-head">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/leon-mascot.png" alt="Léon" />
          <span>
            <b>Léon</b>
            <small>{fr ? 'ton styliste' : 'your stylist'}</small>
          </span>
        </div>
        <div className="chat-body">
          {sentQ ? <div className="bubble user">{sentQ}</div> : null}
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
          {answer ? (
            <div className="msg-leon">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/leon-mascot.png" alt="" />
              <div className="bubble leon">{answer}</div>
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
      <TabBar active="leon" />
    </div>
  );
}

// ═══════════════ RAFALE — ajout garde-robe éclair (fidèle rapid-capture.tsx) ══════
const RAF = [
  { img: '/shots/rafale-1.jpg', label: 'short · gris clair · coton' },
  { img: '/shots/rafale-2.jpg', label: 'chemise · noir · lin' },
  { img: '/shots/rafale-3.jpg', label: 'tshirt · blanc · coton' },
];

export function RafaleScreen({ run, fr }: { run: boolean; fr?: boolean }) {
  const [shot, setShot] = useState(RAF.length);
  const [ana, setAna] = useState(RAF.length);
  const [flash, setFlash] = useState(false);

  useLoop(run, async (ctl) => {
    setShot(0);
    setAna(0);
    await ctl.sleep(600);
    for (let i = 1; i <= RAF.length; i++) {
      if (!ctl.alive()) return;
      setFlash(true);
      await ctl.sleep(120);
      setFlash(false);
      setShot(i);
      await ctl.sleep(760);
    }
    for (let i = 1; i <= RAF.length; i++) {
      if (!ctl.alive()) return;
      await ctl.sleep(620);
      setAna(i);
    }
    await ctl.sleep(2600);
  });

  return (
    <div className="scr">
      <div className="scr-body">
        <div className="scr-head-row">
          <div className="scr-title" style={{ fontSize: 21 }}>
            {fr ? 'Rafale' : 'Burst'}
          </div>
          <div className="scr-weather">
            <b>{shot}</b>/3
          </div>
        </div>
        {flash ? <div className="raf-flash" /> : null}
        <div className="raf-list">
          {RAF.map((r, i) => (
            <div key={r.img} className={`raf-item${i < shot ? ' in' : ''}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={r.img} alt="" />
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
        <div className="raf-shutter-row">
          <span className={`raf-shutter${flash ? ' snap' : ''}`} />
        </div>
      </div>
      <TabBar active="wardrobe" />
    </div>
  );
}

// ═══════════════ DRESSING REAL — feed (vraies photos mode) ═══════════════
type RP = 'countdown' | 'capture' | 'selfie' | 'feed';
const POSTS = [
  { img: '/dr/dr-1.jpg', user: '@camille', ago: frAgo(2) },
  { img: '/dr/dr-2.jpg', user: '@sofiane', ago: frAgo(9) },
  { img: '/dr/dr-3.jpg', user: '@lena', ago: frAgo(14) },
];
function frAgo(m: number) {
  return `il y a ${m} min`;
}
const REACTS = ['😍', '🔥', '👏'];

export function RealScreen({ run, fr }: { run: boolean; fr?: boolean }) {
  const [phase, setPhase] = useState<RP>('feed');

  useLoop(run, async (ctl) => {
    setPhase('countdown');
    await ctl.sleep(1600);
    if (!ctl.alive()) return;
    setPhase('capture');
    await ctl.sleep(1300);
    setPhase('selfie');
    await ctl.sleep(1300);
    if (!ctl.alive()) return;
    setPhase('feed');
    await ctl.sleep(3600);
  });

  return (
    <div className="scr">
      <div className="scr-body">
        <div className="scr-head-row">
          <div className="scr-title" style={{ fontSize: 21 }}>
            DRESSING Real
          </div>
          <div className="scr-weather">
            <b>15:00</b>
          </div>
        </div>

        {phase === 'countdown' ? (
          <div className="dr-count">
            <span className="dr-clock">15:00</span>
            <p>
              {fr
                ? 'C’est l’heure de capturer ta tenue du jour'
                : 'It’s time to capture today’s fit'}
            </p>
          </div>
        ) : phase === 'capture' || phase === 'selfie' ? (
          <div className="dr-cam">
            <div className="dr-back">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/dr/dr-capture.jpg" alt="" />
              {phase === 'selfie' ? (
                <div className="dr-selfie">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/dr/dr-2.jpg" alt="" />
                </div>
              ) : null}
            </div>
            <p>
              {phase === 'capture'
                ? fr
                  ? '1/2 · ta tenue'
                  : '1/2 · your fit'
                : fr
                  ? '2/2 · le selfie !'
                  : '2/2 · the selfie!'}
            </p>
          </div>
        ) : (
          <div className="dr-feed">
            {POSTS.map((post, i) => (
              <div key={post.user} className="dr-post" style={{ animationDelay: `${i * 150}ms` }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="dr-thumb" src={post.img} alt="" />
                <div className="dr-post-meta">
                  <div className="dr-user">{post.user}</div>
                  <div className="dr-ago">{post.ago}</div>
                </div>
                <span className="dr-react">{REACTS[i]}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <TabBar active="amis" />
    </div>
  );
}

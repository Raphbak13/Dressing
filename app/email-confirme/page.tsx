import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DRESSING — Email confirmé',
};

export default function EmailConfirmedPage() {
  return (
    <main
      className="container"
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: 18,
        maxWidth: 520,
      }}>
      <div style={{ fontSize: 56, lineHeight: 1 }}>✓</div>
      <h1 style={{ color: 'var(--gold)', margin: 0 }}>Email confirmé</h1>
      <p style={{ fontSize: 18, lineHeight: 1.6, opacity: 0.9 }}>
        Ton compte DRESSING est activé. Retourne dans l&apos;application — elle se débloque
        automatiquement.
      </p>
      <p style={{ opacity: 0.6, fontSize: 14 }}>Tu peux fermer cette page.</p>
    </main>
  );
}

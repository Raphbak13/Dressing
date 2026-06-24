import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Outfit } from 'next/font/google';
import './globals.css';

const title = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-title',
  display: 'swap',
});
const body = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DRESSING — Ton dressing intelligent',
  description: 'DRESSING : ta garde-robe intelligente. Tenue du jour, styliste IA, garde-robe numérique.',
  metadataBase: new URL('https://dressing-app.fr'),
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${title.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}

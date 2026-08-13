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

const SITE_TITLE = 'DRESSING · Ton dressing intelligent';
const SITE_DESC =
  'DRESSING : ta garde-robe intelligente. Tenue du jour, styliste IA, garde-robe numérique.';

// L'icône vient des conventions de fichier Next : app/icon.svg (onglet, net à
// 16 px) et app/apple-icon.png (écran d'accueil iOS, monogramme détouré).
export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESC,
  metadataBase: new URL('https://dressing-app.com'),
  openGraph: {
    type: 'website',
    siteName: 'DRESSING',
    title: SITE_TITLE,
    description: SITE_DESC,
    url: 'https://dressing-app.com',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'DRESSING' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESC,
    images: ['/og.png'],
  },
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

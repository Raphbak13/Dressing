import type { MetadataRoute } from 'next';

/**
 * Tout est indexable : un site vitrine n'a rien à cacher aux moteurs. On
 * pointe le sitemap explicitement, c'est ce qui accélère la découverte.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://dressing-app.com/sitemap.xml',
    host: 'https://dressing-app.com',
  };
}

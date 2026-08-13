import type { MetadataRoute } from 'next';

import { DOC_SLUGS, LANGS } from '@/lib/content';

const BASE = 'https://dressing-app.com';

/**
 * Sitemap généré depuis les mêmes constantes que la navigation : une page
 * ajoutée au site entre ici toute seule. Un sitemap tenu à la main finit
 * toujours par mentir.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    '',
    'rejoindre',
    'abonnements',
    'fonctionnalites',
    'faq',
    'histoire',
    ...DOC_SLUGS,
  ];
  const now = new Date();

  return LANGS.flatMap((lang) =>
    pages.map((page) => ({
      url: `${BASE}/${lang}${page ? `/${page}` : ''}/`,
      lastModified: now,
      // L'accueil et la page d'inscription sont les deux portes d'entrée.
      priority: page === '' ? 1 : page === 'rejoindre' ? 0.9 : 0.6,
      changeFrequency: 'monthly' as const,
    })),
  );
}

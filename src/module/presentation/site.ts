// Site-wide identity shared by page meta, structured data and the SEO files
export const SITE_URL = 'https://diegopertusa.com';
export const SITE_NAME = 'Diego Pertusa';
export const BLOG_NAME = 'Notas de un engineering manager';

export type PageLanguage = 'es' | 'en';
export const SITE_LANGUAGE: PageLanguage = 'es';

export const AUTHOR = {
  name: 'Diego Pertusa Irles',
  // Positioning title; the current position (Engineering Manager at Seedtag) is in the CV
  jobTitle: 'Engineering Leader',
  employer: 'Seedtag',
  image: `${SITE_URL}/imgs/diego-pertusa.webp`,
  profiles: ['https://www.linkedin.com/in/diego-pertusa/', 'https://github.com/pertutatis'],
};

// Netlify serves prerendered pages at their trailing slash url
export function getCanonicalUrl(path: string): string {
  const pathWithSlash = path.endsWith('/') ? path : `${path}/`;
  return SITE_URL + pathWithSlash;
}

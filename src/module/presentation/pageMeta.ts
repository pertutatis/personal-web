import type Article from '../domain/Article';

export const SITE_URL = 'https://diegopertusa.com';
export const SITE_NAME = 'Diego Pertusa';
export const SITE_LANGUAGE = 'es';
export const SITE_LOCALE = 'es_ES';
const AUTHOR_NAME = 'Diego Pertusa Irles';
const AUTHOR_PROFILES = ['https://www.linkedin.com/in/diego-pertusa/', 'https://github.com/pertutatis'];
const MAX_DESCRIPTION_LENGTH = 160;
// Search engines cut longer titles
const MAX_TITLE_LENGTH = 60;

export type StaticPage = 'home' | 'blog' | 'cv';

export type PageMeta = {
  title: string;
  description: string;
  canonicalUrl?: string;
  type: 'website' | 'article';
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  structuredData?: Record<string, unknown>;
};

const STATIC_PAGES: Record<StaticPage, Omit<PageMeta, 'canonicalUrl' | 'type'> & { path: string }> = {
  home: {
    path: '/',
    title: `${SITE_NAME} · Engineering Manager`,
    description:
      'Diego Pertusa Irles, Engineering Manager en Seedtag. Escribo sobre liderazgo, gestión de equipos de ingeniería y cultura.',
  },
  blog: {
    path: '/blog/',
    title: `Blog · ${SITE_NAME}`,
    description:
      'Blog de Diego Pertusa sobre engineering management: liderazgo, hiring, cultura y cómo construir equipos de alto rendimiento.',
  },
  cv: {
    path: '/cv/',
    title: `CV · ${SITE_NAME}`,
    description:
      'Trayectoria profesional de Diego Pertusa Irles: Engineering Manager en Seedtag, liderazgo de equipos y experiencia en producto y frontend.',
  },
};

// Netlify serves prerendered pages at their trailing slash url
export function getCanonicalUrl(path: string): string {
  const pathWithSlash = path.endsWith('/') ? path : `${path}/`;
  return SITE_URL + pathWithSlash;
}

export function summarizeDescription(text: string): string {
  const singleLine = text.replace(/\s+/g, ' ').trim();
  if (singleLine.length <= MAX_DESCRIPTION_LENGTH) return singleLine;

  const cut = singleLine.slice(0, MAX_DESCRIPTION_LENGTH - 1);
  return `${cut.slice(0, cut.lastIndexOf(' '))}…`;
}

function withSiteName(title: string): string {
  const fullTitle = `${title} · ${SITE_NAME}`;
  return fullTitle.length <= MAX_TITLE_LENGTH ? fullTitle : title;
}

function buildPersonStructuredData(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: AUTHOR_NAME,
    jobTitle: 'Engineering Manager',
    worksFor: { '@type': 'Organization', name: 'Seedtag' },
    url: getCanonicalUrl('/'),
    sameAs: AUTHOR_PROFILES,
  };
}

export function buildStaticPageMeta(page: StaticPage): PageMeta {
  const { path, title, description } = STATIC_PAGES[page];
  const meta: PageMeta = { title, description, canonicalUrl: getCanonicalUrl(path), type: 'website' };

  return page === 'home' ? { ...meta, structuredData: buildPersonStructuredData() } : meta;
}

export function buildNotFoundMeta(): PageMeta {
  return {
    title: `Página no encontrada · ${SITE_NAME}`,
    description: 'La página que buscas no existe o ha cambiado de dirección.',
    type: 'website',
    noIndex: true,
  };
}

export function buildArticleMeta(article: Article): PageMeta {
  const canonicalUrl = getCanonicalUrl(`/blog/${article.slug}`);
  const description = summarizeDescription(article.excerpt);
  const publishedTime = article.date || undefined;
  const modifiedTime = article.modifiedDate || undefined;

  return {
    title: withSiteName(article.title),
    description,
    canonicalUrl,
    type: 'article',
    publishedTime,
    modifiedTime,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: article.title,
      description,
      ...(publishedTime ? { datePublished: publishedTime } : {}),
      ...(modifiedTime ? { dateModified: modifiedTime } : {}),
      inLanguage: SITE_LANGUAGE,
      url: canonicalUrl,
      mainEntityOfPage: canonicalUrl,
      author: { '@type': 'Person', name: AUTHOR_NAME, url: getCanonicalUrl('/') },
    },
  };
}

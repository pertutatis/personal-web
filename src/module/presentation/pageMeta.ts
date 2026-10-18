import type Article from '../domain/Article';
import type { PageLanguage } from './site';
import { ARTICLE_LANGUAGE, SITE_LANGUAGE, SITE_NAME, getCanonicalUrl } from './site';
import {
  buildArticleStructuredData,
  buildBlogStructuredData,
  buildHomeStructuredData,
  buildProfilePageStructuredData,
} from './structuredData';

export { SITE_URL, SITE_NAME, SITE_LANGUAGE, getCanonicalUrl } from './site';
export type { PageLanguage } from './site';

const MAX_DESCRIPTION_LENGTH = 160;
// Search engines cut longer titles
const MAX_TITLE_LENGTH = 60;

export type StaticPage = 'home' | 'blog' | 'cv';

export type PageMeta = {
  title: string;
  description: string;
  canonicalUrl?: string;
  type: 'website' | 'article';
  // Only set when the page is not in the site language
  language?: PageLanguage;
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  structuredData?: Record<string, unknown>;
};

const STATIC_PAGES: Record<
  StaticPage,
  Omit<PageMeta, 'canonicalUrl' | 'type'> & { path: string }
> = {
  home: {
    path: '/',
    title: `${SITE_NAME} · Engineering Leader`,
    description:
      'Diego Pertusa Irles, Engineering Leader and Engineering Manager at Seedtag. Writing about leadership, hiring and culture in engineering teams.',
  },
  blog: {
    path: '/blog/',
    title: `Blog · ${SITE_NAME}`,
    description:
      'Notes on engineering leadership: hiring, culture, career growth and how to build high-performing engineering teams.',
  },
  cv: {
    path: '/cv/',
    title: `CV · ${SITE_NAME}`,
    description:
      'Diego Pertusa Irles, Engineering Leader at Seedtag: scaling engineering organizations from 5 to 23+ people, org design and managing managers.',
  },
};

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

export function buildStaticPageMeta(page: StaticPage): PageMeta {
  const { path, title, description, language } = STATIC_PAGES[page];
  const meta: PageMeta = {
    title,
    description,
    canonicalUrl: getCanonicalUrl(path),
    type: 'website',
    ...(language ? { language } : {}),
  };

  if (page === 'home') return { ...meta, structuredData: buildHomeStructuredData() };
  if (page === 'cv') {
    return { ...meta, structuredData: buildProfilePageStructuredData(path, language ?? SITE_LANGUAGE) };
  }
  return meta;
}

export function buildBlogMeta(posts: Pick<Article, 'slug' | 'title' | 'date'>[]): PageMeta {
  return { ...buildStaticPageMeta('blog'), structuredData: buildBlogStructuredData(posts) };
}

export function buildNotFoundMeta(): PageMeta {
  return {
    title: `Page not found · ${SITE_NAME}`,
    description: 'The page you are looking for does not exist or has moved.',
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
    ...(ARTICLE_LANGUAGE !== SITE_LANGUAGE ? { language: ARTICLE_LANGUAGE } : {}),
    publishedTime,
    modifiedTime,
    structuredData: buildArticleStructuredData(article, description, { publishedTime, modifiedTime }),
  };
}

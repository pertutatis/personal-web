import type Article from '../domain/Article';
import { AUTHOR, BLOG_NAME, SITE_LANGUAGE, SITE_NAME, SITE_URL, getCanonicalUrl } from './site';

type StructuredData = Record<string, unknown>;
type BlogPostSummary = Pick<Article, 'slug' | 'title' | 'date'>;

const SCHEMA_CONTEXT = 'https://schema.org';
const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const FIRST_MARKDOWN_IMAGE = /!\[[^\]]*\]\(([^)\s]+)/;

function personReference(): StructuredData {
  return { '@type': 'Person', '@id': PERSON_ID, name: AUTHOR.name, url: getCanonicalUrl('/') };
}

function personNode(): StructuredData {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: AUTHOR.name,
    jobTitle: AUTHOR.jobTitle,
    worksFor: { '@type': 'Organization', name: AUTHOR.employer },
    url: getCanonicalUrl('/'),
    image: AUTHOR.image,
    sameAs: AUTHOR.profiles,
  };
}

function toAbsoluteUrl(url: string): string {
  return /^https?:\/\//.test(url) ? url : SITE_URL + (url.startsWith('/') ? url : `/${url}`);
}

// Google needs an image for article rich results: the first one in the content, or the author
function articleImage(article: Article): string {
  const firstImage = article.content.match(FIRST_MARKDOWN_IMAGE)?.[1];
  return firstImage ? toAbsoluteUrl(firstImage) : AUTHOR.image;
}

export function buildHomeStructuredData(): StructuredData {
  return {
    '@context': SCHEMA_CONTEXT,
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: getCanonicalUrl('/'),
        name: SITE_NAME,
        inLanguage: SITE_LANGUAGE,
        publisher: { '@id': PERSON_ID },
      },
      personNode(),
    ],
  };
}

export function buildProfilePageStructuredData(path: string, language: string): StructuredData {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'ProfilePage',
    url: getCanonicalUrl(path),
    inLanguage: language,
    mainEntity: personNode(),
  };
}

export function buildBlogStructuredData(posts: BlogPostSummary[]): StructuredData {
  const blogUrl = getCanonicalUrl('/blog/');

  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'Blog',
    '@id': `${blogUrl}#blog`,
    url: blogUrl,
    name: BLOG_NAME,
    inLanguage: SITE_LANGUAGE,
    publisher: personReference(),
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: getCanonicalUrl(`/blog/${post.slug}`),
      datePublished: post.date,
    })),
  };
}

type ArticleDates = { publishedTime?: string; modifiedTime?: string };

export function buildArticleStructuredData(
  article: Article,
  description: string,
  { publishedTime, modifiedTime }: ArticleDates
): StructuredData {
  const articleUrl = getCanonicalUrl(`/blog/${article.slug}`);

  return {
    '@context': SCHEMA_CONTEXT,
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${articleUrl}#article`,
        headline: article.title,
        description,
        ...(publishedTime ? { datePublished: publishedTime } : {}),
        ...(modifiedTime ? { dateModified: modifiedTime } : {}),
        inLanguage: SITE_LANGUAGE,
        url: articleUrl,
        mainEntityOfPage: articleUrl,
        image: articleImage(article),
        author: personReference(),
        publisher: personReference(),
        ...(article.serie
          ? { isPartOf: { '@type': 'CreativeWorkSeries', name: article.serie.title } }
          : {}),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: getCanonicalUrl('/') },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: getCanonicalUrl('/blog/') },
          { '@type': 'ListItem', position: 3, name: article.title, item: articleUrl },
        ],
      },
    ],
  };
}

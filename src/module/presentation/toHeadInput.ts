import type { PageMeta } from './pageMeta';
import { SITE_LANGUAGE, SITE_LOCALE, SITE_NAME } from './pageMeta';

type MetaTag = { name: string; content: string } | { property: string; content: string };

export type HeadInput = {
  title: string;
  htmlAttrs: { lang: string };
  link: { rel: string; href: string }[];
  meta: MetaTag[];
  script: { type: string; innerHTML: string }[];
};

// "<" is escaped so content can never close the surrounding <script> tag
function serializeStructuredData(data: Record<string, unknown>): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export default function toHeadInput(meta: PageMeta): HeadInput {
  const tags: MetaTag[] = [
    { name: 'description', content: meta.description },
    { property: 'og:type', content: meta.type },
    { property: 'og:title', content: meta.title },
    { property: 'og:description', content: meta.description },
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:locale', content: SITE_LOCALE },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: meta.title },
    { name: 'twitter:description', content: meta.description },
  ];

  if (meta.canonicalUrl) {
    tags.push({ property: 'og:url', content: meta.canonicalUrl });
  }

  if (meta.noIndex) {
    tags.push({ name: 'robots', content: 'noindex' });
  }

  if (meta.publishedTime) {
    tags.push({ property: 'article:published_time', content: meta.publishedTime });
  }

  if (meta.modifiedTime) {
    tags.push({ property: 'article:modified_time', content: meta.modifiedTime });
  }

  return {
    title: meta.title,
    htmlAttrs: { lang: SITE_LANGUAGE },
    link: meta.canonicalUrl ? [{ rel: 'canonical', href: meta.canonicalUrl }] : [],
    meta: tags,
    script: meta.structuredData
      ? [{ type: 'application/ld+json', innerHTML: serializeStructuredData(meta.structuredData) }]
      : [],
  };
}

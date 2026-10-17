import type Article from '../module/domain/Article';
import {
  SITE_LANGUAGE,
  SITE_URL,
  buildStaticPageMeta,
  getCanonicalUrl,
} from '../module/presentation/pageMeta';
import buildRobotsTxt from './robotsTxt';
import buildSitemap from './sitemap';
import buildRssFeed from './rssFeed';

const STATIC_PATHS = ['/', '/blog/', '/cv/'];

const articleUrl = (article: Article) => getCanonicalUrl(`/blog/${article.slug}`);

// Files written next to the prerendered pages, keyed by file name
export default function buildSeoFiles(
  articles: Article[],
  deployedSiteUrl: string | undefined
): Record<string, string> {
  const blogMeta = buildStaticPageMeta('blog');

  return {
    'robots.txt': buildRobotsTxt(deployedSiteUrl),
    'sitemap.xml': buildSitemap([
      ...STATIC_PATHS.map((path) => ({ url: getCanonicalUrl(path) })),
      ...articles.map((article) => ({ url: articleUrl(article), lastModified: article.date })),
    ]),
    'rss.xml': buildRssFeed(
      {
        title: blogMeta.title,
        description: blogMeta.description,
        siteUrl: getCanonicalUrl('/blog/'),
        feedUrl: `${SITE_URL}/rss.xml`,
        language: SITE_LANGUAGE,
      },
      articles.map((article) => ({
        title: article.title,
        url: articleUrl(article),
        description: article.excerpt,
        publishedAt: article.date,
      }))
    ),
  };
}

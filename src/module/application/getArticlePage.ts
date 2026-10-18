import type Article from '../domain/Article';
import type ArticleRepository from '../domain/ArticleRepository';
import getSeriesNeighbours from './getSeriesNeighbours';

export type SeriesLink = Pick<Article, 'slug' | 'title'>;

export type ArticlePage = {
  article: Article;
  seriesNeighbours: {
    previous: SeriesLink | undefined;
    next: SeriesLink | undefined;
  };
  moreArticles: SeriesLink[];
};

const MORE_ARTICLES_COUNT = 3;

function toSeriesLink(article: Article): SeriesLink {
  return { slug: article.slug, title: article.title };
}

function findSeriesNeighbours(articles: Article[], article: Article) {
  if (!article.serie) {
    return { previous: undefined, next: undefined };
  }

  return getSeriesNeighbours(articles, article.slug);
}

const byNewest = (first: Article, second: Article) => Date.parse(second.date) - Date.parse(first.date);

// Other articles of the same serie first, then the newest ones; never the current
// article nor the ones already linked as series neighbours
function findMoreArticles(articles: Article[], article: Article, excludedSlugs: string[]): Article[] {
  const candidates = articles.filter((candidate) => !excludedSlugs.includes(candidate.slug));
  const isSameSerie = (candidate: Article) =>
    Boolean(article.serie) && candidate.serie?.id === article.serie?.id;

  return [
    ...candidates.filter(isSameSerie).sort(byNewest),
    ...candidates.filter((candidate) => !isSameSerie(candidate)).sort(byNewest),
  ].slice(0, MORE_ARTICLES_COUNT);
}

export default async function getArticlePage(
  repository: ArticleRepository,
  slug: string
): Promise<ArticlePage | null> {
  const article = await repository.getArticle(slug);

  if (!article) {
    return null;
  }

  const articles = (await repository.getArticles()) ?? [];
  const { previous, next } = findSeriesNeighbours(articles, article);
  const linkedSlugs = [article.slug, previous?.slug, next?.slug].filter(
    (linkedSlug): linkedSlug is string => Boolean(linkedSlug)
  );

  return {
    article,
    seriesNeighbours: {
      previous: previous && toSeriesLink(previous),
      next: next && toSeriesLink(next),
    },
    moreArticles: findMoreArticles(articles, article, linkedSlugs).map(toSeriesLink),
  };
}

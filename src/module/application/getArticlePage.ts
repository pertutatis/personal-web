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
};

function toSeriesLink(article: Article | undefined): SeriesLink | undefined {
  return article ? { slug: article.slug, title: article.title } : undefined;
}

async function loadSeriesNeighbours(repository: ArticleRepository, article: Article) {
  if (!article.serie) {
    return { previous: undefined, next: undefined };
  }

  const articles = await repository.getArticles();
  const neighbours = getSeriesNeighbours(articles ?? [], article.slug);

  return { previous: toSeriesLink(neighbours.previous), next: toSeriesLink(neighbours.next) };
}

export default async function getArticlePage(
  repository: ArticleRepository,
  slug: string
): Promise<ArticlePage | null> {
  const article = await repository.getArticle(slug);

  if (!article) {
    return null;
  }

  return { article, seriesNeighbours: await loadSeriesNeighbours(repository, article) };
}

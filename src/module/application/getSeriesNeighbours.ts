import type Article from '../domain/Article';

type SeriesArticle = Pick<Article, 'slug' | 'title' | 'date' | 'serie'>;

export type SeriesNeighbours<T extends SeriesArticle> = {
  previous: T | undefined;
  next: T | undefined;
};

export default function getSeriesNeighbours<T extends SeriesArticle>(
  articles: T[],
  currentSlug: string
): SeriesNeighbours<T> {
  const noNeighbours = { previous: undefined, next: undefined };
  const currentArticle = articles.find((article) => article.slug === currentSlug);
  const serieId = currentArticle?.serie?.id;

  if (!serieId) {
    return noNeighbours;
  }

  const serieArticles = articles
    .filter((article) => article.serie?.id === serieId)
    .sort((first, second) => Date.parse(first.date) - Date.parse(second.date));
  const currentIndex = serieArticles.findIndex((article) => article.slug === currentSlug);

  return {
    previous: serieArticles[currentIndex - 1],
    next: serieArticles[currentIndex + 1],
  };
}

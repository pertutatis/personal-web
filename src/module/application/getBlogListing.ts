import type Article from '../domain/Article';
import type ArticleRepository from '../domain/ArticleRepository';
import estimateReadingMinutes from '../domain/readingTime';

export type BlogListingItem = Pick<Article, 'slug' | 'title' | 'excerpt' | 'date'> & {
  readingMinutes: number;
  serie: { id: string; title: string } | undefined;
};

function toListingItem(article: Article): BlogListingItem {
  return {
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    date: article.date,
    readingMinutes: estimateReadingMinutes(article.content),
    serie: article.serie ? { id: article.serie.id, title: article.serie.title } : undefined,
  };
}

export default async function getBlogListing(
  repository: ArticleRepository
): Promise<BlogListingItem[]> {
  const articles = await repository.getArticles();

  return (articles ?? []).map(toListingItem);
}

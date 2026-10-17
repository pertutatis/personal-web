import { getJson } from './http';
import Article from '../domain/Article';
import articleRepository from '../domain/ArticleRepository';


export type articleResponse = {
  content: string;
  createdAt: string;
  publishedAt: string;
  excerpt: string;
  id: string;
  relatedLinks: Array<{
    text: string;
    url: string;
  }>;
  slug: string;
  title: string;
  updatedAt: string;
  books: Array<{
    author: string;
    createdAt: string;
    description: string;
    id: string;
    isbn: string;
    purchaseLink: string;
    title: string;
    updatedAt: string;
  }>;
  serie: {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
  } | undefined;
};

const ARTICLES_ENDPOINT = 'https://blog-api.diegopertusa.com/api/blog/articles';

function toArticle(response: articleResponse): Article {
  return new Article({
    title: response.title,
    content: response.content,
    slug: response.slug,
    excerpt: response.excerpt,
    date: response.publishedAt,
    books: response.books.map((book) => ({
      id: book.id,
      title: book.title,
      description: book.description,
      image: book.id,
      url: book.purchaseLink,
    })),
    relatedLinks: response.relatedLinks.map((link) => ({
      text: link.text,
      link: link.url,
    })),
    serie: getSerie(response.serie),
    category: 'General', // Assuming a default category, adjust as needed
  });
}

export default class BackendRepository implements articleRepository {
  async getArticles(): Promise<Article[] | null> {
    try {
      const data = await getJson<articleResponse[]>(ARTICLES_ENDPOINT);
      return data ? data.map(toArticle) : null;
    } catch (error) {
      console.error('Error fetching articles:', error);
      return null;
    }
  }

  async getArticle(slug: string): Promise<Article | null> {
    try {
      const data = await getJson<articleResponse>(`${ARTICLES_ENDPOINT}/by-slug/${slug}`);
      return data ? toArticle(data) : null;
    } catch (error) {
      console.error('Error fetching article:', error);
      return null;
    }
  }
}

function getSerie(serie: articleResponse['serie'] | undefined) {
  if (!serie) {
    return undefined;
  }

  return {
    id: serie.id,
    title: serie.title,
    description: serie.description,
    createdAt: serie.createdAt,
    updatedAt: serie.updatedAt,
  };
}

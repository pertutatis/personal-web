import { HTTP } from './http';
import Article from '../domain/Article';
import articleRepository from '../domain/ArticleRepository';


export type articleResponse = {
  content: string;
  createdAt: string;
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
};

export default class getArticle implements articleRepository {
  getArticles() {
    return HTTP('http://localhost:3000/api/blog/articles', '', 'GET')
      .then((response) => {
        if (!response) {
          return Promise.resolve(null);
        }
        return response.json();
      })
      .then((data: articleResponse[] | null) => {
        if (!data) {
          return Promise.resolve(null);
        }

        const responseArticles = data.map((article) => {
          return new Article({
            title: article.title,
            content: article.content,
            slug: article.slug,
            excerpt: article.excerpt,
            date: article.createdAt,
            books: article.books.map((book) => ({
              id: book.id,
              title: book.title,
              description: book.description,
              image: book.id,
              url: book.purchaseLink,
            })),
            relatedLinks: article.relatedLinks.map((link) => ({
                text: link.text,
                link: link.url,
            })),
            category: 'General', // Assuming a default category, adjust as needed
          });
        });

        return Promise.resolve(responseArticles);
      })
      .catch((error) => {
        console.error('Error fetching articles:', error);
        return Promise.resolve(null);
      });
  }

  getArticle(slug: string) {
    return HTTP(`http://localhost:3000/api/blog/articles/by-slug/${slug}`, '', 'GET')
      .then((response) => {
        if (!response) {
          return Promise.resolve(null);
        }
        return response.json();
      })
      .then((data: articleResponse | null) => {
        if (!data) {
          return Promise.resolve(null);
        }

        let responseArticle = new Article({
          title: data.title,
          content: data.content,
          slug: data.slug,
          excerpt: data.excerpt,
          date: data.createdAt,
          books: data.books.map((book) => ({
            id: book.id,
            title: book.title,
            description: book.description,
            image: book.id,
            url: book.purchaseLink,
          })),
          relatedLinks: data.relatedLinks.map((link) => ({
            text: link.text,
            link: link.url,
          })),
          category: 'General', // Assuming a default category, adjust as needed
        });

        return Promise.resolve(responseArticle);
      })
      .catch((error) => {
        console.error('Error fetching articles:', error);
        return Promise.resolve(null);
      });
  }
}

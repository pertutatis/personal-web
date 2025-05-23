import Article from '../domain/Article';
import Book from '../domain/Book';
import articleRepository from '../domain/ArticleRepository';

import articles from '../../content/articles';
import books from '../../content/books';

export interface IResponse extends Array<Article> {}

export default class getArticle implements articleRepository {
  getArticles() {
    if (!articles) {
      Promise.resolve();
    }

    const responseArticles = articles.map((article) => {
      const mappedBooks = this.mapBooks(article.books, books);

      return new Article({
        ...article,
        books: mappedBooks
      });
    });

    return Promise.resolve(responseArticles);
  }

  private mapBooks(articleBooks: number[], books: Book[]): Book[] {
    if (!articleBooks.length) {
      return [];
    }

    const mappedBooks = this.findBooks(articleBooks, books);

    return !mappedBooks.length ? [] : mappedBooks;
  }

  private findBooks(articleBooks: number[], books: Book[]): Book[] {
    return articleBooks
      .map((bookId) => {
        const book = books.find((contentItem) => contentItem.id === bookId);
        return !book ? undefined : new Book(book);
      })
      .filter((item): item is Book => !!item);
  }
}

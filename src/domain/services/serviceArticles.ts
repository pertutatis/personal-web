import Article, { IArticle, IArticleResponse } from '../models/Article';
import Book, { IBook }  from '../models/Book'

export interface IResponse extends Array<IArticle> {}

class serviceArticles {
  getArticles(articles: Array<IArticleResponse>, books: Array<IBook>): Array<IArticle> {
    if (!articles) {
      return [];
    }

    return articles.map((article) => {
      const mappedBooks = this.getBooks(article.books, books);

      return new Article({
        ...article,
        books: mappedBooks,
      });
    });
  }

  getArticle(articles: Array<IArticleResponse>, books: Array<IBook>, slug: string) {
    const allArticles = this.getArticles(articles, books);

    const selectedArticle = allArticles.find(
      (contentItem) => contentItem.slug === slug
    );

    if (!selectedArticle) {
      return false;
    }

    return selectedArticle;
  }

  private getBooks(articleBooks: number[], books: IBook[]): IBook[] {
    if (!articleBooks.length) {
      return [];
    }

    const mappedBooks = this.findBooks(articleBooks, books)

    return !mappedBooks.length ? [] : mappedBooks;
  }

  private findBooks(articleBooks: number[], books: IBook[]): IBook[] {
    return articleBooks
      .map((bookId) => {
        const book = books.find((contentItem) => contentItem.id === bookId);
        return !book ? undefined : new Book(book);
      })
      .filter((item): item is IBook => !!item);
  }
}

export default new serviceArticles()

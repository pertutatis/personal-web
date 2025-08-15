import Book from './Book';
import Serie from './Series';

type CreateArticleParams = {
  title: string;
  content: string;
  slug: string;
  excerpt: string;
  date: string;
  books: Array<Book>;
  category: String;
  relatedLinks: { text: string; link: string }[];
  serie: Serie | undefined;
};

export default class Article {
  title: string;
  content: string;
  slug: string;
  excerpt: string;
  date: string;
  books: Array<Book>;
  category: String;
  relatedLinks: { text: string; link: string }[];
  serie: Serie | undefined;
  
  constructor(content: CreateArticleParams) {
    this.title = content.title;
    this.content = content.content;
    this.slug = content.slug;
    this.excerpt = content.excerpt;
    this.date = content.date;
    this.books = content.books;
    this.category = content.category;
    this.relatedLinks = content.relatedLinks;
    this.serie = content.serie;
  }
}

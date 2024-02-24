import { IBook } from './Book';

export interface IArticle {
  title: string;
  content: string;
  slug: string;
  excerpt: string;
  date: string;
  books: Array<IBook>;
  category: String;
  relatedLinks: { text: string; link: string }[];
}

export interface IArticleResponse {
  title: string;
  content: string;
  slug: string;
  excerpt: string;
  date: string;
  books: Array<number>;
  category: String;
  relatedLinks: { text: string; link: string }[];
}

export default class Article implements IArticle {
  title: string;
  content: string;
  slug: string;
  excerpt: string;
  date: string;
  books: Array<IBook>;
  category: String;
  relatedLinks: { text: string; link: string }[];
  constructor(content: IArticle) {
    this.title = content.title;
    this.content = content.content;
    this.slug = content.slug;
    this.excerpt = content.excerpt;
    this.date = content.date;
    this.books = content.books;
    this.category = content.category;
    this.relatedLinks = content.relatedLinks;
  }
}

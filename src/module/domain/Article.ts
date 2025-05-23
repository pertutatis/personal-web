import Book from './Book';

type CreateArticleParams = {
  title: string;
  content: string;
  slug: string;
  excerpt: string;
  date: string;
  books: Array<Book>;
  category: String;
  relatedLinks: { text: string; link: string }[];
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
  
  constructor(content: CreateArticleParams) {
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

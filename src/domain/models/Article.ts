export interface IArticle {
  title: string;
  content: string;
  slug: string;
  excerpt: string;
  // date: string;
  // books: Array;
}

export default class Article implements IArticle {
  title: string;
  content: string;
  slug: string;
  excerpt: string;
  constructor(content: IArticle) {
    this.title = content.title;
    this.content = content.content;
    this.slug = content.slug;
    this.excerpt = content.excerpt;
  }
}

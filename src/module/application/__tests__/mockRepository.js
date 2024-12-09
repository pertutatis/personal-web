import Article from '../../domain/Article';
import Book from '../../domain/Book';

const articles = [
  {
    content: 'Hey, I am an article',
    excerpt: 'Story of an article',
    slug: 'this-is-an-article',
    title: 'This is an article',
    date: '5 de febrero',
    books: [1],
    category: '4',
  },
  {
    content: 'Hey, I am another article',
    excerpt: 'Story of an article',
    slug: 'this-is-another-article',
    title: 'This is an article',
    date: '6 de febrero',
    books: [],
    category: '2',
  },
  {
    content: 'Hey, I am a third article',
    excerpt: 'Story of an article',
    slug: 'this-is-another-article',
    title: 'This is an article',
    date: '6 de febrero',
    books: [2],
    category: '2',
  },
];

const books = [
  {
    id: 1,
    title: "book's title",
    description: 'books description',
    image: 'url.jpg',
    url: 'buy.es',
  },
];

export const responseArticles = [
  new Article({
    ...articles[0],
    books: [new Book(books[0])],
  }),
  new Article(articles[1]),
  new Article({
    ...articles[2],
    books: [],
  }),
];

export default class mockRepo {
  constructor(type) {
    this.type = type;
  }
  getArticles() {
    if (this.type == 'empty') {
      return Promise.resolve();
    }

    return Promise.resolve(responseArticles);
  }
}

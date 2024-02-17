import serviceArticle from '../serviceArticles'
import Article from '../../models/Article';
import Book from '../../models/Book';

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

const books = [{
  id: 1,
  title: "book's title",
  description: "books description",
  image: "url.jpg",
  url: "buy.es",
}];

const responseArticles = [
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



describe('Article service', () => {
  it('retrieves the data empty if there is no articles', () => {
    const articlesCollection = serviceArticle.getArticles();

    expect(articlesCollection).toStrictEqual([]);
  });

  it('retrieves the collection of articles', () => {
    const articlesCollection = serviceArticle.getArticles(articles, books);

    expect(articlesCollection).toStrictEqual(responseArticles);
  });

  it('retrieves no article', () => {
    const articlesCollection = serviceArticle.getArticle(articles, books, 'miau');

    expect(articlesCollection).toBe(false);
  });

  it('retrieves an article', () => {
    const articlesCollection = serviceArticle.getArticle(articles, books, articles[1].slug);

    expect(articlesCollection).toStrictEqual(new Article(articles[1]));
  });
});

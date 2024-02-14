import serviceArticle from '../serviceArticles'
import Article from '../../models/Article';

const articles = [
  {
    content: 'Hey, I am an article',
    excerpt: 'Story of an article',
    slug: 'this-is-an-article',
    title: 'This is an article',
  },
  {
    content: 'Hey, I am another article',
    excerpt: 'Story of an article',
    slug: 'this-is-another-article',
    title: 'This is an article',
  },
];

const responseArticles = [new Article(articles[0]), new Article(articles[1])];



describe('Article service', () => {
  it('retrieves the data empty if there is no articles', () => {
    const articlesCollection = serviceArticle.getArticles();

    expect(articlesCollection).toStrictEqual([]);
  });

  it('retrieves the collection of articles', () => {
    const articlesCollection = serviceArticle.getArticles(articles);

    expect(articlesCollection).toStrictEqual(responseArticles);
  });

  it('retrieves no article', () => {
    const articlesCollection = serviceArticle.getArticle(articles, 'miau');

    expect(articlesCollection).toBe(false);
  });

  it('retrieves an article', () => {
    const articlesCollection = serviceArticle.getArticle(articles, articles[1].slug);

    expect(articlesCollection).toStrictEqual(new Article(articles[1]));
  });
});

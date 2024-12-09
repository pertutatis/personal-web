import getArticle from '../getArticle';
import mockRepo, { responseArticles } from './mockRepository';

describe('get all articles', () => {
  it('retrieves no article', async () => {
    const articlesCollection = await getArticle(new mockRepo(), 'miau');

    expect(articlesCollection).toBe(null);
  });

  it('retrieves no article on empty collection', async () => {
    const articlesCollection = await getArticle(new mockRepo('empty'), 'miau');

    expect(articlesCollection).toBe(null);
  });

  it('retrieves an article', async () => {
    const articlesCollection = await getArticle(
      new mockRepo(),
      responseArticles[1].slug
    );

    expect(articlesCollection).toStrictEqual(responseArticles[1]);
  });
});

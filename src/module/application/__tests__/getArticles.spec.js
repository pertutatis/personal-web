import getArticles from '../getArticles';
import mockRepo, { responseArticles } from './mockRepository';

describe('get all articles', () => {
  it('retrieves the data empty if there is no articles', async () => {
    const articlesCollection = await getArticles(new mockRepo('empty'));

    expect(articlesCollection).toBeUndefined();
  });

     it('retrieves the collection of articles', async () => {
    const articlesCollection = await getArticles(new mockRepo());

    expect(articlesCollection).toStrictEqual(responseArticles);
  });
});

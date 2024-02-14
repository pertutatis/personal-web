import getArticle from '../getArticle';
import serviceArticles from '../../domain/services/serviceArticles';
import * as articles from '../../articles/index';

serviceArticles.getArticle = jest.fn();

afterEach(() => {
  jest.clearAllMocks()
})

describe('api success', () => {
  beforeEach(() => {
    articles.retrieveArticles = jest
      .fn()
      .mockResolvedValue(Promise.resolve([]));
  })
  
  it('gets a response', async () => {
    await getArticle();
    
    expect(serviceArticles.getArticle).toHaveBeenCalled();
  })
})


import getArticles from '../getArticles';
import serviceArticles from '../../domain/services/serviceArticles';
import * as articles from '../../articles/index';

serviceArticles.getArticles = jest.fn();

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
    await getArticles();
    
    expect(serviceArticles.getArticles).toHaveBeenCalled();
  })
})


import getBooks from '../getBooks';
import * as content from '../../content/index';

afterEach(() => {
  jest.clearAllMocks();
});

describe('api success', () => {
  beforeEach(() => {
    content.retrieveBooks = jest.fn().mockResolvedValue(Promise.resolve([]));
  });

  it('gets a response', async () => {
    await getBooks();

    expect(content.retrieveBooks).toHaveBeenCalled();
  });
});

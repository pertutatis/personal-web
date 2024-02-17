import serviceArticles from '../domain/services/serviceArticles'
import { IArticle } from '../domain/models/Article';
import { retrieveArticles } from '../content/index';
import getBooks from './getBooks';

export default async function getArticles(slug: string): Promise<boolean | IArticle> {
  const books = await getBooks();

  return retrieveArticles().then((response) => {
    return serviceArticles.getArticle(response, books, slug);
  });
};

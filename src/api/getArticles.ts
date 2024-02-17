import serviceArticles from '../domain/services/serviceArticles'
import { IArticle } from '../domain/models/Article';
import { retrieveArticles, retrieveBooks } from '../content/index';
import getBooks from './getBooks';

export default async function getArticles(): Promise<boolean | IArticle[]> {
  const books = await getBooks();

  return retrieveArticles()
    .then((response) => {
      return serviceArticles.getArticles(response, books);
    })
}



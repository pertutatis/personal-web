import serviceArticles from '../domain/content/services/serviceArticles'
import { IArticle } from '../domain/content/models/Article';
import retrieveArticles from '../articles/index';


export default function getArticles(): Promise<boolean | IArticle[]> {
  return retrieveArticles()
    .then((response) => {
      return serviceArticles.getArticles(response);
    })
    .catch((error) => {
      throw error;
    });
}



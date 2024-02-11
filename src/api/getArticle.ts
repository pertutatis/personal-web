import serviceArticles from '../domain/content/services/serviceArticles'
import { IArticle } from '../domain/content/models/Article';
import retrieveArticles from '../articles/index';


export default function getArticles(slug: string): Promise<boolean | IArticle> {
    return retrieveArticles()
      .then((response) => {
        return serviceArticles.getArticle(response, slug);
      })
      .catch((error) => {
        throw error;
      });
    }


import serviceArticles from '../domain/services/serviceArticles'
import { IArticle } from '../domain/models/Article';
import retrieveArticles from '../articles/index';


export default function getArticles(slug: string): Promise<boolean | IArticle> {
    return retrieveArticles()
      .then((response) => {
        return serviceArticles.getArticle(response, slug);
      })
    }


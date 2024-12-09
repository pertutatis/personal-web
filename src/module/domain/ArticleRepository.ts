import { IArticle } from './Article';

export default interface ArticleRepository {
  getArticles(): Promise<IArticle[] | null>;
}

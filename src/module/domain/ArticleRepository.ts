import Article from './Article';

export default interface ArticleRepository {
  getArticles(): Promise<Article[] | null>;
}

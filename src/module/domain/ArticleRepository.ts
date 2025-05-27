import Article from './Article';

export default interface ArticleRepository {
  getArticles(): Promise<Article[] | null>;
  getArticle(slug: string): Promise<Article | null>;
}

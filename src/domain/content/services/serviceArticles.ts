import Article, { IArticle }  from '../models/Article'

export interface IResponse extends Array<IArticle> {}
interface inArray {
  title: string;
  content: string;
  excerpt: string;
  slug: string;
}

class serviceArticles {
  getArticles(articles: Array<inArray>): Array<IArticle> {
    const allArticles = articles.map((article) => {
      return new Article(article);
    });
    return allArticles;
  }

  getArticle(articles: Array<inArray>, slug: string) {
    const allArticles = this.getArticles(articles);

    const selectedArticle = allArticles.find(
      (contentItem) => contentItem.slug === slug
    );

    if (!selectedArticle) {
      return false;
    }

    return selectedArticle;
  }

}

export default new serviceArticles()

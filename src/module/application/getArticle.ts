import articleRepository from '../domain/ArticleRepository';

export default async function getArticle(repository: articleRepository, slug: string) {
  const article = await repository.getArticle(slug);

  if (!article) {
    return null
  }

  return article;
}

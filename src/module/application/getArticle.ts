import articleRepository from '../domain/ArticleRepository';

export default async function getArticle(repository: articleRepository, slug: string) {
  const allArticles = await repository.getArticles();

  if (!allArticles) {
    return null
  }

  const selectedArticle = allArticles.find(
    (contentItem) => contentItem.slug === slug
  );

  if (!selectedArticle) {
    return null
  }

  return selectedArticle;
}

import articleRepository from '../domain/ArticleRepository';

export default function getArticles(repository: articleRepository) {
  return repository.getArticles();
}

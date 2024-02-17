import { IArticleResponse } from '../domain/models/Article';
import post1 from './articles/post-1';

export default function retrieveArticles(): Promise<IArticleResponse[]> {
  return new Promise((resolve) => {
    resolve([post1]);
  });
}

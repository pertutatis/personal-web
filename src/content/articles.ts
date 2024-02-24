import { IArticleResponse } from '../domain/models/Article';
import post1 from './articles/post-1';
import post2 from './articles/post-2';

export default function retrieveArticles(): Promise<IArticleResponse[]> {
  return new Promise((resolve) => {
    resolve([post1, post2]);
  });
}

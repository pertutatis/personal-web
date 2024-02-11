import post1 from './post-1';

export interface IArticle {
  title: string;
  content: string;
  slug: string;
  excerpt: string;
}

export default function retrieveArticles(): Promise<Array<IArticle>> {
  return new Promise((resolve) => {
    resolve([post1]);
  });
}

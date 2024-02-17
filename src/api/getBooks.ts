import { IBook } from '../domain/models/Book';
import { retrieveBooks } from '../content/index';

export default function getBooks(): Promise<IBook[]> {
  return retrieveBooks().then((response) => {
    return response;
  });
}

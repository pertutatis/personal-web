import { IBook } from '../domain/models/Book';

const books = [{
    id: 1,
    title: "Radical Candor",
    description: "Lorem ipsum",
    image: "/img/books/radical-candor.jpg",
    url: "to-buy.com",
  }];

export default function retrieveBooks(): Promise<IBook[]> {
  return new Promise((resolve) => {
    resolve(books);
  });
}

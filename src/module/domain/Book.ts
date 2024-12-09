export interface IBook {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
}

export default class Book implements IBook {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  constructor(content: IBook) {
    this.id = content.id;
    this.title = content.title;
    this.description = content.description;
    this.image = content.image;
    this.url = content.url;
  }
}

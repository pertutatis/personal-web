type CreateBookParams = {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
};

export default class Book {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  
  constructor(content: CreateBookParams) {
    this.id = content.id;
    this.title = content.title;
    this.description = content.description;
    this.image = content.image;
    this.url = content.url;
  }
}

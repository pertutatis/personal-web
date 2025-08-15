type CreateSerieParams = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export default class Serie {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  
  constructor(content: CreateSerieParams) {
    this.id = content.id;
    this.title = content.title;
    this.description = content.description;
    this.createdAt = content.createdAt;
    this.updatedAt = content.updatedAt;
  }
}

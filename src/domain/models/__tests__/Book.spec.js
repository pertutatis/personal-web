import Book from "../Book";

const title = "Be less stupid, stupid";
const description = "How to be less stupid in life";
const id = 5;
const image = "stupid.jpg";
const url = "http://stup.id";

describe("Book model", () => {
  it("retrieves the model", () => {
    const book = new Book({
      title,
      description,
      id,
      image,
      url,
    });

    expect(book).toMatchInlineSnapshot(`
      Book {
        "description": "How to be less stupid in life",
        "id": 5,
        "image": "stupid.jpg",
        "title": "Be less stupid, stupid",
        "url": "http://stup.id",
      }
    `);
  });
});

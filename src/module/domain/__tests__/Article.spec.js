import Article from "../Article";

const title = "This is an article";
const content = "Hey, I am an article";
const slug = "this-is-an-article";
const excerpt = "Story of an article";
const date = "5 de febrero";
const books = ["5", "4"];
const category = "4";

describe("Article model", () => {
  it("retrieves the model", () => {
    const article = new Article({
      title,
      content,
      slug,
      excerpt,
      date,
      books,
      category,
    });

    expect(article).toMatchInlineSnapshot(`
      Article {
        "books": Array [
          "5",
          "4",
        ],
        "category": "4",
        "content": "Hey, I am an article",
        "date": "5 de febrero",
        "excerpt": "Story of an article",
        "modifiedDate": undefined,
        "relatedLinks": undefined,
        "serie": undefined,
        "slug": "this-is-an-article",
        "title": "This is an article",
      }
    `);
  });

  it("keeps the last modification date", () => {
    const article = new Article({ title, content, slug, excerpt, date, books, category, modifiedDate: "2025-08-24T10:00:00.000Z" });

    expect(article.modifiedDate).toBe("2025-08-24T10:00:00.000Z");
  });
});

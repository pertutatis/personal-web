import Article from "../Article";

const title = "This is an article";
const content = "Hey, I am an article";
const slug = "this-is-an-article";
const excerpt = "Story of an article";

describe("Article model", () => {
  it("retrieves the model", () => {
    const article = new Article({ title, content, slug, excerpt });

    expect(article).toMatchInlineSnapshot(`
      Article {
        "content": "Hey, I am an article",
        "excerpt": "Story of an article",
        "slug": "this-is-an-article",
        "title": "This is an article",
      }
    `);
  });
});

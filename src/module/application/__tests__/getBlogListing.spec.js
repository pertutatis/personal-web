import getBlogListing from "../getBlogListing";

const serie = { id: "culture", title: "Cultura distribuida", description: "Long description" };

const article = {
  slug: "career-conversations",
  title: "Career conversations",
  excerpt: "Excerpt",
  date: "2025-08-16T00:00:00Z",
  content: Array(440).fill("palabra").join(" "),
  books: [{ id: "1" }],
  relatedLinks: [],
  category: "General",
  serie,
};

describe("getBlogListing", () => {
  it("returns listing items without the article content", async () => {
    const repository = { getArticles: () => Promise.resolve([article]) };

    const listing = await getBlogListing(repository);

    expect(listing).toEqual([
      {
        slug: "career-conversations",
        title: "Career conversations",
        excerpt: "Excerpt",
        date: "2025-08-16T00:00:00Z",
        readingMinutes: 2,
        serie: { id: "culture", title: "Cultura distribuida" },
      },
    ]);
  });

  it("keeps articles without series", async () => {
    const repository = { getArticles: () => Promise.resolve([{ ...article, serie: undefined }]) };

    const [item] = await getBlogListing(repository);

    expect(item.serie).toBeUndefined();
  });

  it("returns an empty listing when the articles cannot be loaded", async () => {
    const repository = { getArticles: () => Promise.resolve(null) };

    expect(await getBlogListing(repository)).toEqual([]);
  });
});

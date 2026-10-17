import getArticlePage from "../getArticlePage";

const cultureSerie = { id: "culture", title: "Cultura distribuida", description: "" };

const buildArticle = (slug, date, serie) => ({
  slug,
  date,
  serie,
  title: `Title ${slug}`,
  content: "Content",
  excerpt: "Excerpt",
  books: [],
  relatedLinks: [],
  category: "General",
});

const articles = [
  buildArticle("culture-1", "2025-01-01T00:00:00Z", cultureSerie),
  buildArticle("culture-2", "2025-02-01T00:00:00Z", cultureSerie),
  buildArticle("standalone", "2025-01-10T00:00:00Z", undefined),
];

function fakeRepository() {
  return {
    getArticle: jest.fn((slug) =>
      Promise.resolve(articles.find((article) => article.slug === slug) ?? null)
    ),
    getArticles: jest.fn(() => Promise.resolve(articles)),
  };
}

describe("getArticlePage", () => {
  it("returns the article with links to its series neighbours", async () => {
    const page = await getArticlePage(fakeRepository(), "culture-2");

    expect(page?.article.slug).toBe("culture-2");
    expect(page?.seriesNeighbours).toEqual({
      previous: { slug: "culture-1", title: "Title culture-1" },
      next: undefined,
    });
  });

  it("does not request the article list for an article without series", async () => {
    const repository = fakeRepository();

    const page = await getArticlePage(repository, "standalone");

    expect(page?.seriesNeighbours).toEqual({ previous: undefined, next: undefined });
    expect(repository.getArticles).not.toHaveBeenCalled();
  });

  it("returns null when the article does not exist", async () => {
    expect(await getArticlePage(fakeRepository(), "missing")).toBeNull();
  });

  it("returns no neighbours when the article list cannot be loaded", async () => {
    const repository = fakeRepository();
    repository.getArticles.mockResolvedValue(null);

    const page = await getArticlePage(repository, "culture-2");

    expect(page?.seriesNeighbours).toEqual({ previous: undefined, next: undefined });
  });
});

import BackendRepository from "../backendRepository";

const articleResponse = {
  id: "1",
  title: "Career conversations",
  content: "Content",
  slug: "career-conversations",
  excerpt: "Excerpt",
  createdAt: "2025-08-01T00:00:00.000Z",
  publishedAt: "2025-08-16T00:00:00.000Z",
  updatedAt: "2025-08-24T00:00:00.000Z",
  relatedLinks: [{ text: "Link", url: "https://example.com" }],
  books: [
    {
      id: "book-1",
      title: "Radical Candor",
      description: "A book",
      author: "Kim Scott",
      isbn: "123",
      purchaseLink: "https://www.goodreads.com/book/show/1",
      createdAt: "",
      updatedAt: "",
    },
  ],
  serie: undefined,
};

function mockFetchResponse(status, body) {
  global.fetch = jest.fn().mockResolvedValue({
    ok: status >= 200 && status < 300,
    status,
    json: () => Promise.resolve(body),
  });
}

describe("BackendRepository", () => {
  afterEach(() => {
    delete global.fetch;
    jest.restoreAllMocks();
  });

  it("maps an article response into an Article", async () => {
    mockFetchResponse(200, articleResponse);

    const article = await new BackendRepository().getArticle("career-conversations");

    expect(article?.title).toBe("Career conversations");
    expect(article?.date).toBe("2025-08-16T00:00:00.000Z");
    expect(article?.modifiedDate).toBe("2025-08-24T00:00:00.000Z");
    expect(article?.books[0]).toEqual({
      id: "book-1",
      title: "Radical Candor",
      description: "A book",
      image: "book-1",
      url: "https://www.goodreads.com/book/show/1",
    });
    expect(article?.relatedLinks).toEqual([{ text: "Link", link: "https://example.com" }]);
  });

  it("requests the article by slug with a GET", async () => {
    mockFetchResponse(200, articleResponse);

    await new BackendRepository().getArticle("career-conversations");

    expect(global.fetch).toHaveBeenCalledWith(
      "https://blog-api.diegopertusa.com/api/blog/articles/by-slug/career-conversations",
      expect.objectContaining({ method: "GET" })
    );
  });

  it("returns null when the article does not exist", async () => {
    mockFetchResponse(404, { error: "Article not found" });

    const article = await new BackendRepository().getArticle("missing");

    expect(article).toBeNull();
  });

  it("returns the list of articles", async () => {
    mockFetchResponse(200, [articleResponse]);

    const articles = await new BackendRepository().getArticles();

    expect(articles).toHaveLength(1);
    expect(articles?.[0].slug).toBe("career-conversations");
  });

  it("returns null when the request fails", async () => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    global.fetch = jest.fn().mockRejectedValue(new Error("network down"));

    const articles = await new BackendRepository().getArticles();

    expect(articles).toBeNull();
  });
});

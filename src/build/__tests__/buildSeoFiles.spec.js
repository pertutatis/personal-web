import buildSeoFiles from "../buildSeoFiles";

const articles = [
  {
    slug: "career-conversations",
    title: "Career conversations",
    excerpt: "Excerpt",
    date: "2025-08-16T10:00:00.000Z",
    modifiedDate: "2025-08-24T10:00:00.000Z",
    content: "Content",
    books: [],
    relatedLinks: [],
    category: "General",
    serie: undefined,
  },
];

describe("buildSeoFiles", () => {
  it("generates robots.txt, sitemap.xml and rss.xml", () => {
    const files = buildSeoFiles(articles, "https://diegopertusa.com");

    expect(Object.keys(files).sort()).toEqual(["robots.txt", "rss.xml", "sitemap.xml"]);
  });

  it("lists the static pages and every article in the sitemap", () => {
    const { "sitemap.xml": sitemap } = buildSeoFiles(articles, undefined);

    expect(sitemap).toContain("<loc>https://diegopertusa.com/</loc>");
    expect(sitemap).toContain("<loc>https://diegopertusa.com/blog/</loc>");
    expect(sitemap).toContain("<loc>https://diegopertusa.com/cv/</loc>");
    expect(sitemap).toContain(
      "<loc>https://diegopertusa.com/blog/career-conversations/</loc><lastmod>2025-08-24</lastmod>"
    );
  });

  it("publishes every article in the feed with its canonical url", () => {
    const { "rss.xml": feed } = buildSeoFiles(articles, undefined);

    expect(feed).toContain("<title>Blog · Diego Pertusa</title>");
    expect(feed).toContain("<language>en</language>");
    expect(feed).toContain("<link>https://diegopertusa.com/blog/career-conversations/</link>");
    expect(feed).toContain("<description>Excerpt</description>");
  });

  it("blocks indexing when deployed on a Netlify subdomain", () => {
    const { "robots.txt": robots } = buildSeoFiles(articles, "https://diegopertusa.netlify.app");

    expect(robots).toContain("Disallow: /");
  });
});

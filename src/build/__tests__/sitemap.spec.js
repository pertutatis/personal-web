import buildSitemap from "../sitemap";

describe("buildSitemap", () => {
  it("lists every url with its last modification date", () => {
    const sitemap = buildSitemap([
      { url: "https://diegopertusa.com/" },
      {
        url: "https://diegopertusa.com/blog/career-conversations/",
        lastModified: "2025-08-16T10:00:00.000Z",
      },
    ]);

    expect(sitemap).toBe(
      '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
        "  <url><loc>https://diegopertusa.com/</loc></url>\n" +
        "  <url><loc>https://diegopertusa.com/blog/career-conversations/</loc><lastmod>2025-08-16</lastmod></url>\n" +
        "</urlset>\n"
    );
  });

  it("escapes xml special characters in urls", () => {
    const sitemap = buildSitemap([{ url: "https://diegopertusa.com/?a=1&b=2" }]);

    expect(sitemap).toContain("<loc>https://diegopertusa.com/?a=1&amp;b=2</loc>");
  });

  it("ignores invalid dates", () => {
    const sitemap = buildSitemap([{ url: "https://diegopertusa.com/", lastModified: "nope" }]);

    expect(sitemap).not.toContain("<lastmod>");
  });
});

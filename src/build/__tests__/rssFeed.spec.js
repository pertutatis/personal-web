import buildRssFeed from "../rssFeed";

const channel = {
  title: "Blog · Diego Pertusa",
  description: "Blog description",
  siteUrl: "https://diegopertusa.com/blog/",
  feedUrl: "https://diegopertusa.com/rss.xml",
  language: "es",
};

const olderItem = {
  title: "Older",
  url: "https://diegopertusa.com/blog/older/",
  description: "Older excerpt",
  publishedAt: "2025-01-01T10:00:00.000Z",
};

const newerItem = {
  title: "Career conversations & more",
  url: "https://diegopertusa.com/blog/career-conversations/",
  description: "Excerpt with <html>",
  publishedAt: "2025-08-16T10:00:00.000Z",
};

describe("buildRssFeed", () => {
  it("describes the channel", () => {
    const feed = buildRssFeed(channel, []);

    expect(feed.startsWith('<?xml version="1.0" encoding="UTF-8"?>')).toBe(true);
    expect(feed).toContain('<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">');
    expect(feed).toContain("<title>Blog · Diego Pertusa</title>");
    expect(feed).toContain("<link>https://diegopertusa.com/blog/</link>");
    expect(feed).toContain("<language>es</language>");
    expect(feed).toContain(
      '<atom:link href="https://diegopertusa.com/rss.xml" rel="self" type="application/rss+xml"/>'
    );
  });

  it("lists items newest first with escaped text and RFC 822 dates", () => {
    const feed = buildRssFeed(channel, [olderItem, newerItem]);

    expect(feed.indexOf("Career conversations")).toBeLessThan(feed.indexOf("<title>Older</title>"));
    expect(feed).toContain(
      "<item>\n" +
        "      <title>Career conversations &amp; more</title>\n" +
        "      <link>https://diegopertusa.com/blog/career-conversations/</link>\n" +
        '      <guid isPermaLink="true">https://diegopertusa.com/blog/career-conversations/</guid>\n' +
        "      <description>Excerpt with &lt;html&gt;</description>\n" +
        "      <pubDate>Sat, 16 Aug 2025 10:00:00 GMT</pubDate>\n" +
        "    </item>"
    );
  });

  it("uses the newest item date as the channel build date", () => {
    const feed = buildRssFeed(channel, [olderItem, newerItem]);

    expect(feed).toContain("<lastBuildDate>Sat, 16 Aug 2025 10:00:00 GMT</lastBuildDate>");
  });
});

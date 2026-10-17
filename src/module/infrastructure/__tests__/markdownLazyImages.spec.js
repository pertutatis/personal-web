import MarkdownIt from "markdown-it";
import markdownLazyImages from "../markdownLazyImages";

describe("markdownLazyImages", () => {
  it("adds lazy loading and async decoding to images", () => {
    const html = new MarkdownIt().use(markdownLazyImages).render("![levels](/imgs/levels.png)");

    expect(html).toContain('loading="lazy"');
    expect(html).toContain('decoding="async"');
    expect(html).toContain('src="/imgs/levels.png"');
    expect(html).toContain('alt="levels"');
  });

  it("does not change content without images", () => {
    const html = new MarkdownIt().use(markdownLazyImages).render("Just text");

    expect(html).toBe("<p>Just text</p>\n");
  });
});

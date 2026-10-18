import renderArticleMarkdown from "../renderArticleMarkdown";

const tocLinkTargets = (html) =>
  [...html.matchAll(/href="#([^"]+)"/g)].map((match) => match[1]);
const headingIds = (html) => [...html.matchAll(/<h[1-6] id="([^"]+)"/g)].map((match) => match[1]);

describe("renderArticleMarkdown", () => {
  it("renders markdown into html", () => {
    const { html } = renderArticleMarkdown("Some **bold** text");

    expect(html).toBe("<p>Some <strong>bold</strong> text</p>\n");
  });

  it("keeps raw html blocks such as asides", () => {
    const { html } = renderArticleMarkdown("<aside>\n\nMy experience\n\n</aside>");

    expect(html).toContain("<aside>");
    expect(html).toContain("<p>My experience</p>");
  });

  it("adds an id to every heading", () => {
    const { html } = renderArticleMarkdown("## First\n\n### Second");

    expect(headingIds(html)).toHaveLength(2);
  });

  it("builds a table of contents whose links point to the heading ids", () => {
    const { html, tableOfContentsHtml } = renderArticleMarkdown(
      "## Cómo empezar\n\n### 1) Conoce a tu equipo:\n\n## Conversation one**: life story**"
    );

    expect(tableOfContentsHtml).toContain('class="table-of-contents"');
    expect(tocLinkTargets(tableOfContentsHtml)).toEqual(headingIds(html));
  });

  it("builds the table of contents even without a [toc] marker", () => {
    const { html, tableOfContentsHtml } = renderArticleMarkdown("## Only heading");

    expect(html).not.toContain("table-of-contents");
    expect(tableOfContentsHtml).toContain("Only heading");
  });

  it("renders the [toc] marker inline", () => {
    const { html } = renderArticleMarkdown("[toc]\n\n## Heading");

    expect(html).toContain('<nav class="table-of-contents">');
  });

  it("returns an empty table of contents when there are no headings", () => {
    const { tableOfContentsHtml } = renderArticleMarkdown("Just text");

    expect(tableOfContentsHtml).toBe("");
  });

  it("wraps tables and lazy loads images", () => {
    const { html } = renderArticleMarkdown("| A |\n| --- |\n| B |\n\n![alt](/imgs/a.png)");

    expect(html).toContain('<div class="table-scroll"><table>');
    expect(html).toContain('loading="lazy"');
  });

  it("does not leak the table of contents between renders", () => {
    renderArticleMarkdown("## Previous article");
    const { tableOfContentsHtml } = renderArticleMarkdown("## Current article");

    expect(tableOfContentsHtml).not.toContain("Previous article");
  });

  it("uses readable ids without emojis or accents, matching the table of contents", () => {
    const { html, tableOfContentsHtml } = renderArticleMarkdown("## 🤯 El detonante\n\n## ¿Qué documentar?");

    expect(headingIds(html)).toEqual(["el-detonante", "que-documentar"]);
    expect(tocLinkTargets(tableOfContentsHtml)).toEqual(["el-detonante", "que-documentar"]);
  });
});

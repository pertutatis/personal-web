import MarkdownIt from "markdown-it";
import markdownTableWrapper from "../markdownTableWrapper";

const tableMarkdown = "| Name |\n| --- |\n| Value |";

describe("markdownTableWrapper", () => {
  it("wraps every table in a scrollable container", () => {
    const html = new MarkdownIt().use(markdownTableWrapper).render(tableMarkdown);

    expect(html.startsWith('<div class="table-scroll"><table>')).toBe(true);
    expect(html.trim().endsWith("</table>\n</div>")).toBe(true);
  });

  it("wraps each table independently", () => {
    const html = new MarkdownIt()
      .use(markdownTableWrapper)
      .render(`${tableMarkdown}\n\nText\n\n${tableMarkdown}`);

    expect(html.match(/<div class="table-scroll">/g)).toHaveLength(2);
  });

  it("leaves content without tables untouched", () => {
    const html = new MarkdownIt().use(markdownTableWrapper).render("Just text");

    expect(html).toBe("<p>Just text</p>\n");
  });
});

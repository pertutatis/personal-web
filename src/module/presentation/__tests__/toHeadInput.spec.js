import toHeadInput from "../toHeadInput";

const websiteMeta = {
  title: "Blog · Diego Pertusa",
  description: "Blog description",
  canonicalUrl: "https://diegopertusa.com/blog/",
  type: "website",
};

const articleMeta = {
  title: "Career conversations · Diego Pertusa",
  description: "Article description",
  canonicalUrl: "https://diegopertusa.com/blog/career-conversations/",
  type: "article",
  publishedTime: "2025-08-16T10:00:00.000Z",
  modifiedTime: "2025-08-24T10:00:00.000Z",
  structuredData: { "@type": "BlogPosting", headline: "Career conversations" },
};

const metaContent = (head, key) =>
  head.meta.find((tag) => tag.name === key || tag.property === key)?.content;

describe("toHeadInput", () => {
  it("sets title, language and canonical link", () => {
    const head = toHeadInput(websiteMeta);

    expect(head.title).toBe("Blog · Diego Pertusa");
    expect(head.htmlAttrs).toEqual({ lang: "en" });
    expect(head.link).toEqual([{ rel: "canonical", href: "https://diegopertusa.com/blog/" }]);
  });

  it("adds description, Open Graph and Twitter tags", () => {
    const head = toHeadInput(websiteMeta);

    expect(metaContent(head, "description")).toBe("Blog description");
    expect(metaContent(head, "og:type")).toBe("website");
    expect(metaContent(head, "og:title")).toBe("Blog · Diego Pertusa");
    expect(metaContent(head, "og:description")).toBe("Blog description");
    expect(metaContent(head, "og:url")).toBe("https://diegopertusa.com/blog/");
    expect(metaContent(head, "og:site_name")).toBe("Diego Pertusa");
    expect(metaContent(head, "og:locale")).toBe("en_US");
    expect(metaContent(head, "twitter:card")).toBe("summary");
    expect(metaContent(head, "twitter:title")).toBe("Blog · Diego Pertusa");
  });

  it("adds no published time nor structured data to a website page", () => {
    const head = toHeadInput(websiteMeta);

    expect(metaContent(head, "article:published_time")).toBeUndefined();
    expect(head.script).toEqual([]);
  });

  it("adds the published time and structured data to an article", () => {
    const head = toHeadInput(articleMeta);

    expect(metaContent(head, "og:type")).toBe("article");
    expect(metaContent(head, "article:published_time")).toBe("2025-08-16T10:00:00.000Z");
    expect(metaContent(head, "article:modified_time")).toBe("2025-08-24T10:00:00.000Z");
    expect(head.script).toEqual([
      {
        type: "application/ld+json",
        innerHTML: '{"@type":"BlogPosting","headline":"Career conversations"}',
      },
    ]);
  });

  it("escapes characters that could close the structured data script", () => {
    const head = toHeadInput({
      ...articleMeta,
      structuredData: { headline: "</script><script>alert(1)</script>" },
    });

    expect(head.script[0].innerHTML).not.toContain("</script>");
    expect(JSON.parse(head.script[0].innerHTML).headline).toBe(
      "</script><script>alert(1)</script>"
    );
  });

  it("marks pages that must not be indexed and skips the url tags without canonical", () => {
    const head = toHeadInput({
      title: "Page not found · Diego Pertusa",
      description: "Not found",
      type: "website",
      noIndex: true,
    });

    expect(metaContent(head, "robots")).toBe("noindex");
    expect(metaContent(head, "og:url")).toBeUndefined();
    expect(head.link).toEqual([]);
  });

  it("does not add a robots tag to indexable pages", () => {
    expect(metaContent(toHeadInput(websiteMeta), "robots")).toBeUndefined();
  });

  it("uses the page language and locale when the page sets one", () => {
    const head = toHeadInput({ ...websiteMeta, language: "es" });

    expect(head.htmlAttrs).toEqual({ lang: "es" });
    expect(metaContent(head, "og:locale")).toBe("es_ES");
  });
});

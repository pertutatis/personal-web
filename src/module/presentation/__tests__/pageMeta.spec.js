import {
  buildArticleMeta,
  buildNotFoundMeta,
  buildStaticPageMeta,
  getCanonicalUrl,
  summarizeDescription,
} from "../pageMeta";

const article = {
  slug: "career-conversations",
  title: "Career conversations",
  excerpt: "Descubre cómo las conversaciones de carrera pueden transformar tu equipo.",
  date: "2025-08-16T10:00:00.000Z",
  content: "Content",
  books: [],
  relatedLinks: [],
  category: "General",
  serie: { id: "1", title: "Liderazgo", description: "", createdAt: "", updatedAt: "" },
};

describe("getCanonicalUrl", () => {
  it("builds an absolute url on the site domain with a trailing slash", () => {
    expect(getCanonicalUrl("/blog/career-conversations")).toBe(
      "https://diegopertusa.com/blog/career-conversations/"
    );
  });

  it("does not duplicate the trailing slash", () => {
    expect(getCanonicalUrl("/cv/")).toBe("https://diegopertusa.com/cv/");
    expect(getCanonicalUrl("/")).toBe("https://diegopertusa.com/");
  });
});

describe("summarizeDescription", () => {
  it("keeps short texts as they are", () => {
    expect(summarizeDescription("Short text")).toBe("Short text");
  });

  it("collapses whitespace", () => {
    expect(summarizeDescription("  Two\n\nlines  ")).toBe("Two lines");
  });

  it("cuts long texts at a word boundary within 160 characters", () => {
    const longText = Array(60).fill("palabra").join(" ");

    const description = summarizeDescription(longText);

    expect(description.length).toBeLessThanOrEqual(160);
    expect(description.endsWith("palabra…")).toBe(true);
  });
});

describe("buildStaticPageMeta", () => {
  it.each([
    ["home", "/", "Diego Pertusa · Engineering Manager"],
    ["blog", "/blog/", "Blog · Diego Pertusa"],
    ["cv", "/cv/", "CV · Diego Pertusa"],
  ])("builds the %s page meta", (page, path, title) => {
    const meta = buildStaticPageMeta(page);

    expect(meta.title).toBe(title);
    expect(meta.canonicalUrl).toBe(getCanonicalUrl(path));
    expect(meta.type).toBe("website");
    expect(meta.description.length).toBeGreaterThan(50);
    expect(meta.description.length).toBeLessThanOrEqual(160);
  });
});

describe("buildArticleMeta", () => {
  it("uses the article title, excerpt and canonical url", () => {
    const meta = buildArticleMeta(article);

    expect(meta.title).toBe("Career conversations · Diego Pertusa");
    expect(meta.description).toBe(article.excerpt);
    expect(meta.canonicalUrl).toBe("https://diegopertusa.com/blog/career-conversations/");
    expect(meta.type).toBe("article");
    expect(meta.publishedTime).toBe("2025-08-16T10:00:00.000Z");
  });

  it("describes the article as a BlogPosting for search engines", () => {
    const { structuredData } = buildArticleMeta(article);

    expect(structuredData).toEqual({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Career conversations",
      description: article.excerpt,
      datePublished: "2025-08-16T10:00:00.000Z",
      inLanguage: "es",
      url: "https://diegopertusa.com/blog/career-conversations/",
      mainEntityOfPage: "https://diegopertusa.com/blog/career-conversations/",
      author: {
        "@type": "Person",
        name: "Diego Pertusa Irles",
        url: "https://diegopertusa.com/",
      },
    });
  });

  it("omits the published time when the article has no date", () => {
    const meta = buildArticleMeta({ ...article, date: "" });

    expect(meta.publishedTime).toBeUndefined();
    expect(meta.structuredData).not.toHaveProperty("datePublished");
  });
});

describe("buildNotFoundMeta", () => {
  it("asks search engines not to index the page and has no canonical url", () => {
    const meta = buildNotFoundMeta();

    expect(meta.title).toBe("Página no encontrada · Diego Pertusa");
    expect(meta.noIndex).toBe(true);
    expect(meta.canonicalUrl).toBeUndefined();
  });
});

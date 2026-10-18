import {
  buildArticleMeta,
  buildBlogMeta,
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
  modifiedDate: "2025-08-24T10:00:00.000Z",
  content: "Content",
  books: [],
  relatedLinks: [],
  category: "General",
  serie: { id: "1", title: "Liderazgo", description: "", createdAt: "", updatedAt: "" },
};

const PERSON_REFERENCE = {
  "@type": "Person",
  "@id": "https://diegopertusa.com/#person",
  name: "Diego Pertusa Irles",
  url: "https://diegopertusa.com/",
};

const PERSON_NODE = {
  "@type": "Person",
  "@id": "https://diegopertusa.com/#person",
  name: "Diego Pertusa Irles",
  jobTitle: "Engineering Leader",
  worksFor: { "@type": "Organization", name: "Seedtag" },
  url: "https://diegopertusa.com/",
  image: "https://diegopertusa.com/imgs/diego-pertusa.webp",
  sameAs: ["https://www.linkedin.com/in/diego-pertusa/", "https://github.com/pertutatis"],
};

const findNode = (data, type) => (data["@graph"] ?? [data]).find((node) => node["@type"] === type);

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
    ["home", "/", "Diego Pertusa · Engineering Leader"],
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
    expect(meta.modifiedTime).toBe("2025-08-24T10:00:00.000Z");
  });

  it("drops the site name from titles that would be longer than 60 characters", () => {
    const longTitle = "Los pilares de un Engineering Manager: cómo crear un equipo de alto rendimiento";

    expect(buildArticleMeta({ ...article, title: longTitle }).title).toBe(longTitle);
  });

  it("keeps the site name when the title stays within 60 characters", () => {
    expect(buildArticleMeta({ ...article, title: "Cómo evaluar sin sesgos y con propósito" }).title).toBe(
      "Cómo evaluar sin sesgos y con propósito · Diego Pertusa"
    );
  });

  it("describes the article as a BlogPosting by Diego, published by Diego", () => {
    const posting = findNode(buildArticleMeta(article).structuredData, "BlogPosting");

    expect(posting).toEqual({
      "@type": "BlogPosting",
      "@id": "https://diegopertusa.com/blog/career-conversations/#article",
      headline: "Career conversations",
      description: article.excerpt,
      datePublished: "2025-08-16T10:00:00.000Z",
      dateModified: "2025-08-24T10:00:00.000Z",
      inLanguage: "es",
      url: "https://diegopertusa.com/blog/career-conversations/",
      mainEntityOfPage: "https://diegopertusa.com/blog/career-conversations/",
      image: "https://diegopertusa.com/imgs/diego-pertusa.webp",
      author: PERSON_REFERENCE,
      publisher: PERSON_REFERENCE,
      isPartOf: { "@type": "CreativeWorkSeries", name: "Liderazgo" },
    });
  });

  it("uses the first image of the article when there is one", () => {
    const withImage = { ...article, content: "Intro\n\n![chart](/imgs/chart.webp)\n\n![other](/imgs/b.webp)" };

    expect(findNode(buildArticleMeta(withImage).structuredData, "BlogPosting").image).toBe(
      "https://diegopertusa.com/imgs/chart.webp"
    );
  });

  it("keeps absolute image urls", () => {
    const withImage = { ...article, content: "![x](https://cdn.example.com/x.png)" };

    expect(findNode(buildArticleMeta(withImage).structuredData, "BlogPosting").image).toBe(
      "https://cdn.example.com/x.png"
    );
  });

  it("omits the series for an article without serie", () => {
    const posting = findNode(buildArticleMeta({ ...article, serie: undefined }).structuredData, "BlogPosting");

    expect(posting).not.toHaveProperty("isPartOf");
  });

  it("adds a breadcrumb Home > Blog > Article", () => {
    const breadcrumb = findNode(buildArticleMeta(article).structuredData, "BreadcrumbList");

    expect(breadcrumb.itemListElement).toEqual([
      { "@type": "ListItem", position: 1, name: "Home", item: "https://diegopertusa.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://diegopertusa.com/blog/" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Career conversations",
        item: "https://diegopertusa.com/blog/career-conversations/",
      },
    ]);
  });

  it("omits the published time when the article has no date", () => {
    const meta = buildArticleMeta({ ...article, date: "" });

    expect(meta.publishedTime).toBeUndefined();
    expect(findNode(meta.structuredData, "BlogPosting")).not.toHaveProperty("datePublished");
  });

  it("omits the modified time when the article has no modification date", () => {
    const meta = buildArticleMeta({ ...article, modifiedDate: undefined });

    expect(meta.modifiedTime).toBeUndefined();
    expect(findNode(meta.structuredData, "BlogPosting")).not.toHaveProperty("dateModified");
  });
});

describe("home structured data", () => {
  it("describes the website and Diego as a Person with photo and profiles", () => {
    const data = buildStaticPageMeta("home").structuredData;

    expect(data["@context"]).toBe("https://schema.org");
    expect(findNode(data, "WebSite")).toEqual({
      "@type": "WebSite",
      "@id": "https://diegopertusa.com/#website",
      url: "https://diegopertusa.com/",
      name: "Diego Pertusa",
      inLanguage: "en",
      publisher: { "@id": "https://diegopertusa.com/#person" },
    });
    expect(findNode(data, "Person")).toEqual(PERSON_NODE);
  });
});

describe("CV structured data", () => {
  it("describes the CV as Diego's profile page", () => {
    expect(buildStaticPageMeta("cv").structuredData).toEqual({
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      url: "https://diegopertusa.com/cv/",
      inLanguage: "en",
      mainEntity: PERSON_NODE,
    });
  });
});

describe("buildBlogMeta", () => {
  const listing = [
    { slug: "career-conversations", title: "Career conversations", date: "2025-08-16T10:00:00.000Z" },
  ];

  it("keeps the blog page meta", () => {
    const meta = buildBlogMeta(listing);

    expect(meta.title).toBe(buildStaticPageMeta("blog").title);
    expect(meta.canonicalUrl).toBe("https://diegopertusa.com/blog/");
  });

  it("describes the blog and lists its posts", () => {
    expect(buildBlogMeta(listing).structuredData).toEqual({
      "@context": "https://schema.org",
      "@type": "Blog",
      "@id": "https://diegopertusa.com/blog/#blog",
      url: "https://diegopertusa.com/blog/",
      name: "Notes from an engineering leader",
      inLanguage: "en",
      publisher: PERSON_REFERENCE,
      blogPost: [
        {
          "@type": "BlogPosting",
          headline: "Career conversations",
          url: "https://diegopertusa.com/blog/career-conversations/",
          datePublished: "2025-08-16T10:00:00.000Z",
        },
      ],
    });
  });

  it("adds no structured data to the static blog meta", () => {
    expect(buildStaticPageMeta("blog").structuredData).toBeUndefined();
  });
});

describe("page language", () => {
  it("keeps static pages in the site language (English)", () => {
    expect(buildStaticPageMeta("home").language).toBeUndefined();
    expect(buildStaticPageMeta("cv").language).toBeUndefined();
    expect(buildStaticPageMeta("cv").description).toMatch(/^Diego Pertusa Irles, Engineering Leader/);
  });

  it("marks articles as Spanish until they are translated", () => {
    expect(buildArticleMeta(article).language).toBe("es");
  });
});

describe("buildNotFoundMeta", () => {
  it("asks search engines not to index the page and has no canonical url", () => {
    const meta = buildNotFoundMeta();

    expect(meta.title).toBe("Page not found · Diego Pertusa");
    expect(meta.noIndex).toBe(true);
    expect(meta.canonicalUrl).toBeUndefined();
  });
});

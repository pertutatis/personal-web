import buildRobotsTxt from "../robotsTxt";

describe("buildRobotsTxt", () => {
  it("allows crawling and points to the sitemap on the production domain", () => {
    expect(buildRobotsTxt("https://diegopertusa.com")).toBe(
      "User-agent: *\nAllow: /\n\nSitemap: https://diegopertusa.com/sitemap.xml\n"
    );
  });

  it("blocks crawling on Netlify subdomains such as staging", () => {
    expect(buildRobotsTxt("https://diegopertusa.netlify.app")).toBe(
      "User-agent: *\nDisallow: /\n"
    );
  });

  it("allows crawling when the deploy url is unknown, as in local builds", () => {
    expect(buildRobotsTxt(undefined)).toContain("Allow: /");
  });
});

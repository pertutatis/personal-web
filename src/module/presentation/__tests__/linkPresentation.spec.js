import { getLinkDomain, getLinkPresentation } from "../linkPresentation";

describe("getLinkDomain", () => {
  it("returns the hostname without www", () => {
    expect(getLinkDomain("https://www.goodreads.com/book/show/1-radical-candor")).toBe(
      "goodreads.com"
    );
  });

  it("keeps subdomains other than www", () => {
    expect(getLinkDomain("https://about.gitlab.com/company/")).toBe("about.gitlab.com");
  });

  it("returns an empty string for an invalid url", () => {
    expect(getLinkDomain("not a url")).toBe("");
  });
});

describe("getLinkPresentation", () => {
  it("keeps a descriptive text as title and shows the domain apart", () => {
    expect(
      getLinkPresentation("Writing is Thinking", "https://www.swyx.io/writing-is-thinking/")
    ).toEqual({ title: "Writing is Thinking", domain: "swyx.io" });
  });

  it("turns a raw url text into a short readable title without repeating the domain", () => {
    expect(
      getLinkPresentation(
        "https://coachingforleaders.com/podcast/370/",
        "https://coachingforleaders.com/podcast/370/"
      )
    ).toEqual({ title: "coachingforleaders.com/podcast/370", domain: "" });
  });

  it("drops www, query and hash from a raw url title", () => {
    expect(
      getLinkPresentation(
        "https://www.radicalcandor.com/career/?ref=x#top",
        "https://www.radicalcandor.com/career/?ref=x#top"
      )
    ).toEqual({ title: "radicalcandor.com/career", domain: "" });
  });

  it("uses the url when the text is empty", () => {
    expect(getLinkPresentation("", "https://basecamp.com/guides")).toEqual({
      title: "basecamp.com/guides",
      domain: "",
    });
  });

  it("falls back to the raw text when the url is invalid", () => {
    expect(getLinkPresentation("Some link", "not a url")).toEqual({
      title: "Some link",
      domain: "",
    });
  });
});

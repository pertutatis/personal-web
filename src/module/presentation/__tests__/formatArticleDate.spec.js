import formatArticleDate from "../formatArticleDate";

describe("formatArticleDate", () => {
  it("formats an ISO date as a long Spanish date", () => {
    expect(formatArticleDate("2025-08-16T10:00:00.000Z")).toBe("16 de agosto de 2025");
  });

  it("returns an empty string when there is no date", () => {
    expect(formatArticleDate("")).toBe("");
    expect(formatArticleDate(undefined)).toBe("");
  });

  it("returns an empty string for an invalid date", () => {
    expect(formatArticleDate("not a date")).toBe("");
  });
});

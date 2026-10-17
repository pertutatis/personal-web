import getSeriesNeighbours from "../getSeriesNeighbours";

const cultureSerie = { id: "culture", title: "Cultura distribuida" };
const hiringSerie = { id: "hiring", title: "Hiring" };

const buildArticle = (slug, date, serie) => ({ slug, date, serie, title: slug });

const articles = [
  buildArticle("culture-3", "2025-03-01T00:00:00Z", cultureSerie),
  buildArticle("hiring-1", "2025-02-15T00:00:00Z", hiringSerie),
  buildArticle("culture-1", "2025-01-01T00:00:00Z", cultureSerie),
  buildArticle("standalone", "2025-01-10T00:00:00Z", undefined),
  buildArticle("culture-2", "2025-02-01T00:00:00Z", cultureSerie),
];

describe("getSeriesNeighbours", () => {
  it("returns the previous and next articles of the same serie ordered by date", () => {
    const neighbours = getSeriesNeighbours(articles, "culture-2");

    expect(neighbours.previous?.slug).toBe("culture-1");
    expect(neighbours.next?.slug).toBe("culture-3");
  });

  it("has no previous article for the first one of the serie", () => {
    const neighbours = getSeriesNeighbours(articles, "culture-1");

    expect(neighbours.previous).toBeUndefined();
    expect(neighbours.next?.slug).toBe("culture-2");
  });

  it("has no next article for the last one of the serie", () => {
    const neighbours = getSeriesNeighbours(articles, "culture-3");

    expect(neighbours.previous?.slug).toBe("culture-2");
    expect(neighbours.next).toBeUndefined();
  });

  it("returns no neighbours for an article without serie", () => {
    expect(getSeriesNeighbours(articles, "standalone")).toEqual({
      previous: undefined,
      next: undefined,
    });
  });

  it("returns no neighbours when the article is the only one of its serie", () => {
    expect(getSeriesNeighbours(articles, "hiring-1")).toEqual({
      previous: undefined,
      next: undefined,
    });
  });

  it("returns no neighbours when the slug is unknown", () => {
    expect(getSeriesNeighbours(articles, "missing")).toEqual({
      previous: undefined,
      next: undefined,
    });
  });
});

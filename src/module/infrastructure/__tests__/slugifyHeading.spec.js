import slugifyHeading from "../slugifyHeading";

describe("slugifyHeading", () => {
  it("lowercases and joins words with hyphens", () => {
    expect(slugifyHeading("Algo de historia")).toBe("algo-de-historia");
  });

  it("removes emojis", () => {
    expect(slugifyHeading("🤯 El detonante")).toBe("el-detonante");
    expect(slugifyHeading("✍️ introducción")).toBe("introduccion");
  });

  it("removes accents and punctuation", () => {
    expect(slugifyHeading("¿Qué documentar realmente?")).toBe("que-documentar-realmente");
    expect(slugifyHeading("1) Conoce a tu equipo:")).toBe("1-conoce-a-tu-equipo");
  });

  it("keeps the ñ as n and collapses repeated separators", () => {
    expect(slugifyHeading("Diseño  —  y   año")).toBe("diseno-y-ano");
  });

  it("drops leftover markdown emphasis markers", () => {
    expect(slugifyHeading("Conversation one**: life story**")).toBe("conversation-one-life-story");
  });

  it("falls back to a generic id when nothing is left", () => {
    expect(slugifyHeading("🚀")).toBe("section");
  });
});

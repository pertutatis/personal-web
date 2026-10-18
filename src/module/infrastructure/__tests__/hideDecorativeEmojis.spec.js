import hideDecorativeEmojis from "../hideDecorativeEmojis";

const hidden = (emoji) => `<span aria-hidden="true">${emoji}</span>`;

describe("hideDecorativeEmojis", () => {
  it("hides emojis inside headings from screen readers", () => {
    expect(hideDecorativeEmojis('<h2 id="el-detonante">🤯 El detonante</h2>')).toBe(
      `<h2 id="el-detonante">${hidden("🤯")} El detonante</h2>`
    );
  });

  it("keeps emoji sequences with variation selectors and skin tones together", () => {
    expect(hideDecorativeEmojis("<h3>✍️ Intro 👋🏻</h3>")).toBe(
      `<h3>${hidden("✍️")} Intro ${hidden("👋🏻")}</h3>`
    );
  });

  it("hides emojis inside links, as in the table of contents", () => {
    expect(hideDecorativeEmojis('<li><a href="#el-plan">💡 El Plan</a></li>')).toBe(
      `<li><a href="#el-plan">${hidden("💡")} El Plan</a></li>`
    );
  });

  it("leaves emojis in paragraphs untouched", () => {
    const paragraph = "<p>💡 Briconsejo del día</p>";

    expect(hideDecorativeEmojis(paragraph)).toBe(paragraph);
  });

  it("does not touch headings without emojis", () => {
    const heading = "<h2>Algo de historia</h2>";

    expect(hideDecorativeEmojis(heading)).toBe(heading);
  });
});

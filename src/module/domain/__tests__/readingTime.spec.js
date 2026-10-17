import estimateReadingMinutes from "../readingTime";

const repeatWord = (word, times) => Array(times).fill(word).join(" ");

describe("estimateReadingMinutes", () => {
  it("returns at least one minute for very short content", () => {
    expect(estimateReadingMinutes("Hola")).toBe(1);
  });

  it("returns one minute for empty content", () => {
    expect(estimateReadingMinutes("")).toBe(1);
  });

  it("rounds up using 220 words per minute", () => {
    expect(estimateReadingMinutes(repeatWord("palabra", 220))).toBe(1);
    expect(estimateReadingMinutes(repeatWord("palabra", 221))).toBe(2);
    expect(estimateReadingMinutes(repeatWord("palabra", 2800))).toBe(13);
  });

  it("does not count link urls, images or html tags as words", () => {
    const visibleWords = repeatWord("palabra", 220);
    const noisyContent = `${visibleWords} [](https://a.com/${repeatWord("x", 300)}) ![](/imgs/a.png) <aside class="note"></aside>`;

    expect(estimateReadingMinutes(noisyContent)).toBe(1);
  });

  it("counts the visible text of markdown links", () => {
    const content = `${repeatWord("palabra", 220)} [texto visible](https://example.com)`;

    expect(estimateReadingMinutes(content)).toBe(2);
  });
});

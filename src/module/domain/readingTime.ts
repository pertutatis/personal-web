const WORDS_PER_MINUTE = 220;

const IMAGE_PATTERN = /!\[[^\]]*\]\([^)]*\)/g;
const LINK_TARGET_PATTERN = /\]\([^)]*\)/g;
const HTML_TAG_PATTERN = /<[^>]+>/g;

function extractVisibleText(markdown: string): string {
  return markdown
    .replace(IMAGE_PATTERN, " ")
    .replace(LINK_TARGET_PATTERN, "]")
    .replace(HTML_TAG_PATTERN, " ");
}

function countWords(text: string): number {
  return text.split(/\s+/).filter((token) => /[\p{L}\p{N}]/u.test(token)).length;
}

export default function estimateReadingMinutes(markdown: string): number {
  const wordCount = countWords(extractVisibleText(markdown));

  return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
}

// An emoji with its optional variation selector, skin tone or zero-width-joined parts
const EMOJI_SEQUENCE =
  /\p{Extended_Pictographic}(?:️|⃣|[\u{1F3FB}-\u{1F3FF}]|‍\p{Extended_Pictographic}️?)*/gu;

// Headings and links (the table of contents) whose text content may start with an emoji
const HEADING_OR_LINK = /(<(h[1-6]|a)\b[^>]*>)([\s\S]*?)(<\/\2>)/g;

// Screen readers announce every emoji by name ("exploding head El detonante"):
// in headings and their table of contents links they are decoration, so hide them
export default function hideDecorativeEmojis(html: string): string {
  return html.replace(HEADING_OR_LINK, (_match, openTag: string, _tag: string, content: string, closeTag: string) => {
    const decoratedContent = content.replace(
      EMOJI_SEQUENCE,
      (emoji) => `<span aria-hidden="true">${emoji}</span>`
    );
    return openTag + decoratedContent + closeTag;
  });
}

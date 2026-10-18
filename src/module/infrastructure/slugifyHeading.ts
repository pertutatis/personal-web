const FALLBACK_SLUG = 'section';

// Readable heading ids: no emojis, accents or punctuation (e.g. "🤯 El detonante" -> "el-detonante")
export default function slugifyHeading(text: string): string {
  const slug = String(text)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return slug || FALLBACK_SLUG;
}

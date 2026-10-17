import escapeXml from './escapeXml';

export type SitemapEntry = {
  url: string;
  lastModified?: string;
};

function toSitemapDate(date: string | undefined): string | null {
  if (!date) return null;

  const parsedDate = new Date(date);
  return Number.isNaN(parsedDate.getTime()) ? null : parsedDate.toISOString().slice(0, 10);
}

function toUrlElement(entry: SitemapEntry): string {
  const lastModified = toSitemapDate(entry.lastModified);
  const lastModifiedElement = lastModified ? `<lastmod>${lastModified}</lastmod>` : '';

  return `  <url><loc>${escapeXml(entry.url)}</loc>${lastModifiedElement}</url>`;
}

export default function buildSitemap(entries: SitemapEntry[]): string {
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries.map(toUrlElement),
    '</urlset>',
    '',
  ].join('\n');
}

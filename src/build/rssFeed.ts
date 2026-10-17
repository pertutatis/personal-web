import escapeXml from './escapeXml';

export type RssChannel = {
  title: string;
  description: string;
  siteUrl: string;
  feedUrl: string;
  language: string;
};

export type RssItem = {
  title: string;
  url: string;
  description: string;
  publishedAt: string;
};

function toRfc822Date(date: string): string {
  return new Date(date).toUTCString();
}

function toItemElement(item: RssItem): string {
  return [
    '    <item>',
    `      <title>${escapeXml(item.title)}</title>`,
    `      <link>${escapeXml(item.url)}</link>`,
    `      <guid isPermaLink="true">${escapeXml(item.url)}</guid>`,
    `      <description>${escapeXml(item.description)}</description>`,
    `      <pubDate>${toRfc822Date(item.publishedAt)}</pubDate>`,
    '    </item>',
  ].join('\n');
}

export default function buildRssFeed(channel: RssChannel, items: RssItem[]): string {
  const newestFirst = [...items].sort(
    (first, second) => Date.parse(second.publishedAt) - Date.parse(first.publishedAt)
  );
  const lastBuildDate = newestFirst[0]
    ? [`    <lastBuildDate>${toRfc822Date(newestFirst[0].publishedAt)}</lastBuildDate>`]
    : [];

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '  <channel>',
    `    <title>${escapeXml(channel.title)}</title>`,
    `    <link>${escapeXml(channel.siteUrl)}</link>`,
    `    <description>${escapeXml(channel.description)}</description>`,
    `    <language>${escapeXml(channel.language)}</language>`,
    `    <atom:link href="${escapeXml(channel.feedUrl)}" rel="self" type="application/rss+xml"/>`,
    ...lastBuildDate,
    ...newestFirst.map(toItemElement),
    '  </channel>',
    '</rss>',
    '',
  ].join('\n');
}

import MarkdownIt from 'markdown-it';
import markdownItAnchor from 'markdown-it-anchor';
import markdownItTableOfContents from 'markdown-it-toc-done-right';

import markdownTableWrapper from './markdownTableWrapper';
import markdownLazyImages from './markdownLazyImages';

export type RenderedArticle = {
  html: string;
  tableOfContentsHtml: string;
};

// Headings and table of contents links must share the same slug
function slugify(text: string): string {
  return encodeURIComponent(String(text).trim().toLowerCase().replace(/\s+/g, '-'));
}

let lastTableOfContentsHtml = '';

const markdown = new MarkdownIt({ html: true })
  .use(markdownItAnchor, { slugify })
  .use(markdownItTableOfContents, {
    slugify,
    callback: (tableOfContentsHtml, headingsTree) => {
      lastTableOfContentsHtml = headingsTree.c.length > 0 ? tableOfContentsHtml : '';
    },
  })
  .use(markdownTableWrapper)
  .use(markdownLazyImages);

export default function renderArticleMarkdown(source: string): RenderedArticle {
  lastTableOfContentsHtml = '';
  const html = markdown.render(source);

  return { html, tableOfContentsHtml: lastTableOfContentsHtml };
}

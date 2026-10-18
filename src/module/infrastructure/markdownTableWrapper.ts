import type MarkdownIt from 'markdown-it';

// Focusable region so keyboard users can scroll wide tables (Safari does not focus scrollers)
const TABLE_WRAPPER_OPEN =
  '<div class="table-scroll" tabindex="0" role="region" aria-label="Scrollable table">';
const TABLE_WRAPPER_CLOSE = '</div>\n';

export default function markdownTableWrapper(markdown: MarkdownIt): void {
  const rules = markdown.renderer.rules;

  rules.table_open = (tokens, index, options, _env, renderer) =>
    TABLE_WRAPPER_OPEN + renderer.renderToken(tokens, index, options);

  rules.table_close = (tokens, index, options, _env, renderer) =>
    renderer.renderToken(tokens, index, options) + TABLE_WRAPPER_CLOSE;
}

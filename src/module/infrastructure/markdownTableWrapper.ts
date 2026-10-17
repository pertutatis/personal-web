import type { MarkdownRenderer } from './markdownItTypes';

const TABLE_WRAPPER_OPEN = '<div class="table-scroll">';
const TABLE_WRAPPER_CLOSE = '</div>\n';

export default function markdownTableWrapper(markdown: MarkdownRenderer): void {
  const rules = markdown.renderer.rules;

  rules.table_open = (tokens, index, options, _env, renderer) =>
    TABLE_WRAPPER_OPEN + renderer.renderToken(tokens, index, options);

  rules.table_close = (tokens, index, options, _env, renderer) =>
    renderer.renderToken(tokens, index, options) + TABLE_WRAPPER_CLOSE;
}

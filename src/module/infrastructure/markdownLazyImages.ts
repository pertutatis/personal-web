import type MarkdownIt from 'markdown-it';

export default function markdownLazyImages(markdown: MarkdownIt): void {
  const rules = markdown.renderer.rules;
  const defaultImageRule = rules.image;

  rules.image = (tokens, index, options, env, renderer) => {
    tokens[index].attrSet('loading', 'lazy');
    tokens[index].attrSet('decoding', 'async');

    return defaultImageRule
      ? defaultImageRule(tokens, index, options, env, renderer)
      : renderer.renderToken(tokens, index, options);
  };
}

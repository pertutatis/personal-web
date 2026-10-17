// Minimal structural types: markdown-it ships without type definitions in this project.
export type MarkdownToken = {
  attrSet: (name: string, value: string) => void;
};

export type MarkdownRendererSelf = {
  renderToken: (tokens: MarkdownToken[], index: number, options: unknown) => string;
};

export type RenderRule = (
  tokens: MarkdownToken[],
  index: number,
  options: unknown,
  env: unknown,
  renderer: MarkdownRendererSelf
) => string;

export type MarkdownRenderer = {
  renderer: { rules: Record<string, RenderRule | undefined> };
};

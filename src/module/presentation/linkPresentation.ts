export type LinkPresentation = {
  title: string;
  domain: string;
};

function parseUrl(url: string): URL | null {
  try {
    return new URL(url);
  } catch {
    return null;
  }
}

function removeWww(hostname: string): string {
  return hostname.replace(/^www\./, "");
}

function looksLikeUrl(text: string): boolean {
  return /^https?:\/\//.test(text.trim());
}

export function getLinkDomain(url: string): string {
  const parsedUrl = parseUrl(url);
  return parsedUrl ? removeWww(parsedUrl.hostname) : "";
}

function getShortUrlTitle(parsedUrl: URL): string {
  const path = parsedUrl.pathname.replace(/\/+$/, "");
  return removeWww(parsedUrl.hostname) + path;
}

export function getLinkPresentation(text: string, url: string): LinkPresentation {
  const parsedUrl = parseUrl(url);

  if (!parsedUrl) {
    return { title: text, domain: "" };
  }

  if (!text.trim() || looksLikeUrl(text)) {
    return { title: getShortUrlTitle(parsedUrl), domain: "" };
  }

  return { title: text, domain: removeWww(parsedUrl.hostname) };
}

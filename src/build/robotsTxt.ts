import { SITE_URL } from '../module/presentation/pageMeta';

// Netlify subdomains (staging, before the custom domain is attached) must not be indexed
function isNetlifySubdomain(siteUrl: string): boolean {
  try {
    return new URL(siteUrl).hostname.endsWith('.netlify.app');
  } catch {
    return false;
  }
}

export default function buildRobotsTxt(deployedSiteUrl: string | undefined): string {
  if (deployedSiteUrl && isNetlifySubdomain(deployedSiteUrl)) {
    return 'User-agent: *\nDisallow: /\n';
  }

  return `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;
}

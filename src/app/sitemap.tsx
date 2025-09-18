// app/sitemap.ts (Next.js 13+ approach)
import { siteConfig } from '../.././seo.config';

export default async function sitemap() {
  // Define your routes - can be hardcoded or dynamically generated
  const routes = [
    '',
    '/technology',
    '/regulation',
    '/news',
    '/about-reput',
    '/platform',
    '/policies',
  ];

  return routes.map(route => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
  }));
}
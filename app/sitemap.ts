import { localRoutePaths } from '@/constants/localRoutePaths';
import type { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://pcideal.com.br';

const routes = [
  { path: localRoutePaths.landingPage, priority: 1 },
  { path: localRoutePaths.builder, priority: 0.9 },
  { path: localRoutePaths.howItWorks, priority: 0.7 },
  { path: localRoutePaths.about, priority: 0.5 },
];

const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${baseUrl}${path === '/' ? '' : path}`,
    lastModified,
    changeFrequency: 'weekly',
    priority,
  }));
}

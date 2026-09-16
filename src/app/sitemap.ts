import type { MetadataRoute } from 'next';
import { projects } from '@/lib/projects';
import { siteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl.href, priority: 1 },
    ...projects.map(({ slug }) => ({ url: new URL(`/work/${slug}`, siteUrl).href, priority: 0.8 })),
  ];
}

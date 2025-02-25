import { MetadataRoute } from 'next'
import { galleryImages } from '@/data/galleryImages'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://charmladonna.com'

  // Base routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
  ]

  // Add gallery image routes
  const galleryRoutes = galleryImages.map((image) => ({
    url: `${baseUrl}/gallery/${image.title.toLowerCase().replace(/\s+/g, '-')}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...routes, ...galleryRoutes]
} 
import { MetadataRoute } from 'next'
import { galleryImages } from '@/data/galleryImages'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://charmladonna.com'

  // Base routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]

  try {
    // Add gallery image routes
    const galleryRoutes = galleryImages.map((image) => ({
      url: `${baseUrl}/gallery/${encodeURIComponent(image.title.toLowerCase().replace(/\s+/g, '-'))}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))

    return [...routes, ...galleryRoutes]
  } catch (error) {
    console.error('Error generating sitemap:', error)
    return routes
  }
} 
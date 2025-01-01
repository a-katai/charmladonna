import imageMetadata from '@/data/imageMetadata.json';
import { GalleryImage } from '@/types/gallery';

export function getGalleryImages(): GalleryImage[] {
  return imageMetadata.map((image: any) => ({
    src: image.src,
    category: 'Live Performance',
    artist: image.src.split('/').pop()?.split('.')[0]?.replace(/_/g, ' ') || '',
    title: image.src.split('/').pop()?.split('.')[0]?.replace(/_/g, ' ') || '',
    description: '',
    videoId: '',
    alt: image.src.split('/').pop()?.split('.')[0]?.replace(/_/g, ' ') || 'Gallery image',
    dimensions: image.dimensions,
    responsive: image.responsive,
    metadata: image.metadata,
    formats: image.responsive?.large?.formats || {
      fallback: image.src
    }
  }));
}

export function getOptimizedImageSrc(image: GalleryImage, windowWidth: number): string {
  if (!image.responsive) return image.src;

  // Choose size based on window width
  let size: 'small' | 'medium' | 'large';
  if (windowWidth <= 640) size = 'small';
  else if (windowWidth <= 1024) size = 'medium';
  else size = 'large';

  const selectedSize = image.responsive[size];
  if (!selectedSize?.formats) return image.src;

  // Choose format based on browser support
  if (typeof window !== 'undefined') {
    const avifSupported = document.createElement('canvas')
      .toDataURL('image/avif')
      .indexOf('data:image/avif') === 0;
    const webpSupported = document.createElement('canvas')
      .toDataURL('image/webp')
      .indexOf('data:image/webp') === 0;

    if (avifSupported && selectedSize.formats.avif) {
      return selectedSize.formats.avif;
    }
    if (webpSupported && selectedSize.formats.webp) {
      return selectedSize.formats.webp;
    }
  }

  return selectedSize.formats.fallback;
}

const DEFAULT_DIMENSIONS = {
  width: 500,
  height: 700
};

export function getImageDimensions(image: GalleryImage, windowWidth: number) {
  if (!image.responsive) return image.dimensions || DEFAULT_DIMENSIONS;

  if (windowWidth <= 640 && image.responsive.small) {
    return {
      width: image.responsive.small.width,
      height: image.responsive.small.height,
    };
  }
  if (windowWidth <= 1024 && image.responsive.medium) {
    return {
      width: image.responsive.medium.width,
      height: image.responsive.medium.height,
    };
  }
  if (image.responsive.large) {
    return {
      width: image.responsive.large.width,
      height: image.responsive.large.height,
    };
  }

  return image.dimensions || DEFAULT_DIMENSIONS;
} 
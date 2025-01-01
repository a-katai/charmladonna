export interface GalleryImage {
  src: string;
  category: string;
  artist?: string;
  title: string;
  description: string;
  videoId: string;
  externalLink?: string;
  alt: string;
  dimensions?: {
    width: number;
    height: number;
  };
  responsive?: {
    small?: {
      width: number;
      height: number;
      formats: {
        avif: string;
        webp: string;
        fallback: string;
      };
    };
    medium?: {
      width: number;
      height: number;
      formats: {
        avif: string;
        webp: string;
        fallback: string;
      };
    };
    large?: {
      width: number;
      height: number;
      formats: {
        avif: string;
        webp: string;
        fallback: string;
      };
    };
  };
  formats?: {
    avif?: string;
    webp?: string;
    fallback: string;
  };
  metadata?: {
    aspectRatio: number;
    dominantColor?: string;
    blurDataUrl?: string;
  };
}

export interface GalleryProps {
  images: GalleryImage[];
  onImageClick: (image: GalleryImage) => void;
} 
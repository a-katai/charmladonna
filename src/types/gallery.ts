export interface GalleryImage {
  src: string;
  category: string;
  artist?: string;
  title: string;
  description: string;
  videoId: string;
  externalLink?: string;
  alt: string;
}

export interface GalleryProps {
  images: GalleryImage[];
  onImageClick: (image: GalleryImage) => void;
} 
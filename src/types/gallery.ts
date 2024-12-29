export interface GalleryImage {
  src: string;
  category: string;
  title: string;
  description: string;
  videoId?: string;
  externalLink?: string;
}

export interface GalleryProps {
  images: GalleryImage[];
  onImageClick: (image: GalleryImage) => void;
} 
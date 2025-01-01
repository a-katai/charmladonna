'use client'

import type { GalleryImage } from '@/types/gallery'
import styles from '@/styles/Gallery.module.css'
import { galleryImages } from '@/data/galleryImages'
import GalleryItem from './GalleryItem'

export default function Gallery() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>The Work.</h1>
      <div className={styles.track}>
        {galleryImages.map((image) => (
          <GalleryItem key={image.src} image={image} />
        ))}
      </div>
    </section>
  )
} 
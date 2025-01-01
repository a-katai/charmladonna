'use client'

import type { GalleryImage } from '@/types/gallery'
import styles from '@/styles/Gallery.module.css'
import { galleryImages } from '@/data/galleryImages'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const GalleryItem = dynamic(() => import('./GalleryItem'), {
  loading: () => <div className={styles.item} style={{ background: 'rgba(0,0,0,0.05)' }} />
})

export default function Gallery() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>The Work.</h1>
      <div className={styles.track}>
        <Suspense fallback={<div className={styles.loading}>Loading...</div>}>
          {galleryImages.map((image) => (
            <GalleryItem key={image.src} image={image} />
          ))}
        </Suspense>
      </div>
    </section>
  )
} 
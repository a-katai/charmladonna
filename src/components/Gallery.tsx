'use client'

import type { GalleryImage } from '@/types/gallery'
import styles from '@/styles/Gallery.module.css'
import { galleryImages } from '@/data/galleryImages'
import dynamic from 'next/dynamic'
import { Suspense, useRef } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const GalleryItem = dynamic(() => import('./GalleryItem'), {
  loading: () => <div className={styles.item} style={{ background: 'rgba(0,0,0,0.05)' }} />
})

export default function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!trackRef.current) return
    const scrollAmount = direction === 'left' ? -400 : 400
    trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>The Work.</h1>
      <div className={styles.trackContainer}>
        <div className={styles.track} ref={trackRef}>
          <Suspense fallback={<div className={styles.loading}>Loading...</div>}>
            {galleryImages.map((image) => (
              <GalleryItem key={image.src} image={image} />
            ))}
          </Suspense>
        </div>
      </div>
      <div className={styles.nav}>
        <button 
          className={styles.navButton} 
          onClick={() => scroll('left')}
          aria-label="Previous"
        >
          <FiChevronLeft className={styles.navIcon} />
        </button>
        <button 
          className={styles.navButton} 
          onClick={() => scroll('right')}
          aria-label="Next"
        >
          <FiChevronRight className={styles.navIcon} />
        </button>
      </div>
    </section>
  )
} 
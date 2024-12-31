'use client'

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Image from 'next/image'
import { GalleryProps, GalleryImage } from '@/types/gallery'
import styles from '@/styles/Gallery.module.css'
import { useEffect, useState } from 'react'

export default function Gallery({ images, onImageClick }: GalleryProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const scrollGallery = (direction: 'left' | 'right'): void => {
    const gallery = document.querySelector(`.${styles.track}`)
    const scrollAmount = 400
    if (gallery) {
      gallery.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  if (!isClient) {
    return null // or a loading state
  }

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>The Work.</h1>
      <div className={`${styles.track} hide-scrollbar`}>
        {images.map((image: GalleryImage, index: number) => (
          <div 
            className={styles.item} 
            key={index}
            onClick={() => onImageClick(image)}
          >
            <div className={styles.itemInner}>
              <div className={styles.content}>
                {image.artist && <h3 className={styles.artist}>{image.artist}</h3>}
                <h3 className={styles.itemTitle}>{image.title}</h3>
              </div>
              <Image 
                src={image.src} 
                alt={image.alt || `${image.artist ? `${image.artist} - ` : ''}${image.title} - ${image.description}`}
                width={500}
                height={700}
                className="object-cover"
                priority={index < 2}
              />
              <p className={styles.description}>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.nav}>
        <button 
          className={styles.navButton}
          onClick={() => scrollGallery('left')}
          aria-label="Previous"
        >
          <FaChevronLeft className={styles.navIcon} />
        </button>
        <button 
          className={styles.navButton}
          onClick={() => scrollGallery('right')}
          aria-label="Next"
        >
          <FaChevronRight className={styles.navIcon} />
        </button>
      </div>
    </section>
  )
} 
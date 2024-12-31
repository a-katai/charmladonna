'use client'

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Image from 'next/image'
import { GalleryProps, GalleryImage } from '@/types/gallery'
import styles from '@/styles/Gallery.module.css'
import { useEffect, useState, KeyboardEvent } from 'react'

export default function Gallery({ images, onImageClick }: GalleryProps) {
  const [isClient, setIsClient] = useState(false)
  const [currentFocus, setCurrentFocus] = useState<number>(0)

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

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>, index: number) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault()
        onImageClick(images[index])
        break
      case 'ArrowRight':
        e.preventDefault()
        if (index < images.length - 1) {
          setCurrentFocus(index + 1)
          const nextElement = document.querySelector(`[data-index="${index + 1}"]`) as HTMLElement
          nextElement?.focus()
          scrollGallery('right')
        }
        break
      case 'ArrowLeft':
        e.preventDefault()
        if (index > 0) {
          setCurrentFocus(index - 1)
          const prevElement = document.querySelector(`[data-index="${index - 1}"]`) as HTMLElement
          prevElement?.focus()
          scrollGallery('left')
        }
        break
    }
  }

  if (!isClient) {
    return (
      <section className={styles.section} aria-label="Gallery of work">
        <h1 className={styles.title} id="gallery-title">The Work.</h1>
        <div className={`${styles.track} hide-scrollbar`} role="region" aria-labelledby="gallery-title">
          {images.map((image: GalleryImage, index: number) => (
            <div 
              className={styles.item} 
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`View details of ${image.artist ? `${image.artist}'s` : ''} ${image.title}`}
              data-index={index}
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
                  aria-hidden="true"
                />
                <p className={styles.description}>{image.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.nav} role="navigation" aria-label="Gallery navigation">
          <button className={styles.navButton} aria-label="Previous items">
            <FaChevronLeft className={styles.navIcon} aria-hidden="true" />
          </button>
          <button className={styles.navButton} aria-label="Next items">
            <FaChevronRight className={styles.navIcon} aria-hidden="true" />
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className={styles.section} aria-label="Gallery of work">
      <h1 className={styles.title} id="gallery-title">The Work.</h1>
      <div 
        className={`${styles.track} hide-scrollbar`}
        role="region"
        aria-labelledby="gallery-title"
      >
        {images.map((image: GalleryImage, index: number) => (
          <div 
            className={styles.item} 
            key={index}
            onClick={() => onImageClick(image)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            tabIndex={0}
            role="button"
            aria-label={`View details of ${image.artist ? `${image.artist}'s` : ''} ${image.title}`}
            data-index={index}
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
                aria-hidden="true"
              />
              <p className={styles.description}>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.nav} role="navigation" aria-label="Gallery navigation">
        <button 
          className={styles.navButton}
          onClick={() => scrollGallery('left')}
          aria-label="Previous items"
          disabled={currentFocus === 0}
        >
          <FaChevronLeft className={styles.navIcon} aria-hidden="true" />
        </button>
        <button 
          className={styles.navButton}
          onClick={() => scrollGallery('right')}
          aria-label="Next items"
          disabled={currentFocus === images.length - 1}
        >
          <FaChevronRight className={styles.navIcon} aria-hidden="true" />
        </button>
      </div>
    </section>
  )
} 
'use client'

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Image from 'next/image'
import { GalleryProps, GalleryImage } from '@/types/gallery'
import styles from '@/styles/Gallery.module.css'
import { useEffect, useState, KeyboardEvent } from 'react'

const seoContent = `
  <div class="sr-only">
    <h2>Charm La'Donna - Choreographer and Creative Director</h2>
    <p>
      Explore the portfolio of Charm La'Donna, featuring choreography and creative direction for 
      music videos, live performances, tours, and brand campaigns. Working with artists like 
      Beyoncé, Kendrick Lamar, Dua Lipa, The Weeknd, and more. Specializing in Super Bowl 
      halftime shows, Grammy performances, world tours, and innovative brand collaborations.
    </p>
    <ul>
      <li>Music Video Choreography</li>
      <li>Live Performance Direction</li>
      <li>Tour Creative Direction</li>
      <li>Brand Campaign Movement Direction</li>
      <li>Stage Design and Performance</li>
      <li>Artist Development and Mentorship</li>
    </ul>
  </div>
`

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

  return (
    <section className={styles.section} aria-label="Gallery of work">
      <div dangerouslySetInnerHTML={{ __html: seoContent }} suppressHydrationWarning />
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
            {...(isClient ? {
              onClick: () => onImageClick(image),
              onKeyDown: (e) => handleKeyDown(e, index)
            } : {})}
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
              />
              <p className={styles.description}>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.nav} role="navigation" aria-label="Gallery navigation">
        <button 
          className={styles.navButton}
          {...(isClient ? {
            onClick: () => scrollGallery('left'),
            disabled: currentFocus === 0
          } : {})}
          aria-label="Previous items"
        >
          <FaChevronLeft className={styles.navIcon} />
        </button>
        <button 
          className={styles.navButton}
          {...(isClient ? {
            onClick: () => scrollGallery('right'),
            disabled: currentFocus === images.length - 1
          } : {})}
          aria-label="Next items"
        >
          <FaChevronRight className={styles.navIcon} />
        </button>
      </div>
    </section>
  )
} 
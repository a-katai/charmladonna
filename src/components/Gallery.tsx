'use client'

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Image from 'next/image'
import { GalleryProps, GalleryImage } from '@/types/gallery'
import styles from '@/styles/Gallery.module.css'
import { useEffect, useState, KeyboardEvent, useCallback, useRef } from 'react'
import { getOptimizedImageSrc, getImageDimensions } from '@/utils/imageLoader'

const getAltText = (image: GalleryImage): string => {
  if (!image) return 'Gallery image'

  const prefix = image.artist ? `${image.artist} - ` : ''
  const context = image.category ? (
    image.category === 'Live Performance' ? 'performing' : 
    image.category === 'Music Video' ? 'music video for' :
    image.category === 'Brand Campaign' ? 'campaign featuring' :
    'showcasing'
  ) : 'showcasing'
  
  const title = image.title || 'Untitled work'
  const description = image.description ? ` - ${image.description}` : ''
  
  return `${prefix}${context} ${title}${description}`.trim()
}

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

const DEFAULT_DIMENSIONS = {
  width: 500,
  height: 700
}

const useIntersectionObserver = (callback: (entries: IntersectionObserverEntry[]) => void) => {
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observer.current = new IntersectionObserver(callback, {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    })

    return () => {
      if (observer.current) {
        observer.current.disconnect()
      }
    }
  }, [callback])

  return observer.current
}

const getResponsiveDimensions = (image: GalleryImage, windowWidth: number) => {
  if (!image.responsive) return DEFAULT_DIMENSIONS

  if (windowWidth <= 640 && image.responsive.small) {
    return image.responsive.small
  }
  if (windowWidth <= 1024 && image.responsive.medium) {
    return image.responsive.medium
  }
  if (image.responsive.large) {
    return image.responsive.large
  }

  return image.dimensions || DEFAULT_DIMENSIONS
}

export default function Gallery({ images, onImageClick }: GalleryProps) {
  const [isClient, setIsClient] = useState(false)
  const [currentFocus, setCurrentFocus] = useState<number>(0)
  const [windowWidth, setWindowWidth] = useState(0)
  const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set())
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])
  const trackRef = useRef<HTMLDivElement>(null)

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      const index = Number(entry.target.getAttribute('data-index'))
      if (entry.isIntersecting) {
        setVisibleImages(prev => new Set(prev).add(index))
        // Mark performance
        performance.mark(`image-${index}-visible`)
      }
    })
  }, [])

  const observer = useIntersectionObserver(handleIntersection)

  useEffect(() => {
    setIsClient(true)
    setWindowWidth(window.innerWidth)

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (observer && imageRefs.current) {
      imageRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref)
      })
    }
  }, [observer])

  const scrollGallery = useCallback((direction: 'left' | 'right'): void => {
    if (!trackRef.current) return
    
    const scrollAmount = windowWidth < 640 ? 300 : 400
    const currentScroll = trackRef.current.scrollLeft
    const maxScroll = trackRef.current.scrollWidth - trackRef.current.clientWidth
    
    let targetScroll = currentScroll + (direction === 'left' ? -scrollAmount : scrollAmount)
    targetScroll = Math.max(0, Math.min(targetScroll, maxScroll))

    trackRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    })
  }, [windowWidth])

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

  const setImageRef = useCallback((el: HTMLDivElement | null, index: number) => {
    imageRefs.current[index] = el
  }, [])

  return (
    <section className={styles.section} aria-label="Gallery of work">
      <div dangerouslySetInnerHTML={{ __html: seoContent }} suppressHydrationWarning />
      <h1 className={styles.title} id="gallery-title">The Work.</h1>
      <div 
        ref={trackRef}
        className={`${styles.track} hide-scrollbar`}
        role="region"
        aria-labelledby="gallery-title"
      >
        {images.map((image: GalleryImage, index: number) => {
          const dimensions = getImageDimensions(image, windowWidth)
          const isVisible = visibleImages.has(index)
          
          return (
            <div 
              ref={(el) => setImageRef(el, index)}
              className={styles.item} 
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`View details of ${image.artist ? `${image.artist}'s` : ''} ${image.title}`}
              data-index={index}
              onClick={isClient ? () => onImageClick(image) : undefined}
              onKeyDown={isClient ? (e) => handleKeyDown(e, index) : undefined}
            >
              <div className={styles.itemInner}>
                <div className={styles.content}>
                  {image.artist && <h3 className={styles.artist}>{image.artist}</h3>}
                  <h3 className={styles.itemTitle}>{image.title}</h3>
                </div>
                <Image 
                  src={getOptimizedImageSrc(image, windowWidth)}
                  alt={getAltText(image)}
                  width={dimensions.width}
                  height={dimensions.height}
                  className={`
                    object-cover transition-opacity duration-300 ease-in-out
                    ${isVisible ? 'opacity-100' : 'opacity-0'}
                  `}
                  priority={index < 2}
                  sizes={`
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 50vw,
                    (max-width: 1280px) 33vw,
                    25vw
                  `}
                  quality={90}
                  loading={index < 4 ? "eager" : "lazy"}
                  placeholder="blur"
                  blurDataURL={image.metadata?.blurDataUrl || "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0XFyAeIBYgHh4gIh4fHSMdHR0dIx0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="}
                  style={{ 
                    transform: 'translate3d(0, 0, 0)',
                    backgroundColor: image.metadata?.dominantColor
                  }}
                  onLoadingComplete={(result) => {
                    if (result.naturalWidth === 0) {
                      console.error(`Failed to load image: ${image.src}`)
                    } else {
                      performance.mark(`image-${index}-loaded`)
                      performance.measure(
                        `image-${index}-load-time`,
                        `image-${index}-visible`,
                        `image-${index}-loaded`
                      )
                    }
                  }}
                />
                <p className={styles.description}>{image.description}</p>
              </div>
            </div>
          )
        })}
      </div>
      <div className={styles.nav} role="navigation" aria-label="Gallery navigation">
        <button 
          className={styles.navButton}
          onClick={isClient ? () => scrollGallery('left') : undefined}
          disabled={isClient && currentFocus === 0}
        >
          <FaChevronLeft className={styles.navIcon} />
          <span className="sr-only">Previous</span>
        </button>
        <button 
          className={styles.navButton}
          onClick={isClient ? () => scrollGallery('right') : undefined}
          disabled={isClient && currentFocus === images.length - 1}
        >
          <FaChevronRight className={styles.navIcon} />
          <span className="sr-only">Next</span>
        </button>
      </div>
    </section>
  )
} 
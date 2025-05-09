'use client'

import Image from 'next/image'
import { useState } from 'react'
import type { GalleryImage } from '@/types/gallery'
import styles from '@/styles/Gallery.module.css'
import { FaPlay } from 'react-icons/fa'

const DEFAULT_DIMENSIONS = {
  width: 500,
  height: 700
}

export default function GalleryItem({ image }: { image: GalleryImage }) {
  const [imageError, setImageError] = useState(false)

  const handleClick = () => {
    if (image.videoId) {
      // Convert mobile YouTube URLs to standard format
      let videoUrl = image.videoId
      if (videoUrl.includes('m.youtube.com')) {
        videoUrl = videoUrl.replace('m.youtube.com', 'www.youtube.com')
      }
      window.open(videoUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div 
      key={image.src} 
      className={styles.item}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={`View ${image.title} video`}
    >
      <div className={styles.itemInner}>
        <div className={styles.content}>
          {image.artist && <h3 className={styles.artist}>{image.artist}</h3>}
          <h3 className={styles.itemTitle}>{image.title}</h3>
        </div>
        <div className={styles.imageWrapper}>
          {!imageError ? (
            <Image
              src={image.src}
              alt={image.title || 'Gallery image'}
              width={image.dimensions?.width || DEFAULT_DIMENSIONS.width}
              height={image.dimensions?.height || DEFAULT_DIMENSIONS.height}
              className={styles.image}
              loading="eager"
              priority={true}
              quality={75}
              sizes="(max-width: 768px) 320px, 400px"
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              onError={() => setImageError(true)}
            />
          ) : (
            <div 
              style={{ 
                width: '100%', 
                height: '100%', 
                backgroundColor: '#111',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff'
              }}
            >
              {image.title}
            </div>
          )}
          {image.videoId && (
            <div className={styles.playButton}>
              <FaPlay size={24} />
            </div>
          )}
        </div>
        {image.description && (
          <p className={styles.description}>{image.description}</p>
        )}
      </div>
    </div>
  )
} 
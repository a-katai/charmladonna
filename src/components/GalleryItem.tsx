'use client'

import Image from 'next/image'
import type { GalleryImage } from '@/types/gallery'
import styles from '@/styles/Gallery.module.css'

const DEFAULT_DIMENSIONS = {
  width: 500,
  height: 700
}

export default function GalleryItem({ image }: { image: GalleryImage }) {
  const handleClick = () => {
    if (image.videoId) {
      window.open(image.videoId, '_blank')
    }
  }

  return (
    <div 
      key={image.src} 
      className={styles.item}
      onClick={handleClick}
    >
      <div className={styles.itemInner}>
        <div className={styles.content}>
          {image.artist && <h3 className={styles.artist}>{image.artist}</h3>}
          <h3 className={styles.itemTitle}>{image.title}</h3>
        </div>
        <Image
          src={image.src}
          alt={image.title || 'Gallery image'}
          width={image.dimensions?.width || DEFAULT_DIMENSIONS.width}
          height={image.dimensions?.height || DEFAULT_DIMENSIONS.height}
          className={styles.image}
        />
        {image.description && (
          <p className={styles.description}>{image.description}</p>
        )}
      </div>
    </div>
  )
} 
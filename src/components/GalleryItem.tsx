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
          loading="eager"
          priority={true}
          quality={75}
          sizes="(max-width: 768px) 320px, 400px"
          placeholder="blur"
          blurDataURL={image.metadata?.blurDataUrl || "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0XFyAeIBYgHh4gIh4fHSMdHR0dIx0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="}
        />
        {image.description && (
          <p className={styles.description}>{image.description}</p>
        )}
      </div>
    </div>
  )
} 
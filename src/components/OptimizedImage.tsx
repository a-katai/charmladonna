'use client'

import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isError ? (
        <Image
          src={src}
          alt={alt}
          width={width || 1200}
          height={height || 800}
          priority={priority}
          quality={90}
          className={`
            duration-700 ease-in-out
            ${isLoading ? 'scale-110 blur-lg' : 'scale-100 blur-0'}
          `}
          onLoadingComplete={() => setIsLoading(false)}
          onError={() => setIsError(true)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
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
            color: '#fff',
            padding: '1rem',
            textAlign: 'center'
          }}
        >
          {alt}
        </div>
      )}
    </div>
  )
} 
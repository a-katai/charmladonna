'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/Hero.module.css'
import LoadingSpinner from './LoadingSpinner'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          videoRef.current.currentTime = 0
          videoRef.current.muted = true
          videoRef.current.playsInline = true
          
          // Add event listeners for video loading
          videoRef.current.addEventListener('loadeddata', () => {
            setIsVideoLoaded(true)
            setIsLoading(false)
          })
          
          // Start loading the video
          videoRef.current.load()
          
          // Attempt to play once loaded
          await videoRef.current.play()
        } catch (err) {
          console.error('Video play failed:', err)
          setIsVideoLoaded(false)
          setIsLoading(false)
        }
      }
    }

    const handleScroll = () => {
      if (!videoContainerRef.current || !containerRef.current) return
      
      const scrollPosition = window.scrollY
      const heroHeight = containerRef.current.offsetHeight
      const scrollPercentage = Math.min(1, scrollPosition / heroHeight)
      
      const widthPercentage = 100 - (scrollPercentage * 15)
      const clampedWidth = Math.max(85, widthPercentage)
      const borderRadius = scrollPercentage * 16
      
      videoContainerRef.current.style.width = `${clampedWidth}%`
      videoContainerRef.current.style.borderRadius = `${borderRadius}px`
    }

    playVideo()
    handleScroll() // Set initial width
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (videoRef.current) {
        videoRef.current.removeEventListener('loadeddata', () => {
          setIsVideoLoaded(true)
          setIsLoading(false)
        })
      }
    }
  }, [])

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.video} ref={videoContainerRef}>
        {isLoading && <LoadingSpinner />}
        {!isVideoLoaded && (
          <div className={styles.fallback}>
            <Image
              src="/gallery/026.jpg"
              alt="Charm La'Donna"
              fill
              priority
              quality={90}
              style={{ objectFit: 'cover' }}
            />
          </div>
        )}
        <video 
          ref={videoRef}
          autoPlay
          playsInline
          muted
          loop
          preload="auto"
          controls={false}
          style={{ opacity: isVideoLoaded ? 1 : 0 }}
        >
          <source 
            src="/charm.mov" 
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  )
} 
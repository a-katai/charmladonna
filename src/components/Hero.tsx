'use client'

import { useEffect, useRef } from 'react'
import styles from '@/styles/Hero.module.css'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
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

    handleScroll() // Set initial width
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.video} ref={videoContainerRef}>
        <video 
          ref={videoRef}
          autoPlay
          playsInline
          muted
          loop
          preload="auto"
          controls={false}
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
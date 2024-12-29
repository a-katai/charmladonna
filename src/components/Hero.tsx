'use client'

import { useEffect, useRef } from 'react'
import styles from '@/styles/Hero.module.css'

interface HeroProps {
  videoModal: {
    isOpen: boolean;
    videoId: string;
  };
  onClose: () => void;
}

export default function Hero({ videoModal, onClose }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          if (videoRef.current.paused) {
            videoRef.current.currentTime = 0
            videoRef.current.muted = true
            videoRef.current.playsInline = true
            await videoRef.current.play()
          }
        } catch (err) {
          console.error('Video play failed:', err)
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
    }
  }, [])

  return (
    <>
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
            <source src="/charm.mov" type="video/mp4" />
          </video>
        </div>
      </div>

      {videoModal.isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[1000] backdrop-blur-sm" onClick={onClose}>
          <div className={styles.video} ref={videoContainerRef}>
            <button 
              className="absolute top-4 right-4 text-2xl text-white z-10 hover:opacity-80"
              onClick={onClose}
            >
              ×
            </button>
            <iframe
              className="w-full h-full object-cover"
              src={`https://www.youtube.com/embed/${videoModal.videoId}?autoplay=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  )
} 
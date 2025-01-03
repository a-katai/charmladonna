'use client'

import { useRef, useEffect, ReactNode } from 'react'
import styles from '@/styles/Modal.module.css'

interface SwipeHandlerProps {
  children: ReactNode
  onSwipeDown: () => void
}

export default function SwipeHandler({ children, onSwipeDown }: SwipeHandlerProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  let startY = 0
  let currentY = 0
  let startTime = 0

  useEffect(() => {
    const content = contentRef.current
    const overlay = overlayRef.current
    if (!content || !overlay) return

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY
      currentY = startY
      startTime = Date.now()
      content.style.transition = 'none'
    }

    const handleTouchMove = (e: TouchEvent) => {
      const deltaY = e.touches[0].clientY - startY
      currentY = e.touches[0].clientY

      if (deltaY > 0 && content.scrollTop === 0) {
        e.preventDefault()
        const resistance = 1 - Math.min(deltaY / window.innerHeight, 0.5)
        content.style.transform = `translateY(${deltaY * resistance}px)`
        
        // Fade overlay based on drag distance
        const opacity = Math.max(0.4 - (deltaY / window.innerHeight) * 0.4, 0)
        overlay.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`
      }
    }

    const handleTouchEnd = () => {
      const deltaY = currentY - startY
      const deltaTime = Date.now() - startTime
      const velocity = deltaY / deltaTime

      content.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
      overlay.style.transition = 'background-color 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
      
      // Dismiss if swipe is fast enough or far enough
      if (velocity > 0.5 || deltaY > 100) {
        content.classList.add(styles.closing)
        overlay.classList.add(styles.closing)
        setTimeout(onSwipeDown, 500)
      } else {
        content.style.transform = ''
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
      }
    }

    content.addEventListener('touchstart', handleTouchStart, { passive: false })
    content.addEventListener('touchmove', handleTouchMove, { passive: false })
    content.addEventListener('touchend', handleTouchEnd)

    return () => {
      content.removeEventListener('touchstart', handleTouchStart)
      content.removeEventListener('touchmove', handleTouchMove)
      content.removeEventListener('touchend', handleTouchEnd)
    }
  }, [onSwipeDown])

  return (
    <div ref={overlayRef} className={styles.overlay} onClick={onSwipeDown}>
      <div ref={contentRef} className={styles.content} onClick={e => e.stopPropagation()}>
        <div className={styles.dragHandle} />
        {children}
      </div>
    </div>
  )
} 
'use client'

import { useRef, useEffect, ReactNode } from 'react'
import styles from '@/styles/Modal.module.css'

interface SwipeHandlerProps {
  children: ReactNode
  onSwipeDown: () => void
}

export default function SwipeHandler({ children, onSwipeDown }: SwipeHandlerProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  let startY = 0
  let currentY = 0

  useEffect(() => {
    const content = contentRef.current
    if (!content) return

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY
      currentY = startY
      content.style.transition = 'none'
    }

    const handleTouchMove = (e: TouchEvent) => {
      const deltaY = e.touches[0].clientY - startY
      currentY = e.touches[0].clientY

      if (deltaY > 0 && content.scrollTop === 0) {
        e.preventDefault()
        content.style.transform = `translateY(${deltaY}px)`
      }
    }

    const handleTouchEnd = () => {
      content.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      
      if (currentY - startY > 100) {
        content.classList.add(styles.closing)
        setTimeout(onSwipeDown, 300)
      } else {
        content.style.transform = ''
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
    <div ref={contentRef} className={styles.content} onClick={e => e.stopPropagation()}>
      <div className={styles.dragHandle} />
      {children}
    </div>
  )
} 
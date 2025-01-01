'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'

interface SwipeHandlerProps {
  children: ReactNode
  onSwipeDown: () => void
  threshold?: number
}

export default function SwipeHandler({ children, onSwipeDown, threshold = 100 }: SwipeHandlerProps) {
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [translateY, setTranslateY] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientY)
  }

  const onTouchMove = (e: TouchEvent) => {
    if (!touchStart) return
    const currentTouch = e.targetTouches[0].clientY
    const diff = currentTouch - touchStart

    // Only allow downward swipes
    if (diff > 0) {
      setTranslateY(diff)
    }
    setTouchEnd(currentTouch)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const diff = touchEnd - touchStart

    // Check if swipe distance exceeds threshold
    if (diff > threshold) {
      onSwipeDown()
    }

    // Reset position
    setTranslateY(0)
    setTouchStart(null)
    setTouchEnd(null)
  }

  useEffect(() => {
    const element = contentRef.current
    if (!element) return

    element.addEventListener('touchstart', onTouchStart)
    element.addEventListener('touchmove', onTouchMove)
    element.addEventListener('touchend', onTouchEnd)

    return () => {
      element.removeEventListener('touchstart', onTouchStart)
      element.removeEventListener('touchmove', onTouchMove)
      element.removeEventListener('touchend', onTouchEnd)
    }
  }, [touchStart, touchEnd])

  return (
    <div 
      ref={contentRef}
      style={{ 
        transform: `translateY(${translateY}px)`,
        transition: translateY === 0 ? 'transform 0.3s ease-out' : 'none'
      }}
    >
      {children}
    </div>
  )
} 
'use client'

import { ReactNode } from 'react'

interface ClientLayoutProps {
  children: ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {children}
    </div>
  )
} 
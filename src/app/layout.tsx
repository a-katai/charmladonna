import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { metadata as siteMetadata } from './metadata'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { Analytics } from '@vercel/analytics/react'
import { ErrorBoundary } from '@/components/ErrorBoundary'

// Optimize font loading
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = siteMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* DNS prefetch for commonly used domains */}
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <Analytics />
        <ErrorBoundary>
          <main>
            {children}
          </main>
        </ErrorBoundary>
      </body>
    </html>
  )
} 
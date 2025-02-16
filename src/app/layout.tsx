import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { metadata as siteMetadata } from './metadata'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = siteMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
} 
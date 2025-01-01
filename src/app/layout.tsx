import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Charm La'Donna",
  description: "Charm La'Donna is a visionary choreographer and creative director, known for her work with global artists and innovative stage direction.",
  verification: {
    google: 'google39d2c095fd494e74',
  },
  openGraph: {
    type: 'website',
    url: 'https://charmladonna.com',
    title: "Charm La'Donna | Choreographer & Creative Director",
    description: "Charm La'Donna is a visionary choreographer and creative director, known for her work with global artists and innovative stage direction.",
    siteName: "Charm La'Donna",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Charm La'Donna - Choreographer and Creative Director",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@charmladonna',
    creator: '@charmladonna',
    title: "Charm La'Donna | Choreographer & Creative Director",
    description: "Charm La'Donna is a visionary choreographer and creative director, known for her work with global artists and innovative stage direction.",
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
} 
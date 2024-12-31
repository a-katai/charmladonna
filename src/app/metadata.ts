import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Charm La'Donna",
  description: "Discover the world of Charm La'Donna, the multi-hyphenate choreographer and creative director behind performances for Beyoncé, Dua Lipa, Kendrick Lamar, and more. From the Super Bowl to global tours, explore her iconic work and inspiring journey.",
  keywords: "Charm La'Donna, choreography, creative direction, Super Bowl Halftime Show, Beyoncé, Kendrick Lamar, Dua Lipa, Selena Gomez, Shakira, Ice Spice, Lil Baby, Pharrell, Shakira, Meghan Trainor, Grammys, Oscars, global tours, dance, mentoring, The Weeknd, Future Nostalgia, After Hours Til Dawn, DAMN, Mr. Morale & The Big Steppers, Madonna, Fatima Robinson, dance mentorship, visionary choreographer, artist storytelling, UCLA World Arts and Culture",
  authors: [{ name: "Charm La'Donna" }],
  metadataBase: new URL('https://charmladonna.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Charm La'Donna",
    description: "Charm La'Donna brings visionary artistry to stages worldwide. Explore her work with Beyoncé, Dua Lipa, Kendrick Lamar, and more, and discover her commitment to authenticity and mentorship.",
    url: 'https://charmladonna.com',
    siteName: "Charm La'Donna",
    images: [
      {
        url: '/gallery/lululemon_dance_pants.jpg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Charm La'Donna",
    description: "Charm La'Donna, the creative force behind Beyoncé, Kendrick Lamar, and more. Dive into her iconic career in dance and mentorship.",
    images: ['/gallery/lululemon_dance_pants.jpg'],
    site: '@CharmLaDonna',
    creator: '@CharmLaDonna',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
      }
    ]
  },
  other: {
    'json-ld': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': "Charm La'Donna",
      'url': 'https://charmladonna.com',
      'logo': 'https://charmladonna.com/gallery/lululemon_dance_pants.jpg',
      'sameAs': [
        'https://www.instagram.com/CharmLaDonna',
        'https://www.twitter.com/CharmLaDonna',
        'https://www.facebook.com/CharmLaDonna'
      ]
    })
  }
} 
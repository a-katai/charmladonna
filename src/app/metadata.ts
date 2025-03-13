import { Metadata } from 'next'

const baseUrl = 'https://charmladonna.com'
const mainImage = 'https://charmladonna.com/026.jpg'
const mainDescription = "From choreographing the Super Bowl Halftime Show and the Oscars to collaborating with Beyoncé, Dua Lipa, The Weeknd, and Kendrick Lamar, Charm La'Donna stands as one of entertainment's most beloved and in-demand multi-hyphenates. Her visionary work has illuminated performances for Selena Gomez, Becky G, Pharrell, Shakira, Meghan Trainor, and more—landing on legendary stages from the Grammys to global tours, including Dua Lipa's Future Nostalgia, The Weeknd's After Hours Til Dawn, and Kendrick Lamar's DAMN and Mr. Morale & The Big Steppers. A prodigy who kicked off her career touring with Madonna at 17, Charm balanced her passion for dance with academic pursuits at UCLA, studying World Arts and Culture under the mentorship of the iconic Fatima Robinson. Guided by the principle that each artist has a distinct story to tell, she channels movement into deeply expressive performances, ensuring authenticity at every turn. Beyond the stage, Charm uplifts the next generation through mentorship, classes, donations, fundraisers, and more—proving that her impact extends far beyond the spotlight"

export const metadata: Metadata = {
  title: "Charm La'Donna",
  description: mainDescription,
  keywords: "Charm La'Donna, choreography, creative direction, Super Bowl Halftime Show, Beyoncé, Kendrick Lamar, Dua Lipa, Selena Gomez, Shakira, Ice Spice, Lil Baby, Pharrell, Shakira, Meghan Trainor, Grammys, Oscars, global tours, dance, mentoring, The Weeknd, Future Nostalgia, After Hours Til Dawn, DAMN, Mr. Morale & The Big Steppers, Madonna, Fatima Robinson, dance mentorship, visionary choreographer, artist storytelling, UCLA World Arts and Culture",
  authors: [{ name: "Charm La'Donna" }],
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Charm La'Donna",
    description: mainDescription,
    url: baseUrl,
    siteName: "Charm La'Donna",
    images: [{
      url: mainImage,
      width: 1200,
      height: 630,
      alt: "Charm La'Donna",
      type: 'image/jpeg',
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Charm La'Donna",
    description: mainDescription,
    images: [mainImage],
    creator: '@charmladonna'
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
    'json-ld': JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': "Charm La'Donna",
        'url': baseUrl,
        'logo': `${baseUrl}${mainImage}`,
        'description': mainDescription,
        'sameAs': [
          'https://www.instagram.com/CharmLaDonna',
          'https://www.twitter.com/CharmLaDonna',
          'https://www.facebook.com/CharmLaDonna'
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': "Charm La'Donna",
            'item': baseUrl
          }
        ]
      }
    ])
  }
} 
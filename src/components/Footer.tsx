'use client'

import { FaInstagram, FaTwitter, FaYoutube, FaTiktok } from 'react-icons/fa'
import styles from '@/styles/Footer.module.css'

const socialLinks = [
  {
    name: 'Instagram',
    icon: FaInstagram,
    url: 'https://www.instagram.com/charmladonna',
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    url: 'https://twitter.com/charmladonna',
  },
  {
    name: 'YouTube',
    icon: FaYoutube,
    url: 'https://youtube.com/@charmladonna',
  },
  {
    name: 'TikTok',
    icon: FaTiktok,
    url: 'https://tiktok.com/@charmladonna',
  },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.social}>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={link.name}
              >
                <link.icon />
              </a>
            ))}
          </div>
          <div className={styles.info}>
            <div className={styles.copyright}>© 2025 Charm La'Donna. All rights reserved.</div>
            <a 
              href="https://www.katai.io" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.credit}
            >
              Site by Katai
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 
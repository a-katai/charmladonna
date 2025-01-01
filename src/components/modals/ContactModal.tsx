'use client'

import { ModalProps } from '@/types/modal'
import { FaInstagram, FaTwitter, FaTiktok, FaYoutube } from 'react-icons/fa'
import styles from '@/styles/Modal.module.css'

export default function ContactModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>×</button>
        <h2 className={styles.sectionTitle}>Contact</h2>
        
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <input 
              type="text" 
              placeholder="Name" 
              name="name"
            />
          </div>
          <div className={styles.formGroup}>
            <input 
              type="email" 
              placeholder="Email" 
              name="email"
            />
          </div>
          <div className={styles.formGroup}>
            <textarea 
              placeholder="Message" 
              name="message"
              rows={4}
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>

        <div className={styles.socialLinks}>
          <a
            href="https://instagram.com/charmladonna"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/charmladonna"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://tiktok.com/@charmladonna"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>
          <a
            href="https://youtube.com/@charmladonna"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  )
} 
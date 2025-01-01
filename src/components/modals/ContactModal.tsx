'use client'

import { ModalProps } from '@/types/modal'
import styles from '@/styles/Modal.module.css'
import SwipeHandler from '@/components/SwipeHandler'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function ContactModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <SwipeHandler onSwipeDown={onClose}>
        <div className={styles.content} onClick={e => e.stopPropagation()}>
          <button className={styles.close} onClick={onClose}>×</button>
          <div className={styles.directory}>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <input type="text" placeholder="Name" />
              </div>
              <div className={styles.formGroup}>
                <input type="email" placeholder="Email" />
              </div>
              <div className={styles.formGroup}>
                <textarea placeholder="Message"></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>Send Message</button>
            </form>
            <div className={styles.socialLinks}>
              <a href="https://instagram.com/charmladonna" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <FaInstagram />
              </a>
              <a href="https://twitter.com/charmladonna" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <FaTwitter />
              </a>
              <a href="https://youtube.com/@charmladonna" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </SwipeHandler>
    </div>
  )
} 
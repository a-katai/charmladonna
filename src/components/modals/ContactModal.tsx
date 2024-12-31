'use client'

import { ModalProps } from '@/types/modal'
import { FaInstagram, FaTiktok, FaYoutube, FaXTwitter } from 'react-icons/fa6'
import styles from '@/styles/Modal.module.css'

export default function ContactModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>×</button>
        <h2 className={styles.formTitle}>Contact</h2>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <input 
              type="text" 
              placeholder="Name" 
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <input 
              type="email" 
              placeholder="Email" 
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <textarea 
              placeholder="Message" 
              className={styles.textarea}
              rows={3}
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
        <div className="flex justify-center gap-8 mt-8">
          <a 
            href="https://www.instagram.com/charmladonna" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:opacity-70 transition-opacity"
          >
            <FaInstagram size={20} />
          </a>
          <a 
            href="https://twitter.com/CharmLaDonna" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:opacity-70 transition-opacity"
          >
            <FaXTwitter size={18} />
          </a>
          <a 
            href="https://www.tiktok.com/@charmladonna" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:opacity-70 transition-opacity"
          >
            <FaTiktok size={18} />
          </a>
          <a 
            href="https://www.youtube.com/@CharmLaDonna" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:opacity-70 transition-opacity"
          >
            <FaYoutube size={20} />
          </a>
        </div>
      </div>
    </div>
  )
} 
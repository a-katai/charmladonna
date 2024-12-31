'use client'

import { ModalProps } from '@/types/modal'
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
              rows={4}
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
} 
'use client'

import { useState } from 'react'
import { ModalProps } from '@/types/modal'
import styles from '@/styles/Modal.module.css'
import SwipeHandler from '@/components/SwipeHandler'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function ContactModal({ isOpen, onClose }: ModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <SwipeHandler onSwipeDown={onClose}>
        <div className={styles.content} onClick={e => e.stopPropagation()}>
          <button className={styles.close} onClick={onClose}>×</button>
          <div className={styles.directory}>
            <h2 className={styles.artistName}>Contact</h2>
            {!isSubmitted ? (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <textarea 
                    name="message"
                    placeholder="Message" 
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className={styles.submitButton}>Send Message</button>
              </form>
            ) : (
              <div className={styles.thankYouMessage}>
                <h3>Thank you for your message!</h3>
                <p>We'll get back to you soon.</p>
              </div>
            )}
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
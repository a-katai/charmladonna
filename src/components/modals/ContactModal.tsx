'use client'

import { useState, useEffect } from 'react'
import { ModalProps } from '@/types/modal'
import styles from '@/styles/Modal.module.css'
import SwipeHandler from '@/components/SwipeHandler'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

// Initialize EmailJS with your public key
emailjs.init('JdvHiGgELjn1ZdiRF')

export default function ContactModal({ isOpen, onClose }: ModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!isOpen) {
      setIsSubmitted(false)
      setError('')
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      await emailjs.send(
        'service_fix0dr3',
        'template_k0832uk',
        {
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message')
        },
        'JdvHiGgELjn1ZdiRF'
      )
      setIsSubmitted(true)
    } catch (err) {
      console.error('Error:', err)
      setError('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
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
                {error && <div className={styles.errorMessage}>{error}</div>}
                <div className={styles.formGroup}>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Name" 
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className={styles.formGroup}>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email" 
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className={styles.formGroup}>
                  <textarea 
                    name="message"
                    placeholder="Message" 
                    rows={4}
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
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
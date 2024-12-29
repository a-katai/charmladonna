'use client'

import { ModalProps } from '@/types/modal'
import styles from '@/styles/Modal.module.css'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactModal({ isOpen, onClose }: ModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        'service_fix0dr3',
        'template_k0832uk',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'JdvHiGgELjn1ZdiRF'
      )

      setStatus('sent')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => {
        setStatus('idle')
        onClose()
      }, 2000)
    } catch (error) {
      console.error('Failed to send email:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>×</button>
        <div className={styles.directory}>
          <div className={`${styles.artist} ${styles.formContainer}`}>
            <h2 className={styles.artistName}></h2>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                />
              </div>
              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  disabled={status === 'sending'}
                />
              </div>
              <button 
                type="submit" 
                className={`${styles.submitButton} ${status !== 'idle' ? styles.disabled : ''}`}
                disabled={status !== 'idle'}
              >
                {status === 'idle' && 'Send Message'}
                {status === 'sending' && 'Sending...'}
                {status === 'sent' && 'Message Sent!'}
                {status === 'error' && 'Failed to Send'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
} 
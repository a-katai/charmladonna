'use client'

import { useState } from 'react'
import styles from '@/styles/Navigation.module.css'
import AboutModal from './modals/AboutModal'
import CreditsModal from './modals/CreditsModal'
import ContactModal from './modals/ContactModal'

export default function Navigation() {
  const [activeModal, setActiveModal] = useState<'about' | 'credits' | 'contact' | null>(null)

  const closeModal = () => setActiveModal(null)

  return (
    <>
      <nav className={styles.nav}>
        <button 
          className={styles.link} 
          onClick={() => setActiveModal('about')}
        >
          About
        </button>
        <button 
          className={styles.link} 
          onClick={() => setActiveModal('credits')}
        >
          Credits
        </button>
        <button 
          className={styles.link} 
          onClick={() => setActiveModal('contact')}
        >
          Contact
        </button>
      </nav>

      <AboutModal 
        isOpen={activeModal === 'about'} 
        onClose={closeModal} 
      />
      <CreditsModal 
        isOpen={activeModal === 'credits'} 
        onClose={closeModal} 
      />
      <ContactModal 
        isOpen={activeModal === 'contact'} 
        onClose={closeModal} 
      />
    </>
  )
} 
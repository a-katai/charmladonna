'use client'

import { ModalProps } from '@/types/modal'
import styles from '@/styles/Modal.module.css'
import SwipeHandler from '@/components/SwipeHandler'

export default function AboutModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <SwipeHandler onSwipeDown={onClose}>
        <div className={styles.content} onClick={e => e.stopPropagation()}>
          <button className={styles.close} onClick={onClose}>×</button>
          <div className={styles.directory}>
            <div className={styles.creditsSection}>
              <h2 className={styles.sectionTitle}>About</h2>
              <div className={styles.creditsList}>
                <div className={styles.creditsItem}>
                  From choreographing the Super Bowl Halftime Show and the Oscars to collaborating with Beyoncé, 
                  Dua Lipa, The Weeknd, and Kendrick Lamar, Charm La'Donna stands as one of entertainment's most beloved and 
                  in-demand multi-hyphenates. Her visionary work has illuminated performances for Selena Gomez, 
                  Becky G, Pharrell, Shakira, Meghan Trainor, and more—landing on legendary 
                  stages from the Grammys to global tours, including Dua Lipa's Future Nostalgia, The Weeknd's 
                  After Hours Til Dawn, and Kendrick Lamar's DAMN and Mr. Morale & The Big Steppers.
                </div>
                <div className={styles.creditsItem}>
                  A prodigy who kicked off her career touring with Madonna at 17, Charm balanced her passion for 
                  dance with academic pursuits at UCLA, studying World Arts and Culture under the mentorship of 
                  the iconic Fatima Robinson. Guided by the principle that each artist has a distinct story to 
                  tell, she channels movement into deeply expressive performances, ensuring authenticity at every 
                  turn. Beyond the stage, Charm uplifts the next generation through mentorship, classes, donations, 
                  fundraisers, and more—proving that her impact extends far beyond the spotlight.
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwipeHandler>
    </div>
  )
} 
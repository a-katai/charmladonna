"use client"

import { ModalProps } from '@/types/modal'
import styles from '@/styles/Modal.module.css'
import SwipeHandler from '@/components/SwipeHandler'

export default function CreditsModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <SwipeHandler onSwipeDown={onClose}>
        <div className={styles.content} onClick={e => e.stopPropagation()}>
          <button className={styles.close} onClick={onClose}>×</button>
          <div className={styles.directory}>
            <div className={styles.creditsSection}>
              <h2 className={styles.sectionTitle}>CHOREOGRAPHY</h2>
              <div className={styles.creditsList}>
                <div className={styles.creditsItem}>Beyoncé</div>
                <div className={styles.creditsItem}>Dua Lipa</div>
                <div className={styles.creditsItem}>Kendrick Lamar</div>
                <div className={styles.creditsItem}>Selena Gomez</div>
                <div className={styles.creditsItem}>Becky G</div>
                <div className={styles.creditsItem}>Pharrell</div>
                <div className={styles.creditsItem}>Ice Spice</div>
                <div className={styles.creditsItem}>Lil Baby</div>
                <div className={styles.creditsItem}>Shakira</div>
                <div className={styles.creditsItem}>Meghan Trainor</div>
              </div>
            </div>
            <div className={styles.creditsSection}>
              <h2 className={styles.sectionTitle}>PERFORMANCES</h2>
              <div className={styles.creditsList}>
                <div className={styles.creditsItem}>Super Bowl Halftime Show</div>
                <div className={styles.creditsItem}>The Oscars</div>
                <div className={styles.creditsItem}>The Grammys</div>
                <div className={styles.creditsItem}>Dua Lipa's Future Nostalgia Tour</div>
                <div className={styles.creditsItem}>The Weeknd's After Hours Til Dawn Tour</div>
                <div className={styles.creditsItem}>Kendrick Lamar's DAMN Tour</div>
                <div className={styles.creditsItem}>Kendrick Lamar's Mr. Morale & The Big Steppers Tour</div>
              </div>
            </div>
          </div>
        </div>
      </SwipeHandler>
    </div>
  )
}
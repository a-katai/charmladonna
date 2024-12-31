"use client"

import { ModalProps } from '@/types/modal'
import styles from '@/styles/Modal.module.css'

export default function CreditsModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>×</button>
        <div className={styles.directory}>
          <div className={styles.artist}>
            <h2 className={styles.creditsTitle}>Credits</h2>
            <div className={styles.list}>
              {/* ANDERSON .PAAK */}
              <h3 className={styles.artistName}>ANDERSON .PAAK</h3>
              <p>Performance Choreography: BET Awards (with Jay Rock)</p>

              {/* ANITTA */}
              <h3 className={styles.artistName}>ANITTA</h3>
              <p>Performance Choreography: UEFA Champions League Final (2023)</p>

              {/* AVA MAX */}
              <h3 className={styles.artistName}>AVA MAX</h3>
              <p>Direction & Choreography: "My Head My Heart"</p>
              <p>Music Video Choreography: "The Motto" (Part II)</p>

              {/* BABY KEEM */}
              <h3 className={styles.artistName}>BABY KEEM</h3>
              <p>Performance Choreography: BET Awards</p>
              <p>Producer Credit: "The Melodic Blue" Short Film</p>

              {/* BAD BUNNY */}
              <h3 className={styles.artistName}>BAD BUNNY</h3>
              <p>Performance Direction: "Baticano"</p>

              {/* BECKY G */}
              <h3 className={styles.artistName}>BECKY G</h3>
              <p>Performance Choreography: Coachella 2023</p>
              <p>Performance Choreography: Ellen DeGeneres Show</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 

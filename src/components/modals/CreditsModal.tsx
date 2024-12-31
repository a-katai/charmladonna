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
          <h2 className={styles.creditsTitle}>Credits</h2>

          {/* Brand Campaigns */}
          <div className={styles.section}>
            <h3 className={styles.artistName}>Brand Campaigns</h3>
            <div className={styles.list}>
              <p>Lululemon (Dance Pants Campaign)</p>
              <p>Red Bull (Brand Ambassador)</p>
              <p>Everlane (Brand Ambassador)</p>
              <p>Apple Music/Harry Styles Choreography</p>
              <p>Clinique Campaign - Marsai Martin – Choreographer</p>
              <p>O2 Commercial - Dua Lipa - Choreographer</p>
              <p>Sketchers Commercial - Choreographer</p>
              <p>Zara "Origins" brand commercial - Choreography</p>
            </div>
          </div>

          {/* Television/Film */}
          <div className={styles.section}>
            <h3 className={styles.artistName}>Television/Film</h3>
            <div className={styles.list}>
              <p>The Perfect Couple (Netflix) (2024)</p>
              <p>Dua Lipa "Sunday on 60 Minutes" with Anderson Cooper (2024)</p>
              <p>The Weeknd - iHeartRadio Music Awards (2024)</p>
              <p>Dua Lipa - iHeartRadio Music Awards (2024)</p>
              <p>Dua Lipa Rock and Roll Hall of Fame (Cher's Induction) (2024)</p>
              <p>Dua Lipa "Live from Royal Albert Hall" (2024)</p>
              <p>Dua Lipa - Grammys (2024)</p>
              <p>Dua Lipa - The Brit Awards (2024)</p>
              <p>Dua Lipa - Glastonbury Festival (2024)</p>
              <p>Meghan Trainor - "To The Moon" on Jimmy Fallon</p>
              <p>Meghan Trainor - "Wrap Me Up" on Jimmy Kimmel</p>
              <p>Meghan Trainor - American Idol</p>
              <p>Shakira - VMA Video Vanguard Performance</p>
              <p>Baby Keem "The Melodic Blue" short film (Producer Credit)</p>
              <p>The Weeknd - After Hours Tour on Showtime</p>
              <p>94th Academy Awards - "We Don't Talk About Bruno"</p>
              <p>Nas – Grammy Awards 2022</p>
              <p>Kendrick Lamar – Day N Vegas</p>
              <p>House Party (Feature Film)</p>
              <p>Lizzo's "Watch Out For the Big Grrrls"</p>
              <p>Rhythm And Flow</p>
              <p>Hip Hop Squares Choreographer</p>
              <p>Nashville Squares</p>
              <p>Pretty Little Liars Choreographer</p>
              <p>Run Sweetheart Run (Feature Film)</p>
            </div>
          </div>

          {/* Live Performances */}
          <div className={styles.section}>
            <h3 className={styles.artistName}>Live Performances</h3>
            <div className={styles.list}>
              <p>Meghan Trainor - "Timeless Tour" (2024)</p>
              <p>The Weeknd - "Live from Sao Paulo" (2024)</p>
              <p>Dua Lipa - "Radical Optimism" Tour Asia (2024)</p>
              <p>Dua Lipa - Austin City Limits Music Festival (2024)</p>
              <p>Dua Lipa - "Live from Royal Albert Hall" (2024)</p>
              <p>Offset Set It Off Tour (2024)</p>
              <p>Tyga - Rolling Loud LA (2024)</p>
              <p>Rosalia - Louis Vuitton Men's Fashion Week Live Performance (2024)</p>
              <p>Bia - NBA Finals Halftime (2024)</p>
              <p>Rosalia - Motomami Festival Tour</p>
              <p>Tate McRae - Juno Music Awards</p>
              <p>Peso Pluma "Doble P" Tour</p>
              <p>BIA "Really Her Tour"</p>
              <p>Offset - "Set It Off" Tour</p>
              <p>Coco Jones - Summer Festival Tour</p>
              <p>MetroBoomin - Coachella (2023)</p>
              <p>Tyga - Coachella (2023)</p>
              <p>Becky G - Coachella (2023)</p>
              <p>Shakira - Latin Grammys Performance (2023)</p>
              <p>Ice Spice - The Scarlet Tour (2023)</p>
              <p>Anitta - UEFA Champions League Final Performance (2023)</p>
              <p>The Weeknd "After Hours Til Dawn" Tour Europe and South America legs (2023)</p>
              <p>Becky G "Mi Casa, Tu Casa" Tour</p>
              <p>Kendrick Lamar - Flog Gnaw Performance</p>
              <p>Kendrick Lamar - Move Afrika-Global Citizen</p>
              <p>Louis Vuitton & Rosalia - Paris Fashion Week</p>
              <p>Rosalia - Coachella (2022 and 2023)</p>
              <p>Dua Lipa - "Future Nostalgia" Tour</p>
              <p>Kendrick Lamar - "Mr. Morale and the Big Steppers" Tour</p>
              <p>Rosalia "El Mal Querer" Tour</p>
              <p>Kendrick Lamar "Damn" Tour</p>
              <p>Lil Baby - "Back Outside" Tour</p>
            </div>
          </div>

          {/* Music Videos */}
          <div className={styles.section}>
            <h3 className={styles.artistName}>Music Videos</h3>
            <div className={styles.list}>
              <p>Kendrick Lamar - "Squabble Up" (Choreographer)</p>
              <p>Ava Max - "My Head My Heart" (Director/Choreographer)</p>
              <p>Bad Bunny - "Baticano" (Choreographer)</p>
              <p>Bebe Rexha/Doja Cat - "Music Video" (Choreographer)</p>
              <p>BIA - "I'm That Bitch" (Choreographer)</p>
              <p>BIA - "Lights Out" (Movement Direction)</p>
              <p>Coco Jones - "Here We Go" (Choreographer)</p>
              <p>Dua Lipa - "Houdini" (Choreographer)</p>
              <p>Dua Lipa - "Dance The Night" (Choreographer)</p>
              <p>Dua Lipa - "Training Season" (Choreographer)</p>
              <p>Dua Lipa - "Illusions" (Choreographer)</p>
              <p>Kendrick Lamar - "Not Like Us" (Choreographer/Producer)</p>
              <p>Meghan Trainor - "All About That Bass" (Choreographer)</p>
              <p>Meghan Trainor - "I’m A Lady" (Choreographer)</p>
              <p>Meghan Trainor ft. T-Pain - "Been Like This" (Choreographer)</p>
              <p>Meghan Trainor - "Here We Go" (Choreographer)</p>
              <p>Meghan Trainor - "To The Moon" (Choreographer)</p>
              <p>Meghan Trainor & Kris Jenner - "I Am Your Mother"</p>
              <p>Rosalia - "TUYA" (Movement Direction)</p>
              <p>Rosalia - "Malamente" (Choreographer)</p>
              <p>Rosalia - "Yo x Ti, Tu x Mi" (Choreographer)</p>
              <p>Rosalia - "A Pale" (Choreographer)</p>
              <p>Rosalia - "Di Mi Nombre" (Choreographer)</p>
              <p>Rosalia - "Pienso Tu Mira" (Choreographer)</p>
              <p>Rosalia - "Con Altura" (Choreographer)</p>
              <p>Selena Gomez - "Look At Her Now" (Choreographer)</p>
              <p>Selena Gomez - "Baila Conmigo" (Choreographer)</p>
              <p>Selena Gomez - "Me And My Girls" (Choreographer)</p>
              <p>Selena Gomez - "De Una Vez" (Choreographer)</p>
              <p>Selena Gomez - "Rare" (Choreographer)</p>
              <p>Selena Gomez - "Come And Get It" (Choreographer)</p>
              <p>Shenseea ft. MTS - "Lick" (Choreographer)</p>
              <p>Tyga & Chris Brown - "Nasty" (Movement Direction)</p>
              <p>Tyga - "Bops Going Brazy" (Choreographer)</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
"use client"

import { ModalProps } from '@/types/modal'
import styles from '@/styles/Modal.module.css'

export default function CreditsModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>×</button>
        
        {/* Brand Campaigns */}
        <div className={styles.creditsSection}>
          <h2 className={styles.sectionTitle}>Brand Campaigns</h2>
          <div className={styles.creditsList}>
            <div className={styles.creditsItem}>Lululemon (Dance Pants Campaign)</div>
            <div className={styles.creditsItem}>Red Bull (Brand Ambassador)</div>
            <div className={styles.creditsItem}>Everlane (Brand Ambassador)</div>
            <div className={styles.creditsItem}>Apple Music/Harry Styles Choreography</div>
            <div className={styles.creditsItem}>Clinique Campaign - Marsai Martin – Choreographer</div>
            <div className={styles.creditsItem}>O2 Commercial - Dua Lipa - Choreographer</div>
            <div className={styles.creditsItem}>Sketchers Commercial - Choreographer</div>
            <div className={styles.creditsItem}>Zara "Origins" brand commercial - Choreography</div>
          </div>
        </div>

        {/* Television/Film */}
        <div className={styles.creditsSection}>
          <h2 className={styles.sectionTitle}>Television/Film</h2>
          <div className={styles.creditsList}>
            <div className={styles.creditsItem}>The Perfect Couple (Netflix) (2024)</div>
            <div className={styles.creditsItem}>Dua Lipa "Sunday on 60 Minutes" with Anderson Cooper (2024)</div>
            <div className={styles.creditsItem}>The Weeknd - iHeartRadio Music Awards (2024)</div>
            <div className={styles.creditsItem}>Dua Lipa - iHeartRadio Music Awards (2024)</div>
            <div className={styles.creditsItem}>Dua Lipa Rock and Roll Hall of Fame (Cher's Induction) (2024)</div>
            <div className={styles.creditsItem}>Dua Lipa "Live from Royal Albert Hall" (2024)</div>
            <div className={styles.creditsItem}>Dua Lipa - Grammys (2024)</div>
            <div className={styles.creditsItem}>Dua Lipa - The Brit Awards (2024)</div>
            <div className={styles.creditsItem}>Dua Lipa - Glastonbury Festival (2024)</div>
            <div className={styles.creditsItem}>Meghan Trainor - "To The Moon" on Jimmy Fallon</div>
            <div className={styles.creditsItem}>Meghan Trainor - "Wrap Me Up" on Jimmy Kimmel</div>
            <div className={styles.creditsItem}>Meghan Trainor - American Idol</div>
            <div className={styles.creditsItem}>Shakira - VMA Video Vanguard Performance</div>
            <div className={styles.creditsItem}>Baby Keem "The Melodic Blue" short film (Producer Credit)</div>
            <div className={styles.creditsItem}>The Weeknd - After Hours Tour on Showtime</div>
            <div className={styles.creditsItem}>94th Academy Awards - "We Don't Talk About Bruno"</div>
            <div className={styles.creditsItem}>Nas – Grammy Awards 2022</div>
            <div className={styles.creditsItem}>Kendrick Lamar – Day N Vegas</div>
            <div className={styles.creditsItem}>Ava Max – "The Motto" MV (Part II)</div>
            <div className={styles.creditsItem}>House Party (Feature Film)</div>
            <div className={styles.creditsItem}>Lizzo's "Watch Out For the Big Grrrls"</div>
            <div className={styles.creditsItem}>Gunna – BET Awards</div>
            <div className={styles.creditsItem}>Baby Keem – BET Awards</div>
            <div className={styles.creditsItem}>Ella Mai – Pandora/Xfinity Awesome Beats</div>
            <div className={styles.creditsItem}>Pepsi Super Bowl Half Time - The Weeknd</div>
            <div className={styles.creditsItem}>Dua Lipa - Grammys</div>
            <div className={styles.creditsItem}>Rhythm And Flow</div>
            <div className={styles.creditsItem}>Hip Hop Squares Choreographer</div>
            <div className={styles.creditsItem}>Nashville Squares</div>
            <div className={styles.creditsItem}>2018 Grammys - Kendrick Lamar</div>
            <div className={styles.creditsItem}>Dua Lipa - Studio 2054 Live Stream</div>
            <div className={styles.creditsItem}>Rosalia - VMAs</div>
            <div className={styles.creditsItem}>Rosalia - Grammys</div>
            <div className={styles.creditsItem}>Dua Lipa - EMAs</div>
            <div className={styles.creditsItem}>Dua Lipa - American Music Awards</div>
            <div className={styles.creditsItem}>Selena Gomez - American Music Awards</div>
            <div className={styles.creditsItem}>Selena Gomez - Radio Disney Music Awards</div>
            <div className={styles.creditsItem}>Pretty Little Liars Choreographer</div>
            <div className={styles.creditsItem}>Becky G - Ellen Degeneres Show</div>
            <div className={styles.creditsItem}>Meghan Trainor - Ellen Degeneres Show</div>
            <div className={styles.creditsItem}>Dua Lipa - Ellen Degeneres Show</div>
            <div className={styles.creditsItem}>Meghan Trainor - Jimmy Fallon</div>
            <div className={styles.creditsItem}>Meghan Trainor - Mickey's 50th Birthday Spectacular</div>
            <div className={styles.creditsItem}>Dua Lipa - Saturday Night Live</div>
            <div className={styles.creditsItem}>Meghan Trainor - Jimmy Kimmel</div>
            <div className={styles.creditsItem}>Dua Lipa - Mardi Gras Sydney</div>
            <div className={styles.creditsItem}>Dua Lipa - Jimmy Fallon</div>
            <div className={styles.creditsItem}>Meghan Trainor - iHeart Radio Awards</div>
            <div className={styles.creditsItem}>Jay Rock - BET Awards</div>
            <div className={styles.creditsItem}>Ella Mai - Soul Train Awards</div>
            <div className={styles.creditsItem}>Dua Lipa - Mama Awards</div>
            <div className={styles.creditsItem}>Dua Lipa - Arias Awards</div>
            <div className={styles.creditsItem}>Anderson Paak & Jay Rock - BET Awards</div>
            <div className={styles.creditsItem}>D Smoke - BET Awards</div>
            <div className={styles.creditsItem}>Run Sweetheart Run (Feature Film)</div>
          </div>
        </div>

        {/* Live Performances */}
        <div className={styles.creditsSection}>
          <h2 className={styles.sectionTitle}>Live Performances</h2>
          <div className={styles.creditsList}>
            <div className={styles.creditsItem}>Meghan Trainor - "Timeless Tour" (2024)</div>
            <div className={styles.creditsItem}>The Weeknd - "Live from Sao Paulo" (2024)</div>
            <div className={styles.creditsItem}>Dua Lipa - "Radical Optimism" Tour Asia (2024)</div>
            <div className={styles.creditsItem}>Dua Lipa - Austin City Limits Music Festival (2024)</div>
            <div className={styles.creditsItem}>Dua Lipa - "Live from Royal Albert Hall" (2024)</div>
            <div className={styles.creditsItem}>Offset - Set It Off Tour (2024)</div>
            <div className={styles.creditsItem}>Tyga - Rolling Loud LA (2024)</div>
            <div className={styles.creditsItem}>Rosalia - Louis Vuitton Men's Fashion Week Live Performance (2024)</div>
            <div className={styles.creditsItem}>Bia - NBA Finals Halftime (2024)</div>
            <div className={styles.creditsItem}>Rosalia - Motomami Festival Tour</div>
            <div className={styles.creditsItem}>Tate McRae - Juno Music Awards</div>
            <div className={styles.creditsItem}>Peso Pluma "Doble P" Tour</div>
            <div className={styles.creditsItem}>BIA "Really Her Tour"</div>
            <div className={styles.creditsItem}>Offset - "Set It Off" Tour</div>
            <div className={styles.creditsItem}>Coco Jones - Summer Festival Tour</div>
            <div className={styles.creditsItem}>MetroBoomin - Coachella (2023)</div>
            <div className={styles.creditsItem}>Tyga - Coachella (2023)</div>
            <div className={styles.creditsItem}>Becky G - Coachella (2023)</div>
            <div className={styles.creditsItem}>Shakira - Latin Grammys Performance (2023)</div>
            <div className={styles.creditsItem}>Ice Spice - The Scarlet Tour (2023)</div>
            <div className={styles.creditsItem}>Anitta - UEFA Champions League Final Performance (2023)</div>
            <div className={styles.creditsItem}>The Weeknd "After Hours Til Dawn" Tour Europe and South America legs (2023)</div>
            <div className={styles.creditsItem}>Becky G "Mi Casa, Tu Casa" Tour</div>
            <div className={styles.creditsItem}>Metro Boomin - Amazon Music Live Performance</div>
            <div className={styles.creditsItem}>Kendrick Lamar - Flog Gnaw Performance</div>
            <div className={styles.creditsItem}>Kendrick Lamar - Move Afrika-Global Citizen</div>
            <div className={styles.creditsItem}>Louis Vuitton & Rosalia - Paris Fashion Week</div>
            <div className={styles.creditsItem}>Tyga - ARAVIA Music Festival Qatar</div>
            <div className={styles.creditsItem}>Rosalia - Coachella (2022 and 2023)</div>
            <div className={styles.creditsItem}>Dua Lipa - "Future Nostalgia" Tour</div>
            <div className={styles.creditsItem}>Kendrick Lamar - "Mr. Morale and the Big Steppers" Tour</div>
            <div className={styles.creditsItem}>YG - Coachella</div>
            <div className={styles.creditsItem}>Ella Mai - Coachella</div>
            <div className={styles.creditsItem}>Rosalia "El Mal Querer" Tour</div>
            <div className={styles.creditsItem}>Meghan Trainor - NFL Thanksgiving Halftime</div>
            <div className={styles.creditsItem}>Selena Gomez - NFL Thanksgiving Halftime</div>
            <div className={styles.creditsItem}>Selena Gomez "Stars Dance" Tour</div>
            <div className={styles.creditsItem}>Meghan Trainor "All About That Bass" Tour</div>
            <div className={styles.creditsItem}>Kendrick Lamar "Damn" Tour</div>
            <div className={styles.creditsItem}>Meghan Trainor - Jingle Ball</div>
            <div className={styles.creditsItem}>Lil Baby - "Back Outside" Tour</div>
            <div className={styles.creditsItem}>Anderson Paak Tour</div>
          </div>
        </div>

        {/* Music Videos */}
        <div className={styles.creditsSection}>
          <h2 className={styles.sectionTitle}>Music Videos</h2>
          <div className={styles.creditsList}>
            <div className={styles.creditsItem}>Kendrick Lamar - "Squabble Up" (Choreographer)</div>
            <div className={styles.creditsItem}>Ava Max - "My Head My Heart" (Director/Choreographer)</div>
            <div className={styles.creditsItem}>Bad Bunny - "Baticano" (Choreographer)</div>
            <div className={styles.creditsItem}>Bebe Rexha/Doja Cat (Choreographer)</div>
            <div className={styles.creditsItem}>BIA - "I'm That Bitch" (Choreographer)</div>
            <div className={styles.creditsItem}>BIA - "Lights Out" (Movement Direction)</div>
            <div className={styles.creditsItem}>Coco Jones - "Here We Go" (Choreographer)</div>
            <div className={styles.creditsItem}>Dua Lipa - "Houdini" (Choreographer)</div>
            <div className={styles.creditsItem}>Dua Lipa - "Dance The Night" (Choreographer)</div>
            <div className={styles.creditsItem}>Dua Lipa - "We're Good" (Choreographer)</div>
            <div className={styles.creditsItem}>Dua Lipa - "Training Season" (Choreographer)</div>
            <div className={styles.creditsItem}>Dua Lipa - "Illusions" (Choreographer)</div>
            <div className={styles.creditsItem}>Dua Lipa - "Don't Start Now" (Choreographer)</div>
            <div className={styles.creditsItem}>Dua Lipa ft. Da Baby - "Levitating" (Choreographer)</div>
            <div className={styles.creditsItem}>Dua Lipa ft. Miley Cyrus - "Prisoner" (Choreographer)</div>
            <div className={styles.creditsItem}>Dua Lipa ft. Angele - "Fever" (Choreographer)</div>
            <div className={styles.creditsItem}>Dua Lipa - "Hallucinate" (Choreographer)</div>
            <div className={styles.creditsItem}>Dua Lipa - "Break My Heart" (Choreographer)</div>
            <div className={styles.creditsItem}>Dua Lipa - "Physical" (Choreographer)</div>
            <div className={styles.creditsItem}>Ella Mai - "Another Love Song" (Choreographer)</div>
            <div className={styles.creditsItem}>Kendrick Lamar - "Not Like Us" (Choreographer/Producer)</div>
            <div className={styles.creditsItem}>Meghan Trainor - "All About That Bass" (Choreographer)</div>
            <div className={styles.creditsItem}>Meghan Trainor - "I'm A Lady" (Choreographer)</div>
            <div className={styles.creditsItem}>Meghan Trainor ft. T-Pain - "Been Like This" (Choreographer)</div>
            <div className={styles.creditsItem}>Meghan Trainor - "Here We Go" (Choreographer)</div>
            <div className={styles.creditsItem}>Meghan Trainor - "To The Moon" (Choreographer)</div>
            <div className={styles.creditsItem}>Meghan Trainor & Kris Jenner - "I Am Your Mother" (Choreographer)</div>
            <div className={styles.creditsItem}>Mimi Webb - "Mistake" (Choreographer)</div>
            <div className={styles.creditsItem}>Rosalia - "TUYA" (Movement Direction)</div>
            <div className={styles.creditsItem}>Rosalia - "Malamente" (Choreographer)</div>
            <div className={styles.creditsItem}>Rosalia - "Yo x Ti, Tu x Mi" (Choreographer)</div>
            <div className={styles.creditsItem}>Rosalia - "A Pale" (Choreographer)</div>
            <div className={styles.creditsItem}>Rosalia - "Di Mi Nombre" (Choreographer)</div>
            <div className={styles.creditsItem}>Rosalia - "Pienso Tu Mira" (Choreographer)</div>
            <div className={styles.creditsItem}>Rosalia - "Con Altura" (Choreographer)</div>
            <div className={styles.creditsItem}>Selena Gomez - "Look At Her Now" (Choreographer)</div>
            <div className={styles.creditsItem}>Selena Gomez - "Baila Conmigo" (Choreographer)</div>
            <div className={styles.creditsItem}>Selena Gomez - "Me And My Girls" (Choreographer)</div>
            <div className={styles.creditsItem}>Selena Gomez - "De Una Vez" (Choreographer)</div>
            <div className={styles.creditsItem}>Selena Gomez - "Rare" (Choreographer)</div>
            <div className={styles.creditsItem}>Selena Gomez - "Come And Get It" (Choreographer)</div>
            <div className={styles.creditsItem}>Shenseea ft. MTS - "Lick" (Choreographer)</div>
            <div className={styles.creditsItem}>Tyga & Chris Brown - "Nasty" (Movement Direction)</div>
            <div className={styles.creditsItem}>Tyga - "Bops Going Brazy" (Choreographer)</div>
          </div>
        </div>
      </div>
    </div>
  )
}
"use client"

import { ModalProps } from '@/types/modal'
import styles from '@/styles/Modal.module.css'

export default function CreditsModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>×</button>
        <div className={`${styles.directory} ${styles.creditsContent}`}>

          {/* ANDERSON .PAAK */}
          <div className={styles.artist}>
            <h2 className={styles.artistName}>ANDERSON .PAAK</h2>
            <p>Performance Choreography: BET Awards (with Jay Rock)</p>
          </div>

          {/* ANITTA */}
          <div className={styles.artist}>
            <h2 className={styles.artistName}>ANITTA</h2>
            <p>Performance Choreography: UEFA Champions League Final (2023)</p>
          </div>

          {/* AVA MAX */}
          <div className={styles.artist}>
            <h2 className={styles.artistName}>AVA MAX</h2>
            <p>Direction & Choreography: "My Head My Heart"</p>
            <p>Music Video Choreography: "The Motto" (Part II)</p>
          </div>

          {/* BABY KEEM */}
          <div className={styles.artist}>
            <h2 className={styles.artistName}>BABY KEEM</h2>
            <p>Performance Choreography: BET Awards</p>
            <p>Producer Credit: "The Melodic Blue" Short Film</p>
          </div>

          {/* BAD BUNNY */}
          <div className={styles.artist}>
            <h2 className={styles.artistName}>BAD BUNNY</h2>
            <p>Performance Direction: "Baticano"</p>
          </div>

          {/* BECKY G */}
          <div className={styles.artist}>
            <h2 className={styles.artistName}>BECKY G</h2>
            <p>Performance Choreography: Coachella 2023</p>
            <p>Performance Choreography: Ellen DeGeneres Show</p>
            <p>Tour Choreography: "Mi Casa, Tu Casa" Tour</p>
          </div>

          {/* BEYONCÉ */}
          <div className={styles.artist}>
            <h2 className={styles.artistName}>BEYONCÉ</h2>
            <p>Choreography: Netflix Christmas Halftime Show</p>
          </div>

          {/* BIA */}
          <div className={styles.artist}>
            <h2 className={styles.artistName}>BIA</h2>
            <p>Music Video Choreography: "I’m That Bitch"</p>
            <p>Movement Direction: "Lights Out"</p>
            <p>Tour Choreography: "Really Her" Tour</p>
            <p>Performance Choreography: NBA Finals Halftime (2024)</p>
          </div>

          {/* BILLIE EILISH */}
          <div className={styles.artist}>
            <h2 className={styles.artistName}>BILLIE EILISH</h2>
            <p>Movement Direction: "Happier Than Ever" (Music Video)</p>
            <p>Movement Direction: "Happier Than Ever" (Special Acoustic Tour Edition)</p>
          </div>

          {/* CARDI B */}
          <div className={styles.artist}>
            <h2 className={styles.artistName}>CARDI B</h2>
            <p>Movement Direction: "Up" (Music Video)</p>
          </div>

          {/* COCO JONES */}
          <div className={styles.artist}>
            <h2 className={styles.artistName}>COCO JONES</h2>
            <p>Tour Choreography: Summer Festival Tour</p>
            <p>Music Video Choreography: "Here We Go"</p>
          </div>

          {/* D SMOKE */}
          <div className={styles.artist}>
            <h2 className={styles.artistName}>D SMOKE</h2>
            <p>Performance Choreography: BET Awards</p>
          </div>

          {/* DOJA CAT */}
          <div className={styles.artist}>
            <h2 className={styles.artistName}>DOJA CAT</h2>
            <p>Music Video & Performance Direction: "Say So"</p>
            <p>Choreography: Bebe Rexha & Doja Cat Collaboration</p>
          </div>

          {/* DUA LIPA */}
          <div className={styles.artist}>
            <h2 className={styles.artistName}>DUA LIPA</h2>
            <p>Creative Direction: Live from Royal Albert Hall</p>
            <p>Choreography: Grammy Awards 2021</p>
            <p>Choreography: Grammy Awards 2024</p>
            <p>Choreography: iHeartRadio Music Awards 2024</p>
            <p>Choreography: The Brit Awards 2024</p>
            <p>Choreography: Rock and Roll Hall of Fame (Cher’s Induction) 2024</p>
            <p>Choreography: Austin City Limits (2024)</p>
            <p>Choreography: Glastonbury Festival (2024)</p>
            <p>Choreography: Saturday Night Live</p>
            <p>Choreography: Ellen DeGeneres Show</p>
            <p>Choreography: Jimmy Fallon</p>
            <p>Choreography: Jimmy Kimmel</p>
            <p>Choreography: American Music Awards</p>
            <p>Choreography: EMAs</p>
            <p>Choreography: MAMA Awards</p>
            <p>Choreography: Arias Awards</p>
            <p>Choreography: Mardi Gras Sydney</p>
            <p>Choreography: Radio Disney Music Awards</p>
            <p>Tour Choreography: "Future Nostalgia" Tour</p>
            <p>Tour Choreography: "Radical Optimism" Tour (Asia, 2024)</p>
            <p>Choreography: "Dance The Night" (Music Video)</p>
            <p>Choreography: "Houdini" (Music Video)</p>
            <p>Choreography: "We’re Good" (Music Video)</p>
            <p>Choreography: "Training Season" (Music Video)</p>
            <p>Choreography: "Illusions" (Music Video)</p>
            <p>Choreography: "Don’t Start Now" (Music Video)</p>
            <p>Choreography: "Levitating" ft. DaBaby (Music Video)</p>
            <p>Choreography: "Prisoner" ft. Miley Cyrus (Music Video)</p>
            <p>Choreography: "Fever" ft. Angele (Music Video)</p>
            <p>Choreography: "Hallucinate" (Music Video)</p>
            <p>Choreography: "Break My Heart" (Music Video)</p>
            <p>Choreography: "Physical" (Music Video)</p>
            <p>Choreography: "Sunday on 60 Minutes" with Anderson Cooper (2024)</p>
            <p>Choreographer: O2 Commercial (Dua Lipa)</p>
          </div>

          {/* ELLA MAI */}
          <div className={styles.artist}>
            <h2 className={styles.artistName}>ELLA MAI</h2>
            <p>Performance Choreography: Pandora/Xfinity Awesome Beats</p>
            <p>Performance Choreography: Coachella</p>
            <p>Performance Choreography: Soul Train Awards</p>
            <p>Music Video Choreography: "Another Love Song"</p>
          </div>

          {/* ICE SPICE */}
          <div className={styles.artist}>
            <h2 className={styles.artistName}>ICE SPICE</h2>
            <p>Performance Choreography: The Scarlet Tour (2023)</p>
          </div>

          {/* JAY ROCK */}
          <div className={styles.artist}>
            <h2 className={styles.artistName}>JAY ROCK</h2>
            <p>Performance Choreography: BET Awards</p>
          </div>

          {/* KENDRICK LAMAR */}
          <div className={styles.artist}>
            <h2 className={styles.artistName}>KENDRICK LAMAR</h2>
            <p>Performance Choreography: Day N Vegas</p>
            <p>Performance Choreography: Flog Gnaw</p>
            <p>Performance Choreography: Move Afrika (Global Citizen)</p>
            <p>Performance Choreography: 2018 Grammys</p>
            <p>Tour Choreography: Mr. Morale & the Big Steppers Tour</p>
            <p>Creative Direction: "Squabble Up" (Music Video)</p>
            <p>Choreographer & Producer: "Not Like Us" (Music Video)</p>
          </div>

          {/* LIL BABY */}
          <div className={styles.artist}>
            <h2 className={styles.artistName}>LIL BABY</h2>
            <p>Tour Choreography: "Back Outside" Tour</p>
          </div>

          {/* MEGAN THEE STALLION */}
          <div className={styles.artist}>
            <h2 className={styles.artistName}>MEGAN THEE STALLION</h2>
            <p>Music Video Choreography: "Body"</p>
            <p>Performance Direction & Choreography: "Lick" (ft. Shenseea)</p>
          </div>

          {/* MEGHAN TRAINOR */}
          <div className={styles.artist}>
            <h2 className={styles.artistName}>MEGHAN TRAINOR</h2>
            <p>Performance Choreography: American Idol</p>
            <p>Performance Choreography: NFL Thanksgiving Halftime</p>
            <p>Choreography: Late-Night Shows (Jimmy Fallon, Jimmy Kimmel, Ellen)</p>
            <p>Performance Choreography: Mickey’s 50th Birthday Spectacular</p>
            <p>Tour Choreography: "Timeless Tour" (2024)</p>
            <p>Music Video Choreography: "All About That Bass"</p>
            <p>Music Video Choreography: "I’m A Lady"</p>
            <p>Music Video Choreography: ft. T-Pain "Been Like This"</p>
            <p>Music Video Choreography: "Here We Go"</p>
            <p>Music Video Choreography: "To The Moon"</p>
            <p>Music Video Choreography: & Kris Jenner "I Am Your Mother"</p>
          </div>

          {/* METRO BOOMIN */}
          <div className={styles.artist}>
            <h2 className={styles.artistName}>METRO BOOMIN</h2>
            <p>Creative Direction: Coachella 2023</p>
            <p>Creative Direction: Amazon Music Live Performance</p>
          </div>

          {/* NAS */}
          <div className={styles.artist}>
            <h2 className={styles.artistName}>NAS</h2>
            <p>Choreography: Grammy Awards 2022</p>
          </div>

          {/* NORMANI */}
          <div className={styles.artist}>
            <h2 className={styles.artistName}>NORMANI</h2>
            <p>Music Video Choreography: "Wild Side" (ft. Cardi B)</p>
          </div>

          {/* ROSALÍA */}
          <div className={styles.artist}>
            <h2 className={styles.artistName}>ROSALÍA</h2>
            <p>Performance Choreography: Motomami Festival Tour</p>
            <p>Performance Choreography: Coachella 2022</p>
            <p>Performance Choreography: Coachella 2023</p>
            <p>Performance Choreography: Grammys</p>
            <p>Performance Choreography: VMAs</p>
            <p>Performance Choreography: Louis Vuitton Men’s Fashion Week (2024)</p>
            <p>Performance Choreography: Paris Fashion Week (Special Performance)</p>
            <p>Music Video Choreography: "Con Altura"</p>
            <p>Music Video Choreography: "Malamente"</p>
            <p>Music Video Choreography: "Yo x Ti, Tu x Mi"</p>
            <p>Music Video Choreography: "A Pale"</p>
            <p>Music Video Choreography: "Di Mi Nombre"</p>
            <p>Music Video Choreography: "Pienso Tu Mira"</p>
            <p>Movement Direction: "TUYA"</p>
          </div>

          {/* SELENA GOMEZ */}
          <div className={styles.artist}>
            <h2 className={styles.artistName}>SELENA GOMEZ</h2>
            <p>Performance Choreography: NFL Thanksgiving Halftime</p>
            <p>Performance Choreography: American Music Awards</p>
            <p>Performance Choreography: Radio Disney Music Awards</p>
            <p>Music Video Choreography: "Look At Her Now"</p>
            <p>Music Video Choreography: "Baila Conmigo"</p>
            <p>Music Video Choreography: "Me And My Girls"</p>
            <p>Music Video Choreography: "De Una Vez"</p>
            <p>Music Video Choreography: "Rare"</p>
            <p>Music Video Choreography: "Come And Get It"</p>
          </div>

          {/* SHAKIRA */}
          <div className={styles.artist}>
            <h2 className={styles.artistName}>SHAKIRA</h2>
            <p>Choreography: VMA Video Vanguard Performance</p>
            <p>Performance Choreography: Latin Grammys (2023)</p>
          </div>

          {/* SHENSEEA */}
          <div className={styles.artist}>
            <h2 className={styles.artistName}>SHENSEEA</h2>
            <p>Performance Direction & Choreography: "Lick" (ft. Megan Thee Stallion)</p>
          </div>

          {/* TATE MCRAE */}
          <div className={styles.artist}>
            <h2 className={styles.artistName}>TATE MCRAE</h2>
            <p>Performance Choreography: Juno Music Awards</p>
          </div>

          {/* TYGA */}
          <div className={styles.artist}>
            <h2 className={styles.artistName}>TYGA</h2>
            <p>Performance Choreography: Rolling Loud LA (2024)</p>
            <p>Performance Choreography: Coachella 2023</p>
            <p>Performance Choreography: ARAVIA Music Festival (Qatar)</p>
            <p>Music Video Choreography: "Bops Going Brazy"</p>
          </div>

          {/* TYGA & CHRIS BROWN */}
          <div className={styles.artist}>
            <h2 className={styles.artistName}>TYGA & CHRIS BROWN</h2>
            <p>Movement Direction: "Nasty"</p>
          </div>

          {/* THE WEEKND */}
          <div className={styles.artist}>
            <h2 className={styles.artistName}>THE WEEKND</h2>
            <p>Creative Direction: Super Bowl LV Halftime Show</p>
            <p>Tour Choreography: "After Hours Til Dawn" Tour (Europe & South America, 2023)</p>
            <p>Performance Choreography: "Live from Sao Paulo" (2024)</p>
            <p>Performance Choreography: iHeartRadio Music Awards (2024)</p>
            <p>Choreography Direction: "After Hours Tour" (Showtime)</p>
          </div>

          {/* YG */}
          <div className={styles.artist}>
            <h2 className={styles.artistName}>YG</h2>
            <p>Performance Choreography: Coachella</p>
            </div>

          {/* PROJECTS WITHOUT A SINGLE ARTIST (FILM, TV, STREAMING, BRANDS) */}
          <div className={styles.artist}>
            <h2 className={styles.artistName}>FEATURE FILMS</h2>
            <p>Choreography: "House Party"</p>
            <p>Choreography: "Run Sweetheart Run"</p>
            </div>

          <div className={styles.artist}>
            <h2 className={styles.artistName}>TELEVISION & STREAMING</h2>
            <p>Choreography: "The Perfect Couple" (Netflix, 2024)</p>
            <p>Choreography: "Lizzo’s Watch Out for the Big Grrrls"</p>
            <p>Choreography: "Rhythm And Flow"</p>
            <p>Choreography: "Hip Hop Squares"</p>
            <p>Choreography: "Nashville Squares"</p>
            <p>Choreographer: "Pretty Little Liars"</p>
            </div>

          <div className={styles.artist}>
            <h2 className={styles.artistName}>BRAND CAMPAIGNS & COMMERCIALS</h2>
            <p>Creative Direction: Apple Music (with Harry Styles)</p>
            <p>Creative Direction: Lululemon Dance Pants Campaign</p>
            <p>Brand Ambassador: Red Bull</p>
            <p>Brand Ambassador: Everlane</p>
            <p>Choreography: Clinique (Marsai Martin Campaign)</p>
            <p>Choreography: Zara "Origins"</p>
            <p>Choreography: Sketchers (Commercial)</p>
          </div>

        </div>
      </div>
    </div>
  )
} 

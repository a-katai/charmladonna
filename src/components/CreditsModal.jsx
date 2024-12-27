import React, { useEffect } from 'react';

const CreditsModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-scroll">
          <section className="credits-section">
            <h3>Brand Campaigns</h3>
            <ul>
              <li>Lululemon (Dance Pants Campaign)</li>
              <li>Red Bull (Brand Ambassador)</li>
              <li>Everlane (Brand Ambassador)</li>
              <li>Apple Music/Harry Styles Choreography</li>
              <li>Clinique Campaign - Marsai Martin – Choreographer</li>
              <li>O2 Commercial-Dua Lipa-Choreographer</li>
              <li>Sketchers Commercial - Choreographer</li>
              <li>Zara "Origins" brand commercial-Choreography</li>
            </ul>
          </section>

          <section className="credits-section">
            <h3>Television/Film Choreography</h3>
            <ul>
              <li>The Perfect Couple (Netflix) (2024)</li>
              <li>Dua Lipa "Sunday on 60 Minutes" with Anderson Cooper (2024)</li>
              <li>The Weeknd-iHeartRadio Music Awards (2024)</li>
              <li>Dua Lipa -iHeartRadio Music Awards (2024)</li>
              <li>Dua Lipa Rock and Roll Hall of Fame (Cher's Induction) (2024)</li>
              <li>Dua Lipa "Live from Royal Albert Hall" (2024)</li>
              <li>Dua Lipa-Grammys (2024)</li>
              <li>Dua Lipa-The Brit Awards (2024)</li>
              <li>Dua Lipa-Glastonbury Festival (2024)</li>
              <li>Meghan Trainor-"To The Moon" on Jimmy Fallon</li>
              <li>Meghan Trainor-"Wrap Me Up" on Jimmy Kimmel</li>
              <li>Meghan Trainor-American Idol</li>
              <li>Shakira-VMA Video Vanguard Performance</li>
              <li>Baby Keem "The Melodic Blue" short film* Producer Credit</li>
              <li>The Weeknd-After Hours Tour on Showtime</li>
              <li>94th Academy Awards - "We Don't Talk About Bruno"</li>
              <li>Nas – Grammy Awards 2022</li>
              <li>Kendrick Lamar – Day N Vegas</li>
              <li>Ava Max – "The Motto" MV (Part II)</li>
              <li>House Party (Feature Film)</li>
              <li>Lizzo's "Watch Out For the Big Grrrls"</li>
              <li>Gunna – BET Awards</li>
              <li>Baby Keem – BET Awards</li>
              <li>Ella Mai – Pandora/Xfinity Awesome Beats</li>
              <li>Pepsi Super Bowl Half Time - The Weeknd</li>
              <li>Dua Lipa Grammys</li>
              <li>Rhythm And Flow</li>
              <li>Hip Hop Squares Choreographer</li>
              <li>Nashville Squares</li>
              <li>2018 Grammys - Kendrick Lamar</li>
              <li>Dua Lipa Studio 2054 Live Stream</li>
              <li>Rosalia- VMAs</li>
              <li>Rosalia -Grammys</li>
              <li>Dua Lipa - EMAs</li>
              <li>Dua Lipa American Music Awards</li>
              <li>Selena Gomez American Music Awards</li>
              <li>Selena Gomez Radio Disney Music Awards</li>
              <li>Pretty Little Liars Choreographer</li>
              <li>Becky G - Ellen Degeneres Show</li>
              <li>Meghan Trainor - Ellen Degeneres Show</li>
              <li>Dua Lipa - Ellen Degeneres Show</li>
              <li>Meghan Trainor - Jimmy Fallon</li>
              <li>Meghan Trainor Mickey's 50th Birthday Spectacular</li>
              <li>Dua Lipa -Saturday Night Live</li>
              <li>Meghan Trainor-Jimmy Kimmel</li>
              <li>Dua Lipa- Mardi Gras Sydney</li>
              <li>Dua Lipa - Jimmy Fallon</li>
              <li>Meghan Trainor iHeart Radio Awards</li>
              <li>Jay Rock BET Awards</li>
              <li>Ella Mai -Soul Train Awards</li>
              <li>Dua Lipa Mama Awards</li>
              <li>Dua Lipa Arias Awards</li>
              <li>Anderson Paak Jay Rock BET Awards</li>
              <li>D Smoke - BET Awards</li>
              <li>Run Sweetheart Run -Feature Film</li>
            </ul>
          </section>

          <section className="credits-section">
            <h3>Live/Stage Performances</h3>
            <ul>
              <li>Meghan Trainor-"Timeless Tour" (2024)</li>
              <li>The Weeknd-"Live from Sao Paulo" (2024)</li>
              <li>Dua Lipa-"Radical Optimism" Tour Asia (2024)</li>
              <li>Dua Lipa- Austin City Limits Music Festival (2024)</li>
              <li>Dua Lipa-"Live from Royal Albert Hall" (2024)</li>
              <li>Offset Set It Off Tour (2024)</li>
              <li>Tyga-Rolling Loud LA(2024)</li>
              <li>Rosalia-Louis Vuitton Men's Fashion Week Live Performance (2024)</li>
              <li>Bia-NBA Finals Halftime (2024)</li>
              <li>Rosalia-Motomami Festival Tour</li>
              <li>Tate McRae-Juno Music Awards</li>
              <li>Peso Pluma "Doble P" Tour</li>
              <li>BIA "Really Her Tour"</li>
              <li>Offset-"Set It Off" Tour</li>
              <li>Coco Jones- Summer Festival Tour</li>
              <li>MetroBoomin-Coachella (2023)</li>
              <li>Tyga-Coachella (2023)</li>
              <li>Becky G-Coachella (2023)</li>
              <li>Shakira Latin Grammys Performance (2023)</li>
              <li>Ice Spice-The Scarlet Tour (2023)</li>
              <li>Anitta-UEFA Champions League Final Performance (2023)</li>
              <li>The Weeknd "After Hours Til Dawn" Tour Europe and South America legs (2023)</li>
              <li>Beck G "Mi Casa, Tu Casa" Tour</li>
              <li>Metro Boomin- Amazon Music Live Performance</li>
              <li>Kendrick Lamar-Flog Gnaw Performance</li>
              <li>Kendrick Lamar-Move Afrika-Global Citizen</li>
              <li>Louis Vuitton & Rosalia - Paris Fashion Week</li>
              <li>Tyga-ARAVIA Music Festival Qatar</li>
              <li>Rosalia -Coachella (2022 and 2023)</li>
              <li>Dua Lipa – "Future Nostalgia" Tour</li>
              <li>Kendrick Lamar – "Mr. Morale and the Big Steppers" Tour</li>
              <li>YG- Coachella</li>
              <li>Ella Mai - Coachella</li>
              <li>Rosalia "El Mal Querer" Tour</li>
              <li>Meghan Trainor NFL Thanksgiving Halftime</li>
              <li>Selena Gomez NFL Thanksgiving Halftime</li>
              <li>Selena Gomez "Stars Dance" Tour</li>
              <li>Meghan Trainor "All About That Bass" Tour</li>
              <li>Kendrick Lamar "Damn" Tour</li>
              <li>Meghan Trainor - Jingle Ball</li>
              <li>Lil Baby – "Back Outside" Tour</li>
              <li>Anderson Paak Tour</li>
              <li>MetroBoomin-Coachella (2023)</li>
              <li>Becky G-Coachella (2023)</li>
            </ul>
          </section>

          <section className="credits-section">
            <h3>Commercials/Music Videos</h3>
            <ul>
              <li>"Squabble Up" - Kendrick Lamar - Choreographer</li>
              <li>Ava Max "My Head My Heart" Director/ Choreographer</li>
              <li>Bad Bunny "Baticano" - Choreographer</li>
              <li>Bebe Rexha/ Doja Cat Music Video Choreographer</li>
              <li>BIA- "I'm That Bitch" Choreographer</li>
              <li>BIA- "Lights Out" Movement Direction</li>
              <li>Coco Jones "Here We Go" Choreographer</li>
              <li>Dua Lipa "Houdini" Music Video Choreography</li>
              <li>Dua Lipa "Dance The Night" Music Video Choreography</li>
              <li>Dua Lipa "We're Good" Music Video Choreographer</li>
              <li>Dua Lipa "Training Season" Music Video Choreographer</li>
              <li>Dua Lipa "Illusions" Music Video Choreographer</li>
              <li>Dua Lipa "Don't Start Now" Music Video Choreographer</li>
              <li>Dua Lipa Ft. Da Baby "Levitating" Music Video Choreographer</li>
              <li>Dua Lipa FT. Miley Cyrus "Prisoner" Music Video Choreographer</li>
              <li>Dua Lipa FT. Angele "Fever" Music Video Choreographer</li>
              <li>Dua Lipa "Hallucinate" Music Video Choreographer</li>
              <li>Dua Lipa "Break My Heart" Music Video Choreographer</li>
              <li>Dua Lipa "Physical" Music Video Choreographer</li>
              <li>Ella Mai "Another Love Song" Music Video Choreographer</li>
              <li>Kendrick Lamar "Not Like Us" Choreographer and Producer</li>
              <li>Meghan Trainor "All About That Bass" Music Video Choreographer</li>
              <li>Meghan Trainor "I'm A Lady" Music Video Choreographer</li>
              <li>Meghan Trainor ft. T-Pain "Been Like This" Choreographer</li>
              <li>Meghan Trainor- "Here We Go" Choreographer</li>
              <li>Meghan Trainor- "To The Moon" Choreographer</li>
              <li>Meghan Trainor & Kris Jenner- "I Am Your Mother"</li>
              <li>Mimi Web "Mistake" - Choreographer</li>
              <li>Rosalia "TUYA" - Movement Direction</li>
              <li>Rosalia "Malamente" Music Choreographer</li>
              <li>Rosalia "Yo x Ti, Tu x Mi" Music Video Choreographer</li>
              <li>Rosalia "A Pale" Music Video Choreographer</li>
              <li>Rosalia "Di Mi Nombre" Music Video Choreographer</li>
              <li>Rosalia "Pienso Tu Mira" Music Video Choreographer</li>
              <li>Rosalia "Con Altura" Music Video Choreographer</li>
              <li>Selena Gomez "Look At Her Now" Music Video Choreographer</li>
              <li>Selena Gomez "Baila Con Migo" Music Video Choreographer</li>
              <li>Selena Gomez "Me And My Girls" Music Video Choreographer</li>
              <li>Selena Gomez "DeUna Vez" Music Video Choreographer</li>
              <li>Selena Gomez "Rare" Music Video Choreographer</li>
              <li>Selena Gomez "De Una Vez" Music Video Choreographer</li>
              <li>Selena Gomez "Come And Get It" Music Video Choreographer</li>
              <li>Shenseea ft. MTS – "Lick" Music Video</li>
              <li>Tyga & Chris Brown "Nasty" Music Video - Movement Direction</li>
              <li>Tyga "Bops Going Brazy" Choreographer</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CreditsModal; 
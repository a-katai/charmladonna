import React, { useEffect } from 'react';

const AboutModal = ({ isOpen, onClose }) => {
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
            <h3>About</h3>
            
            <ul>
              <li>From working alongside Grammy-nominated artists like Dua Lipa and Kendrick Lamar to choreographing performances for the Superbowl HalfTime Show, the Oscars, and beyond; choreographer, dancer, and creative director Charm La' Donna has proven time and time again why she is one of the most adored and in-demand multi-hyphenates in entertainment.</li>
              
              <li>Charm is the creative mastermind behind top music artists choreographing for Kendrick Lamar, Selena Gomez, Becky G, Meghan Trainor, Pharrell, Ice Spice, Lil Baby, Shakira, Dua Lipa and more. Her work has been displayed at the Super Bowl Halftime Show, the Oscars, the Grammys, and multiple world tours including Dua Lipa's 'Future Nostalgia' tour, The Weeknd's 'After Hours Til Dawn' tour, Kendrick Lamar's 'DAMN' and 'Mr. Morale and The Big Steppers' tours.</li>
              
              <li>An assiduous prodigy, Charm got her big break touring with Madonna at 17 before attending UCLA to study World Arts and Culture. She put herself through college as the protegé of renowned choreographer Fatima Robinson.</li>
              
              <li>Charm believes that each artist has their own story to tell and works closely with them to ensure that all aspects of their performance are a genuine reflection of their artistry. To Charm, movement is more than a tool, it's an expression of how someone feels.</li>
              
              <li>Beyond the stage, Charm is equally passionate about motivating and inspiring the next generation of creatives, giving back through mentoring, classes, donations, fundraisers, and more.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutModal; 
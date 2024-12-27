'use client'

import { useEffect, useState } from 'react'
import { FaInstagram, FaTwitter, FaYoutube, FaTiktok, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import CreditsModal from '../components/CreditsModal';
import AboutModal from '../components/AboutModal';
import ContactModal from '../components/ContactModal';
import VideoModal from '../components/VideoModal';

const galleryImages = [
  {
    src: '/gallery/beyonce.jpg',
    category: 'LIVE PERFORMANCE',
    title: 'Beyoncé',
    description: 'Choreography for Netflix Christmas Halftime Show',
    videoId: 'QAkTnPhQGoM',
    externalLink: false
  },
  {
    src: '/gallery/the_weeknd_superbowl.jpg',
    category: 'LIVE PERFORMANCE',
    title: 'The Weeknd',
    description: 'Creative direction for Super Bowl HalfTime Show',
    videoId: '9rhadTURsrw',
    externalLink: true
  },
  {
    src: '/gallery/kendrick_lamar.jpg',
    category: 'Music video',
    title: 'Kendrick Lamar',
    description: 'Creative direction for “Squabble Up”',
    videoId: 'fuV4yQWdn_4'
  },
  {
    src: '/gallery/dua_lipa_royal_albert.jpg',
    category: 'Live performance',
    title: 'Dua Lipa',
    description: 'Creative direction for “Live from Royal Albert Hall”',
    videoId: '3DcoC8p9az8'
  },
  {
    src: '/gallery/bad_bunny_baticano.jpg',
    category: 'Music video',
    title: 'Bad Bunny',
    description: 'Performance direction for “Baticano”',
    videoId: 'QCqc3k0Tzbs'
  },
  {
    src: '/gallery/rosalia_motomami.jpg',
    category: 'Live performance',
    title: 'Rosalía',
    description: 'Stage design for “Motomami Festival Tour”',
    videoId: 'p7bfOZek9t4'
  },
  {
    src: '/gallery/academy_awards_bruno.jpg',
    category: 'TV/Film',
    title: '94th Academy Awards',
    description: 'Choreography for “We Don’t Talk About Bruno”',
    videoId: 'Y30kYwmfE_8'
  },
  {
    src: '/gallery/dua_lipa_dance_the_night.jpg',
    category: 'Music video',
    title: 'Dua Lipa',
    description: 'Choreography for “Dance The Night”',
    videoId: 'OiC1rgCPmUQ'
  },
  {
    src: '/gallery/shenseea_lick.jpg',
    category: 'Music video',
    title: 'Shenseea',
    description: 'Performance direction for “Lick”',
    videoId: 'R6jzbvIua08'
  },
  {
    src: '/gallery/apple_music_harry_styles.jpg',
    category: 'Campaign',
    title: 'Apple Music',
    description: 'Creative direction with Harry Styles',
    videoId: '0RkUjRV5jww'
  },
  {
    src: '/gallery/metro_boomin_coachella.jpg',
    category: 'Live performance',
    title: 'Metro Boomin',
    description: 'Creative direction for Coachella 2023',
    videoId: 'sUG5rEyj26U'
  },
  {
    src: '/gallery/rosalia_con_altura.jpg',
    category: 'Music video',
    title: 'Rosalía',
    description: 'Choreography for “Con Altura”',
    videoId: 'p7bfOZek9t4'
  },
  {
    src: '/gallery/meghan_trainor_timeless.jpg',
    category: 'Live performance',
    title: 'Meghan Trainor',
    description: 'Performance direction for “Timeless Tour”',
    videoId: 'n3RtwVpyJW8'
  },
  {
    src: '/gallery/lululemon_dance_pants.jpg',
    category: 'Campaign',
    title: 'Lululemon',
    description: 'Creative direction for Dance Pants Campaign',
    videoId: '7zAF1kKha_A'
  },
  {
    src: '/gallery/ava_max_my_head_my_heart.jpg',
    category: 'Music video',
    title: 'Ava Max',
    description: 'Direction and choreography for “My Head My Heart”',
    videoId: 'iXQaJxi0Duk'
  },
  {
    src: '/gallery/lizzo_watch_out_big_grrrls.jpg',
    category: 'TV/Film',
    title: 'Lizzo',
    description: 'Choreography for “Watch Out For the Big Grrrls”',
    videoId: 'CtGWZAbdJBk'
  },
  {
    src: '/gallery/clinique_marsai_martin.jpg',
    category: 'Campaign',
    title: 'Clinique',
    description: 'Choreography with Marsai Martin',
    videoId: '1EaPa7w1bYI'
  },
  {
    src: '/gallery/house_party_film.jpg',
    category: 'TV/Film',
    title: 'House Party',
    description: 'Choreography for the feature film',
    videoId: 'BWKBOu0cCnk'
  },
  {
    src: '/gallery/the_perfect_couple_netflix.jpg',
    category: 'TV/Film',
    title: 'The Perfect Couple',
    description: 'Choreography for Netflix series (2024)',
    videoId: 'xMsnFY10fX8'
  },
  {
    src: '/gallery/zara_origins.jpg',
    category: 'Campaign',
    title: 'Zara',
    description: 'Choreography for “Origins” brand campaign',
    videoId: 'RNLp7yu0Abc'
  }
];

export default function Home() {
  const [isCreditsOpen, setIsCreditsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState('');
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  const scrollGallery = (direction: 'left' | 'right') => {
    const gallery = document.querySelector('.gallery-track');
    const scrollAmount = 400; // Adjusted to match new card width
    if (gallery) {
      gallery.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const openVideoModal = (videoId: string, event: React.MouseEvent) => {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    setClickPosition({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    });
    setCurrentVideoId(videoId);
    setIsVideoModalOpen(true);
  };

  const handleGalleryClick = (image: any, event: React.MouseEvent) => {
    if (image.externalLink) {
      window.open(`https://www.youtube.com/watch?v=${image.videoId}`, '_blank');
    } else {
      openVideoModal(image.videoId, event);
    }
  };

  return (
    <main>
      <header className="header">
        <div className="header-container">
          <div className="logo-container">
            <img 
              src="/logo.png" 
              alt="Charm LaDonna" 
              className="header-logo"
            />
          </div>
          <div className="titles-container">
            <p>Artist.</p>
            <p>Choreographer.</p>
            <p>Director.</p>
          </div>
        </div>
      </header>
      <div className="hero-video-container">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="hero-video"
        >
          <source src="/charm.mov" type="video/quicktime" />
          <source src="/charm.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <h1 className="title">The Work.</h1>
      <section className="gallery-section">
        <div className="gallery-track">
          {galleryImages.map((image, index) => (
            <div 
              className="gallery-item" 
              key={index}
              onClick={(e) => handleGalleryClick(image, e)}
              style={{cursor: 'pointer'}}
            >
              <img src={image.src} alt={image.title} />
              <div className="gallery-content">
                <span className="gallery-category">{image.category}</span>
                <h3 className="gallery-title">{image.title}</h3>
                <p className="gallery-description">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="gallery-nav">
          <button 
            className="gallery-nav-button gallery-nav-prev" 
            onClick={() => scrollGallery('left')}
            aria-label="Previous"
          >
            <FaChevronLeft className="gallery-nav-icon" />
          </button>
          <button 
            className="gallery-nav-button gallery-nav-next" 
            onClick={() => scrollGallery('right')}
            aria-label="Next"
          >
            <FaChevronRight className="gallery-nav-icon" />
          </button>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-row">
            <div className="footer-links">
              <a className="footer-link" onClick={() => setIsAboutOpen(true)} style={{cursor: 'pointer'}}>About</a>
              <a className="footer-link" onClick={() => setIsCreditsOpen(true)} style={{cursor: 'pointer'}}>Credits</a>
              <a className="footer-link" onClick={() => setIsContactOpen(true)} style={{cursor: 'pointer'}}>Contact</a>
            </div>
            <div className="footer-social">
              <a href="https://www.instagram.com/charmladonna/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
              </a>
              <a href="https://x.com/charmladonna" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="social-icon" />
              </a>
              <a href="https://www.youtube.com/user/CharmLaDonna" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="social-icon" />
              </a>
              <a href="https://www.tiktok.com/@charmladonna?lang=en" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="social-icon" />
              </a>
            </div>
          </div>
          <p className="footer-copyright">© 2024 Charm LaDonna. All rights reserved.</p>
        </div>
      </footer>

      <AboutModal 
        isOpen={isAboutOpen} 
        onClose={() => setIsAboutOpen(false)} 
      />
      <CreditsModal 
        isOpen={isCreditsOpen} 
        onClose={() => setIsCreditsOpen(false)} 
      />
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
      <VideoModal 
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoId={currentVideoId}
        clickPosition={clickPosition}
      />
    </main>
  )
} 
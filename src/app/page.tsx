'use client'

import { useEffect, useState } from 'react'
import { FaInstagram, FaTwitter, FaYoutube, FaTiktok, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import CreditsModal from '../components/CreditsModal';
import AboutModal from '../components/AboutModal';
import ContactModal from '../components/ContactModal';
import VideoModal from '../components/VideoModal';
import Image from 'next/image';

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

  useEffect(() => {
    // Get video element
    const video = document.querySelector('.hero-video') as HTMLVideoElement;
    const videoContainer = document.querySelector('.hero-video-container');
    
    // Function to handle video play
    const playVideo = async () => {
      if (video) {
        try {
          // Reset video to beginning
          video.currentTime = 0;
          // Set all necessary attributes
          video.muted = true;
          video.playsInline = true;
          // Force play
          await video.play();
          console.log('Video playing');
        } catch (err) {
          console.error('Video play failed:', err);
        }
      }
    };

    // Try to play video immediately
    playVideo();

    // Also try after a short delay
    setTimeout(playVideo, 1000);

    // Handle scroll effect
    const handleScroll = () => {
      if (!videoContainer) return;
      
      const scrollPosition = window.scrollY;
      const maxScroll = (videoContainer as HTMLElement).getBoundingClientRect().height;
      const scrollPercentage = Math.min(1, scrollPosition / maxScroll);
      
      // Calculate width percentage (100% to 85%)
      const widthPercentage = 100 - (scrollPercentage * 15);
      const clampedWidth = Math.max(85, widthPercentage);
      
      // Calculate border radius (0px to 16px)
      const borderRadius = scrollPercentage * 16;
      
      (videoContainer as HTMLElement).style.width = `${clampedWidth}%`;
      (videoContainer as HTMLElement).style.borderRadius = `${borderRadius}px`;
      
      // Debug
      console.log('Scroll %:', scrollPercentage, 'Width:', clampedWidth, 'Radius:', borderRadius);
    };

    // Run once on mount to set initial state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    // Also try to play video on user interaction
    window.addEventListener('click', playVideo);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', playVideo);
    };
  }, []);

  return (
    <main>
      <header className="header">
        <div className="header-container">
          <div className="logo-container">
            <Image 
              src="/logo.png" 
              alt="Charm LaDonna" 
              width={0}
              height={0}
              sizes="40vw"
              style={{ width: '100%', height: 'auto' }}
              priority
            />
          </div>
          <div className="titles">
            <span>Artist.</span>
            <span>Choreographer.</span>
            <span>Director.</span>
          </div>
        </div>
      </header>
      <div className="hero-video-container">
        <video 
          className="hero-video"
          autoPlay
          playsInline
          muted
          loop
          preload="auto"
          controls={false}
        >
          <source src="/charm.mov" type="video/mp4" />
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
            <div className="social-links">
              <a href="https://www.instagram.com/charmladonna" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://twitter.com/charmladonna" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="https://www.youtube.com/@charmladonna" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
              <a href="https://www.tiktok.com/@charmladonna" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
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
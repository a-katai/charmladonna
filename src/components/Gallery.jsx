'use client'
import { useState } from 'react';
import { projects } from '../data/projects';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gallery-container">
      <div className="gallery-content">
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className={`gallery-item ${index === currentIndex ? 'active' : ''}`}
          >
            <div className="project-image">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                loading="lazy"
              />
            </div>
            <div className="project-info">
              <div className="category">{project.category}</div>
              <h2>{project.title}</h2>
              <h3>{project.subtitle}</h3>
              <div className="role">{project.role}</div>
            </div>
          </div>
        ))}
      </div>
      
      <button 
        className="gallery-nav prev" 
        onClick={prevSlide}
        aria-label="Previous project"
      >
        <span>←</span>
      </button>
      <button 
        className="gallery-nav next" 
        onClick={nextSlide}
        aria-label="Next project"
      >
        <span>→</span>
      </button>
    </div>
  );
};

export default Gallery; 
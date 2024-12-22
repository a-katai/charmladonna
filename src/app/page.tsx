'use client'

import { useEffect, useState } from 'react'

const galleryImages = [
  {
    src: '/gallery/badbunny.jpg',
    category: 'Music',
    title: 'Bad Bunny',
    description: 'Performance direction'
  },
  {
    src: '/gallery/dua.jpg',
    category: 'Music',
    title: 'Dua Lipa',
    description: 'Stage design'
  },
  {
    src: '/gallery/kendrick.jpeg',
    category: 'Music',
    title: 'Kendrick Lamar',
    description: 'Creative direction'
  },
  {
    src: '/gallery/rosalia.jpg',
    category: 'Music',
    title: 'Rosalía',
    description: 'Stage design'
  },
  {
    src: '/gallery/shensea.jpg',
    category: 'Music',
    title: 'Shensea',
    description: 'Performance direction'
  }
];

export default function Home() {
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
      <div className="video-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/charm.mov" type="video/mp4" />
        </video>
      </div>
      <section className="gallery-section">
        <h2 className="gallery-section-title">The Work.</h2>
        <div className="gallery-track">
          {[...Array(20)].map((_, index) => {
            const imageIndex = index % galleryImages.length;
            const image = galleryImages[imageIndex];
            return (
              <div className="gallery-item" key={index}>
                <img src={image.src} alt={image.title} />
                <div className="gallery-content">
                  <span className="gallery-category">{image.category}</span>
                  <h3 className="gallery-title">{image.title}</h3>
                  <p className="gallery-description">{image.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  )
} 
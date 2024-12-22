'use client'

import { useEffect, useState } from 'react'

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
          <div className="gallery-item">
            <img 
              src="/gallery/badbunny.jpg" 
              alt="Bad Bunny"
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover'
              }}
            />
            <div className="gallery-content">
              <span className="gallery-category">Music</span>
              <h3 className="gallery-title">Bad Bunny</h3>
              <p className="gallery-description">Performance direction</p>
            </div>
          </div>

          <div className="gallery-item">
            <img 
              src="/gallery/dua.jpg" 
              alt="Dua Lipa"
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover'
              }}
            />
            <div className="gallery-content">
              <span className="gallery-category">Music</span>
              <h3 className="gallery-title">Dua Lipa</h3>
              <p className="gallery-description">Choreography</p>
            </div>
          </div>

          <div className="gallery-item">
            <img 
              src="/gallery/kendrick.jpeg" 
              alt="Kendrick"
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover'
              }}
            />
            <div className="gallery-content">
              <span className="gallery-category">Music</span>
              <h3 className="gallery-title">Kendrick Lamar</h3>
              <p className="gallery-description">Creative direction</p>
            </div>
          </div>

          <div className="gallery-item">
            <img 
              src="/gallery/rosalia.jpg" 
              alt="Rosalia"
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover'
              }}
            />
            <div className="gallery-content">
              <span className="gallery-category">Music</span>
              <h3 className="gallery-title">Rosalía</h3>
              <p className="gallery-description">Stage design</p>
            </div>
          </div>

          <div className="gallery-item">
            <img 
              src="/gallery/shensea.jpg" 
              alt="Shensea"
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover'
              }}
            />
            <div className="gallery-content">
              <span className="gallery-category">Music</span>
              <h3 className="gallery-title">Shensea</h3>
              <p className="gallery-description">Performance direction</p>
            </div>
          </div>

          {/* Repeat pattern for remaining items to reach 20 */}
          {[...Array(15)].map((_, index) => (
            <div className="gallery-item" key={index + 5}>
              <div className="gallery-content">
                <span className="gallery-category">Project {index + 6}</span>
                <h3 className="gallery-title">Project Title {index + 6}</h3>
                <p className="gallery-description">Description for project {index + 6}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
} 
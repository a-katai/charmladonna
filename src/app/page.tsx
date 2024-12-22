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
    </main>
  )
} 
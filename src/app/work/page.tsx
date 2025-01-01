import { galleryImages } from '@/data/galleryImages'
import Gallery from '@/components/Gallery'
import { useState } from 'react'
import { GalleryImage } from '@/types/gallery'

export default function WorkPage() {
  return (
    <main>
      <div className="sr-only">
        <h2>Charm La'Donna - Choreographer and Creative Director</h2>
        <p>
          Explore the portfolio of Charm La'Donna, featuring choreography and creative direction for 
          music videos, live performances, tours, and brand campaigns. Working with artists like 
          Beyoncé, Kendrick Lamar, Dua Lipa, The Weeknd, and more. Specializing in Super Bowl 
          halftime shows, Grammy performances, world tours, and innovative brand collaborations.
        </p>
        <ul>
          <li>Music Video Choreography</li>
          <li>Live Performance Direction</li>
          <li>Tour Creative Direction</li>
          <li>Brand Campaign Movement Direction</li>
          <li>Stage Design and Performance</li>
          <li>Artist Development and Mentorship</li>
        </ul>
      </div>
      <Gallery 
        images={galleryImages} 
        onImageClick={(image: GalleryImage) => {
          // Handle image click
        }} 
      />
    </main>
  )
} 
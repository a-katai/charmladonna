'use client'

import { useState } from 'react'
import ClientLayout from '@/components/ClientLayout'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Gallery from '@/components/Gallery'
import AboutModal from '@/components/modals/AboutModal'
import CreditsModal from '@/components/modals/CreditsModal'
import ContactModal from '@/components/modals/ContactModal'

export default function Home() {
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isCreditsOpen, setIsCreditsOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <ClientLayout>
      <main className="w-full overflow-x-hidden">
        <Header />
        <Hero />
        <Gallery />
      </main>
      <footer className="w-full">
        <div className="w-[85%] mx-auto">
          <div className="flex gap-6 text-[12px] text-gray-500 py-4">
            <button 
              onClick={() => setIsAboutOpen(true)} 
              className="hover:text-gray-800 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => setIsCreditsOpen(true)} 
              className="hover:text-gray-800 transition-colors"
            >
              Credits
            </button>
            <button 
              onClick={() => setIsContactOpen(true)} 
              className="hover:text-gray-800 transition-colors"
            >
              Contact
            </button>
          </div>
          <div className="flex justify-between items-center py-4 border-t border-gray-100">
            <div className="text-[11px] text-gray-400">© 2025 Charm La'Donna. All rights reserved.</div>
            <div className="hidden sm:block text-[11px] text-gray-400">Los Angeles, USA</div>
          </div>
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
    </ClientLayout>
  )
} 
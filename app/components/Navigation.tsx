'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="container mx-auto px-4 py-2">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/piecyk-logo.jpg"
            alt="Piecyk Bistro Logo"
            width={50}
            height={50}
            className="w-12 h-12 rounded-full"
          />
          <span className="text-2xl font-bold text-piecyk-green">
            Piecyk Bistro
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-piecyk-green hover:text-opacity-80">
            Strona główna
          </Link>
          <Link href="/menu" className="text-piecyk-green hover:text-opacity-80">
            Menu
          </Link>
          <Link href="/o-nas" className="text-piecyk-green hover:text-opacity-80">
            O nas
          </Link>
          <Link href="/kontakt" className="text-piecyk-green hover:text-opacity-80">
            Kontakt
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-piecyk-green hover:text-opacity-80 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-piecyk-beige rounded-lg p-4">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-piecyk-green hover:text-opacity-80"
              onClick={() => setIsMenuOpen(false)}
            >
              Strona główna
            </Link>
            <Link
              href="/menu"
              className="text-piecyk-green hover:text-opacity-80"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link
              href="/o-nas"
              className="text-piecyk-green hover:text-opacity-80"
              onClick={() => setIsMenuOpen(false)}
            >
              O nas
            </Link>
            <Link
              href="/kontakt"
              className="text-piecyk-green hover:text-opacity-80"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
} 
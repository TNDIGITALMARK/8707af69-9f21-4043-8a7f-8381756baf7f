'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-navy sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-gold text-2xl font-bold tracking-[0.3em] uppercase">
            <span className="font-['Playfair_Display']">WESTEND</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-gold transition-colors duration-200 text-sm uppercase tracking-wider font-medium"
            >
              About
            </Link>
            <Link
              href="/events"
              className="text-white hover:text-gold transition-colors duration-200 text-sm uppercase tracking-wider font-medium"
            >
              What's Events
            </Link>
            <Link
              href="/membership"
              className="text-white hover:text-gold transition-colors duration-200 text-sm uppercase tracking-wider font-medium"
            >
              Membership
            </Link>
            <Link
              href="/"
              className="text-white hover:text-gold transition-colors duration-200 text-sm uppercase tracking-wider font-medium"
            >
              Gallery
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              href="/"
              className="block text-white hover:text-gold transition-colors duration-200 text-sm uppercase tracking-wider"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/events"
              className="block text-white hover:text-gold transition-colors duration-200 text-sm uppercase tracking-wider"
              onClick={() => setMobileMenuOpen(false)}
            >
              What's Events
            </Link>
            <Link
              href="/membership"
              className="block text-white hover:text-gold transition-colors duration-200 text-sm uppercase tracking-wider"
              onClick={() => setMobileMenuOpen(false)}
            >
              Membership
            </Link>
            <Link
              href="/"
              className="block text-white hover:text-gold transition-colors duration-200 text-sm uppercase tracking-wider"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

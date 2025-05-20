'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-black dark:bg-gradient-to-br dark:from-[#0a0a0a] dark:via-[#111] dark:to-black dark:text-white font-sans transition-colors duration-300">
      {/* Header */}
      <header className="p-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-800 backdrop-blur-sm px-6 md:px-12">
        <a href="/">
          <h1 className="text-xl md:text-2xl font-semibold tracking-widest uppercase">
            ARCIS
          </h1>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700 dark:text-gray-400 tracking-wide">
          <a href="/about" className="hover:text-black dark:hover:text-white transition normal-case">
            About
          </a>
          <a href="/contact" className="hover:text-black dark:hover:text-white transition normal-case">
            Contact
          </a>
        </nav>

        {/* Mobile nav toggle */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden flex flex-col items-start space-y-3 px-6 py-4 border-b border-gray-200 dark:border-gray-800 text-sm font-medium text-gray-700 dark:text-gray-400 bg-white dark:bg-black"
        >
          <a
            href="/about"
            className="hover:text-black dark:hover:text-white transition normal-case"
          >
            About
          </a>
          <a
            href="/contact"
            className="hover:text-black dark:hover:text-white transition normal-case"
          >
            Contact
          </a>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden text-center py-24 md:py-36 px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Abstract SVG Background */}
        <div
          className="absolute inset-0 z-0 opacity-20 pointer-events-none"
          aria-hidden="true"
        >
          <svg width="100%" height="100%">
            <defs>
              <radialGradient id="cyber-glow" cx="50%" cy="50%" r="75%">
                <stop offset="0%" stopColor="#00ffff" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#cyber-glow)" />
          </svg>
        </div>

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
            Precision. Security. Power.
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-gray-700 dark:text-gray-400 font-light tracking-wide leading-relaxed">
            Arcis is a Utah-based veteran-owned contractor delivering elite solutions to the United States government.
          </p>
          <div className="mt-12">
            <a
              href="/contact"
              className="inline-block px-8 py-4 border border-gray-400 dark:border-gray-700 text-sm uppercase tracking-widest font-semibold text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-300 rounded-md"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

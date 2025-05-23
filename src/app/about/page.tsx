'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AboutPage() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="min-h-screen bg-white text-black dark:bg-gradient-to-br dark:from-[#0a0a0a] dark:via-[#111] dark:to-black dark:text-white font-sans flex flex-col transition-colors duration-300 relative overflow-hidden">
      {/* Abstract SVG Background */}
      <div
        className="absolute inset-0 z-0 opacity-8 pointer-events-none"
        aria-hidden="true"
      >
        <svg width="100%" height="100%">
          <defs>
            <radialGradient id="cyber-glow" cx="50%" cy="50%" r="75%">
              <stop offset="0%" stopColor="#00ffff" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#cyber-glow)" />
        </svg>
      </div>

      {/* Header */}
      <header className="p-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-800 backdrop-blur-sm relative z-10 px-6 md:px-12">
        <a href="/">
          <h1 className="text-xl md:text-2xl font-semibold tracking-widest uppercase">
            ARCIS
          </h1>
        </a>
        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700 dark:text-gray-400 tracking-wide">
          <a href="/" className="hover:text-black dark:hover:text-white transition normal-case">
            Home
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
            href="/"
            className="hover:text-black dark:hover:text-white transition normal-case"
          >
            Home
          </a>
          <a
            href="/contact"
            className="hover:text-black dark:hover:text-white transition normal-case"
          >
            Contact
          </a>
        </motion.div>
      )}
      {/* About Content */}
      <section className="flex-1 px-6 py-20 max-w-4xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight">
            About Arcis
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="space-y-8 text-center md:text-left text-gray-700 dark:text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto"
        >
          <p>
            Arcis is a veteran-owned small business dedicated to delivering
            reliable, high-quality solutions to government agencies and
            mission-driven partners. Founded on the principles of service,
            discipline, and integrity, Arcis brings a military-informed mindset
            to every engagement—focused, accountable, and results-driven.
          </p>
          <p>
            We provide a range of services across operational support,
            consulting, and technical solutions. With leadership rooted in
            real-world experience and a commitment to public service, we aim to
            support government initiatives with efficiency, precision, and
            professionalism.
          </p>
        </motion.div>

        <motion.hr
          className="border-gray-300 dark:border-gray-700 my-12 max-w-2xl mx-auto rounded"
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: '100%' }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center md:text-left"
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-5 tracking-wide">
            Leadership
          </h3>
          <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed">
            Arcis is proudly veteran-owned and operated. Our leadership team
            brings together business acumen and public service values to ensure
            every project is executed with integrity and purpose.
          </p>
        </motion.div>
      </section>
    </main>
  );
}

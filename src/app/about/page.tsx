'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-gradient-to-br dark:from-[#0a0a0a] dark:via-[#111] dark:to-black dark:text-white font-sans flex flex-col transition-colors duration-300 relative overflow-hidden">
      {/* Abstract SVG Background */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        aria-hidden="true"
      >
        <svg width="100%" height="100%">
          <defs>
            <radialGradient id="cyber-glow" cx="50%" cy="50%" r="75%">
              <stop offset="0%" stopColor="#00ffff" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#cyber-glow)" />
        </svg>
      </div>

      {/* Header */}
      <header className="p-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-800 backdrop-blur-sm relative z-10">
        <h1 className="text-xl md:text-2xl font-semibold tracking-widest uppercase">ARCIS</h1>
        <nav className="hidden md:flex space-x-8 text-sm uppercase font-medium text-gray-600 dark:text-gray-400">
          <a href="/" className="hover:text-black dark:hover:text-white transition">Home</a>
          <a href="/contact" className="hover:text-black dark:hover:text-white transition">Contact</a>
        </nav>
      </header>

      {/* About Content */}
      <section className="flex-1 px-6 py-20 max-w-3xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-center">About Arcis</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed">
            Arcis is a veteran-owned small business dedicated to delivering reliable, high-quality solutions to government agencies and mission-driven partners. Founded on the principles of service, discipline, and integrity, Arcis brings a military-informed mindset to every engagement—focused, accountable, and results-driven.
          </p>
          <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed">
            We provide a range of services across operational support, consulting, and technical solutions. With leadership rooted in real-world experience and a commitment to public service, we aim to support government initiatives with efficiency, precision, and professionalism.
          </p>
        </motion.div>

        <motion.hr
          className="border-gray-300 dark:border-gray-700 my-10"
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: '100%' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4">Leadership</h3>
          <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed">
            Arcis is proudly veteran-owned and operated. Our leadership team brings together business acumen and public service values to ensure every project is executed with integrity and purpose.
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-xs border-t border-gray-200 dark:border-gray-800 relative z-10">
        &copy; {new Date().getFullYear()} ARCIS. All rights reserved.
      </footer>
    </main>
  );
}

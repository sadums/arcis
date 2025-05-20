'use client';

import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-gradient-to-br dark:from-[#0a0a0a] dark:via-[#111] dark:to-black dark:text-white font-sans flex flex-col transition-colors duration-300">
      {/* Header */}
      <header className="p-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-800 backdrop-blur-sm">
        <a href="/">
          <h1 className="text-xl md:text-2xl font-semibold tracking-widest uppercase">
            ARCIS
          </h1>
        </a>
        <nav className="hidden md:flex space-x-8 text-sm uppercase font-medium text-gray-600 dark:text-gray-400">
          <a href="/" className="hover:text-black dark:hover:text-white transition">Home</a>
          <a href="/about" className="hover:text-black dark:hover:text-white transition">About</a>
        </nav>
      </header>

      {/* Contact Form Section */}
      <section className="flex-1 px-4 sm:px-6 py-20 max-w-2xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 text-center">
            Contact ARCIS
          </h2>
          <p className="text-gray-700 dark:text-gray-400 text-center mb-12">
            For contracts, collaborations, or questions, fill out the form and we’ll respond promptly.
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-sm uppercase text-gray-700 dark:text-gray-400 mb-1">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 text-black dark:text-white placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm uppercase text-gray-700 dark:text-gray-400 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 text-black dark:text-white placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm uppercase text-gray-700 dark:text-gray-400 mb-1">Message</label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 text-black dark:text-white placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500"
                placeholder="Your message..."
              />
            </div>
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-black dark:bg-white text-white dark:text-black font-semibold py-3 px-6 uppercase text-sm tracking-wider rounded-md hover:opacity-90 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-xs border-t border-gray-200 dark:border-gray-800">
        &copy; {new Date().getFullYear()} ARCIS. All rights reserved.
      </footer>
    </main>
  );
}

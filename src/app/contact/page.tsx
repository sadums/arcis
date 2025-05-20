'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  fullName: string;
  email: string;
  message: string;
}

export default function ContactPage() {
    const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<{
    type: 'success' | 'error' | null;
    text: string;
  }>({ type: null, text: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage({ type: null, text: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setResponseMessage({ type: 'success', text: result.message });
        setFormData({ fullName: '', email: '', message: '' });
      } else {
        setResponseMessage({ type: 'error', text: result.error });
      }
    } catch {
      setResponseMessage({
        type: 'error',
        text: 'Something went wrong. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-black dark:bg-gradient-to-br dark:from-[#0a0a0a] dark:via-[#111] dark:to-black dark:text-white font-sans flex flex-col transition-colors duration-300">
      {/* Header */}
      <header className="p-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-800 backdrop-blur-sm px-6 md:px-12">
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
          <a href="/about" className="hover:text-black dark:hover:text-white transition normal-case">
            About
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
            href="/about"
            className="hover:text-black dark:hover:text-white transition normal-case"
          >
            About
          </a>
          
        </motion.div>
      )}
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

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm uppercase text-gray-700 dark:text-gray-400 mb-1"
              >
                Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                placeholder="Your full name"
                className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 text-black dark:text-white placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500"
                value={formData.fullName}
                onChange={handleChange}
                autoComplete="name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm uppercase text-gray-700 dark:text-gray-400 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 text-black dark:text-white placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm uppercase text-gray-700 dark:text-gray-400 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Your message..."
                className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 text-black dark:text-white placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 resize-none"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black dark:bg-white text-white dark:text-black font-semibold py-3 px-6 uppercase text-sm tracking-wider rounded-md hover:opacity-90 transition flex justify-center items-center"
            >
              {loading && (
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-label="Loading spinner"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16 8 8 0 01-8-8z"
                  ></path>
                </svg>
              )}
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {responseMessage.type && (
              <p
                className={`mt-4 text-center px-4 py-3 rounded-md ${
                  responseMessage.type === 'success'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-400'
                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-400'
                }`}
                role="alert"
              >
                {responseMessage.text}
              </p>
            )}
          </form>
        </motion.div>
      </section>
    </main>
  );
}

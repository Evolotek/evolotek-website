'use client';

import { motion } from 'framer-motion';
import { Linkedin, Instagram, Music, Mic, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-blue-950" />
        <motion.div
          className="absolute inset-0 opacity-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
        />
      </div>

      <div className="relative z-10 px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
                Ready to Define Your Edge?
              </h2>
              <p className="text-lg text-gray-200 mb-8">
                As your reinvention and experience partner, our global team is here to help.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col justify-between"
            >
              <div className="mb-8">
                <Link
                  href="/contact"
                  className="inline-block border-2 border-white text-white px-10 py-3 text-lg font-medium hover:bg-white hover:text-purple-900 transition-all duration-300 mb-6"
                >
                  Get in touch
                </Link>
              </div>

              <div>
                <p className="text-gray-200 text-base mb-4">
                  Do your best work among a caring community of diverse talents.
                </p>
                <Link
                  href="/careers"
                  className="inline-flex items-center text-white text-base font-medium hover:gap-3 gap-2 transition-all duration-300"
                >
                  Join our team
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="border-t border-white/20 pt-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <nav className="flex flex-wrap gap-6 md:gap-8">
                <Link
                  href="/studios"
                  className="text-white hover:text-gray-300 transition-colors text-base"
                >
                  Studios
                </Link>
                <Link
                  href="/culture"
                  className="text-white hover:text-gray-300 transition-colors text-base"
                >
                  Culture
                </Link>
                <Link
                  href="/dei"
                  className="text-white hover:text-gray-300 transition-colors text-base"
                >
                  DE&I
                </Link>
                <Link
                  href="/play"
                  className="text-white hover:text-gray-300 transition-colors text-base"
                >
                  Play
                </Link>
              </nav>

              <div className="flex items-center gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                  aria-label="Spotify"
                >
                  <Music className="w-5 h-5" />
                </a>
                <a
                  href="https://podcasts.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                  aria-label="Podcast"
                >
                  <Mic className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <span>© 2025 Evolotek</span>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <span className="text-gray-500">|</span>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Use
                </Link>
                <span className="text-gray-500">|</span>
                <Link href="/cookies" className="hover:text-white transition-colors">
                  Cookie Policy
                </Link>
                <span className="text-gray-500">|</span>
                <Link href="/cookie-settings" className="hover:text-white transition-colors">
                  Cookie Settings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

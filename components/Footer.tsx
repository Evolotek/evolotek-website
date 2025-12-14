'use client';

import { motion } from 'framer-motion';
import { Linkedin, Twitter, Instagram, ArrowRight } from 'lucide-react';
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
              transition={{ duration: 0.3 }}
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
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex flex-col justify-between"
            >
              <div className="mb-8">
                <Link
                  href="/contact"
                  prefetch={true}
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
                  prefetch={true}
                  className="inline-flex items-center text-white text-base font-medium hover:gap-3 gap-2 transition-all duration-300"
                >
                  Join our team
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              {/* Social Icons */}
              <div className="flex items-center gap-6">
                <a
                  href="https://www.linkedin.com/company/evolotek/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/evolotek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors transform hover:scale-110"
                  aria-label="Twitter/X"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/evolotek?igsh=eml5aTdheDZvb2dl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>

              {/* Legal Links & Copyright */}
              <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 text-sm text-gray-300">
                <Link href="/privacy" prefetch={true} className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <span className="text-gray-500">|</span>
                <Link href="/terms" prefetch={true} className="hover:text-white transition-colors">
                  Terms of Use
                </Link>
                <span className="text-gray-500">|</span>
                <span>© 2025 Evolotek. All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
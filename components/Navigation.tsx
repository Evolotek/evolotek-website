'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isHomePage = pathname === '/';
  const isGradientBg = isHomePage;
  const isDarkText = !isGradientBg;

  const navLinks = [
    // { href: '/insights', label: 'Insights' },
    { href: '/startup', label: 'Startup' },
    { href: '/work', label: 'Work' },
    { href: '/services', label: 'Services' },
    { href: '/culture', label: 'Culture' },
    // { href: '/#', label: 'Define Your Edge' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`relative z-50 transition-all duration-300 ${
        isGradientBg
          ? 'bg-transparent'
          : isScrolled
            ? 'bg-white/90 backdrop-blur-sm shadow-sm'
            : 'bg-white'
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group relative" onClick={handleLinkClick}>
          <Image
            src="/images/evolotek-logo.png"
            alt="Evolotek Logo"
            width={200}
            height={70}
            className={`w-auto h-12 transition-opacity ${
              isGradientBg ? 'brightness-0 invert' : 'brightness-100'
            }`}
            priority
          />
        </Link>

        <div
          className={`hidden lg:flex items-center gap-8 ${
            isGradientBg ? 'text-white' : isDarkText ? 'text-black' : 'text-black'
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg font-light hover:opacity-70 transition-opacity ${
                pathname === link.href ? 'opacity-100 underline' : 'opacity-80'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden flex flex-col gap-1.5 w-8 ${
            isGradientBg ? 'text-white' : isDarkText ? 'text-black' : 'text-black'
          }`}
        >
          <span className="block h-0.5 bg-current"></span>
          <span className="block h-0.5 bg-current"></span>
          <span className="block h-0.5 bg-current"></span>
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div
          className={`fixed inset-0 top-[76px] lg:hidden ${
            isGradientBg ? 'bg-black/95' : 'bg-white'
          }`}
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`text-2xl font-light py-4 ${
                  isGradientBg ? 'text-white' : 'text-black'
                } ${pathname === link.href ? 'opacity-100 underline' : 'opacity-80'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

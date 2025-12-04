'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { ServicesCarousel } from '@/components/ServicesCarousel';
import { OurWorkSection } from '@/components/OurWorkSection';
import LetsWorkTogether from '@/components/LetsWorkTogether';
import HowWeWork from '@/components/HowWeWork';
import OurPrinciples from '@/components/OurPrinciples';

export default function Home() {
  const cursorGlowRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add custom-cursor class to body only on homepage
    document.body.classList.add('custom-cursor');

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorGlowRef.current) {
        // Check if mouse is over navbar or interactive elements
        const target = e.target as HTMLElement;
        const isOverInteractive = 
          target.closest('nav') || 
          target.closest('header') || 
          target.closest('a') || 
          target.closest('button') ||
          target.tagName === 'A' ||
          target.tagName === 'BUTTON';

        // Smooth animation using requestAnimationFrame
        requestAnimationFrame(() => {
          if (cursorGlowRef.current) {
            cursorGlowRef.current.style.left = `${e.clientX}px`;
            cursorGlowRef.current.style.top = `${e.clientY}px`;
            
            // Optional: Reduce glow opacity when over interactive elements
            if (isOverInteractive) {
              cursorGlowRef.current.style.opacity = '0.3';
            } else {
              cursorGlowRef.current.style.opacity = '1';
            }
          }
        });
      }
    };

    const handleMouseEnter = () => {
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.opacity = '0';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup function - remove custom cursor when leaving homepage
    return () => {
      document.body.classList.remove('custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Cursor glow effect - only on homepage */}
      <div ref={cursorGlowRef} className="cursor-glow" style={{ opacity: 0 }} />
      
      <div className="animated-gradient" />
      <div className="relative z-10">
        <main className="flex flex-col min-h-screen px-6 md:px-12 relative">
          {/* Centered Define Your Edge */}
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
            <div className="max-w-[1400px] mx-auto">
              <h1 className="text-white text-8xl md:text-9xl lg:text-[10rem] font-serif leading-[0.85] tracking-[-0.03em] text-center">
                Define Your Edge
              </h1>
            </div>
          </div>

          {/* Bottom right content */}
          <div className="absolute bottom-32 md:bottom-40 lg:bottom-48 right-16 md:right-24 lg:right-32 max-w-2xl ml-auto">
            <p className="text-white/90 text-xl md:text-2xl font-light leading-relaxed mb-8">
              As your reinvention and experience partner, our global team of experts fuse strategy, creativity, data, AI and tech, designed to advance people and planet.
            </p>

            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 text-white text-lg font-light hover:gap-4 transition-all duration-300 group"
            >
              Get in touch
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </div>
        </main>
        <ServicesCarousel />
        <OurWorkSection />
        <LetsWorkTogether />
        <HowWeWork />
        <OurPrinciples />
      </div>
    </div>
  );
}
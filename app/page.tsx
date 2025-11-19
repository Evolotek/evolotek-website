'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ServicesCarousel } from '@/components/ServicesCarousel';
import { OurWorkSection } from '@/components/OurWorkSection';
import LetsWorkTogether from '@/components/LetsWorkTogether';
import HowWeWork from '@/components/HowWeWork';
import OurPrinciples from '@/components/OurPrinciples';
import { Footer } from '@/components/Footer';


export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
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

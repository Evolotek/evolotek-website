'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    id: 3,
    tagline: 'Master the Momentum',
    headline: 'AI & Advanced Analytics, Process Optimization',
    description: 'Deploy AI Agents, GenAI, and Predictive Intelligence to simplify and accelerate every business process.',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop',
  },
  {
    id: 1,
    tagline: 'Engineer the Unbreakable',
    headline: 'Engineering, Cloud & Infrastructure',
    description: 'Build System Architecture, DevOps, and Cloud Infrastructure That Scale and Perform Flawlessly.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop',
  },
  {
    id: 2,
    tagline: 'Launch the Limitless',
    headline: 'Product Innovation & Digital Strategy',
    description: 'Drive Strategy, Design, and Go-to-Market velocity to redefine workflows and customer experience.',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop',
  },
  {
    id: 4,
    tagline: 'Cultivate Confidence',
    headline: 'Talent Solutions (Team as a Service)',
    description: 'Secure Your Future with Plug-and-Play Tech Teams On Demand and Proactive Risk Management.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop',
  },
  {
    id: 5,
    tagline: 'FinTech-specific Industry Diagnostic',
    headline: 'The FinTech Flight Path',
    description: 'Your Strategic Diagnostic for Compliance, Modernization, and Competitive Advantage in the Financial Sector.',
    image: 'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop',
  },
];

export function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout>();
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (!isAutoPlay) return;

    autoPlayRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 6000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlay]);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const currentService = services[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: custom * 0.1,
      },
    }),
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          className="absolute inset-0"
        >
          <img
            src={currentService.image}
            alt={currentService.headline}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col justify-center items-start p-6 md:p-12 lg:p-20 z-10">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.p
              key={`tagline-${currentIndex}`}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={textVariants}
              custom={0}
              className="text-xs md:text-sm uppercase tracking-widest text-gray-300 font-medium mb-4"
            >
              {currentService.tagline}
            </motion.p>

            <motion.h2
              key={`headline-${currentIndex}`}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={textVariants}
              custom={1}
              className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6"
            >
              {currentService.headline}
            </motion.h2>

            <motion.p
              key={`description-${currentIndex}`}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={textVariants}
              custom={2}
              className="text-base md:text-lg text-gray-200 leading-relaxed max-w-xl mb-8"
            >
              {currentService.description}
            </motion.p>

            <motion.div
              key={`cta-${currentIndex}`}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={textVariants}
              custom={3}
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-3 text-white hover:gap-5 transition-all group text-lg font-medium"
              >
                Explore Now
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 right-6 md:right-12 z-20 flex flex-col gap-4 hidden md:flex">
        <button
          onClick={goToPrevious}
          className="p-3 rounded-full border border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goToNext}
          className="p-3 rounded-full border border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <button
        onClick={goToNext}
        className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 p-3 rounded-full border border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 z-20 md:hidden"
        aria-label="Next slide mobile"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 left-6 md:left-12 z-20 flex gap-2">
        {services.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white w-12' : 'bg-white/30 w-2 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          />
        ))}
      </div>
    </section>
  );
}

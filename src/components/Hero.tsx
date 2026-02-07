import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import facilityImg from '../assets/facility.jpg';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: facilityImg,
      tag: 'OUR FACILITY',
      title: 'World-Class Manufacturing Hub.',
      subtext:
        'Our Puducherry facility is equipped with advanced infrastructure and centralized AHU systems to ensure high-standard production.'
    },
    {
      image:
        'https://images.unsplash.com/photo-1582719202047-76d3432ee323?q=80&w=2040&auto=format&fit=crop',
      tag: 'CORE MISSION',
      title: 'Reliability, Humanity, and Caring.',
      subtext:
        'Reltsen Health Care provides superior pharmaceutical products and services that improve the quality of life globally.'
    },
    {
      image:
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
      tag: 'QUALITY POLICY',
      title: 'Preserving and Improving Human Life.',
      subtext:
        'Our stringent quality policies are dedicated to the highest standards of pharmaceutical manufacturing.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrentSlide(prev => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section
      id="home"
      className="relative min-h-screen md:h-[90vh] flex items-center bg-white overflow-hidden"
      aria-live="polite"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover grayscale-[20%] brightness-[0.8]"
            />

            {/* Combined cinematic overlay (performance-friendly) */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0.15) 100%),
                  linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 40%, rgba(0,0,0,0.5) 100%),
                  radial-gradient(circle at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.4) 100%)
                `
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-20">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 1.0, ease: 'easeOut' }}
            >
              {/* Tag */}
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[2px] w-8 bg-amber-500" />
                <span className="text-amber-500 font-bold tracking-widest text-sm uppercase px-3 py-1 bg-black/30 backdrop-blur-sm border border-amber-500/20">
                  {slides[currentSlide].tag}
                </span>
              </div>

              {/* Title */}
              <motion.h1
                className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.2 }}
                style={{
                  textShadow:
                    '0 4px 24px rgba(0,0,0,0.5), 0 8px 48px rgba(0,0,0,0.3)'
                }}
              >
                {slides[currentSlide].title}
              </motion.h1>

              {/* Subtext */}
              <motion.p
                className="text-xl md:text-2xl text-gray-100 leading-relaxed mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}
              >
                {slides[currentSlide].subtext}
              </motion.p>

              {/* Buttons */}
              <motion.div
                className="flex flex-wrap gap-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <button
                  onClick={() =>
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="group bg-amber-600 text-white px-12 py-5 font-bold flex items-center gap-3 shadow-lg shadow-amber-500/25 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:bg-amber-500 hover:shadow-xl hover:shadow-amber-500/40"
                >
                  Contact Us
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1.5 transition-transform duration-300"
                  />
                </button>

                <button
                  onClick={() =>
                    document
                      .getElementById('about')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/50 px-12 py-5 font-bold uppercase tracking-wider text-sm shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:bg-white/25 hover:border-white/70 hover:shadow-xl"
                >
                  Discover Our Story
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-12 right-12 z-20 flex gap-4">
        <button
          onClick={prevSlide}
          className="p-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="p-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-12 left-12 z-20 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-1 transition-all duration-500 ${
              i === currentSlide
                ? 'w-12 bg-amber-500'
                : 'w-4 bg-white/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

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
  }, [currentSlide, slides.length]); // Reset timer whenever slide changes

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
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1, x: -10 }}
            animate={{ opacity: 1, scale: 1.05, x: 0 }}
            exit={{ opacity: 0, scale: 1.1, x: 10 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }} // Slightly longer for entry feeling
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
        <div className="max-w-3xl min-h-[500px] relative">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentSlide}
              exit={{ 
                opacity: 0, 
                x: 20,
                transition: { duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] } 
              }}
            >
              {/* Tag */}
              <motion.div 
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="h-[2px] w-8 bg-amber-500" />
                <span className="text-amber-500 font-bold tracking-widest text-sm uppercase px-3 py-1 bg-black/30 backdrop-blur-sm border border-amber-500/20">
                  {slides[currentSlide].tag}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.2] md:leading-[1.1]"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  textShadow:
                    '0 4px 24px rgba(0,0,0,0.5), 0 8px 48px rgba(0,0,0,0.3)'
                }}
              >
                {slides[currentSlide].title}
              </motion.h1>

              {/* Subtext */}
              <motion.p
                className="text-lg md:text-2xl text-gray-100 leading-relaxed mb-10 max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}
              >
                {slides[currentSlide].subtext}
              </motion.p>

              {/* Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 sm:gap-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
              >
                <button
                  onClick={() =>
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="group bg-amber-600 text-white px-8 md:px-12 py-4 md:py-5 font-bold flex items-center justify-center gap-3 shadow-lg shadow-amber-500/25 transition-all duration-300 hover:-translate-y-1.5 active:scale-95 hover:bg-amber-500"
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
                  className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/50 px-8 md:px-12 py-4 md:py-5 font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:-translate-y-1.5 active:scale-95 hover:bg-white/20"
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
          className="p-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white transition-all duration-300 hover:bg-amber-500/10 hover:border-amber-500/50 hover:text-amber-500 hover:shadow-[0_0_20px_rgba(217,119,6,0.3)]"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="p-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white transition-all duration-300 hover:bg-amber-500/10 hover:border-amber-500/50 hover:text-amber-500 hover:shadow-[0_0_20px_rgba(217,119,6,0.3)]"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-12 left-12 z-20 flex gap-3">
        {slides.map((_, i) => (
          <motion.div
            key={i}
            onClick={() => setCurrentSlide(i)}
            className="h-1 bg-white/20 overflow-hidden relative cursor-pointer group"
            animate={{
              width: i === currentSlide ? 48 : 16,
              scale: i === currentSlide ? [1, 1.05, 1] : 1,
            }}
            transition={{
              width: { duration: 0.5 },
              scale: i === currentSlide ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : { duration: 0.5 }
            }}
          >
            {i === currentSlide && (
              <motion.div
                className="absolute inset-0 bg-amber-500 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 8, ease: "linear" }}
                key={`progress-${currentSlide}`} // Unique key to force re-render on slide change
              />
            )}
            {i < currentSlide && (
              <div className="absolute inset-0 bg-amber-500/40" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

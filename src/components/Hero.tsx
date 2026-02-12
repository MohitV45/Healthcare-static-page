import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import facilityImg1200 from '../assets/facility-1200.webp';
import facilityImg800 from '../assets/facility-800.webp';
import facilityImg480 from '../assets/facility-480.webp';
import { useIsMobile } from '../hooks/useIsMobile';
import { throttle } from '../utils/performance';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useIsMobile();

  // Parallax Setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Ultra-smooth physics for a luxurious "buttery" drift
  const springConfig = { damping: 40, stiffness: 60, restDelta: 0.001 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Map mouse position to pixel values for a subtle but noticeable parallax drift
  const x = useTransform(springX, [-0.5, 0.5], isMobile ? [0, 0] : [-15, 15]);
  const y = useTransform(springY, [-0.5, 0.5], isMobile ? [0, 0] : [-15, 15]);

  const handleMouseMove = useMemo(() => throttle((e: React.MouseEvent) => {
    if (isMobile) return;
    
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    // Calculate normalized position (-0.5 to 0.5)
    const normalizedX = clientX / innerWidth - 0.5;
    const normalizedY = clientY / innerHeight - 0.5;

    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
  }, 16), [isMobile, mouseX, mouseY]); // Throttle to ~60fps

  const slides = useMemo(() => [
    {
      image: facilityImg1200,
      srcset: `${facilityImg480} 480w, ${facilityImg800} 800w, ${facilityImg1200} 1200w`,
      tag: 'OUR FACILITY',
      title: 'World-Class Manufacturing Hub.',
      subtext:
        'Our Puducherry facility is equipped with advanced infrastructure and centralized AHU systems to ensure high-standard production.'
    },
    {
      image:
        'https://images.unsplash.com/photo-1582719202047-76d3432ee323?q=75&w=800&auto=format&fit=crop',
      srcset: 'https://images.unsplash.com/photo-1582719202047-76d3432ee323?q=75&w=480&auto=format&fit=crop 480w, https://images.unsplash.com/photo-1582719202047-76d3432ee323?q=75&w=800&auto=format&fit=crop 800w, https://images.unsplash.com/photo-1582719202047-76d3432ee323?q=75&w=1200&auto=format&fit=crop 1200w',
      tag: 'CORE MISSION',
      title: 'Reliability, Humanity, and Caring.',
      subtext:
        'Reltsen Health Care provides superior pharmaceutical products and services that improve the quality of life globally.'
    },
    {
      image:
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=75&w=800&auto=format&fit=crop',
      srcset: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=75&w=480&auto=format&fit=crop 480w, https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=75&w=800&auto=format&fit=crop 800w, https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=75&w=1200&auto=format&fit=crop 1200w',
      tag: 'QUALITY POLICY',
      title: 'Preserving and Improving Human Life.',
      subtext:
        'Our stringent quality policies are dedicated to the highest standards of pharmaceutical manufacturing.'
    }
  ], []);

  // Preload next image
  useEffect(() => {
    const nextIndex = (currentSlide + 1) % slides.length;
    const img = new Image();
    img.src = slides[nextIndex].image;
  }, [currentSlide, slides]);

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
      className="relative h-screen min-h-[700px] flex items-center bg-slate-900 overflow-hidden"
      aria-live="polite"
      onMouseMove={handleMouseMove}
    >
      {/* Background container with safety margin */}
      <motion.div 
        className="absolute inset-[-20px] z-0 will-change-transform transform-gpu"
        style={{ x, y }}
      >
        <AnimatePresence initial={false}>
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
              srcSet={slides[currentSlide].srcset}
              sizes="(max-width: 768px) 100vw, 100vw"
              alt={slides[currentSlide].title}
              width="1920"
              height="1080"
              className="w-full h-full object-cover grayscale-[20%] brightness-[0.8] will-change-transform"
              loading="eager"
              // @ts-expect-error: fetchpriority is not yet in standard React types
              fetchpriority="high"
            />

            {/* Combined cinematic overlay (performance-friendly) */}
            <div
              className="absolute inset-0"
              style={{
                background: isMobile 
                  ? 'linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 100%)'
                  : `
                  linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0.15) 100%),
                  linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 40%, rgba(0,0,0,0.4) 100%)
                `
              }}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Content area: Offset by navbar height (approx 80px-100px) */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-[100px]">
        <div className="max-w-3xl min-h-[500px] relative">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentSlide}
              exit={{ 
                opacity: 0, 
                x: 20,
                transition: { duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] } 
              }}
              className="will-change-transform transform-gpu"
            >
              {/* Tag with Draw Effect */}
              <motion.div 
                className="flex items-center gap-3 mb-8 relative"
                initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={isMobile ? { duration: 0.5 } : { duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative">
                  <span className="h-[2px] w-8 bg-amber-500 block" />
                  <motion.svg 
                    className="absolute -left-2 -top-2 w-12 h-6 pointer-events-none"
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.path 
                      d="M2 14 C 10 2, 30 2, 40 14" 
                      stroke="#f59e0b" 
                      strokeWidth="1.5" 
                      fill="none"
                      variants={{
                        hidden: { pathLength: 0, opacity: 0 },
                        visible: { pathLength: 1, opacity: 0.4, transition: { duration: 2, delay: 1 } }
                      }}
                    />
                  </motion.svg>
                </div>
                <span className={`text-amber-500 font-bold tracking-widest text-sm uppercase px-3 py-1 bg-black/40 border border-amber-500/20`}>
                  {slides[currentSlide].tag}
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-12 leading-[1.2] md:leading-[1.1] will-change-transform translate-z-0"
                initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={isMobile ? { duration: 0.6 } : { duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  textShadow:
                    '0 4px 24px rgba(0,0,0,0.5), 0 8px 48px rgba(0,0,0,0.3)'
                }}
              >
                {slides[currentSlide].title}
              </motion.h1>

              {/* Subtext */}
              <motion.p
                className="text-lg md:text-2xl text-gray-100 leading-relaxed mb-14 max-w-2xl will-change-transform translate-z-0"
                initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={isMobile ? { duration: 0.5 } : { duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}
              >
                {slides[currentSlide].subtext}
              </motion.p>

              {/* Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 sm:gap-8 will-change-transform"
                initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={isMobile ? { duration: 0.5 } : { duration: 1.2, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
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
                  className={`text-white border-2 border-white/50 px-8 md:px-12 py-4 md:py-5 font-bold uppercase tracking-wider text-sm transition-all duration-300 active:scale-95 ${isMobile ? 'bg-white/5' : 'bg-white/15 hover:-translate-y-1.5 hover:bg-white/25'}`}
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
          className="p-4 rounded-full border border-white/5 bg-white/15 text-white/40 transition-all duration-500 hover:bg-amber-500/10 hover:border-amber-500/50 hover:text-amber-500 hover:shadow-[0_0_30px_rgba(217,119,6,0.15)]"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="p-4 rounded-full border border-white/5 bg-white/15 text-white/40 transition-all duration-500 hover:bg-amber-500/10 hover:border-amber-500/50 hover:text-amber-500 hover:shadow-[0_0_30px_rgba(217,119,6,0.15)]"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicators */}
      <div className={`absolute bottom-12 left-12 z-20 flex gap-4 p-2 rounded-full shadow-2xl ${isMobile ? 'bg-black/20' : 'bg-black/20'}`}>
        {slides.map((_, i) => (
          <motion.div
            key={i}
            onClick={() => setCurrentSlide(i)}
            className="h-1.5 bg-white/10 overflow-hidden relative cursor-pointer group rounded-full"
            animate={{
              width: i === currentSlide ? 64 : 16,
              opacity: i === currentSlide ? 1 : 0.4,
            }}
            transition={{
              width: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 }
            }}
          >
            {i === currentSlide && (
              <>
                <motion.div
                  className="absolute inset-0 bg-amber-500 origin-left shadow-[0_0_15px_rgba(245,158,11,0.6)]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 8, ease: "linear" }}
                  key={`progress-${currentSlide}`}
                />
                {/* Shimmer Scan Effect */}
                <motion.div
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    left: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0.5
                  }}
                />
              </>
            )}
            {i < currentSlide && (
              <div className="absolute inset-0 bg-amber-500/30" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

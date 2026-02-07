import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=2054&auto=format&fit=crop",
      title: "RELTSEN HEALTH CARE",
      subtext: "To provide the reliability, humanity and caring of society with superior products and service that improve the quality of the life."
    },
    {
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop",
      title: "QUALITY POLICIES",
      subtext: "Our quality policies are preserving and improving human life."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden transition-colors duration-500 bg-white"
    >
      {/* Background Image Layer with AnimatePresence for smooth transitions */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img 
              src={slides[currentSlide].image} 
              alt="Healthcare" 
              className="w-full h-full object-cover"
            />
            {/* Very light overlays to keep the picture "really visible" as requested */}
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={`content-${currentSlide}`}
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight"
              style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.5)' }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl font-bold text-white mb-10 max-w-2xl"
              style={{ textShadow: '1px 1px 8px rgba(0,0,0,0.5)' }}
            >
              {slides[currentSlide].subtext}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={scrollToContact}
                className="bg-blue-900 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-800 transition-all duration-300 shadow-lg"
              >
                Get in Touch
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 z-20 p-2 text-white hover:bg-white/20 rounded-full transition-all md:left-8"
        aria-label="Previous slide"
      >
        <ChevronLeft size={48} strokeWidth={1.5} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 z-20 p-2 text-white hover:bg-white/20 rounded-full transition-all md:right-8"
        aria-label="Next slide"
      >
        <ChevronRight size={48} strokeWidth={1.5} />
      </button>

      {/* Slider indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button 
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${i === currentSlide ? 'w-8 bg-blue-900' : 'w-2 bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  );
}

import { Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo-small.webp';


export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const isManualScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.pageYOffset || document.documentElement.scrollTop;
      setScrolled(offset > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['home', 'services', 'about', 'products', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (isManualScrolling.current) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      isManualScrolling.current = true;
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      
      setActiveSection(id);
      
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsMenuOpen(false);

      scrollTimeout.current = setTimeout(() => {
        isManualScrolling.current = false;
      }, 1000);
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Our Story' },
    { id: 'services', label: 'Capabilities' },
    { id: 'products', label: 'Products' },
    { id: 'contact', label: 'Inquiries' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-500 transform-gpu will-change-transform ${
        scrolled 
        ? 'bg-white py-3 shadow-lg border-b border-black/5' 
        : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-[1001]">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group select-none" 
            onClick={() => {
              scrollToSection('home');
              setIsMenuOpen(false);
            }}
          >
            <div className={`relative transition-all duration-500 will-change-transform ${scrolled ? 'scale-90' : 'scale-110'}`}>
              <img 
                src={logo} 
                alt="Retlsen Health Care" 
                width="180"
                height="50"
                className="h-10 sm:h-12 w-auto object-contain transition-all duration-300"
                style={{
                  filter: scrolled ? 'none' : 'brightness(0) invert(1)'
                }}
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center">
            <div className={`relative flex items-center p-1 rounded-full transition-all duration-500 ${scrolled ? 'bg-black/5' : 'bg-white/10 border border-white/20 shadow-inner shadow-white/5'}`}>
              {navLinks.map((link) => (
                <button 
                   key={link.id}
                  onClick={() => scrollToSection(link.id)} 
                  className={`relative px-6 py-2 text-xs font-black uppercase tracking-[0.1em] transition-all duration-300 z-10 ${
                    activeSection === link.id 
                      ? 'text-white' 
                      : (scrolled ? 'text-slate-800 hover:text-amber-700' : 'text-white/70 hover:text-white')
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {activeSection === link.id && (
                    <motion.div 
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full -z-10 bg-amber-600"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <button 
              onClick={() => scrollToSection('contact')}
              className={`px-8 py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-all duration-300 border-2 shadow-lg hover:-translate-y-1 hover:scale-[1.02] ${
                scrolled 
                ? 'border-slate-900 bg-slate-900 text-white hover:bg-amber-700 hover:border-amber-700 shadow-slate-900/10 hover:shadow-amber-500/25' 
                : 'border-white text-white hover:bg-white hover:text-slate-900 shadow-black/10 hover:shadow-white/25'
              }`}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 relative z-[1002] transition-colors duration-300 ${scrolled || isMenuOpen ? 'text-slate-900' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-[1000] bg-white md:hidden flex flex-col pt-24 pb-8 px-6 overflow-y-auto h-screen w-screen"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link, index) => (
                <motion.button 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  key={link.id}
                  onClick={() => scrollToSection(link.id)} 
                  className={`block w-full text-left py-4 px-4 text-lg font-black uppercase tracking-wider border-b border-gray-100 transition-all active:bg-gray-50 ${
                    activeSection === link.id 
                    ? 'text-amber-700 pl-6 border-l-4 border-l-amber-700' 
                    : 'text-slate-600 hover:text-amber-700'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => scrollToSection('contact')}
                className="mt-8 w-full py-4 rounded-lg bg-slate-900 text-white font-bold uppercase tracking-widest shadow-lg active:scale-95 transition-transform"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

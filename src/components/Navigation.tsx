import { Menu, X, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
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
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(id);
      setIsMenuOpen(false);
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
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      scrolled 
      ? 'bg-white/90 backdrop-blur-xl border-b border-gray-100 py-3 shadow-sm' 
      : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => scrollToSection('home')}
          >
            <div className={`p-2 transition-colors duration-300 ${scrolled ? 'bg-amber-600 text-white' : 'bg-white/20 text-white'}`}>
              <Globe size={24} className="group-hover:rotate-12 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-black tracking-tighter leading-none transition-colors duration-300 ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                RELTSEN
              </span>
              <span className={`text-[10px] font-bold tracking-[0.2em] transition-colors duration-300 ${scrolled ? 'text-amber-600' : 'text-amber-500'}`}>
                HEALTH CARE
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center bg-white/5 backdrop-blur-md rounded-full px-2 py-1 border border-white/10 shadow-lg">
            <div className={`relative flex items-center p-1 rounded-full ${scrolled ? 'bg-slate-50' : 'bg-transparent'}`}>
              {navLinks.map((link) => (
                <button 
                  key={link.id}
                  onClick={() => scrollToSection(link.id)} 
                  className={`relative px-6 py-2 text-xs font-black uppercase tracking-widest transition-all duration-500 z-10 ${
                    activeSection === link.id 
                      ? (scrolled ? 'text-white' : 'text-slate-900') 
                      : (scrolled ? 'text-slate-500 hover:text-slate-900' : 'text-white/70 hover:text-white')
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.div 
                      layoutId="nav-pill"
                      className={`absolute inset-0 rounded-full -z-10 ${scrolled ? 'bg-amber-600' : 'bg-white'}`}
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
              className={`px-8 py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-all duration-300 border-2 shadow-md hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg ${
                scrolled 
                ? 'border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white shadow-slate-900/10 hover:shadow-slate-900/25' 
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
              className={`p-2 transition-colors duration-300 ${scrolled ? 'text-slate-900' : 'text-white'}`}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-4">
              {navLinks.map((link) => (
                <button 
                  key={link.id}
                  onClick={() => scrollToSection(link.id)} 
                  className={`block w-full text-left py-4 px-6 text-sm font-black uppercase tracking-wider transition-all ${
                    activeSection === link.id 
                    ? 'text-amber-600 bg-amber-50 rounded-lg' 
                    : 'text-slate-600 hover:text-amber-600'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

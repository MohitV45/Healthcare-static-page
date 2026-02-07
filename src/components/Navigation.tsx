import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const sections = ['home', 'services', 'about', 'products', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section is in middle of viewport
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
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Facilities' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const getButtonClass = (id: string) => {
    const isActive = activeSection === id;
    if (id === 'contact') {
      return `bg-blue-900 dark:bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-blue-800 dark:hover:bg-teal-500 transition-all ${isActive ? 'ring-2 ring-teal-400 ring-offset-2' : ''}`;
    }
    
    return `relative px-6 py-2.5 font-bold transition-all duration-300 ${
      isActive ? 'text-white' : 'text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-teal-400'
    }`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-sm z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-blue-900 dark:text-white">Reltsen Health Care</h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">Caring for Life</p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              link.id !== 'contact' && (
                <button 
                  key={link.id}
                  onClick={() => scrollToSection(link.id)} 
                  className={getButtonClass(link.id)}
                >
                  <span className="relative z-10">{link.label}</span>
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-blue-900 dark:bg-teal-600 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              )
            ))}
            
            <div className="flex items-center ml-4 space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-teal-400 transition-colors hover:bg-gray-200 dark:hover:bg-slate-700"
                aria-label="Toggle Theme"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>

              <button onClick={() => scrollToSection('contact')} className={getButtonClass('contact')}>
                Contact Us
              </button>
            </div>
          </div>

          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-teal-400"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t dark:border-slate-800">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => scrollToSection(link.id)} 
                className={`block w-full text-left py-3 px-4 rounded-xl transition ${
                  activeSection === link.id 
                  ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-900 dark:text-teal-400 font-bold' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}


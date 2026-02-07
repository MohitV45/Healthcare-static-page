import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
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

          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="bg-blue-900 dark:bg-teal-600 text-white px-8 py-2.5 rounded-full font-bold shadow-md hover:bg-blue-800 dark:hover:bg-teal-500 transition-all duration-300"
            >
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-teal-400 font-bold transition">
              Facilities
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-teal-400 font-bold transition">
              About Us
            </button>
            <button onClick={() => scrollToSection('products')} className="text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-teal-400 font-bold transition">
              Products
            </button>
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-teal-400 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <button onClick={() => scrollToSection('contact')} className="bg-blue-900 dark:bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-blue-800 dark:hover:bg-teal-500 transition">
              Contact Us
            </button>
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
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-teal-400">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-teal-400">
              Facilities
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-teal-400">
              About Us
            </button>
            <button onClick={() => scrollToSection('products')} className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-teal-400">
              Products
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 bg-blue-900 dark:bg-teal-600 text-white rounded-lg px-4">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

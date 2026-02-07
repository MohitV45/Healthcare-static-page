import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setFading(true);
        setTimeout(() => setLoading(false), 1000);
      }, 2000); // 2 second loader display
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <ThemeProvider>
      {loading && <Loader fading={fading} />}
      <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
        <Navigation />
        <Hero />
        <About />
        <Services />
        <Products />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

import { useState, useEffect, lazy, Suspense } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Loader from './components/Loader';

const Services = lazy(() => import('./components/Services'));
const About = lazy(() => import('./components/About'));
const Products = lazy(() => import('./components/Products'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Determine mobile status with modern API
    const isMobile = window.matchMedia('(pointer: coarse)').matches;
    const isPerformanceLimited = window.navigator.hardwareConcurrency < 4;
    
    // Adjusted timing for premium feel vs performance
    const displayTime = isMobile || isPerformanceLimited ? 800 : 1500;

    const handleLoad = () => {
      const timeoutId = setTimeout(() => {
        setFading(true);
        setTimeout(() => setLoading(false), 600);
      }, displayTime);
      return () => clearTimeout(timeoutId);
    };

    // Safety timeout: 3.5s max wait for loader
    const safetyTimeout = setTimeout(handleLoad, 3500);

    if (document.readyState === 'complete') {
      handleLoad();
      clearTimeout(safetyTimeout);
    } else {
      window.addEventListener('load', () => {
        handleLoad();
        clearTimeout(safetyTimeout);
      });
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(safetyTimeout);
      };
    }
  }, []);

  return (
    <ThemeProvider>
      {loading && <Loader fading={fading} />}
      <Navigation />
      <main className="min-h-screen bg-slate-900 dark:bg-slate-950 transition-colors duration-300">
        <Hero />
        <Suspense fallback={<div className="h-96 bg-slate-900 animate-pulse" />}>
          <About />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <Services />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-slate-900 animate-pulse" />}>
          <Products />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-white animate-pulse" />}>
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </ThemeProvider>
  );
}

export default App;

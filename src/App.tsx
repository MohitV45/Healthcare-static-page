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
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => setLoading(false), 500); // Wait for fade animation
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {loading && <Loader fading={fading} />}
      <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
        <Navigation />
        <Hero />
        <Services />
        <About />
        <Products />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import SystemRequirements from './components/SystemRequirements';
import Download from './components/Download';
import Footer from './components/Footer';

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Navbar scrollY={scrollY} />
      <Hero />
      <Features />
      <Showcase />
      <SystemRequirements />
      <Download />
      <Footer />
    </div>
  );
}

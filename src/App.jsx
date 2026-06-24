import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import Experience from './components/Experience';
import Credentials from './components/Credentials';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

function Footer() {
  return (
    <footer className="py-12 bg-black font-mono text-[10px] text-gray-600 border-t border-white/5 max-w-7xl mx-auto w-full border-x">
      <div className="px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © {new Date().getFullYear()} SOURAV_GOSWAMI. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-6 uppercase tracking-wider">
          <a href="https://github.com/Sourav040505" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">[ GITHUB ]</a>
          <a href="https://linkedin.com/in/souravgoswami2005" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">[ LINKEDIN ]</a>
          <a href="mailto:souravgoswami2005@gmail.com" className="hover:text-white transition-colors">[ EMAIL ]</a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-black text-gray-200 flex flex-col relative font-sans">
      {/* Interactive Futuristic Mouse Trail Custom Cursor */}
      <CustomCursor />

      {/* Global premium noise texture */}
      <div className="noise-overlay" />

      {/* Floating Header */}
      <Navbar />

      {/* Main Blueprint layout */}
      <main className="flex-grow">
        <Hero />
        <ProjectGrid />
        <Experience />
        <Credentials />
        <TechStack />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

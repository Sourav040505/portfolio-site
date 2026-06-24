import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import TechStack from './components/TechStack';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-black text-center text-xs text-gray-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © {new Date().getFullYear()} Sourav Goswami. Designed & Orchestrated Autonomously.
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/Sourav040505" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="mailto:souravgoswami2005@gmail.com" className="hover:text-white transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-background text-gray-100 flex flex-col relative">
      {/* Background glow canvas overlay */}
      <div className="grid-glow" />

      {/* Floating Navbar */}
      <Navbar />

      {/* Main content sections */}
      <main className="flex-grow">
        <Hero />
        <ProjectGrid />
        <TechStack />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

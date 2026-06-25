import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import Experience from './components/Experience';
import Credentials from './components/Credentials';
import SystemMonitor from './components/SystemMonitor';
import TechStack from './components/TechStack';
import BlogNotes from './components/BlogNotes';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Terminal from './components/Terminal';

function Footer() {
  return (
    <footer
      className="py-10 border-t font-mono text-[10px] text-gray-600"
      style={{ background: '#080810', borderColor: 'rgba(255,255,255,0.05)' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.15em' }}>
          © {new Date().getFullYear()} SOURAV GOSWAMI. ALL RIGHTS RESERVED.
        </span>
        <div className="flex gap-6 tracking-widest uppercase">
          <a
            href="https://github.com/Sourav040505"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/souravgoswami2005"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a href="mailto:souravgoswami2005@gmail.com" className="hover:text-white transition-colors">
            Email
          </a>
          <span className="text-gray-700 hidden sm:inline">·</span>
          <span className="text-gray-600 hidden sm:inline tracking-wider">
            <kbd className="text-indigo-400/70">`</kbd> terminal
          </span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div
      className="min-h-screen flex flex-col relative"
      style={{ background: '#080810', color: '#f1f1f3', fontFamily: "'Inter', sans-serif" }}
    >
      <CustomCursor />
      <Terminal />
      <div className="noise-overlay" />
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <ProjectGrid />
        <Experience />
        <Credentials />
        <SystemMonitor />
        <TechStack />
        <BlogNotes />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

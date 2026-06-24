import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import Experience from './components/Experience';
import Credentials from './components/Credentials';
import SystemMonitor from './components/SystemMonitor';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

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
      {/* Futuristic custom crosshair cursor */}
      <CustomCursor />

      {/* Subtle noise texture overlay */}
      <div className="noise-overlay" />

      {/* Sticky top navbar with scramble-text links */}
      <Navbar />

      <main className="flex-grow">
        {/* ① Landing — simplistic, light background */}
        <Hero />

        {/* ② Projects — dark futuristic card grid */}
        <ProjectGrid />

        {/* ③ Experience — dark 3-column cards */}
        <Experience />

        {/* ④ Credentials — education + certs */}
        <Credentials />

        {/* ⑤ Live feed — current project + Spotify widget */}
        <SystemMonitor />

        {/* ⑥ Tech stack — skill categories + workflow */}
        <TechStack />

        {/* ⑦ Contact — email copy + CTA */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&';

function ScrambleLink({ label, href }) {
  const [display, setDisplay] = useState(label);
  const rafRef = useRef(null);
  const iterRef = useRef(0);

  const scramble = () => {
    iterRef.current = 0;
    const totalFrames = label.length * 2;

    const tick = () => {
      const frame = iterRef.current;
      setDisplay(
        label
          .split('')
          .map((char, i) => {
            if (i < frame / 2) return label[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );
      iterRef.current++;
      if (frame < totalFrames) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setDisplay(label);
      }
    };
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  return (
    <a
      href={href}
      onMouseEnter={scramble}
      className="relative text-[#9ca3af] hover:text-white font-mono text-xs tracking-[0.2em] uppercase transition-colors duration-200 group"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {display}
      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-indigo-400 group-hover:w-full transition-all duration-300" />
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { label: 'WORK', href: '#projects' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'STACK', href: '#stack' },
    { label: 'NOTES', href: '#notes' },
    { label: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080810]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between h-16">

        {/* Left: Logo wordmark */}
        <a href="#" className="group flex items-center gap-2.5">
          {/* Futuristic diamond logo mark */}
          <div className="relative w-7 h-7 flex items-center justify-center">
            <div className="w-3.5 h-3.5 border border-indigo-400 rotate-45 group-hover:rotate-90 transition-transform duration-500 group-hover:border-white" />
            <div className="absolute w-1.5 h-1.5 bg-indigo-400 rotate-45 group-hover:bg-white transition-colors duration-300" />
          </div>
          <span
            className="text-white font-bold text-sm tracking-[0.15em] uppercase group-hover:text-indigo-300 transition-colors"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            SOURAV.DEV
          </span>
        </a>

        {/* Center: scramble nav links */}
        <nav className="hidden sm:flex items-center gap-8">
          {links.map((link) => (
            <ScrambleLink key={link.href} label={link.label} href={link.href} />
          ))}
        </nav>

        {/* Right: Availability badge + Resume CTA */}
        <div className="flex items-center gap-4">
          <span className="hidden md:flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            OPEN TO WORK
          </span>
          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 border border-indigo-500/40 hover:border-indigo-400 text-indigo-300 hover:text-white text-[11px] font-mono tracking-widest uppercase transition-all duration-200 hover:bg-indigo-500/10"
          >
            RESUME
          </a>
        </div>

      </div>
    </header>
  );
}

import React from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

/**
 * Hero — the simplistic, clean landing section.
 * Light background (#fafbff), sharp minimal typography, large name, role subtitle,
 * two CTA buttons, and a subtle scroll-down indicator.
 * All other sections remain dark/futuristic.
 */
export default function Hero() {
  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
      style={{ background: '#fafbff' }}
    >
      {/* Very subtle grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Soft radial glow in centre */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(99,102,241,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto flex flex-col items-center gap-8">

        {/* Role label */}
        <span
          className="inline-flex items-center gap-2 px-4 py-1.5 border text-xs tracking-[0.25em] uppercase"
          style={{
            borderColor: 'rgba(99,102,241,0.25)',
            color: '#6366f1',
            fontFamily: "'JetBrains Mono', monospace",
            background: 'rgba(99,102,241,0.04)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          SDE · Backend + AI + DSA
        </span>

        {/* Name */}
        <h1
          className="font-black leading-none tracking-tight"
          style={{
            fontSize: 'clamp(4rem, 12vw, 8rem)',
            color: '#0f0f1a',
            letterSpacing: '-0.03em',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Sourav<span style={{ color: '#6366f1' }}>.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="max-w-xl text-base sm:text-lg leading-relaxed"
          style={{ color: '#6b7280', fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
        >
          Backend engineer building AI-powered systems — C++, DSA, and production APIs. Currently at VIT, Bhopal.
        </p>

        {/* Availability strip */}
        <div
          className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] font-mono tracking-widest uppercase"
          style={{ color: '#9ca3af' }}
        >
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Open to internships & freelance
          </span>
          <span className="hidden sm:inline text-gray-300">·</span>
          <span>Remote</span>
          <span className="hidden sm:inline text-gray-300">·</span>
          <span>Available immediately</span>
          <span className="hidden sm:inline text-gray-300">·</span>
          <span>India</span>
        </div>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mt-2">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-8 py-3.5 font-semibold text-sm tracking-wide transition-all duration-200"
            style={{
              background: '#0f0f1a',
              color: '#ffffff',
              fontFamily: "'Inter', sans-serif",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#6366f1'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#0f0f1a'; }}
          >
            View My Work
            <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 font-semibold text-sm tracking-wide border transition-all duration-200"
            style={{
              borderColor: 'rgba(15,15,26,0.2)',
              color: '#374151',
              fontFamily: "'Inter', sans-serif",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#6366f1';
              e.currentTarget.style.color = '#6366f1';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(15,15,26,0.2)';
              e.currentTarget.style.color = '#374151';
            }}
          >
            Download CV
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-6 mt-2">
          <a
            href="https://github.com/Sourav040505"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-200"
            style={{ color: '#9ca3af' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#111827'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#9ca3af'; }}
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/souravgoswami2005"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-200"
            style={{ color: '#9ca3af' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#111827'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#9ca3af'; }}
          >
            <Linkedin size={18} />
          </a>
          <div
            className="h-px w-12"
            style={{ background: 'rgba(0,0,0,0.12)' }}
          />
          <span
            className="text-xs tracking-widest"
            style={{ color: '#9ca3af', fontFamily: "'JetBrains Mono', monospace" }}
          >
            BHOPAL, IN
          </span>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div
          className="w-px h-12 animate-pulse"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(99,102,241,0.5))' }}
        />
        <span
          className="text-[9px] tracking-[0.3em] uppercase"
          style={{ color: '#9ca3af', fontFamily: "'JetBrains Mono', monospace" }}
        >
          SCROLL
        </span>
      </div>
    </section>
  );
}

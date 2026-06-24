import React, { useState, useEffect } from 'react';
import { Menu, X, Github, ExternalLink, Code } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'AI Stack', href: '#stack' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-4 bg-black/60 backdrop-blur-lg border-b border-white/5 shadow-2xl' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Brand */}
        <a 
          href="#" 
          className="flex items-center gap-2 group text-white font-medium text-lg tracking-tight"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600/10 border border-indigo-500/20 group-hover:border-indigo-500/50 transition-all">
            <Code size={16} className="text-indigo-400 group-hover:text-indigo-300 transition-colors" />
          </div>
          <span className="font-semibold tracking-tight hover:text-indigo-400 transition-colors">
            Sourav Goswami
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="https://github.com/Sourav040505"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white transition-all duration-200"
          >
            <Github size={16} />
            <span>GitHub</span>
            <ExternalLink size={12} className="opacity-60" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 md:hidden text-gray-400 hover:text-white transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/Sourav040505"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm transition-all"
          >
            <Github size={18} />
            <span>Visit GitHub</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </nav>
  );
}

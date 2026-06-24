import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Terminal } from 'lucide-react';

export default function Navbar() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      setTime(date.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const links = [
    { label: 'PROJECTS', href: '#projects' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'CREDENTIALS', href: '#education' },
    { label: 'DEV_STACK', href: '#stack' },
    { label: 'CONTACT', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between font-mono text-[11px] tracking-wider">
        {/* Brand */}
        <div className="flex items-center gap-4">
          <a href="#" className="font-bold text-white tracking-widest flex items-center gap-2">
            <Terminal size={14} className="text-indigo-400" />
            <span>SOURAV_GOSWAMI.IO</span>
          </a>
          <span className="hidden sm:inline-block text-[9px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-sm">
            DEV: ONLINE
          </span>
        </div>

        {/* Navigation links */}
        <nav className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className="text-gray-400 hover:text-white hover:underline decoration-indigo-500 decoration-2 underline-offset-4 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Socials & Clock */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 border-r border-white/5 pr-6">
            <a 
              href="https://github.com/Sourav040505" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <Github size={14} />
            </a>
            <a 
              href="https://linkedin.com/in/souravgoswami2005" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={14} />
            </a>
          </div>
          
          <div className="text-gray-400 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>UTC {time}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

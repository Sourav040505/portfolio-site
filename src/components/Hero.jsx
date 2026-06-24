import React, { useState, useEffect } from 'react';
import { ArrowRight, RefreshCw } from 'lucide-react';

const logs = [
  'Initializing build environment...',
  'Checking repository branch: origin/main... up to date',
  'Loading configuration variables... success',
  'Executing static code audits... [Oxlint: Clean]',
  'Running unit verification tests... [PASS]',
  'Starting production compilation: vite build',
  'Analyzing bundle dependency graph...',
  'Transforming source assets with ESBuild...',
  'Static assets bundled successfully:',
  '  - dist/index.html       (1.38 kB)',
  '  - dist/assets/index.css (30.46 kB)',
  '  - dist/assets/index.js  (229.65 kB)',
  'Continuous Integration: Vercel hooks configured.',
  'STATUS: COMPILED SUCCESSFULLY // PRODUCTION READY'
];

export default function Hero() {
  const [terminalLines, setTerminalLines] = useState([]);
  const [lineIdx, setLineIdx] = useState(0);

  useEffect(() => {
    if (lineIdx < logs.length) {
      const timer = setTimeout(() => {
        setTerminalLines((prev) => [...prev, logs[lineIdx]]);
        setLineIdx((prev) => prev + 1);
      }, 800 + Math.random() * 400);
      return () => clearTimeout(timer);
    } else {
      const resetTimer = setTimeout(() => {
        setTerminalLines([]);
        setLineIdx(0);
      }, 5000);
      return () => clearTimeout(resetTimer);
    }
  }, [lineIdx]);

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-16 bg-black blueprint-grid scanline">
      {/* Structural layout partitions */}
      <div className="flex-grow max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 border-x border-white/5">
        
        {/* Left Editorial Text Pane */}
        <div className="lg:col-span-7 flex flex-col justify-center p-8 sm:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-white/5">
          <div className="flex items-center gap-2 text-indigo-400 font-mono text-[10px] tracking-[0.25em] uppercase mb-8">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-sm" />
            <span>Software Engineer & Developer</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-8 font-sans">
            Building High- <br />
            Performance <br />
            <span className="text-gradient">
              Web Software.
            </span>
          </h1>

          <p className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed mb-12 tracking-wide font-sans">
            Experienced full-stack web developer and software engineer skilled in designing responsive interfaces, optimization strategies, and robust version-controlled systems.
          </p>

          {/* Minimalist interactive CTAs */}
          <div className="flex flex-wrap gap-4 font-mono text-[11px] tracking-wider">
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3.5 bg-white text-black font-bold uppercase transition-all duration-300 hover:bg-indigo-400 hover:text-white"
            >
              <span>EXPLORE_SOFTWARE</span>
              <ArrowRight size={12} />
            </a>

            <a
              href="https://linkedin.com/in/souravgoswami2005"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 bg-white/5 border border-white/10 hover:border-white/20 text-white font-semibold uppercase transition-all duration-200"
            >
              <span>CONNECT_LINKEDIN</span>
            </a>

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3.5 bg-white/5 border border-white/10 hover:border-white/20 text-gray-400 hover:text-white transition-all duration-200"
            >
              <span>DOWNLOAD_CV</span>
            </a>
          </div>
        </div>

        {/* Right Terminal Live Code Feed */}
        <div className="lg:col-span-5 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
          <div className="flex-grow bg-[#050508]/80 border border-white/5 p-6 rounded-md font-mono text-[11px] text-gray-400 overflow-hidden min-h-[350px] lg:min-h-0 flex flex-col justify-between shadow-2xl relative">
            <div className="absolute top-2 right-3 flex items-center gap-1.5 text-[9px] text-gray-600">
              <RefreshCw size={10} className="animate-spin text-indigo-400" />
              <span>CI/CD PIPELINE</span>
            </div>

            <div className="space-y-2 overflow-y-auto max-h-[350px] pr-2 scrollbar-thin">
              {terminalLines.map((line, idx) => (
                <div key={idx} className="leading-relaxed">
                  <span className="text-indigo-500 mr-2">$</span>
                  <span className={line.includes('[PASS]') || line.includes('SUCCESSFULLY') ? 'text-emerald-400' : ''}>
                    {line}
                  </span>
                </div>
              ))}
              <div className="w-2 h-4 bg-indigo-500/80 animate-pulse inline-block" />
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/5 text-[9px] text-gray-600 flex justify-between">
              <span>HOST: LOCALHOST:5173</span>
              <span>COMPILER: ACTIVE</span>
            </div>
          </div>

          {/* Clean technology metric descriptors */}
          <div className="grid grid-cols-2 gap-4 mt-8 border-t border-white/5 pt-8 font-mono text-[11px] text-gray-500">
            <div>
              <div className="text-[9px] text-gray-600 tracking-widest uppercase">AUDIT_PROTOCOL</div>
              <div className="text-white font-bold mt-1">STATIC LINT & BUILD PREVIEWS</div>
            </div>
            <div>
              <div className="text-[9px] text-gray-600 tracking-widest uppercase">PIPELINE_ENGINE</div>
              <div className="text-white font-bold mt-1">CONTINUOUS INTEGRATION (CI)</div>
            </div>
          </div>
        </div>

      </div>
      
      {/* Bottom border grid element */}
      <div className="h-12 border-t border-white/5 max-w-7xl mx-auto w-full flex items-center px-8 justify-between font-mono text-[10px] text-gray-600">
        <span>PORT: 5173</span>
        <span>SOURAV GOSWAMI © {new Date().getFullYear()}</span>
      </div>
    </section>
  );
}

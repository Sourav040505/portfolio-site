import React from 'react';
import { ArrowRight, Sparkles, FileDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-24 px-6 overflow-hidden">
      {/* Decorative Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f29_1px,transparent_1px),linear-gradient(to_bottom,#1f1f29_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.15] z-0" />

      <div className="relative max-w-5xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Tech Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-8 animate-pulse">
          <Sparkles size={12} />
          <span>Next-Gen Engineering</span>
        </div>

        {/* Aggressive Headings */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-8 font-sans max-w-4xl">
          Building the Future{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            5x Faster
          </span>{' '}
          with AI-Augmented Engineering.
        </h1>

        {/* High-End Subtitle */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl leading-relaxed mb-12 tracking-wide">
          B.Tech Computer Science student specializing in Educational Technology. Operating as an engineering manager orchestrating autonomous AI agents to build scalable web software.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full sm:w-auto">
          <a
            href="#projects"
            className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/35 hover:-translate-y-0.5"
          >
            <span>View Live Software</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="/resume.pdf"
            download
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <FileDown size={18} />
            <span>Download Materials</span>
          </a>
        </div>

        {/* Performance metrics banner */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 pt-20 border-t border-white/5 w-full mt-24">
          <div className="text-center md:text-left">
            <div className="text-3xl md:text-4xl font-extrabold text-white">5x</div>
            <div className="text-xs uppercase tracking-wider text-gray-500 mt-1">Velocity Increase</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-3xl md:text-4xl font-extrabold text-white">100%</div>
            <div className="text-xs uppercase tracking-wider text-gray-500 mt-1">Agent Autonomous Stack</div>
          </div>
          <div className="col-span-2 md:col-span-1 text-center md:text-left">
            <div className="text-3xl md:text-4xl font-extrabold text-white">Zero</div>
            <div className="text-xs uppercase tracking-wider text-gray-500 mt-1">Legacy Bottlenecks</div>
          </div>
        </div>
      </div>
    </section>
  );
}

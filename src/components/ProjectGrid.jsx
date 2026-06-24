import React, { useState } from 'react';
import { Github, ExternalLink, Zap, Globe, ShieldCheck, Layers, Database, Code2 } from 'lucide-react';

const projects = [
  {
    id: 'hookcraft',
    title: 'HookCraft AI',
    subtitle: 'NLP Content Engine',
    category: 'AI & ML',
    description:
      'A semantic content brainstorming app featuring LLM prompt mapping, real-time state management, and a clean generation interface built on React and Vite.',
    tech: ['React', 'Vite', 'LLM Integration', 'Tailwind CSS'],
    github: 'https://github.com/Sourav040505/hookcraft-ai',
    live: 'https://hookcraft-ai.vercel.app',
    icon: <Zap size={18} />,
    accent: 'rgba(234,179,8,0.15)',
    accentBorder: 'rgba(234,179,8,0.25)',
    accentText: '#fbbf24',
  },
  {
    id: 'echo-chamber',
    title: 'Echo Chamber',
    subtitle: 'Chrome Extension',
    category: 'Web Dev',
    description:
      'A browser utility extension built with event-driven background workers, modular script scopes, and direct DOM APIs — improves browsing workflows.',
    tech: ['JavaScript', 'Chrome Extension API', 'DOM', 'Event Loops'],
    github: 'https://github.com/Sourav040505/Echo-Chamber-Extension',
    live: 'https://github.com/Sourav040505/Echo-Chamber-Extension',
    icon: <Globe size={18} />,
    accent: 'rgba(20,184,166,0.12)',
    accentBorder: 'rgba(20,184,166,0.25)',
    accentText: '#2dd4bf',
  },
  {
    id: 'storefront',
    title: 'Secure Storefront',
    subtitle: 'E-Commerce / Stripe',
    category: 'Web Dev',
    description:
      'A high-conversion digital storefront with React state cart, localStorage persistence, and Stripe Checkout integration simulation with a download success flow.',
    tech: ['React', 'Vite', 'Stripe API', 'CSS Grid'],
    github: 'https://github.com/Sourav040505/apexui-storefront',
    live: '#',
    icon: <ShieldCheck size={18} />,
    accent: 'rgba(16,185,129,0.12)',
    accentBorder: 'rgba(16,185,129,0.25)',
    accentText: '#34d399',
  },
  {
    id: 'fossee-redesign',
    title: 'FOSSEE Redesign',
    subtitle: 'IIT Bombay · Open Source',
    category: 'Web Dev',
    description:
      'Refactored and redesigned the FOSSEE workshop web application at IIT Bombay — responsive layouts, optimised asset loading, and Django controller improvements.',
    tech: ['Python', 'Django', 'CSS Grid', 'Asset Optimisation'],
    github: 'https://github.com/Sourav040505',
    live: '#',
    icon: <Layers size={18} />,
    accent: 'rgba(99,102,241,0.12)',
    accentBorder: 'rgba(99,102,241,0.25)',
    accentText: '#818cf8',
  },
  {
    id: 'dashboard',
    title: 'EdTech Dashboard',
    subtitle: 'Supabase · Analytics',
    category: 'AI & ML',
    description:
      'A persistent user analytics portal with Supabase backend, async query pooling, environment variable encryption, and real-time budget tracking engine.',
    tech: ['Supabase', 'React', 'Async Queries', 'Real-time DB'],
    github: 'https://github.com/Sourav040505',
    live: '#',
    icon: <Database size={18} />,
    accent: 'rgba(139,92,246,0.12)',
    accentBorder: 'rgba(139,92,246,0.25)',
    accentText: '#a78bfa',
  },
  {
    id: 'ccrm',
    title: 'CCRM OOP App',
    subtitle: 'Java · DSA',
    category: 'Systems',
    description:
      'Desktop application demonstrating clean OOP principles — encapsulation, inheritance, and interface contracts — with optimised data structure implementations in Java.',
    tech: ['Java', 'OOP Design', 'Data Structures', 'Algorithms'],
    github: 'https://github.com/Sourav040505',
    live: '#',
    icon: <Code2 size={18} />,
    accent: 'rgba(244,63,94,0.12)',
    accentBorder: 'rgba(244,63,94,0.25)',
    accentText: '#fb7185',
  },
];

const filterOptions = ['All', 'Web Dev', 'AI & ML', 'Systems'];

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="bg-[#080810] relative border-b border-white/5 scroll-mt-16 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-8">
          <div>
            <span
              className="block mb-2 text-[10px] tracking-[0.3em] uppercase text-indigo-400"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Selected Work
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              Projects
            </h2>
            <p className="mt-3 text-gray-400 text-sm max-w-lg leading-relaxed">
              A curated set of engineering artifacts — web apps, browser tools, and open-source contributions.
            </p>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="px-4 py-1.5 text-xs font-mono tracking-widest uppercase border transition-all duration-200"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  borderColor: activeFilter === f ? 'rgba(99,102,241,0.6)' : 'rgba(255,255,255,0.08)',
                  color: activeFilter === f ? '#818cf8' : '#6b7280',
                  background: activeFilter === f ? 'rgba(99,102,241,0.08)' : 'transparent',
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="card-shine group flex flex-col p-6 border transition-all duration-300 hover:-translate-y-1"
              style={{
                background: project.accent,
                borderColor: project.accentBorder,
                borderRadius: '2px',
              }}
            >
              {/* Top bar */}
              <div className="flex items-center justify-between mb-5">
                <div
                  className="p-2 border"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    borderColor: project.accentBorder,
                    color: project.accentText,
                  }}
                >
                  {project.icon}
                </div>
                <span
                  className="text-[9px] tracking-[0.2em] uppercase font-mono"
                  style={{ color: project.accentText }}
                >
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <div className="mb-3">
                <span className="text-[10px] text-gray-500 font-mono tracking-wider block mb-1">
                  {project.subtitle}
                </span>
                <h3 className="text-lg font-bold text-white leading-tight">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-grow">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 border tracking-wide"
                    style={{
                      borderColor: 'rgba(255,255,255,0.06)',
                      color: '#6b7280',
                      background: 'rgba(255,255,255,0.03)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div
                className="flex gap-2 pt-4 border-t"
                style={{ borderColor: 'rgba(255,255,255,0.05)' }}
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-mono tracking-wider uppercase border transition-all duration-200 hover:text-white"
                  style={{
                    borderColor: 'rgba(255,255,255,0.08)',
                    color: '#6b7280',
                  }}
                >
                  <Github size={12} />
                  Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-200 hover:opacity-80"
                  style={{
                    background: project.accentText,
                    color: '#080810',
                    fontWeight: 700,
                  }}
                >
                  Live
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

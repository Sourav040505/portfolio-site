import React, { useState } from 'react';
import { Github, ExternalLink, ShieldCheck, Zap, Database, ArrowRight } from 'lucide-react';

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 'hookcraft',
      title: 'HookCraft AI',
      level: 'Level 1',
      subtitle: 'Viral Short-Form Brainstormer',
      description: 'Viral Short-Form Content Brainstormer built in a single weekend. Powered by AI state logic, version-controlled with GitHub Desktop, and shipped to Vercel.',
      tech: ['React', 'AI State Logic', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/Sourav040505/hookcraft-ai',
      live: 'https://hookcraft-ai.vercel.app',
      icon: <Zap className="text-amber-400" size={24} />,
      metrics: { title: 'Timeline', value: '48 Hours' }
    },
    {
      id: 'storefront',
      title: 'Secure Digital Storefront',
      level: 'Level 2',
      subtitle: 'Premium E-Commerce Interface',
      description: 'High-Conversion E-Commerce Interface handling complex state logic, local storage carts, and secure Stripe payment gateway parameters.',
      tech: ['React State', 'Vite', 'Stripe API', 'Tailwind CSS'],
      github: 'https://github.com/Sourav040505/apexui-storefront',
      live: '#',
      icon: <ShieldCheck className="text-emerald-400" size={24} />,
      metrics: { title: 'State Security', value: 'Encrypted' }
    },
    {
      id: 'dashboard',
      title: 'EdTech Lead-Gen Dashboard',
      level: 'Level 3',
      subtitle: 'Supabase User Portal',
      description: 'Persistent user portal utilizing an asynchronous @supabase/supabase-js database integration, secure environment variables, and live budget calculation mathematics.',
      tech: ['Supabase', 'Asynchronous DB', 'Environment Encryption', 'Budget Engine'],
      github: 'https://github.com/Sourav040505',
      live: '#',
      icon: <Database className="text-indigo-400" size={24} />,
      metrics: { title: 'DB Queries', value: 'Async Realtime' }
    }
  ];

  const filterOptions = ['All', 'Level 1', 'Level 2', 'Level 3'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.level === activeFilter);

  return (
    <section id="projects" className="py-32 px-6 bg-black relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-4">
              Featured Software
            </h2>
            <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Interactive Showcase Grid
            </h3>
            <p className="text-gray-400 mt-4 max-w-xl text-base">
              A curated directory of engineering artifacts built using agile methods and agent orchestration.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mt-8 md:mt-0">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'bg-[#0B0B0F] border border-[#1F1F29] text-gray-400 hover:text-white hover:border-[#4F46E5]/40'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="glass-card rounded-2xl p-8 flex flex-col h-full hover:scale-[1.01]"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                  {project.icon}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                  {project.level}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="mb-4">
                <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                  {project.subtitle}
                </span>
                <h4 className="text-xl font-bold text-white mt-1">
                  {project.title}
                </h4>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tag) => (
                  <span 
                    key={tag}
                    className="text-[11px] font-medium text-gray-400 px-2.5 py-1 rounded-md bg-[#1F1F29]/50 border border-[#1F1F29]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Quick Metrics */}
              <div className="grid grid-cols-2 py-4 border-y border-white/5 mb-8">
                <div>
                  <div className="text-[10px] uppercase text-gray-500 font-semibold tracking-wider">
                    {project.metrics.title}
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    {project.metrics.value}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] uppercase text-gray-500 font-semibold tracking-wider">
                    Stack Type
                  </div>
                  <div className="text-sm font-bold text-indigo-300 mt-0.5">
                    Production
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 flex-1 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-medium text-xs transition-all"
                >
                  <Github size={14} />
                  <span>Code</span>
                </a>
                <a
                  href={project.live}
                  className="flex items-center justify-center gap-1.5 flex-1 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-all shadow-md shadow-indigo-600/10"
                >
                  <span>Live App</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

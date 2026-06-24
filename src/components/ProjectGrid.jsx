import React, { useState } from 'react';
import { Github, ExternalLink, Zap, Chrome, ShieldCheck, Layers, Database, Code2, ChevronDown, ChevronUp } from 'lucide-react';

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedId, setExpandedId] = useState('hookcraft'); // Default expand first item

  const projects = [
    {
      id: 'hookcraft',
      index: '01',
      title: 'HOOKCRAFT_AI',
      level: 'Project 01',
      subtitle: 'Natural Language Processing Engine',
      category: 'AI & ML',
      description: 'A semantic content brainstorming application featuring structured LLM prompt mapping, responsive state parameters, and integrated text generation frameworks.',
      tech: ['React', 'LLM Prompt Logic', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/Sourav040505/hookcraft-ai',
      live: 'https://hookcraft-ai.vercel.app',
      icon: <Zap className="text-amber-400" size={16} />,
      metrics: { title: 'Pipeline', value: 'LLM Prompt Mapping' }
    },
    {
      id: 'echo-chamber',
      index: '02',
      title: 'ECHO_CHAMBER',
      level: 'Project 02',
      subtitle: 'Chrome Extension / Utility',
      category: 'Web Dev',
      description: 'A full-featured browser utility engineered to optimize browsing workflows. Implemented event-driven background programming, modular script scopes, and direct DOM structures.',
      tech: ['JavaScript', 'Chrome Extension API', 'DOM Manipulation', 'Event Loops'],
      github: 'https://github.com/Sourav040505/Echo-Chamber-Extension',
      live: 'https://github.com/Sourav040505/Echo-Chamber-Extension',
      icon: <Chrome className="text-blue-400" size={16} />,
      metrics: { title: 'Platform', value: 'Chrome Web API' }
    },
    {
      id: 'storefront',
      index: '03',
      title: 'SECURE_STOREFRONT',
      level: 'Project 03',
      subtitle: 'State Management / Stripe Gateway',
      category: 'Web Dev',
      description: 'A high-conversion digital storefront interface managing state updates, local storage carts, and secure Stripe payment portal handshakes.',
      tech: ['React State', 'Vite', 'Stripe API', 'CSS Grid'],
      github: 'https://github.com/Sourav040505/apexui-storefront',
      live: '#',
      icon: <ShieldCheck className="text-emerald-400" size={16} />,
      metrics: { title: 'Security', value: 'Gateway Validation' }
    },
    {
      id: 'fossee-redesign',
      index: '04',
      title: 'FOSSEE_REDESIGN',
      level: 'Project 04',
      subtitle: 'Open-Source REDESIGN (IIT Bombay)',
      category: 'Web Dev',
      description: 'Refactored and redesigned the FOSSEE workshop web application at IIT Bombay. Applied responsive layouts, optimized asset loading, and contributed to Python-based controller routes.',
      tech: ['Python', 'Django', 'CSS Grid', 'Asset Optimization'],
      github: 'https://github.com/Sourav040505',
      live: '#',
      icon: <Layers className="text-purple-400" size={16} />,
      metrics: { title: 'Institution', value: 'IIT Bombay OpenSource' }
    },
    {
      id: 'dashboard',
      index: '05',
      title: 'EDTECH_DASHBOARD',
      level: 'Project 05',
      subtitle: 'Supabase Integration / User Portal',
      category: 'AI & ML',
      description: 'A persistent user analytics portal utilizing Supabase, featuring asynchronous query pooling, environment variable encryption, and mathematical budgeting engines.',
      tech: ['Supabase', 'Asynchronous DB', 'Environment Encryption', 'Budget Engine'],
      github: 'https://github.com/Sourav040505',
      live: '#',
      icon: <Database className="text-indigo-400" size={16} />,
      metrics: { title: 'DB Pool', value: 'Async Realtime' }
    },
    {
      id: 'ccrm',
      index: '06',
      title: 'CCRM_OOP_APP',
      level: 'Project 06',
      subtitle: 'Java Data Structures / Object Model',
      category: 'Software Systems',
      description: 'A desktop application applying clean object-oriented concepts like encapsulation, inheritance, and interface contracts. Built on optimized data structure implementations.',
      tech: ['Java', 'Object Oriented Design', 'Data Structures', 'Algorithms'],
      github: 'https://github.com/Sourav040505',
      live: '#',
      icon: <Code2 className="text-rose-400" size={16} />,
      metrics: { title: 'Design Pattern', value: 'OOP / SOLID' }
    }
  ];

  const filterOptions = ['All', 'Web Dev', 'AI & ML', 'Software Systems'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const toggleExpand = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section id="projects" className="py-32 px-6 bg-black relative border-y border-white/5">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 border-x border-white/5">
        
        {/* Info & Filters Pane */}
        <div className="lg:col-span-4 p-8 sm:p-12 lg:border-r border-white/5">
          <div className="sticky top-24 space-y-8">
            <div>
              <span className="text-[10px] font-mono tracking-[0.25em] text-indigo-400 uppercase">
                Catalog v2.4
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-4 font-sans">
                Interactive Directory
              </h2>
              <p className="text-gray-200 mt-4 text-xs leading-relaxed font-sans">
                A structured registry of software projects and open-source contributions. Use the filter filters below to query modules.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-col gap-2 font-mono text-[10px] tracking-wider">
              {filterOptions.map((filter) => (
                <button
                  key={filter}
                  onClick={() => {
                    setActiveFilter(filter);
                    // Automatically expand the first element of filtered list
                    const found = projects.find(p => filter === 'All' || p.category === filter);
                    if (found) setExpandedId(found.id);
                  }}
                  className={`w-full text-left px-4 py-2.5 transition-all flex items-center justify-between border ${
                    activeFilter === filter
                      ? 'bg-white text-black border-white font-bold'
                      : 'bg-transparent border-white/5 text-gray-500 hover:text-white hover:border-white/20'
                  }`}
                >
                  <span>{filter.toUpperCase()}</span>
                  <span>[ {projects.filter(p => filter === 'All' || p.category === filter).length} ]</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Expandable Directory List */}
        <div className="lg:col-span-8 border-t lg:border-t-0 border-white/5 divide-y divide-white/5">
          {filteredProjects.map((project) => {
            const isExpanded = expandedId === project.id;
            return (
              <div 
                key={project.id} 
                className={`transition-colors duration-200 ${
                  isExpanded ? 'bg-white/[0.01]' : 'hover:bg-white/[0.01]'
                }`}
              >
                {/* Row Header Trigger */}
                <button
                  onClick={() => toggleExpand(project.id)}
                  className="w-full text-left p-6 sm:p-8 flex items-center justify-between font-mono text-[11px] tracking-wider group focus:outline-none"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-gray-400 font-bold group-hover:text-indigo-400 transition-colors">
                      {project.index}
                    </span>
                    <span className="font-bold text-white group-hover:text-indigo-400 transition-colors text-xs sm:text-sm">
                      {project.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-6 text-gray-400">
                    <span className="hidden sm:inline-block text-[10px] uppercase font-semibold px-2 py-0.5 border border-white/10 bg-white/5">
                      {project.category}
                    </span>
                    <span className="hidden md:inline-block text-gray-400">
                      {project.level}
                    </span>
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>

                {/* Expanded Details Pane */}
                {isExpanded && (
                  <div className="px-6 sm:px-8 pb-8 pt-2 grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/5 animate-fade-in bg-black">
                    <div className="md:col-span-8 space-y-6">
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono tracking-widest text-indigo-400 uppercase">
                          {project.subtitle}
                        </span>
                        <p className="text-gray-100 text-xs sm:text-sm leading-relaxed font-sans">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.map((tag) => (
                          <span 
                            key={tag}
                            className="text-[10px] font-mono text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-4 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/5 pt-6 md:pt-0 md:pl-8 space-y-6">
                      {/* Specifications List */}
                      <div className="space-y-4 font-mono text-[10px]">
                        <div>
                          <span className="text-gray-400 uppercase block tracking-widest">METRIC_TYPE</span>
                          <span className="text-white block font-bold mt-0.5 uppercase">{project.metrics.title}</span>
                        </div>
                        <div>
                          <span className="text-gray-400 uppercase block tracking-widest">SPECIFICATION</span>
                          <span className="text-white block font-bold mt-0.5 uppercase">{project.metrics.value}</span>
                        </div>
                      </div>

                      {/* CTAs */}
                      <div className="flex items-center gap-3 font-mono text-[10px] tracking-wider pt-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 flex-grow py-3 border border-white/10 hover:border-white/20 text-white font-bold transition-all bg-white/5"
                        >
                          <Github size={12} />
                          <span>CODE</span>
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 flex-grow py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all"
                        >
                          <span>DEPLOY</span>
                          <ExternalLink size={10} />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

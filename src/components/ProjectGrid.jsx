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
      level: 'Level 1',
      subtitle: 'AI State Logic / Content Engine',
      category: 'AI & ML',
      description: 'Viral Short-Form Content Brainstormer built in a single weekend. Powered by AI state logic, version-controlled with GitHub Desktop, and shipped to Vercel.',
      tech: ['React', 'AI State Logic', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/Sourav040505/hookcraft-ai',
      live: 'https://hookcraft-ai.vercel.app',
      icon: <Zap className="text-amber-400" size={16} />,
      metrics: { title: 'Timeline', value: '48 Hours' }
    },
    {
      id: 'echo-chamber',
      index: '02',
      title: 'ECHO_CHAMBER',
      level: 'Level 1',
      subtitle: 'Chrome Extension / Utility',
      category: 'Web Dev',
      description: 'A full-featured browser extension designed to enhance user browsing experience. Implemented modular frontend architecture, event-driven programming, and direct DOM manipulation.',
      tech: ['JavaScript', 'Chrome Extension API', 'DOM API', 'Event Flow'],
      github: 'https://github.com/Sourav040505/Echo-Chamber-Extension',
      live: 'https://github.com/Sourav040505/Echo-Chamber-Extension',
      icon: <Chrome className="text-blue-400" size={16} />,
      metrics: { title: 'Platform', value: 'Chrome Web' }
    },
    {
      id: 'storefront',
      index: '03',
      title: 'SECURE_STOREFRONT',
      level: 'Level 2',
      subtitle: 'State Architecture / Stripe API',
      category: 'Web Dev',
      description: 'High-Conversion E-Commerce Interface handling complex state logic, local storage carts, and secure Stripe payment gateway parameters.',
      tech: ['React State', 'Vite', 'Stripe API', 'Tailwind CSS'],
      github: 'https://github.com/Sourav040505/apexui-storefront',
      live: '#',
      icon: <ShieldCheck className="text-emerald-400" size={16} />,
      metrics: { title: 'Security', value: 'Encrypted' }
    },
    {
      id: 'fossee-redesign',
      index: '04',
      title: 'FOSSEE_REDESIGN',
      level: 'Level 2',
      subtitle: 'IIT Bombay Open-Source',
      category: 'Web Dev',
      description: 'Redesigned and improved the FOSSEE workshop platform at IIT Bombay—a high-traffic educational web application. Applied advanced UI/UX principles, optimized structure, and optimized backend.',
      tech: ['Python', 'Django', 'HTML5/CSS3', 'UI Optimization'],
      github: 'https://github.com/Sourav040505',
      live: '#',
      icon: <Layers className="text-purple-400" size={16} />,
      metrics: { title: 'Origin', value: 'IIT Bombay' }
    },
    {
      id: 'dashboard',
      index: '05',
      title: 'EDTECH_DASHBOARD',
      level: 'Level 3',
      subtitle: 'Asynchronous DB / Realtime Analytics',
      category: 'AI & ML',
      description: 'Persistent user portal utilizing an asynchronous @supabase/supabase-js database integration, secure environment variables, and live budget calculation mathematics.',
      tech: ['Supabase', 'Asynchronous DB', 'Environment Encryption', 'Budget Engine'],
      github: 'https://github.com/Sourav040505',
      live: '#',
      icon: <Database className="text-indigo-400" size={16} />,
      metrics: { title: 'DB Queries', value: 'Async Realtime' }
    },
    {
      id: 'ccrm',
      index: '06',
      title: 'CCRM_OOP_APP',
      level: 'Level 3',
      subtitle: 'Java Algorithms / Object Model',
      category: 'Software Systems',
      description: 'Built a Java-based application applying core OOP principles including encapsulation, inheritance, and polymorphism. Practised clean data structures implementation and clean code architecture.',
      tech: ['Java', 'Object Oriented Design', 'Data Structures', 'Algorithms'],
      github: 'https://github.com/Sourav040505',
      live: '#',
      icon: <Code2 className="text-rose-400" size={16} />,
      metrics: { title: 'Design Pattern', value: 'OOP / Clean Code' }
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
              <p className="text-gray-400 mt-4 text-xs leading-relaxed font-sans">
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
                    <span className="text-gray-600 font-bold group-hover:text-indigo-400 transition-colors">
                      {project.index}
                    </span>
                    <span className="font-bold text-white group-hover:text-indigo-400 transition-colors text-xs sm:text-sm">
                      {project.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-6 text-gray-500">
                    <span className="hidden sm:inline-block text-[10px] uppercase font-semibold px-2 py-0.5 border border-white/5 bg-white/5">
                      {project.category}
                    </span>
                    <span className="hidden md:inline-block text-gray-600">
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
                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-sans">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.map((tag) => (
                          <span 
                            key={tag}
                            className="text-[10px] font-mono text-gray-500 bg-white/5 border border-white/5 px-2.5 py-1 rounded-sm"
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
                          <span className="text-gray-600 uppercase block tracking-widest">METRIC_TYPE</span>
                          <span className="text-white block font-bold mt-0.5 uppercase">{project.metrics.title}</span>
                        </div>
                        <div>
                          <span className="text-gray-600 uppercase block tracking-widest">SPECIFICATION</span>
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

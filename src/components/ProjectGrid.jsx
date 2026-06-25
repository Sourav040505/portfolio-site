import React, { useState } from 'react';
import { Github, ExternalLink, Star, ImageIcon } from 'lucide-react';
import { projects, filterOptions } from '../data/projects.js';
import CaseStudyModal from './CaseStudyModal';
import ScrollReveal from './ScrollReveal';

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [caseStudyProject, setCaseStudyProject] = useState(null);

  const filtered =
    activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="bg-[#080810] relative border-b border-white/5 scroll-mt-16 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
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
                Engineering artifacts — web apps, browser tools, AI integrations, and open-source work.
              </p>
            </div>

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
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, idx) => {
            const Icon = project.icon;
            return (
              <ScrollReveal key={project.id} delay={idx * 50}>
                <div
                  className="card-shine group flex flex-col border transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  style={{
                    background: project.accent,
                    borderColor: project.accentBorder,
                    borderRadius: '2px',
                  }}
                >
                  {/* Preview placeholder */}
                  <div
                    className="h-32 flex items-center justify-center border-b relative"
                    style={{
                      borderColor: project.accentBorder,
                      background: 'rgba(0,0,0,0.25)',
                    }}
                  >
                    {project.preview ? (
                      <img
                        src={project.preview}
                        alt={`${project.title} preview`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-2 text-gray-600">
                        <ImageIcon size={20} style={{ color: project.accentText, opacity: 0.5 }} />
                        <span className="text-[9px] font-mono tracking-widest uppercase">
                          Preview coming soon
                        </span>
                      </div>
                    )}
                    {project.flagship && (
                      <span
                        className="absolute top-3 right-3 flex items-center gap-1 text-[9px] font-mono tracking-widest uppercase px-2 py-1 border"
                        style={{
                          color: project.accentText,
                          borderColor: project.accentBorder,
                          background: 'rgba(0,0,0,0.5)',
                        }}
                      >
                        <Star size={9} />
                        Flagship
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col flex-grow p-6">
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className="p-2 border"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          borderColor: project.accentBorder,
                          color: project.accentText,
                        }}
                      >
                        <Icon size={18} />
                      </div>
                      <span
                        className="text-[9px] tracking-[0.2em] uppercase font-mono"
                        style={{ color: project.accentText }}
                      >
                        {project.category}
                      </span>
                    </div>

                    <div className="mb-3">
                      <span className="text-[10px] text-gray-500 font-mono tracking-wider block mb-1">
                        {project.subtitle}
                      </span>
                      <h3 className="text-lg font-bold text-white leading-tight">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-3 flex-grow">
                      {project.description}
                    </p>

                    {project.metrics?.length > 0 && (
                      <ul className="mb-4 space-y-1">
                        {project.metrics.map((m) => (
                          <li
                            key={m}
                            className="text-[10px] font-mono tracking-wide flex items-center gap-1.5"
                            style={{ color: project.accentText }}
                          >
                            <span className="w-1 h-1 rounded-full shrink-0" style={{ background: project.accentText }} />
                            {m}
                          </li>
                        ))}
                      </ul>
                    )}

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

                    <div
                      className="flex gap-2 pt-4 border-t mt-auto"
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
                      {project.live && (
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
                      )}
                      {project.caseStudy && (
                        <button
                          onClick={() => setCaseStudyProject(project)}
                          className={`flex items-center justify-center gap-1.5 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-200 hover:opacity-80 ${project.live ? 'px-3 border border-white/10 text-gray-400 hover:text-white' : 'flex-1'}`}
                          style={
                            project.live
                              ? {}
                              : { background: project.accentText, color: '#080810', fontWeight: 700 }
                          }
                        >
                          {project.live ? 'Study' : 'Case Study'}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {caseStudyProject && (
        <CaseStudyModal project={caseStudyProject} onClose={() => setCaseStudyProject(null)} />
      )}
    </section>
  );
}

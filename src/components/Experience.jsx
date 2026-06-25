import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { experiences } from '../data/experience.js';
import ScrollReveal from './ScrollReveal';

export default function Experience() {
  return (
    <section id="experience" className="bg-[#0a0a14] relative border-b border-white/5 scroll-mt-16 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-14">
            <span
              className="block mb-2 text-[10px] tracking-[0.3em] uppercase text-indigo-400"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              History
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              Experience
            </h2>
            <p className="mt-3 text-gray-400 text-sm max-w-lg leading-relaxed">
              Freelance ventures, community involvement, and entrepreneurship.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {experiences.map((exp, idx) => (
            <ScrollReveal key={idx} delay={idx * 60}>
              <div
                className="group p-7 border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col justify-between h-full"
                style={{ background: '#0f0f1a' }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="text-[9px] font-mono tracking-[0.2em] uppercase px-2 py-1 border"
                      style={{
                        color: exp.accentColor,
                        borderColor: exp.accentColor + '33',
                        background: exp.accentColor + '10',
                      }}
                    >
                      {exp.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1 leading-tight group-hover:text-indigo-300 transition-colors">
                    {exp.role}
                  </h3>
                  {exp.url ? (
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono mb-5 hover:underline"
                      style={{ color: exp.accentColor, opacity: 0.9 }}
                    >
                      {exp.company}
                      <ExternalLink size={10} />
                    </a>
                  ) : (
                    <p className="text-xs font-mono mb-5" style={{ color: exp.accentColor, opacity: 0.8 }}>
                      {exp.company}
                    </p>
                  )}

                  <ul className="space-y-3">
                    {exp.points.map((point, pIdx) => (
                      <li
                        key={pIdx}
                        className="flex items-start gap-2.5 text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors"
                      >
                        <span
                          className="w-1 h-1 rounded-full mt-2 shrink-0"
                          style={{ background: exp.accentColor }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex flex-col gap-1.5 font-mono text-[10px] text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={10} style={{ color: exp.accentColor }} />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={10} style={{ color: exp.accentColor }} />
                    {exp.location}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

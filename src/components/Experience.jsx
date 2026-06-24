import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      index: '01',
      role: 'DEVELOPER_&_RESEARCHER',
      company: 'SOFTWARE SYSTEMS LAB',
      period: 'AUG 2024 - PRESENT',
      location: 'BHOPAL, MP',
      points: [
        'Research and development focusing on software engineering principles, web development, and ML/AI models.',
        'Self-driven work spanning data structures, algorithms, full-stack web architectures, and machine learning implementations in active repositories.',
        'Co-founder, PRXSRV — early-stage technology venture demonstrating product thinking and rapid software delivery.'
      ],
      tag: 'RESEARCH & VENTURES'
    },
    {
      index: '02',
      role: 'GDGC_COMMUNITY_MEMBER',
      company: 'GOOGLE DEVELOPER GROUPS',
      period: 'DEC 2024 - MAY 2025',
      location: 'BHOPAL, MP',
      points: [
        'Participated in developer workshops and events centered around Google\'s web, cloud, and AI developer ecosystem.',
        'Collaborated with a peer community of engineers, strengthening communication and software engineering standards.'
      ],
      tag: 'COMMUNITY & DEV'
    },
    {
      index: '03',
      role: 'INNOVATION_&_ENTREPRENEURSHIP',
      company: 'E-CELL COMMUNITY',
      period: 'NOV 2024 - MAY 2025',
      location: 'BHOPAL, MP',
      points: [
        'Contributed to ideathons and startup-focused innovation challenges, developing product framing and problem-solving skills.',
        'Submitted project in Summer of Codefest\'25 Ideathon — Certificate of Participation awarded.'
      ],
      tag: 'ENTREPRENEURSHIP'
    }
  ];

  return (
    <section id="experience" className="bg-black relative border-b border-white/5 scroll-mt-16">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 border-x border-white/5">
        
        {/* Title Side Section */}
        <div className="lg:col-span-3 p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-white/5">
          <div className="sticky top-24 space-y-4">
            <span className="text-[10px] font-mono tracking-[0.25em] text-indigo-400 uppercase">
              Operational History
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans">
              Experience
            </h2>
            <p className="text-gray-400 text-xs leading-relaxed font-sans">
              A comprehensive chronicle of software engineering, tech leadership, and early-stage startup ventures.
            </p>
          </div>
        </div>

        {/* 3-Column Experience Grid */}
        <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
          {experiences.map((exp) => (
            <div 
              key={exp.index}
              className="p-8 sm:p-12 flex flex-col justify-between hover:bg-white/[0.01] transition-all duration-300 group"
            >
              <div>
                {/* Index / Tag */}
                <div className="flex items-center justify-between font-mono text-[10px] text-gray-500 mb-8 pb-4 border-b border-white/5">
                  <span>[ {exp.index} ]</span>
                  <span className="text-gray-600 group-hover:text-indigo-400 transition-colors">
                    {exp.tag}
                  </span>
                </div>

                {/* Role / Company */}
                <div className="space-y-2 mb-6">
                  <h3 className="text-base font-bold text-white tracking-tight font-sans group-hover:text-indigo-400 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-xs text-gray-400 font-mono tracking-wider">
                    {exp.company}
                  </p>
                </div>

                {/* Points */}
                <ul className="space-y-4">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="text-gray-500 text-xs leading-relaxed flex items-start gap-2.5 font-sans group-hover:text-gray-400 transition-colors">
                      <span className="w-1 h-1 rounded-full bg-indigo-500/60 mt-1.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer Meta */}
              <div className="mt-12 pt-4 border-t border-white/5 flex flex-col gap-2 font-mono text-[9px] text-gray-600">
                <div className="flex items-center gap-1.5">
                  <Calendar size={10} />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={10} />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

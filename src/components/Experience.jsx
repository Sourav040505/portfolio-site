import React from 'react';
import { Briefcase, Users, Lightbulb, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Student Developer & Researcher',
      company: 'Vellore Institute of Technology (VIT Bhopal)',
      period: 'Aug 2024 - Present',
      location: 'Bhopal, MP',
      icon: <Briefcase className="text-indigo-400" size={20} />,
      points: [
        'Pursuing B.Tech in Computer Science Engineering with focus on software engineering, web development, and AI/ML applications.',
        'Self-driven projects span data structures, algorithms, full-stack web development, and machine learning; applying concepts in real codebases.',
        'GPA: 8.5 | Co-founder, PRXSRV — early-stage tech venture demonstrating product thinking and entrepreneurial execution.'
      ],
      tag: 'Academic & Dev Lead'
    },
    {
      role: 'Tech Community Member',
      company: 'GDGC VIT Bhopal (Google Developer Groups)',
      period: 'Dec 2024 - May 2025',
      location: 'Bhopal, MP',
      icon: <Users className="text-purple-400" size={20} />,
      points: [
        'Participated in developer workshops and tech events centered on Google\'s web, cloud, and AI developer ecosystem.',
        'Collaborated with a peer community of engineers, strengthening communication and software engineering best practices.'
      ],
      tag: 'Community & Dev'
    },
    {
      role: 'Innovation & Entrepreneurship Member',
      company: 'E-Cell VIT Bhopal',
      period: 'Nov 2024 - May 2025',
      location: 'Bhopal, MP',
      icon: <Lightbulb className="text-amber-400" size={20} />,
      points: [
        'Contributed to ideathons and startup-focused innovation challenges, developing product framing and problem-solving skills.',
        'Submitted project in Summer of Codefest\'25 Ideathon — Certificate of Participation awarded.'
      ],
      tag: 'Entrepreneurship'
    }
  ];

  return (
    <section id="experience" className="py-32 px-6 bg-[#050507] relative overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[350px] h-[350px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-4 inline-block">
            Professional Timeline
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Experience & Leadership
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base">
            Track record of development, leadership within developer circles, and early-stage startup execution.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-[#1F1F29] ml-4 md:ml-32 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12 group">
              {/* Dot Icon Indicator */}
              <div className="absolute -left-[21px] top-1.5 flex items-center justify-center w-10 h-10 rounded-xl bg-[#0B0B0F] border border-[#1F1F29] group-hover:border-indigo-500/40 transition-all duration-300">
                {exp.icon}
              </div>

              {/* Time Label on Desktop */}
              <div className="hidden md:block absolute right-full mr-12 top-3 text-right">
                <div className="flex items-center gap-1 text-xs text-gray-500 font-semibold uppercase tracking-wider justify-end">
                  <Calendar size={12} />
                  <span>{exp.period}</span>
                </div>
                <div className="text-[11px] text-gray-600 mt-1 font-medium">{exp.location}</div>
              </div>

              {/* Card Container */}
              <div className="glass-card rounded-2xl p-6 md:p-8">
                {/* Mobile time label */}
                <div className="flex flex-col gap-1 md:hidden mb-4 border-b border-white/5 pb-4">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 font-bold uppercase tracking-wider">
                    <Calendar size={12} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="text-xs text-gray-500">{exp.location}</div>
                </div>

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-indigo-400 transition-colors">
                      {exp.role}
                    </h3>
                    <h4 className="text-sm font-semibold text-gray-400 mt-1">
                      {exp.company}
                    </h4>
                  </div>
                  <span className="self-start text-[10px] font-bold uppercase tracking-wider text-indigo-400 px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20">
                    {exp.tag}
                  </span>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3.5">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="text-gray-400 text-sm leading-relaxed flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

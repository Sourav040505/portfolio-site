import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'Developer & Researcher',
    company: 'Software Systems Lab',
    period: 'Aug 2024 – Present',
    location: 'Bhopal, MP',
    points: [
      'Independent R&D across full-stack web development, data structures & algorithms, and ML model implementations.',
      'Built and maintained active open-source repositories demonstrating product thinking and rapid software delivery.',
      'Co-founded PRXSRV — an early-stage tech venture focused on software tooling.',
    ],
    tag: 'Research & Ventures',
    accentColor: '#818cf8',
  },
  {
    role: 'Community Member',
    company: 'Google Developer Groups on Campus',
    period: 'Dec 2024 – May 2025',
    location: 'Bhopal, MP',
    points: [
      'Attended developer workshops and events centred on web, cloud, and developer tooling ecosystems.',
      'Collaborated with peer engineers, strengthening communication and collaborative engineering practices.',
    ],
    tag: 'Community & Dev',
    accentColor: '#34d399',
  },
  {
    role: 'Innovation & Entrepreneurship',
    company: 'E-Cell Community',
    period: 'Nov 2024 – May 2025',
    location: 'Bhopal, MP',
    points: [
      'Participated in ideathons and startup-focused challenges to develop product framing and problem-solving skills.',
      'Submitted project in Summer of Codefest\'25 Ideathon — Certificate of Participation awarded.',
    ],
    tag: 'Entrepreneurship',
    accentColor: '#f59e0b',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#0a0a14] relative border-b border-white/5 scroll-mt-16 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
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
            Engineering practice, community involvement, and early-stage startup ventures.
          </p>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group p-7 border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col justify-between"
              style={{ background: '#0f0f1a' }}
            >
              <div>
                {/* Tag */}
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

                {/* Role */}
                <h3
                  className="text-base font-bold text-white mb-1 leading-tight group-hover:text-indigo-300 transition-colors"
                >
                  {exp.role}
                </h3>
                <p
                  className="text-xs font-mono mb-5"
                  style={{ color: exp.accentColor, opacity: 0.8 }}
                >
                  {exp.company}
                </p>

                {/* Bullet points */}
                <ul className="space-y-3">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      <span
                        className="w-1 h-1 rounded-full mt-2 shrink-0"
                        style={{ background: exp.accentColor }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Meta footer */}
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
          ))}
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';

const education = [
  {
    institution: 'Vellore Institute of Technology',
    degree: 'B.Tech, Computer Science Engineering',
    timeline: '2024 – 2028',
    details:
      'Core focus on software engineering fundamentals, algorithm design, data structures, and applied machine learning.',
  },
  {
    institution: 'Coding Ninjas (IIT-M Partnered)',
    degree: 'Advanced DSA & Java — Training & Certification',
    timeline: 'Apr 2025 – Aug 2025',
    details:
      'IIT Madras–partnered intensive training on complex algorithmic problem solving and Java data structure internals.',
  },
];

const certifications = [
  {
    title: 'Applied Machine Learning in Python',
    issuer: 'Professional Course Certification',
    highlight: true,
  },
  {
    title: 'Data Analytics & Tech Simulation',
    issuer: 'Deloitte Australia / Forage',
    highlight: false,
  },
  {
    title: 'AI–ML Certification',
    issuer: 'Vityarthi / Vellore Institute of Technology',
    highlight: false,
  },
  {
    title: "Summer of Codefest '25",
    issuer: 'Ideathon — Certificate of Participation',
    highlight: false,
  },
  {
    title: 'Advanced DSA & Java',
    issuer: 'IIT-M Training Certification (Coding Ninjas — In Progress)',
    highlight: true,
  },
];

export default function Credentials() {
  return (
    <section id="education" className="bg-[#080810] relative border-b border-white/5 scroll-mt-16 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span
            className="block mb-2 text-[10px] tracking-[0.3em] uppercase text-indigo-400"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Verifications
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Credentials
          </h2>
          <p className="mt-3 text-gray-400 text-sm max-w-lg leading-relaxed">
            Academic background and professional certifications.
          </p>
        </div>

        {/* Two-column split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* Education column */}
          <div className="p-7 border border-white/5" style={{ background: '#0f0f1a' }}>
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-indigo-400 uppercase mb-6">
              <GraduationCap size={13} />
              Academic Record
            </div>
            <div className="space-y-7">
              {education.map((edu, idx) => (
                <div key={idx} className="group">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-1.5">
                    <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors leading-tight">
                      {edu.institution}
                    </h4>
                    <span
                      className="shrink-0 text-[9px] font-mono px-2 py-0.5 border border-white/10 text-gray-400"
                    >
                      {edu.timeline}
                    </span>
                  </div>
                  <p className="text-[11px] font-mono text-indigo-400 mb-2">
                    {edu.degree}
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {edu.details}
                  </p>
                  {idx < education.length - 1 && (
                    <div className="mt-6 border-t border-white/5" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications column */}
          <div className="p-7 border border-white/5" style={{ background: '#0f0f1a' }}>
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-purple-400 uppercase mb-6">
              <Award size={13} />
              Certifications
            </div>
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 group py-3 border-b border-white/5 last:border-b-0"
                >
                  <div
                    className="mt-0.5 shrink-0 p-1 border"
                    style={
                      cert.highlight
                        ? { background: 'rgba(99,102,241,0.1)', borderColor: 'rgba(99,102,241,0.2)', color: '#818cf8' }
                        : { background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)', color: '#6b7280' }
                    }
                  >
                    <CheckCircle2 size={11} />
                  </div>
                  <div>
                    <h4
                      className="text-xs font-bold leading-tight"
                      style={{ color: cert.highlight ? '#ffffff' : '#d1d5db' }}
                    >
                      {cert.title}
                    </h4>
                    <p className="text-[10px] font-mono text-gray-500 mt-0.5 tracking-wide">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

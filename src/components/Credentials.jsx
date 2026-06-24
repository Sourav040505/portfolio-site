import React from 'react';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';

export default function Credentials() {
  const education = [
    {
      institution: 'VELLORE INSTITUTE OF TECHNOLOGY',
      degree: 'B.TECH, COMPUTER SCIENCE ENGINEERING',
      timeline: '2024 – 2028',
      details: 'Focusing on core software engineering principles, algorithm design, data structures, and ML/AI architectures.'
    },
    {
      institution: 'CODING NINJAS (IIT-M PARTNERED)',
      degree: 'ADVANCED DSA & JAVA TRAINING',
      timeline: 'APR 2025 – AUG 2025',
      details: 'IIT-M Partnered Training & Internship Certification focusing on complex algorithmic problem solving.'
    }
  ];

  const certifications = [
    {
      title: 'APPLIED MACHINE LEARNING IN PYTHON',
      issuer: 'Certified Professional Course',
      highlight: true
    },
    {
      title: 'DATA ANALYTICS & TECH SIMULATION',
      issuer: 'Deloitte Australia / Forage',
      highlight: false
    },
    {
      title: 'AI-ML CERTIFICATION',
      issuer: 'Vityarthi / Vellore Institute of Technology',
      highlight: false
    },
    {
      title: 'SUMMER OF CODEFEST\'25',
      issuer: 'Ideathon Submission Round Certificate',
      highlight: false
    },
    {
      title: 'ADVANCED DSA & JAVA',
      issuer: 'IIT-M Training Certification (Coding Ninjas, In Progress)',
      highlight: true
    }
  ];

  return (
    <section id="education" className="bg-black relative border-b border-white/5 scroll-mt-16">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 border-x border-white/5">
        
        {/* Title Side Pane */}
        <div className="lg:col-span-3 p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-white/5">
          <div className="sticky top-24 space-y-4">
            <span className="text-[10px] font-mono tracking-[0.25em] text-indigo-400 uppercase">
              Verifications
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans">
              Credentials
            </h2>
            <p className="text-gray-400 text-xs leading-relaxed font-sans">
              Academic credentials and professional industry certifications verified on-chain.
            </p>
          </div>
        </div>

        {/* Modular Grid Panel splits */}
        <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-white/5">
          
          {/* Education list Column */}
          <div className="md:col-span-7 p-8 sm:p-12 space-y-8">
            <div className="flex items-center gap-2.5 font-mono text-[10px] tracking-wider text-gray-500 pb-4 border-b border-white/5">
              <GraduationCap size={14} className="text-indigo-400" />
              <span>ACADEMIC_RECORD // MODULE 01</span>
            </div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="group space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                    <h4 className="text-sm font-bold text-white tracking-tight group-hover:text-indigo-400 transition-colors">
                      {edu.institution}
                    </h4>
                    <span className="font-mono text-[9px] text-gray-600 bg-white/5 border border-white/5 px-2 py-0.5 self-start sm:self-auto">
                      {edu.timeline}
                    </span>
                  </div>
                  <p className="text-[11px] font-mono text-indigo-400 tracking-wider">
                    {edu.degree}
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-400 transition-colors">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications list Column */}
          <div className="md:col-span-5 p-8 sm:p-12 space-y-8">
            <div className="flex items-center gap-2.5 font-mono text-[10px] tracking-wider text-gray-500 pb-4 border-b border-white/5">
              <Award size={14} className="text-purple-400" />
              <span>VERIFIED_CREDENTIALS // MODULE 02</span>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div 
                  key={idx}
                  className={`flex items-start gap-3 group pt-3 first:pt-0 ${
                    idx !== 0 ? 'border-t border-white/[0.03]' : ''
                  }`}
                >
                  <div className={`p-1 mt-0.5 rounded-sm shrink-0 border ${
                    cert.highlight 
                      ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400' 
                      : 'bg-white/5 border-white/5 text-gray-600'
                  }`}>
                    <CheckCircle2 size={12} />
                  </div>
                  <div>
                    <h4 className={`text-xs font-bold leading-tight font-mono ${
                      cert.highlight ? 'text-white group-hover:text-indigo-400 transition-colors' : 'text-gray-300'
                    }`}>
                      {cert.title}
                    </h4>
                    <p className="text-[9px] text-gray-500 font-medium tracking-wider mt-0.5 uppercase">
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

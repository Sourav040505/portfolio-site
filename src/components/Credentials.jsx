import React from 'react';
import { GraduationCap, Award, CheckCircle2, BookOpen } from 'lucide-react';

export default function Credentials() {
  const education = [
    {
      institution: 'Vellore Institute of Technology (VIT Bhopal)',
      degree: 'B.Tech, Computer Science Engineering',
      timeline: '2024 – 2028',
      details: 'Focusing on core software engineering, data structures, algorithms, and AI/ML architectures.'
    },
    {
      institution: 'Coding Ninjas (IIT-M Partnered)',
      degree: 'Advanced DSA & Java Training',
      timeline: 'Apr 2025 – Aug 2025',
      details: 'IIT-M Training & Internship Certification focusing on complex algorithmic problem solving.'
    },
    {
      institution: 'SAI International School',
      degree: 'High School Diploma — Science (PCMB)',
      timeline: '2021 – 2023',
      details: 'Rigorous academic base focusing on Physics, Chemistry, Mathematics, and Biology.'
    }
  ];

  const certifications = [
    {
      title: 'Applied Machine Learning in Python',
      issuer: 'Certified Professional Course',
      highlight: true
    },
    {
      title: 'Data Analytics & Technology Job Simulation',
      issuer: 'Deloitte Australia / Forage',
      highlight: false
    },
    {
      title: 'AI-ML Certification',
      issuer: 'Vityarthi / Vellore Institute of Technology',
      highlight: false
    },
    {
      title: 'Summer of Codefest\'25',
      issuer: 'Ideathon Submission Round Certificate',
      highlight: false
    },
    {
      title: 'Advanced DSA & Java',
      issuer: 'IIT-M Training Certification (Coding Ninjas, In Progress)',
      highlight: true
    }
  ];

  return (
    <section id="education" className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Decorative Glow Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-4 inline-block">
            Verified Records
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Education & Certifications
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base">
            Academic pathways and technical credentials validating engineering competencies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Education Track */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-indigo-400">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Academic History</h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div 
                  key={idx}
                  className="glass-card rounded-2xl p-6 hover:border-indigo-500/20 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-base font-bold text-white tracking-tight">
                        {edu.institution}
                      </h4>
                      <p className="text-sm text-indigo-400 font-semibold mt-0.5">
                        {edu.degree}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-gray-500 bg-[#1F1F29]/60 px-3 py-1 rounded-md border border-[#1F1F29] self-start sm:self-auto">
                      {edu.timeline}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Track */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-500/10 border border-purple-500/20 rounded-lg text-purple-400">
                <Award size={20} />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Certifications & Achievements</h3>
            </div>

            <div className="glass-card rounded-2xl p-6 divide-y divide-white/5 space-y-4">
              {certifications.map((cert, idx) => (
                <div 
                  key={idx}
                  className={`pt-4 first:pt-0 flex items-start gap-4 ${
                    cert.highlight ? 'group' : ''
                  }`}
                >
                  <div className={`p-1.5 rounded-lg shrink-0 mt-0.5 ${
                    cert.highlight 
                      ? 'bg-indigo-500/15 text-indigo-400 border border-indigo-500/30' 
                      : 'bg-white/5 text-gray-500 border border-white/5'
                  }`}>
                    <CheckCircle2 size={14} />
                  </div>
                  <div>
                    <h4 className={`text-xs font-bold leading-tight ${
                      cert.highlight ? 'text-white group-hover:text-indigo-400 transition-colors' : 'text-gray-300'
                    }`}>
                      {cert.title}
                    </h4>
                    <p className="text-[10px] text-gray-500 mt-1 font-medium">
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

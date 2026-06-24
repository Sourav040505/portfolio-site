import React from 'react';
import { Cpu, GitBranch, Globe, Terminal, ArrowRight, Code2, Database } from 'lucide-react';

const categories = [
  {
    label: 'Frontend',
    icon: <Code2 size={16} className="text-indigo-400" />,
    accentColor: '#818cf8',
    items: ['React', 'Vite', 'Tailwind CSS', 'JavaScript (ES6+)', 'HTML5 / CSS3'],
  },
  {
    label: 'Backend & Databases',
    icon: <Database size={16} className="text-emerald-400" />,
    accentColor: '#34d399',
    items: ['Python', 'Django', 'REST APIs', 'Supabase', 'PostgreSQL', 'SQLite'],
  },
  {
    label: 'Languages & DSA',
    icon: <Cpu size={16} className="text-amber-400" />,
    accentColor: '#fbbf24',
    items: ['Java', 'C++', 'Python', 'Data Structures', 'Algorithms'],
  },
  {
    label: 'Tooling & Workflow',
    icon: <GitBranch size={16} className="text-purple-400" />,
    accentColor: '#a78bfa',
    items: ['Git', 'GitHub', 'VS Code', 'Linux / Terminal', 'ESLint', 'Prettier'],
  },
  {
    label: 'Deployment',
    icon: <Globe size={16} className="text-pink-400" />,
    accentColor: '#f472b6',
    items: ['Vercel', 'Netlify', 'CI/CD Pipelines', 'Edge CDN', 'Webhook Automation'],
  },
];

const workflow = [
  {
    step: '01',
    title: 'VS Code & Git',
    desc: 'Writing modular code, managing source directories, tracking micro-changes via terminal.',
    icon: <Terminal size={18} className="text-indigo-400" />,
  },
  {
    step: '02',
    title: 'GitHub',
    desc: 'Atomic commits, branch-based workflows, PR reviews, and codebase integrity management.',
    icon: <GitBranch size={18} className="text-purple-400" />,
  },
  {
    step: '03',
    title: 'Vercel / Netlify',
    desc: 'Build scripts, instant preview deployments, and global edge CDN delivery.',
    icon: <Globe size={18} className="text-pink-400" />,
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="bg-[#080810] relative border-b border-white/5 scroll-mt-16 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span
            className="block mb-2 text-[10px] tracking-[0.3em] uppercase text-indigo-400"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Toolkit
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Tech Stack
          </h2>
          <p className="mt-3 text-gray-400 text-sm max-w-lg leading-relaxed">
            Technologies and tools I work with day-to-day.
          </p>
        </div>

        {/* Skill category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-14">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="p-5 border border-white/5 hover:border-white/10 transition-all duration-200"
              style={{ background: '#0f0f1a' }}
            >
              <div className="flex items-center gap-2 mb-4">
                {cat.icon}
                <span
                  className="text-[10px] font-mono tracking-widest uppercase"
                  style={{ color: cat.accentColor }}
                >
                  {cat.label}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs text-gray-300 flex items-center gap-1.5"
                  >
                    <span
                      className="w-1 h-1 rounded-full shrink-0"
                      style={{ background: cat.accentColor, opacity: 0.6 }}
                    />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Workflow pipeline */}
        <div
          className="p-7 border border-white/5"
          style={{ background: '#0f0f1a' }}
        >
          <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-indigo-400 uppercase mb-6">
            <Terminal size={12} />
            Dev Workflow
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {workflow.map((w, idx) => (
              <div key={w.step} className="flex items-start gap-4">
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <div
                    className="p-2 border"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      borderColor: 'rgba(255,255,255,0.08)',
                    }}
                  >
                    {w.icon}
                  </div>
                  {idx < workflow.length - 1 && (
                    <div className="hidden sm:block">
                      <ArrowRight size={12} className="text-indigo-500/40" />
                    </div>
                  )}
                </div>
                <div>
                  <span className="text-[9px] font-mono text-gray-600 tracking-widest block mb-0.5">
                    STAGE {w.step}
                  </span>
                  <h4 className="text-sm font-bold text-white mb-1">{w.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

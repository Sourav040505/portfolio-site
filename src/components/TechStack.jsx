import React from 'react';
import { Cpu, GitCompare, Globe, Terminal, Sparkles, Workflow } from 'lucide-react';

export default function TechStack() {
  const tools = [
    {
      name: 'Google Antigravity',
      role: 'Agent Orchestration',
      description: 'Design and execute multi-agent operations. Harnessing autonomous cognitive units to coordinate codebase analysis, system architecture design, and complex debugging cycles.',
      metrics: 'Agent Coherence: 99.8%',
      icon: <Cpu className="text-indigo-400" size={28} />,
      badge: 'Cognitive Engine'
    },
    {
      name: 'GitHub Desktop',
      role: 'Delta Auditing',
      description: 'Streamlining version-controlled commits with clear, atomic visual diff structures. Providing safe rollbacks and clean team sync operations for distributed agent modules.',
      metrics: 'Zero Git Conflicts',
      icon: <GitCompare className="text-purple-400" size={28} />,
      badge: 'Integrity Auditing'
    },
    {
      name: 'Vercel & Netlify',
      role: 'Continuous Deployment',
      description: 'Automating build pipelines to push instant previews, global edge routing, and optimized static rendering directly from workspace commits to public URLs.',
      metrics: 'Time to Live: <30s',
      icon: <Globe className="text-pink-400" size={28} />,
      badge: 'Edge Hosting'
    }
  ];

  return (
    <section id="stack" className="py-32 px-6 bg-[#050507] relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Workflow size={12} className="animate-spin" />
            <span>Workflow Engine</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            The AI-Augmented Stack
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-base">
            Moving beyond basic languages. Presenting the orchestrators and platforms powering 5x velocity engineering.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <div 
              key={tool.name}
              className="glass-card rounded-2xl p-8 flex flex-col justify-between group hover:border-indigo-500/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-indigo-500/0 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-8">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:border-indigo-500/30 transition-all">
                    {tool.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 px-2.5 py-1 rounded-md bg-[#1F1F29]/80 border border-[#1f1f29]">
                    {tool.badge}
                  </span>
                </div>

                {/* Role / Meta */}
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                  {tool.role}
                </span>

                {/* Name */}
                <h3 className="text-2xl font-bold text-white mt-1 mb-4 tracking-tight">
                  {tool.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {tool.description}
                </p>
              </div>

              {/* Footer Metric bar */}
              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                  Engine Status
                </span>
                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {tool.metrics}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Core Architecture Concept Card */}
        <div className="mt-16 glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden bg-gradient-to-r from-[#0B0B0F] to-[#050507]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="max-w-2xl">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                Autonomous Delivery Philosophy
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Rather than writing manual, repetitive code templates, I orchestrate specialized agents running in virtual sandboxes. They execute, verify, compile, and audit software components autonomously, which ensures pristine, bug-free production deploys.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Terminal className="text-indigo-400" size={20} />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Continuous Deployment</div>
                <div className="text-xs text-gray-500">Auto-verification active</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Cpu, GitCompare, Globe, Terminal, ArrowRight } from 'lucide-react';

export default function TechStack() {
  const steps = [
    {
      index: '01',
      name: 'Google Antigravity',
      role: 'AGENT ORCHESTRATION',
      icon: <Cpu className="text-indigo-400" size={20} />,
      metrics: [
        'MODEL: AGY.OS v4.1',
        'VERIFIED COHERENCE: 99.8%',
        'TICK LATENCY: 42MS'
      ],
      description: 'Coordinates workspace audits, structural redesign logic, and autonomous codebase edits in sandboxed containers.'
    },
    {
      index: '02',
      name: 'GitHub Desktop',
      role: 'DELTA INTEGRITY',
      icon: <GitCompare className="text-purple-400" size={20} />,
      metrics: [
        'BRANCH: MAIN // HEAD',
        'DELTA SCAN: CLEAN',
        'AUDITOR: SYSTEM.ACTIVE'
      ],
      description: 'Reviews code diffs line-by-line, runs code lint analysis, and manages version history with structured commits.'
    },
    {
      index: '03',
      name: 'Vercel / Netlify',
      role: 'CD EDGE ROUTING',
      icon: <Globe className="text-pink-400" size={20} />,
      metrics: [
        'EDGE NET: GLOBAL',
        'TIME_TO_LIVE: <30s',
        'BUILD STATE: SUCCESS'
      ],
      description: 'Deploys static build outputs, configures CDN networks, and exposes preview URL pipelines directly on push.'
    }
  ];

  return (
    <section id="stack" className="bg-black relative border-b border-white/5 scroll-mt-16">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 border-x border-white/5">
        
        {/* Title Side Pane */}
        <div className="lg:col-span-3 p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-white/5">
          <div className="sticky top-24 space-y-4">
            <span className="text-[10px] font-mono tracking-[0.25em] text-indigo-400 uppercase">
              Pipeline Integration
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans">
              AI Stack
            </h2>
            <p className="text-gray-400 text-xs leading-relaxed font-sans">
              Flow chart of automated agent orchestration, auditing, and continuous edge compilation.
            </p>
          </div>
        </div>

        {/* Pipeline Nodes Flow */}
        <div className="lg:col-span-9 p-8 sm:p-12 space-y-8 flex flex-col justify-center">
          
          <div className="flex items-center gap-2.5 font-mono text-[10px] tracking-wider text-gray-500 pb-4 border-b border-white/5">
            <Terminal size={14} className="text-indigo-400" />
            <span>PIPELINE_ORCHESTRATION // WORKFLOW STAGES</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {steps.map((step, idx) => (
              <div 
                key={step.index} 
                className="relative bg-[#050508]/60 border border-white/5 p-6 flex flex-col justify-between hover:border-indigo-500/20 transition-all duration-300 group rounded-md"
              >
                {/* Connector arrow for desktop (skip for last item) */}
                {idx < 2 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-6 -translate-y-1/2 z-20 items-center justify-center w-4 h-8 text-indigo-500/50">
                    <ArrowRight size={16} />
                  </div>
                )}

                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between font-mono text-[9px] text-gray-600 mb-6">
                    <span>[ STAGE {step.index} ]</span>
                    <span className="text-indigo-400/80 font-bold">{step.role}</span>
                  </div>

                  {/* Header Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-white/5 border border-white/5 text-white rounded-md">
                      {step.icon}
                    </div>
                    <h3 className="text-base font-bold text-white font-sans group-hover:text-indigo-400 transition-colors">
                      {step.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-[11px] leading-relaxed mb-6 font-sans">
                    {step.description}
                  </p>
                </div>

                {/* Telemetry Block */}
                <div className="pt-4 border-t border-white/[0.04] font-mono text-[9px] text-gray-500 space-y-1.5 bg-black/40 p-3 rounded border border-white/[0.02]">
                  {step.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="flex justify-between">
                      <span className="text-gray-600">{metric.split(':')[0]}</span>
                      <span className="text-gray-300 font-bold">{metric.split(':')[1]}</span>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>

          {/* Delivery Note */}
          <div className="border border-white/5 rounded-md p-6 bg-white/[0.01] font-mono text-[10px] text-gray-500 leading-relaxed">
            <span className="text-indigo-400 font-bold block mb-1">AUTOMATED WORKSPACE DELIVERY</span>
            This entire setup is built by orchestrating Google Antigravity agents running within a secure Mac/zsh terminal sandbox. Standardized file writes, post-install dependency trees, and linter validation runs are fully automated.
          </div>

        </div>

      </div>
    </section>
  );
}

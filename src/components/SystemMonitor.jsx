import React from 'react';
import { Radio, Disc, Volume2, Terminal, Activity } from 'lucide-react';

export default function SystemMonitor() {
  return (
    <section id="monitor" className="bg-black relative border-b border-white/10 scroll-mt-16">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 border-x border-white/10">
        
        {/* Title Side Pane */}
        <div className="lg:col-span-3 p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-white/10">
          <div className="sticky top-24 space-y-4">
            <span className="text-[10px] font-mono tracking-[0.25em] text-indigo-400 uppercase">
              Telemetry
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans">
              Monitor
            </h2>
            <p className="text-gray-200 text-xs leading-relaxed font-sans">
              Real-time feed of current software projects in development and auditory focus tracks.
            </p>
          </div>
        </div>

        {/* System Monitor Panels */}
        <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          {/* Currently Working On */}
          <div className="md:col-span-7 p-8 sm:p-12 space-y-8">
            <div className="flex items-center gap-2.5 font-mono text-[10px] tracking-wider text-gray-400 pb-4 border-b border-white/10">
              <Terminal size={14} className="text-indigo-400" />
              <span>ACTIVE_REPOS // FOCUS_PROJECT</span>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                  <h4 className="text-base font-bold text-white font-mono uppercase tracking-wider">
                    FOSSEE_WANTED_REFACTOR
                  </h4>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-sans">
                  Optimizing Django-based Django workshop controllers at IIT Bombay. Refactoring routing trees to speed up database query responses by up to 40% and designing high-fidelity mobile-responsive UI interfaces.
                </p>
              </div>

              {/* Status Spec */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/[0.04] font-mono text-[10px] text-gray-400">
                <div>
                  <span className="text-gray-600 block uppercase tracking-wider">BRANCH_FLOW</span>
                  <span className="text-white font-bold block mt-0.5">DEV_OPTIMIZATION</span>
                </div>
                <div>
                  <span className="text-gray-600 block uppercase tracking-wider">TARGET_DEPL</span>
                  <span className="text-indigo-400 font-bold block mt-0.5">STAGING // Q3 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Spotify Now Playing Widget */}
          <div className="md:col-span-5 p-8 sm:p-12 space-y-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 font-mono text-[10px] tracking-wider text-gray-400 pb-4 border-b border-white/10">
                <Radio size={14} className="text-emerald-400 animate-pulse" />
                <span>SPOTIFY // NOW_PLAYING</span>
              </div>

              {/* Player Body */}
              <div className="mt-8 flex items-center gap-4 bg-white/[0.02] border border-white/10 p-4 rounded-md relative overflow-hidden group hover:border-emerald-500/20 transition-all">
                <div className="relative w-16 h-16 shrink-0 bg-[#121216] border border-white/10 rounded flex items-center justify-center overflow-hidden">
                  <Disc size={28} className="text-emerald-400 animate-[spin_6s_linear_infinite]" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent pointer-events-none" />
                </div>
                
                <div className="overflow-hidden">
                  <span className="text-[9px] font-mono text-emerald-400 font-bold tracking-widest uppercase block mb-1">
                    STREAMING
                  </span>
                  <h4 className="text-sm font-bold text-white tracking-tight truncate">
                    Resonance
                  </h4>
                  <p className="text-xs text-gray-400 truncate mt-0.5">
                    HOME — Synthwave Essentials
                  </p>
                </div>

                {/* Small audio bars animation */}
                <div className="absolute right-4 bottom-4 flex items-end gap-0.5 h-6">
                  <span className="w-1 bg-emerald-400/80 animate-[bounce_1.2s_infinite_ease-in-out_0.2s] h-4" />
                  <span className="w-1 bg-emerald-400/80 animate-[bounce_1.0s_infinite_ease-in-out_0.4s] h-5" />
                  <span className="w-1 bg-emerald-400/80 animate-[bounce_1.4s_infinite_ease-in-out_0.1s] h-3" />
                  <span className="w-1 bg-emerald-400/80 animate-[bounce_1.1s_infinite_ease-in-out_0.3s] h-5" />
                </div>
              </div>
            </div>

            {/* Listening Specs */}
            <div className="pt-6 border-t border-white/[0.04] flex items-center justify-between font-mono text-[9px] text-gray-500">
              <span className="flex items-center gap-1.5">
                <Volume2 size={12} className="text-emerald-400" />
                <span>BITRATE: 320 KBPS</span>
              </span>
              <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                <Activity size={10} className="animate-pulse" />
                <span>SYNCHRONIZED</span>
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { Terminal, Music, ExternalLink, Disc } from 'lucide-react';

/**
 * SystemMonitor — two panels:
 *   Left: "Currently Working On" — active project card
 *   Right: Spotify-style "Now Playing" widget with animated audio bars
 */
export default function SystemMonitor() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
          timeZone: 'Asia/Kolkata',
        }) + ' IST'
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="monitor"
      className="bg-[#0a0a14] relative border-b border-white/5 scroll-mt-16 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span
            className="block mb-2 text-[10px] tracking-[0.3em] uppercase text-emerald-400"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Live Feed
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Now
          </h2>
          <p className="mt-3 text-gray-400 text-sm max-w-lg leading-relaxed">
            What I'm actively building and listening to.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* ── Currently Working On ────────────────────────────────── */}
          <div
            className="p-7 border border-white/5 hover:border-indigo-500/20 transition-all duration-300"
            style={{ background: '#0f0f1a' }}
          >
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-indigo-400 uppercase mb-6">
              <Terminal size={12} />
              Currently Working On
              <span className="ml-auto text-gray-600 text-[9px]">{time}</span>
            </div>

            {/* Active project */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                <h3 className="text-base font-bold text-white tracking-tight">
                  FOSSEE Workshop Refactor
                </h3>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed">
                Optimising Django-based workshop controllers at IIT Bombay — refactoring routing logic to reduce database query times and building a fully responsive mobile UI.
              </p>

              {/* Specs grid */}
              <div
                className="grid grid-cols-2 gap-3 p-4 border border-white/5 font-mono text-[10px] mt-2"
                style={{ background: 'rgba(255,255,255,0.015)' }}
              >
                <div>
                  <span className="text-gray-600 block tracking-wider uppercase mb-0.5">Stack</span>
                  <span className="text-white font-bold">Django · Python · CSS</span>
                </div>
                <div>
                  <span className="text-gray-600 block tracking-wider uppercase mb-0.5">Status</span>
                  <span className="text-indigo-400 font-bold">Active · Q3 2026</span>
                </div>
                <div>
                  <span className="text-gray-600 block tracking-wider uppercase mb-0.5">Scope</span>
                  <span className="text-white font-bold">Performance + UI</span>
                </div>
                <div>
                  <span className="text-gray-600 block tracking-wider uppercase mb-0.5">Target</span>
                  <span className="text-emerald-400 font-bold">40% faster queries</span>
                </div>
              </div>

              <a
                href="https://github.com/Sourav040505"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-mono text-gray-500 hover:text-indigo-400 transition-colors"
              >
                View on GitHub
                <ExternalLink size={10} />
              </a>
            </div>
          </div>

          {/* ── Spotify Now Playing ──────────────────────────────────── */}
          <div
            className="p-7 border border-white/5 hover:border-emerald-500/20 transition-all duration-300 flex flex-col"
            style={{ background: '#0f0f1a' }}
          >
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-emerald-400 uppercase mb-6">
              <Music size={12} className="animate-pulse" />
              Spotify — Now Playing
            </div>

            {/* Player card */}
            <div
              className="flex items-center gap-5 p-5 border border-emerald-500/10 relative overflow-hidden flex-grow"
              style={{ background: 'rgba(16,185,129,0.04)' }}
            >
              {/* Album art / disc */}
              <div className="relative w-20 h-20 shrink-0 flex items-center justify-center border border-white/10 rounded-full overflow-hidden"
                style={{ background: '#121218' }}>
                <Disc
                  size={36}
                  className="text-emerald-400"
                  style={{ animation: 'spin 6s linear infinite' }}
                />
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle at 40% 40%, rgba(16,185,129,0.15), transparent 70%)',
                  }}
                />
              </div>

              {/* Track info */}
              <div className="overflow-hidden flex-grow">
                <span className="text-[9px] font-mono text-emerald-400 font-bold tracking-widest uppercase block mb-1">
                  ♫ STREAMING
                </span>
                <h4 className="text-lg font-bold text-white truncate leading-tight">
                  Resonance
                </h4>
                <p className="text-sm text-gray-400 truncate mt-0.5">
                  HOME — Synthwave Essentials
                </p>

                {/* Progress bar */}
                <div className="mt-3 h-0.5 w-full bg-white/5 relative overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 bg-emerald-400"
                    style={{ width: '52%', transition: 'none' }}
                  />
                </div>
                <div className="flex justify-between font-mono text-[9px] text-gray-600 mt-1">
                  <span>1:23</span>
                  <span>2:40</span>
                </div>
              </div>

              {/* Audio bars — right side */}
              <div className="flex items-end gap-0.5 h-10 shrink-0">
                <span className="w-1 rounded-sm bg-emerald-400 audio-bar-1" style={{ minHeight: 4 }} />
                <span className="w-1 rounded-sm bg-emerald-400 audio-bar-2" style={{ minHeight: 4 }} />
                <span className="w-1 rounded-sm bg-emerald-400 audio-bar-3" style={{ minHeight: 4 }} />
                <span className="w-1 rounded-sm bg-emerald-400 audio-bar-4" style={{ minHeight: 4 }} />
              </div>
            </div>

            {/* Footer note */}
            <p className="mt-4 text-[10px] font-mono text-gray-600 leading-relaxed">
              Live Spotify integration coming soon — connect via{' '}
              <a
                href="https://spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline"
              >
                Spotify API
              </a>
              .
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

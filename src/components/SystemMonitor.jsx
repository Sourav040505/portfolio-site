import React, { useState, useEffect, useCallback } from 'react';
import { Terminal, ExternalLink, Disc, Music2 } from 'lucide-react';

export default function SystemMonitor() {
  const [time, setTime] = useState('');
  const [spotify, setSpotify] = useState(null);
  const [loading, setLoading] = useState(true);

  // Live clock IST
  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString('en-IN', {
          hour: '2-digit', minute: '2-digit', second: '2-digit',
          hour12: false, timeZone: 'Asia/Kolkata',
        }) + ' IST'
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Poll /api/now-playing every 30s
  const poll = useCallback(async () => {
    try {
      const res = await fetch('/api/now-playing');
      if (!res.ok) throw new Error('API error');
      const data = await res.json();
      setSpotify(data);
    } catch (e) {
      console.error('Spotify fetch error:', e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    poll();
    const id = setInterval(poll, 30_000);
    return () => clearInterval(id);
  }, [poll]);

  const progressPct =
    spotify?.track?.duration
      ? Math.min((spotify.track.progress / spotify.track.duration) * 100, 100)
      : 0;

  const formatMs = (ms) => {
    if (!ms) return '0:00';
    const s = Math.floor(ms / 1000);
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  };

  return (
    <section id="monitor" className="bg-[#0a0a14] relative border-b border-white/5 scroll-mt-16 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="block mb-2 text-[10px] tracking-[0.3em] uppercase text-emerald-400"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Live Feed
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">Now</h2>
          <p className="mt-3 text-gray-400 text-sm max-w-lg leading-relaxed">
            What I'm actively building and listening to.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* Currently Working On */}
          <div className="p-7 border border-white/5 hover:border-indigo-500/20 transition-all duration-300"
            style={{ background: '#0f0f1a' }}>
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-indigo-400 uppercase mb-6">
              <Terminal size={12} />
              Currently Working On
              <span className="ml-auto text-gray-600 text-[9px]">{time}</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                <h3 className="text-base font-bold text-white tracking-tight">FOSSEE Workshop Refactor</h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Optimising Django-based workshop controllers at IIT Bombay — refactoring routing
                logic to reduce database query times and building a fully responsive mobile UI.
              </p>
              <div className="grid grid-cols-2 gap-3 p-4 border border-white/5 font-mono text-[10px] mt-2"
                style={{ background: 'rgba(255,255,255,0.015)' }}>
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
              <a href="https://github.com/Sourav040505" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-mono text-gray-500 hover:text-indigo-400 transition-colors">
                View on GitHub <ExternalLink size={10} />
              </a>
            </div>
          </div>

          {/* Spotify Now Playing */}
          <div className="p-7 border border-white/5 hover:border-emerald-500/20 transition-all duration-300 flex flex-col gap-5"
            style={{ background: '#0f0f1a' }}>
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-emerald-400 uppercase">
              <Music2 size={12} />
              Spotify
              {spotify?.isPlaying && (
                <span className="ml-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-emerald-400">Live</span>
                </span>
              )}
              {!spotify?.isPlaying && !loading && spotify?.track && (
                <span className="ml-1 text-gray-600">Recently Played</span>
              )}
            </div>

            {loading ? (
              <div className="flex-grow flex items-center justify-center py-10">
                <div className="w-6 h-6 border-2 border-emerald-500/30 border-t-emerald-400 rounded-full animate-spin" />
              </div>
            ) : spotify?.track ? (
              <>
                {/* Player card */}
                <a href={spotify.track.spotifyUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-emerald-500/10 hover:border-emerald-500/30 transition-all relative overflow-hidden"
                  style={{ background: 'rgba(16,185,129,0.04)' }}>

                  {/* Album art */}
                  <div className="relative w-16 h-16 shrink-0 overflow-hidden">
                    {spotify.track.albumArt ? (
                      <img src={spotify.track.albumArt} alt={spotify.track.album}
                        className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-[#121218] flex items-center justify-center border border-white/10">
                        <Disc size={24} className="text-emerald-400"
                          style={{ animation: spotify.isPlaying ? 'spin 6s linear infinite' : 'none' }} />
                      </div>
                    )}
                  </div>

                  {/* Track info */}
                  <div className="flex-grow overflow-hidden">
                    <span className="text-[9px] font-mono text-emerald-400 font-bold tracking-widest uppercase block mb-0.5">
                      {spotify.isPlaying ? '♫ NOW PLAYING' : '♫ LAST PLAYED'}
                    </span>
                    <h4 className="text-sm font-bold text-white truncate">{spotify.track.title}</h4>
                    <p className="text-xs text-gray-400 truncate mt-0.5">{spotify.track.artist}</p>
                    <p className="text-[10px] text-gray-600 truncate mt-0.5 font-mono">{spotify.track.album}</p>
                  </div>

                  {/* Audio bars */}
                  <div className="flex items-end gap-0.5 h-8 shrink-0">
                    {spotify.isPlaying ? (
                      <>
                        <span className="w-1 rounded-sm bg-emerald-400 audio-bar-1" style={{ minHeight: 4 }} />
                        <span className="w-1 rounded-sm bg-emerald-400 audio-bar-2" style={{ minHeight: 4 }} />
                        <span className="w-1 rounded-sm bg-emerald-400 audio-bar-3" style={{ minHeight: 4 }} />
                        <span className="w-1 rounded-sm bg-emerald-400 audio-bar-4" style={{ minHeight: 4 }} />
                      </>
                    ) : (
                      <>
                        <span className="w-1 rounded-sm bg-gray-700" style={{ height: 8 }} />
                        <span className="w-1 rounded-sm bg-gray-700" style={{ height: 14 }} />
                        <span className="w-1 rounded-sm bg-gray-700" style={{ height: 6 }} />
                        <span className="w-1 rounded-sm bg-gray-700" style={{ height: 12 }} />
                      </>
                    )}
                  </div>
                </a>

                {/* Progress bar */}
                {spotify.track.duration > 0 && (
                  <div>
                    <div className="h-0.5 w-full bg-white/5 relative overflow-hidden">
                      <div className="absolute inset-y-0 left-0 bg-emerald-400 transition-all duration-1000"
                        style={{ width: `${progressPct}%` }} />
                    </div>
                    <div className="flex justify-between font-mono text-[9px] text-gray-600 mt-1">
                      <span>{formatMs(spotify.track.progress)}</span>
                      <span>{formatMs(spotify.track.duration)}</span>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="flex-grow flex items-center justify-center py-10 text-gray-600 font-mono text-xs">
                Nothing playing right now.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

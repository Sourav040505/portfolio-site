import React, { useState, useEffect } from 'react';
import { Terminal, Music, ExternalLink, Disc, GitCommit, Palette } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const GITHUB_USER = 'Sourav040505';

function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

export default function SystemMonitor() {
  const [time, setTime] = useState('');
  const [events, setEvents] = useState([]);
  const [githubLoading, setGithubLoading] = useState(true);
  const [spotify, setSpotify] = useState(null);
  const [spotifyConnected, setSpotifyConnected] = useState(false);

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

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USER}/events/public?per_page=5`)
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setEvents(
            data
              .filter((e) => e.type === 'PushEvent' || e.type === 'CreateEvent')
              .slice(0, 4)
          );
        }
      })
      .catch(() => {})
      .finally(() => setGithubLoading(false));
  }, []);

  useEffect(() => {
    fetch('/api/spotify-now-playing')
      .then((r) => {
        if (!r.ok) throw new Error('not connected');
        return r.json();
      })
      .then((data) => {
        if (data?.isPlaying !== undefined) {
          setSpotify(data);
          setSpotifyConnected(true);
        }
      })
      .catch(() => setSpotifyConnected(false));
  }, []);

  return (
    <section
      id="monitor"
      className="bg-[#0a0a14] relative border-b border-white/5 scroll-mt-16 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
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
              GitHub activity, creative learning, and what I'm listening to.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* GitHub activity */}
          <ScrollReveal delay={0} className="lg:col-span-1">
            <div
              className="p-7 border border-white/5 hover:border-indigo-500/20 transition-all duration-300 h-full"
              style={{ background: '#0f0f1a' }}
            >
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-indigo-400 uppercase mb-6">
                <Terminal size={12} />
                GitHub Activity
                <span className="ml-auto text-gray-600 text-[9px]">{time}</span>
              </div>

              {githubLoading ? (
                <p className="text-sm text-gray-600 font-mono">Loading events...</p>
              ) : events.length === 0 ? (
                <p className="text-sm text-gray-600 font-mono">No recent public events.</p>
              ) : (
                <ul className="space-y-3">
                  {events.map((ev) => {
                    const repo = ev.repo?.name?.replace(`${GITHUB_USER}/`, '') ?? 'repo';
                    const msg =
                      ev.type === 'PushEvent'
                        ? ev.payload?.commits?.[0]?.message?.slice(0, 60) ?? 'Push'
                        : ev.type === 'CreateEvent'
                          ? `Created ${ev.payload?.ref_type}`
                          : ev.type;
                    return (
                      <li key={ev.id} className="flex items-start gap-2.5">
                        <GitCommit size={12} className="text-indigo-400 mt-0.5 shrink-0" />
                        <div className="min-w-0">
                          <span className="text-xs font-bold text-white block truncate">
                            {repo}
                          </span>
                          <span className="text-[10px] text-gray-500 font-mono block truncate">
                            {msg}
                          </span>
                          <span className="text-[9px] text-gray-600 font-mono">
                            {timeAgo(ev.created_at)}
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}

              <a
                href={`https://github.com/${GITHUB_USER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-mono text-gray-500 hover:text-indigo-400 transition-colors mt-5"
              >
                View GitHub
                <ExternalLink size={10} />
              </a>
            </div>
          </ScrollReveal>

          {/* Creative / Krita */}
          <ScrollReveal delay={60} className="lg:col-span-1">
            <div
              className="p-7 border border-white/5 hover:border-purple-500/20 transition-all duration-300 h-full"
              style={{ background: '#0f0f1a' }}
            >
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-purple-400 uppercase mb-6">
                <Palette size={12} />
                Also Learning
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                  <h3 className="text-base font-bold text-white tracking-tight">
                    2D Digital Art & Animation
                  </h3>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed">
                  Exploring sketches, frame-by-frame animation, and digital painting in Krita with a Huion pen tablet — a creative side alongside engineering.
                </p>

                <div
                  className="grid grid-cols-2 gap-3 p-4 border border-white/5 font-mono text-[10px]"
                  style={{ background: 'rgba(255,255,255,0.015)' }}
                >
                  <div>
                    <span className="text-gray-600 block tracking-wider uppercase mb-0.5">Tools</span>
                    <span className="text-white font-bold">Krita · Huion</span>
                  </div>
                  <div>
                    <span className="text-gray-600 block tracking-wider uppercase mb-0.5">Focus</span>
                    <span className="text-purple-400 font-bold">Art · Animation</span>
                  </div>
                  <div>
                    <span className="text-gray-600 block tracking-wider uppercase mb-0.5">Status</span>
                    <span className="text-white font-bold">Learning · Fun</span>
                  </div>
                  <div>
                    <span className="text-gray-600 block tracking-wider uppercase mb-0.5">Gallery</span>
                    <span className="text-gray-500 font-bold">Coming soon</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Spotify */}
          <ScrollReveal delay={120} className="lg:col-span-1">
            <div
              className="p-7 border border-white/5 hover:border-emerald-500/20 transition-all duration-300 flex flex-col h-full"
              style={{ background: '#0f0f1a' }}
            >
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-emerald-400 uppercase mb-6">
                <Music size={12} className={spotifyConnected ? 'animate-pulse' : ''} />
                Spotify — Now Playing
              </div>

              <div
                className="flex items-center gap-5 p-5 border border-emerald-500/10 relative overflow-hidden flex-grow"
                style={{ background: 'rgba(16,185,129,0.04)' }}
              >
                <div
                  className="relative w-20 h-20 shrink-0 flex items-center justify-center border border-white/10 rounded-full overflow-hidden"
                  style={{ background: '#121218' }}
                >
                  {spotify?.albumImageUrl ? (
                    <img src={spotify.albumImageUrl} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <Disc
                      size={36}
                      className="text-emerald-400 spotify-disc"
                    />
                  )}
                </div>

                <div className="overflow-hidden flex-grow">
                  <span className="text-[9px] font-mono text-emerald-400 font-bold tracking-widest uppercase block mb-1">
                    {spotifyConnected ? (spotify.isPlaying ? '♫ STREAMING' : '⏸ PAUSED') : '♫ OFFLINE'}
                  </span>
                  <h4 className="text-lg font-bold text-white truncate leading-tight">
                    {spotify?.title ?? 'Not connected'}
                  </h4>
                  <p className="text-sm text-gray-400 truncate mt-0.5">
                    {spotify?.artist ?? 'Set up Spotify API to go live'}
                  </p>

                  {spotifyConnected && (
                    <div className="mt-3 h-0.5 w-full bg-white/5 relative overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 bg-emerald-400 transition-all duration-1000"
                        style={{ width: `${spotify.progress ?? 30}%` }}
                      />
                    </div>
                  )}
                </div>

                {spotifyConnected && (
                  <div className="flex items-end gap-0.5 h-10 shrink-0">
                    <span className="w-1 rounded-sm bg-emerald-400 audio-bar-1" style={{ minHeight: 4 }} />
                    <span className="w-1 rounded-sm bg-emerald-400 audio-bar-2" style={{ minHeight: 4 }} />
                    <span className="w-1 rounded-sm bg-emerald-400 audio-bar-3" style={{ minHeight: 4 }} />
                    <span className="w-1 rounded-sm bg-emerald-400 audio-bar-4" style={{ minHeight: 4 }} />
                  </div>
                )}
              </div>

              <p className="mt-4 text-[10px] font-mono text-gray-600 leading-relaxed">
                {spotifyConnected
                  ? 'Live from Spotify API.'
                  : 'Connect via api/spotify-now-playing — see SPOTIFY_SETUP.md in project root.'}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

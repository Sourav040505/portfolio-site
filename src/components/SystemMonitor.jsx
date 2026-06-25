import React, { useState, useEffect, useCallback } from 'react';
import { Terminal, ExternalLink, Disc, Music2, GitBranch } from 'lucide-react';

export default function SystemMonitor() {
  const [time, setTime] = useState('');
  const [spotify, setSpotify] = useState(null);
  const [loading, setLoading] = useState(true);
  const [github, setGithub] = useState(null);
  const [loadingGithub, setLoadingGithub] = useState(true);

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

  // Poll GitHub API for latest repository commit every 60s
  const fetchGitHub = useCallback(async () => {
    try {
      const repoRes = await fetch('https://api.github.com/users/Sourav040505/repos?sort=pushed&per_page=1');
      if (!repoRes.ok) throw new Error('GitHub API error');
      const repos = await repoRes.json();
      if (repos && repos.length > 0) {
        const latestRepo = repos[0];
        
        // Fetch latest commit
        const commitRes = await fetch(`https://api.github.com/repos/Sourav040505/${latestRepo.name}/commits?per_page=1`);
        let commitMsg = 'Active development';
        let commitSha = '';
        let commitUrl = latestRepo.html_url;
        if (commitRes.ok) {
          const commits = await commitRes.json();
          if (commits && commits.length > 0) {
            commitMsg = commits[0].commit.message.split('\n')[0];
            commitSha = commits[0].sha.substring(0, 7);
            commitUrl = commits[0].html_url;
          }
        }

        setGithub({
          name: latestRepo.name,
          url: latestRepo.html_url,
          description: latestRepo.description || 'Active development repository.',
          language: latestRepo.language || 'JavaScript',
          pushedAt: new Date(latestRepo.pushed_at).toLocaleDateString('en-IN', {
            day: '2-digit', month: 'short', year: 'numeric'
          }),
          commitMsg,
          commitSha,
          commitUrl,
          branch: latestRepo.default_branch || 'main'
        });
      }
    } catch (err) {
      console.error('Error fetching GitHub:', err);
    } finally {
      setLoadingGithub(false);
    }
  }, []);

  useEffect(() => {
    fetchGitHub();
    const interval = setInterval(fetchGitHub, 60_000);
    return () => clearInterval(interval);
  }, [fetchGitHub]);

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">

          {/* Currently Working On */}
          <div className="p-7 border border-white/5 hover:border-indigo-500/20 transition-all duration-300 flex flex-col justify-between"
            style={{ background: '#0f0f1a' }}>
            <div>
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-indigo-400 uppercase mb-6">
                <Terminal size={12} />
                Currently Working On
                {!loadingGithub && github && (
                  <span className="ml-auto flex items-center gap-1.5 text-indigo-400 font-bold tracking-wider"
                        style={{ textShadow: '0 0 8px rgba(99,102,241,0.4)' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping" />
                    LIVE
                  </span>
                )}
              </div>
              
              {loadingGithub ? (
                <div className="flex items-center justify-center py-16">
                  <div className="w-6 h-6 border-2 border-indigo-500/30 border-t-indigo-400 rounded-full animate-spin" />
                </div>
              ) : github ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                    <h3 className="text-base font-bold text-white tracking-tight">{github.name}</h3>
                  </div>
                  
                  {/* Latest commit display */}
                  <a href={github.commitUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-start gap-3 p-4 border border-indigo-500/10 hover:border-indigo-500/30 transition-all relative overflow-hidden group block"
                    style={{ background: 'rgba(99,102,241,0.02)' }}>
                    <div className="shrink-0 mt-0.5 text-indigo-400">
                      <GitBranch size={16} />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[9px] font-mono text-indigo-400 font-bold tracking-widest uppercase block mb-1">
                        LATEST PUSH
                      </span>
                      <p className="text-sm font-bold text-white leading-snug group-hover:text-indigo-300 transition-colors">
                        {github.commitMsg}
                      </p>
                      {github.commitSha && (
                        <span className="text-[9px] text-gray-500 font-mono block mt-1">
                          commit {github.commitSha}
                        </span>
                      )}
                    </div>
                  </a>

                  {/* Project telemetries */}
                  <div className="grid grid-cols-2 gap-3 p-4 border border-white/5 font-mono text-[10px] mt-2"
                    style={{ background: 'rgba(255,255,255,0.015)' }}>
                    <div>
                      <span className="text-gray-600 block tracking-wider uppercase mb-0.5">Stack</span>
                      <span className="text-white font-bold">{github.language}</span>
                    </div>
                    <div>
                      <span className="text-gray-600 block tracking-wider uppercase mb-0.5">Status</span>
                      <span className="text-indigo-400 font-bold">Active Pushes</span>
                    </div>
                    <div>
                      <span className="text-gray-600 block tracking-wider uppercase mb-0.5">Branch</span>
                      <span className="text-white font-bold">{github.branch}</span>
                    </div>
                    <div>
                      <span className="text-gray-600 block tracking-wider uppercase mb-0.5">Last Sync</span>
                      <span className="text-emerald-400 font-bold">{github.pushedAt}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-gray-600 font-mono text-xs border border-dashed border-white/5 rounded p-6 bg-white/[0.005]">
                  <Terminal size={32} className="text-gray-700 animate-pulse mb-3" />
                  <span className="text-[10px] uppercase tracking-wider mb-1">Receiver Online</span>
                  <span className="text-[9px] text-gray-700 text-center">Failed to load GitHub activity feed.</span>
                </div>
              )}
            </div>
            <div className="mt-6">
              {!loadingGithub && github ? (
                <a href={github.url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono text-gray-500 hover:text-indigo-400 transition-colors">
                  View on GitHub <ExternalLink size={10} />
                </a>
              ) : (
                <span className="text-[10px] font-mono text-gray-600">Feed state: standby</span>
              )}
            </div>
          </div>

          {/* Spotify Now Playing */}
          <div className="p-7 border border-white/5 hover:border-emerald-500/20 transition-all duration-300 flex flex-col justify-between"
            style={{ background: '#0f0f1a' }}>
            <div>
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-emerald-400 uppercase mb-6">
                <Music2 size={12} />
                Audio Feed // Spotify
                {spotify?.isPlaying ? (
                  <span className="ml-auto flex items-center gap-1.5 text-emerald-400 font-bold tracking-wider"
                        style={{ textShadow: '0 0 8px rgba(52,211,153,0.4)' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    LIVE
                  </span>
                ) : (
                  <span className="ml-auto text-gray-600 text-[9px] font-mono">STANDBY</span>
                )}
              </div>

              {loading ? (
                <div className="flex items-center justify-center py-16">
                  <div className="w-6 h-6 border-2 border-emerald-500/30 border-t-emerald-400 rounded-full animate-spin" />
                </div>
              ) : spotify?.track ? (
                <div className="space-y-4">
                  {/* Player card */}
                  <a href={spotify.track.spotifyUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 border border-emerald-500/10 hover:border-emerald-500/30 transition-all relative overflow-hidden group block"
                    style={{ background: 'rgba(16,185,129,0.02)' }}>
                    
                    {/* Futuristic Scanning Line */}
                    {spotify.isPlaying && (
                      <div className="absolute inset-x-0 h-[1px] bg-emerald-400/25 animate-[scan_2s_linear_infinite] top-0 pointer-events-none" 
                           style={{
                             boxShadow: '0 0 8px rgba(52,211,153,0.8)',
                             animationName: 'scan'
                           }}
                      />
                    )}

                    {/* Album art */}
                    <div className="relative w-16 h-16 shrink-0 overflow-hidden border border-white/5 group-hover:border-emerald-500/30 transition-colors">
                      {spotify.track.albumArt ? (
                        <img src={spotify.track.albumArt} alt={spotify.track.album}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      ) : (
                        <div className="w-full h-full bg-[#121218] flex items-center justify-center">
                          <Disc size={24} className="text-emerald-400/40" />
                        </div>
                      )}
                    </div>

                    {/* Track info */}
                    <div className="flex-grow overflow-hidden z-10">
                      <span className="text-[9px] font-mono text-emerald-400 font-bold tracking-widest uppercase block mb-1">
                        {spotify.isPlaying ? '♫ NOW STREAMING' : '♫ RECENTLY PLAYED'}
                      </span>
                      <h4 className="text-sm font-bold text-white truncate group-hover:text-emerald-300 transition-colors">
                        {spotify.track.title}
                      </h4>
                      <p className="text-xs text-gray-400 truncate mt-0.5">{spotify.track.artist}</p>
                      <p className="text-[10px] text-gray-600 truncate mt-1 font-mono">{spotify.track.album}</p>
                    </div>

                    {/* Equalizer Wave */}
                    <div className="flex items-end gap-1 h-8 shrink-0 pb-1">
                      {spotify.isPlaying ? (
                        <div className="flex items-end gap-0.5 h-6">
                          <span className="w-0.75 bg-emerald-400 rounded-full audio-bar-1" style={{ height: '12px', minHeight: 4 }} />
                          <span className="w-0.75 bg-emerald-400 rounded-full audio-bar-2" style={{ height: '20px', minHeight: 4 }} />
                          <span className="w-0.75 bg-emerald-400 rounded-full audio-bar-3" style={{ height: '15px', minHeight: 4 }} />
                          <span className="w-0.75 bg-emerald-400 rounded-full audio-bar-4" style={{ height: '8px', minHeight: 4 }} />
                        </div>
                      ) : (
                        <div className="flex items-end gap-0.5 h-6 opacity-30">
                          <span className="w-0.75 bg-gray-500 rounded-full" style={{ height: '4px' }} />
                          <span className="w-0.75 bg-gray-500 rounded-full" style={{ height: '6px' }} />
                          <span className="w-0.75 bg-gray-500 rounded-full" style={{ height: '4px' }} />
                          <span className="w-0.75 bg-gray-500 rounded-full" style={{ height: '5px' }} />
                        </div>
                      )}
                    </div>
                  </a>

                  {/* Telemetry Grid */}
                  <div className="grid grid-cols-2 gap-3 p-4 border border-white/5 font-mono text-[10px]"
                    style={{ background: 'rgba(255,255,255,0.015)' }}>
                    <div>
                      <span className="text-gray-600 block tracking-wider uppercase mb-0.5">Telemetry</span>
                      <span className="text-white font-bold">Spotify Scrobbler</span>
                    </div>
                    <div>
                      <span className="text-gray-600 block tracking-wider uppercase mb-0.5">Decoder</span>
                      <span className="text-white font-bold">PCM // Live Sync</span>
                    </div>
                    <div>
                      <span className="text-gray-600 block tracking-wider uppercase mb-0.5">Status</span>
                      <span className={spotify.isPlaying ? "text-emerald-400 font-bold" : "text-gray-500 font-bold"}>
                        {spotify.isPlaying ? "ACTIVE STREAMING" : "STANDBY IDLE"}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600 block tracking-wider uppercase mb-0.5">Interval</span>
                      <span className="text-white font-bold">30s polling</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-gray-600 font-mono text-xs border border-dashed border-white/5 rounded p-6 bg-white/[0.005]">
                  <Disc size={32} className="text-gray-700 animate-pulse mb-3" />
                  <span className="text-[10px] uppercase tracking-wider mb-1">Receiver Online</span>
                  <span className="text-[9px] text-gray-700 text-center">No active scrobble data found on Last.fm feed. Play a track on Spotify.</span>
                </div>
              )}
            </div>

            <div className="mt-6">
              {!loading && spotify?.track ? (
                <a href={spotify.track.spotifyUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono text-gray-500 hover:text-emerald-400 transition-colors">
                  Open in Spotify <ExternalLink size={10} />
                </a>
              ) : (
                <span className="text-[10px] font-mono text-gray-600">Feed state: inactive</span>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

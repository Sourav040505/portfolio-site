import React, { useState } from 'react';
import { Copy, Check, Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

const email = 'souravgoswami2005@gmail.com';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="bg-[#0a0a14] relative scroll-mt-16 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span
            className="block mb-2 text-[10px] tracking-[0.3em] uppercase text-indigo-400"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Get in Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Contact
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left: availability pitch */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Available for opportunities
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              Open to backend SDE internships,<br className="hidden sm:block" />
              AI engineering roles, and freelance web projects.
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Remote · Available immediately · Indian citizen. Whether you're a recruiter, founder, or developer — I respond to all emails.
            </p>

            {/* Role preference pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['Backend SDE', 'AI / LLM', 'C++ & DSA', 'Freelance Web', 'Remote'].map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] font-mono px-3 py-1 border border-white/10 text-gray-500 tracking-wider uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/Sourav040505"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white transition-colors tracking-wider"
              >
                <Github size={14} />
                GitHub
                <ArrowRight size={10} />
              </a>
              <a
                href="https://linkedin.com/in/souravgoswami2005"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white transition-colors tracking-wider"
              >
                <Linkedin size={14} />
                LinkedIn
                <ArrowRight size={10} />
              </a>
            </div>
          </div>

          {/* Right: email copy card */}
          <div className="space-y-4">
            {/* Email row */}
            <div
              className="flex items-center justify-between p-5 border border-white/5 hover:border-indigo-500/20 transition-all duration-200"
              style={{ background: '#0f0f1a' }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="p-2.5 border"
                  style={{
                    background: 'rgba(99,102,241,0.08)',
                    borderColor: 'rgba(99,102,241,0.2)',
                    color: '#818cf8',
                  }}
                >
                  <Mail size={16} />
                </div>
                <div>
                  <div className="text-[9px] font-mono text-gray-600 tracking-wider uppercase mb-0.5">
                    Email
                  </div>
                  <div className="text-sm font-bold text-white select-all">{email}</div>
                </div>
              </div>

              <button
                onClick={copyEmail}
                title="Copy email"
                className="p-2.5 border border-white/5 hover:border-indigo-500/30 text-gray-500 hover:text-white transition-all"
              >
                {copied ? (
                  <span className="flex items-center gap-1 text-[9px] font-mono text-emerald-400 font-bold whitespace-nowrap">
                    <Check size={10} /> COPIED
                  </span>
                ) : (
                  <Copy size={13} />
                )}
              </button>
            </div>

            {/* Direct mailto button */}
            <a
              href={`mailto:${email}`}
              className="flex items-center justify-center gap-2 w-full py-4 font-mono text-xs tracking-widest uppercase transition-all duration-200 hover:opacity-90"
              style={{ background: '#6366f1', color: '#ffffff', fontWeight: 700 }}
            >
              Send an Email
              <ArrowRight size={13} />
            </a>

            {/* Response note */}
            <p className="text-[10px] font-mono text-gray-600 text-center tracking-wider">
              Typically respond within 24 hours.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

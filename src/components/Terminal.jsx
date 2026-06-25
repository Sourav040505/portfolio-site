import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X } from 'lucide-react';

const COMMANDS = {
  help: () =>
    `Available commands:
  help       — show this list
  about      — who I am
  projects   — scroll to projects
  stack      — scroll to tech stack
  experience — scroll to experience
  notes      — scroll to notes
  contact    — scroll to contact
  resume     — download resume
  clear      — clear terminal
  github     — open GitHub
  linkedin   — open LinkedIn
  email      — copy email to clipboard`,

  about: () =>
    `Sourav Goswami — Backend + AI engineer
  C++, DSA, production APIs, LLM integration
  VIT · Bhopal, IN · Open to remote internships & freelance`,

  projects: () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    return 'Scrolling to projects...';
  },

  stack: () => {
    document.getElementById('stack')?.scrollIntoView({ behavior: 'smooth' });
    return 'Scrolling to tech stack...';
  },

  experience: () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
    return 'Scrolling to experience...';
  },

  notes: () => {
    document.getElementById('notes')?.scrollIntoView({ behavior: 'smooth' });
    return 'Scrolling to notes...';
  },

  contact: () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    return 'Scrolling to contact...';
  },

  resume: () => {
    window.open('/resume.html', '_blank');
    return 'Opening resume...';
  },

  github: () => {
    window.open('https://github.com/Sourav040505', '_blank');
    return 'Opening GitHub...';
  },

  linkedin: () => {
    window.open('https://linkedin.com/in/souravgoswami2005', '_blank');
    return 'Opening LinkedIn...';
  },

  email: () => {
    navigator.clipboard.writeText('souravgoswami2005@gmail.com');
    return 'Email copied: souravgoswami2005@gmail.com';
  },

  clear: () => '__CLEAR__',
};

export default function Terminal() {
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState([
    { type: 'system', text: 'SouravOS v1.0 — type "help" for commands' },
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  const runCommand = useCallback((raw) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    setLines((prev) => [...prev, { type: 'input', text: `> ${raw}` }]);

    if (cmd === 'clear') {
      setLines([]);
      return;
    }

    const handler = COMMANDS[cmd];
    if (handler) {
      const result = handler();
      if (result !== '__CLEAR__') {
        setLines((prev) => [...prev, { type: 'output', text: result }]);
      }
    } else {
      setLines((prev) => [
        ...prev,
        { type: 'error', text: `Unknown command: "${cmd}". Type "help" for options.` },
      ]);
    }
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === '`' && !e.ctrlKey && !e.metaKey && document.activeElement?.tagName !== 'INPUT') {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [lines, open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-start justify-center pt-[12vh] px-4"
      style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)' }}
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-2xl border border-indigo-500/30 overflow-hidden"
        style={{ background: '#0a0a14', boxShadow: '0 0 60px rgba(99,102,241,0.15)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <span className="ml-2 text-[10px] font-mono text-gray-500 tracking-widest uppercase">
              sourav@portfolio ~ terminal
            </span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-500 hover:text-white transition-colors p-1"
            aria-label="Close terminal"
          >
            <X size={14} />
          </button>
        </div>

        <div
          ref={bodyRef}
          className="p-4 h-72 overflow-y-auto font-mono text-xs leading-relaxed"
        >
          {lines.map((line, i) => (
            <div
              key={i}
              className={`mb-1 whitespace-pre-wrap ${
                line.type === 'input'
                  ? 'text-indigo-300'
                  : line.type === 'error'
                    ? 'text-red-400'
                    : line.type === 'system'
                      ? 'text-emerald-400'
                      : 'text-gray-400'
              }`}
            >
              {line.text}
            </div>
          ))}
        </div>

        <form
          className="flex items-center gap-2 px-4 py-3 border-t border-white/5"
          onSubmit={(e) => {
            e.preventDefault();
            runCommand(input);
            setInput('');
          }}
        >
          <span className="text-indigo-400 font-mono text-xs shrink-0">&gt;</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow bg-transparent outline-none text-white font-mono text-xs"
            placeholder="Type a command..."
            spellCheck={false}
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  );
}

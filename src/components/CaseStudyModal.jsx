import React from 'react';
import { X, Github, ExternalLink } from 'lucide-react';

export default function CaseStudyModal({ project, onClose }) {
  if (!project?.caseStudy) return null;
  const { caseStudy } = project;
  const Icon = project.icon;

  return (
    <div
      className="fixed inset-0 z-[9000] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl max-h-[85vh] overflow-y-auto border"
        style={{
          background: '#0f0f1a',
          borderColor: project.accentBorder,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="sticky top-0 flex items-start justify-between p-6 border-b border-white/5"
          style={{ background: '#0f0f1a' }}
        >
          <div className="flex items-center gap-3">
            <div
              className="p-2 border"
              style={{
                color: project.accentText,
                borderColor: project.accentBorder,
                background: project.accent,
              }}
            >
              <Icon size={18} />
            </div>
            <div>
              <span className="text-[10px] font-mono text-gray-500 tracking-wider uppercase block">
                Flagship Case Study
              </span>
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-white p-1">
            <X size={18} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h4 className="text-[10px] font-mono text-indigo-400 tracking-widest uppercase mb-2">
              Problem
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed">{caseStudy.problem}</p>
          </div>

          <div>
            <h4 className="text-[10px] font-mono text-indigo-400 tracking-widest uppercase mb-2">
              My Role
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed">{caseStudy.role}</p>
          </div>

          <div>
            <h4 className="text-[10px] font-mono text-indigo-400 tracking-widest uppercase mb-2">
              Approach
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed">{caseStudy.approach}</p>
          </div>

          <div>
            <h4 className="text-[10px] font-mono text-indigo-400 tracking-widest uppercase mb-2">
              Highlights
            </h4>
            <ul className="space-y-2">
              {caseStudy.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                  <span className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ background: project.accentText }} />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {caseStudy.stack.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2 py-0.5 border tracking-wide"
                style={{
                  borderColor: 'rgba(255,255,255,0.06)',
                  color: '#6b7280',
                  background: 'rgba(255,255,255,0.03)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-2 pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-mono tracking-wider uppercase border border-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <Github size={12} />
              Code
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-mono tracking-wider uppercase"
                style={{ background: project.accentText, color: '#080810', fontWeight: 700 }}
              >
                Live Demo
                <ExternalLink size={11} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

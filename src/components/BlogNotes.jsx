import React, { useState } from 'react';
import { ChevronDown, ChevronUp, PenLine } from 'lucide-react';
import { blogPosts } from '../data/blog.js';
import ScrollReveal from './ScrollReveal';

export default function BlogNotes() {
  const [expanded, setExpanded] = useState(null);
  const [showGuide, setShowGuide] = useState(false);
  const published = blogPosts.filter((p) => p.published);

  return (
    <section id="notes" className="bg-[#080810] relative border-b border-white/5 scroll-mt-16 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <span
                className="block mb-2 text-[10px] tracking-[0.3em] uppercase text-indigo-400"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Writing
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                Notes
              </h2>
              <p className="mt-3 text-gray-400 text-sm max-w-lg leading-relaxed">
                Short technical write-ups — what I built and what I learned.
              </p>
            </div>
            <button
              onClick={() => setShowGuide((s) => !s)}
              className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 text-[10px] font-mono tracking-widest uppercase text-gray-500 hover:text-indigo-400 hover:border-indigo-500/30 transition-all"
            >
              <PenLine size={12} />
              How to write notes
              {showGuide ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
            </button>
          </div>
        </ScrollReveal>

        {showGuide && (
          <ScrollReveal delay={50}>
            <div
              className="mb-10 p-6 border border-indigo-500/20 text-sm text-gray-400 leading-relaxed space-y-3"
              style={{ background: 'rgba(99,102,241,0.04)' }}
            >
              <p className="text-indigo-300 font-mono text-[10px] tracking-widest uppercase">
                Quick guide — edit src/data/blog.js
              </p>
              <ul className="space-y-2 list-none">
                <li>1. Pick one topic: a project, bug fix, or tool you used.</li>
                <li>2. Lead with the outcome — &quot;I cut load time by 40%&quot; beats &quot;I used React&quot;.</li>
                <li>3. Keep it under 500 words — 3–5 short paragraphs in the content array.</li>
                <li>4. Set <code className="text-indigo-400">published: true</code> when ready. Drafts stay hidden.</li>
                <li>5. Add tags recruiters search for: React, Django, C++, LLM, etc.</li>
              </ul>
            </div>
          </ScrollReveal>
        )}

        <div className="space-y-4">
          {published.map((post, idx) => (
            <ScrollReveal key={post.id} delay={idx * 60}>
              <article
                className="border border-white/5 hover:border-white/10 transition-all duration-300"
                style={{ background: '#0f0f1a' }}
              >
                <button
                  className="w-full text-left p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  onClick={() => setExpanded(expanded === post.id ? null : post.id)}
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-mono px-2 py-0.5 border border-white/10 text-gray-500 tracking-wider uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{post.excerpt}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0 font-mono text-[10px] text-gray-600 tracking-wider">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                    {expanded === post.id ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </div>
                </button>

                {expanded === post.id && (
                  <div className="px-6 pb-6 border-t border-white/5 pt-4 space-y-3">
                    {post.content.map((para, i) => (
                      <p key={i} className="text-sm text-gray-400 leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                )}
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

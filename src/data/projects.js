import { Globe, Database, PenTool } from 'lucide-react';

export const projects = [
  {
    id: 'echo-chamber',
    title: 'Echo Chamber',
    subtitle: 'Chrome Extension',
    category: 'Web Dev',
    description:
      'Browser utility extension with event-driven background workers, modular script scopes, and direct DOM APIs for improved browsing workflows.',
    metrics: ['Chrome Extension Manifest V3'],
    tech: ['JavaScript', 'Chrome Extension API', 'DOM', 'Event Loops'],
    github: 'https://github.com/Sourav040505/Echo-Chamber-Extension',
    live: null,
    preview: null,
    icon: Globe,
    accent: 'rgba(20,184,166,0.12)',
    accentBorder: 'rgba(20,184,166,0.25)',
    accentText: '#2dd4bf',
  },
  {
    id: 'dashboard',
    title: 'EdTech Dashboard',
    subtitle: 'Vocab Trainer · Supabase',
    category: 'AI & ML',
    description:
      'Persistent learning portal with flashcard flows, Supabase backend, async queries, and real-time data sync for user progress tracking.',
    metrics: ['Supabase backend', 'Live on Vercel'],
    tech: ['Supabase', 'React', 'Async Queries', 'Real-time DB'],
    github: 'https://github.com/Sourav040505/Vocab_trainer2.0',
    live: 'https://vocab-trainer-jade.vercel.app/#/flashcards',
    preview: null,
    icon: Database,
    accent: 'rgba(139,92,246,0.12)',
    accentBorder: 'rgba(139,92,246,0.25)',
    accentText: '#a78bfa',
  },
  {
    id: 'inkflow',
    title: 'InkFlow Notes',
    subtitle: 'Whiteboard & Canvas Notes',
    category: 'Web Dev',
    flagship: true,
    description:
      'High-performance whiteboard and note-taking application using HTML5 Canvas, featuring custom smoothing, a radial tool menu, and multiple paper styles (ruled, dot-grid, graph).',
    metrics: ['Canvas bezier path smoothing', 'Local Notebook persistence'],
    tech: ['TypeScript', 'HTML5 Canvas', 'MathJS', 'Vite'],
    github: 'https://github.com/Sourav040505/note-taking',
    live: 'https://prxsrv-notes.vercel.app',
    preview: '/inkflow-preview.png',
    icon: PenTool,
    accent: 'rgba(236,72,153,0.12)',
    accentBorder: 'rgba(236,72,153,0.25)',
    accentText: '#f472b6',
    caseStudy: {
      problem:
        'Web whiteboard apps often suffer from stroke lag and lack customizable layouts. Tablet/web notes need smooth bezier path drawing and a quick tool switching interface.',
      role: 'Solo Developer — designed the custom rendering loop and canvas state.',
      approach:
        'Implemented interactive pointer event listeners with velocity-based bezier path calculation for smooth strokes, combined with a radial layout tool menu for rapid switching.',
      highlights: [
        'High-fidelity path rendering with custom bezier line smoothing',
        'Radial contextual tool menu for quick switching between tools',
        'State serialization for multi-notebook local storage persistence',
      ],
      stack: ['TypeScript', 'HTML5 Canvas', 'MathJS', 'Vite'],
    },
  },
];

export const filterOptions = ['All', 'Web Dev', 'AI & ML', 'Systems'];

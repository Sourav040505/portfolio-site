/**
 * Blog / Notes — edit this file to add or update posts.
 *
 * Set `published: true` when ready to show on the site.
 * Add new posts to the TOP of the array (newest first).
 */
export const blogPosts = [
  {
    id: 'hookcraft-llm-pipeline',
    title: 'Building an LLM Prompt Pipeline in HookCraft AI',
    date: '2026-06-01',
    readTime: '4 min',
    tags: ['AI', 'React', 'LLM'],
    published: false,
    excerpt:
      'How I mapped user intent to structured LLM prompts and managed real-time generation state in a React app.',
    content: [
      'HookCraft started as a simple idea: content brainstorming shouldn\'t feel like staring at a blank page.',
      'I structured the app around intent → prompt templates → generation, keeping the UI minimal so speed stayed the focus.',
      'The hardest part was state management across async LLM calls — I used React state with clear loading/error/success phases.',
      'Deployed on Vercel with environment variables for API keys. Solo project from design to production.',
    ],
  },
  {
    id: 'getting-started-notes',
    title: 'Welcome to Notes',
    date: '2026-06-25',
    readTime: '2 min',
    tags: ['Meta'],
    published: true,
    excerpt:
      'This section is for short technical write-ups. Edit src/data/blog.js to publish your own posts.',
    content: [
      'Notes are shorter than full blog posts — think "what I built" and "what I learned".',
      'Good topics: a project architecture decision, a bug you solved, a tool comparison, or a deployment lesson.',
      'Keep posts under 500 words. Recruiters skim — lead with the outcome, then explain how.',
      'Set published: true in blog.js when ready. Drafts stay hidden automatically.',
    ],
  },
];

/**
 * Central site configuration. Single source of truth for identity, links, and
 * navigation. Values marked `PLACEHOLDER` are pending confirmation (see the
 * open questions in 00_PROJECT_FOUNDATION.md) and are safe to edit here alone.
 */

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const siteConfig = {
  name: 'Prateek Varshney',
  shortName: 'Prateek Varshney',
  role: 'AI Engineer · Automation Developer · Full-Stack Developer',
  description:
    'AI Engineer and Automation Developer building AI agents, multi-agent systems, and workflow automation — from Android roots to production AI products.',
  url: siteUrl,
  ogImage: `${siteUrl}/og.png`,
  keywords: [
    'Prateek Varshney',
    'AI Engineer',
    'Automation Developer',
    'Full-Stack Developer',
    'AI Agents',
    'n8n',
    'Workflow Automation',
    'LLM',
    'Prompt Engineering',
    'Next.js',
  ],
  links: {
    // PLACEHOLDER — replace with real handles once confirmed.
    github: 'https://github.com/prateekvarshney',
    linkedin: 'https://www.linkedin.com/in/prateekvarshney',
    twitter: 'https://x.com/prateekvarshney',
    email: 'mailto:hello@prateekvarshney.dev',
  },
  /** In-page anchor navigation (sections are built in later phases). */
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Journey', href: '#journey' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
export type NavItem = (typeof siteConfig.nav)[number];

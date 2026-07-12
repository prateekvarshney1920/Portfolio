/**
 * Central site configuration. Single source of truth for identity, links, and
 * navigation. Values marked `PLACEHOLDER` are pending confirmation (see the
 * open questions in 00_PROJECT_FOUNDATION.md) and are safe to edit here alone.
 */

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const siteConfig = {
  name: 'Prateek Varshney',
  shortName: 'Prateek Varshney',
  role: 'AI Engineer · Android Developer',
  description:
    'Android Developer and AI Engineer specializing in building modern, scalable mobile applications and autonomous systems.',
  url: siteUrl,
  ogImage: `${siteUrl}/og.png`,
  keywords: [
    'Prateek Varshney',
    'Android Developer',
    'AI Engineer',
    'AI Agents',
    'n8n',
    'Workflow Automation',
    'Kotlin',
    'Jetpack Compose',
    'Next.js',
  ],
  links: {
    github: 'https://github.com/prateekvarshney1920',
    linkedin: 'https://www.linkedin.com/in/prateek-v/',
    twitter: 'https://x.com/PrateekVar1920',
    email: 'mailto:prateekvarshney697@gmail.com',
  },
  /** In-page anchor navigation (sections are built in later phases). */
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Journey', href: '#journey' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
export type NavItem = (typeof siteConfig.nav)[number];

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Section, SectionHeading, GlassCard, Tag, Badge } from '@/components/primitives';
import { AnimatedSection, AnimatedItem } from '@/components/ui/AnimatedSection';
import { projects } from '@/content/data';
import type { Project } from '@/content/data';

/**
 * Projects
 * ---------------------------------------------------------------------------
 * Rebuilt to match the Dribbble project showcase: clean typography,
 * custom category indicators, bullet points bulleted with orange diamonds,
 * and pill outline view buttons.
 */

const categories = ['all', 'ai', 'automation', 'web', 'mobile'] as const;
type CategoryFilter = (typeof categories)[number];

const categoryLabels: Record<CategoryFilter, string> = {
  all: 'All Work',
  ai: 'AI & Agents',
  automation: 'Automation',
  web: 'Web',
  mobile: 'Mobile',
};

export function Projects() {
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section id="projects">
      <AnimatedSection>
        <SectionHeading
          align="center"
          eyebrow="Selected Work"
          title={
            <>
              featured software{' '}
              <span className="italic-accent font-serif italic text-brand-violet block mt-1">
                creations
              </span>
            </>
          }
          description="A showcase of AI agents, automated pipelines, and full-stack solutions."
        />
      </AnimatedSection>

      {/* Filter Tabs */}
      <AnimatedSection delay={0.1} className="mt-8 flex flex-wrap justify-center gap-2 md:mt-12">
        {categories.map((cat) => (
          <Tag
            key={cat}
            interactive
            selected={filter === cat}
            onClick={() => setFilter(cat)}
            className="font-mono text-[11px] uppercase tracking-wider px-4"
          >
            {categoryLabels[cat]}
          </Tag>
        ))}
      </AnimatedSection>

      {/* Project Grid */}
      <AnimatedSection stagger className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <AnimatedItem key={project.slug}>
            <ProjectCard project={project} />
          </AnimatedItem>
        ))}
      </AnimatedSection>
    </Section>
  );
}

// ─── Project Card ──────────────────────────────────────────────────────────────

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <GlassCard
        interactive
        padding="none"
        className="flex h-full flex-col overflow-hidden border-[var(--border-muted)] hover:glow-cyan transition-all duration-300"
      >
        {/* Visual Header / Accent */}
        <div
          className="h-44 w-full relative overflow-hidden transition-all duration-500"
          style={{ background: project.gradient }}
        >
          {/* Subtle noise grid mask */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.4)_100%)] z-10" />

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4 z-20">
              <Badge variant="primary" size="sm" className="font-mono text-[9px] uppercase tracking-wider bg-black/50 border border-[var(--border-primary)] text-brand-blue">
                FEATURED
              </Badge>
            </div>
          )}

          <div className="absolute bottom-4 left-5 right-5 z-20">
            <span className="font-mono text-[9px] uppercase tracking-widest text-white/70 block mb-1">
              [{project.category === 'ai' ? 'AI & Agents' : project.category}]
            </span>
            <h3 className="font-display text-2xl uppercase tracking-wider text-white drop-shadow-md leading-none">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex flex-1 flex-col p-6 bg-[var(--surface-raised)]">
          <p className="text-fg-secondary text-body-s mb-5 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* Tiny achievements/features preview with diamonds */}
          <ul className="space-y-1.5 mb-6">
            {project.features.slice(0, 2).map((feat) => (
              <li key={feat} className="text-fg-muted text-[11px] flex items-start gap-1.5 line-clamp-1">
                <span className="text-[8px] text-brand-violet mt-0.5 select-none" aria-hidden="true">♦</span>
                {feat}
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="mt-auto flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <Tag key={tag} size="sm" className="font-mono text-[9px]">
                {tag}
              </Tag>
            ))}
          </div>

          {/* Action view pill */}
          <div className="border-t border-[var(--glass-subtle-border)] mt-5 pt-4 flex items-center justify-between text-xs font-mono font-medium text-fg-muted group-hover:text-fg transition-colors duration-150">
            <span>EXPLORE WORK</span>
            <div className="size-7 rounded-full bg-[var(--glass-subtle-fill)] border border-[var(--glass-subtle-border)] flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:border-[var(--border-primary)] group-hover:text-primary">
              <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>
      </GlassCard>
    </Link>
  );
}

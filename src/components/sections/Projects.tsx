'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Section, SectionHeading, GlassCard, GradientText, Tag, Badge } from '@/components/primitives';
import { AnimatedSection, AnimatedItem } from '@/components/ui/AnimatedSection';
import { projects } from '@/content/data';
import type { Project } from '@/content/data';

/**
 * Projects
 * ---------------------------------------------------------------------------
 * Featured project grid with GlassCard-based project cards, hover interactions,
 * gradient accents, and links to detail pages.
 */

const categories = ['all', 'ai', 'automation', 'web', 'mobile'] as const;
type CategoryFilter = (typeof categories)[number];

const categoryLabels: Record<CategoryFilter, string> = {
  all: 'All Projects',
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
          eyebrow="Projects"
          title={
            <>
              Things I&apos;ve{' '}
              <GradientText>built</GradientText>
            </>
          }
          description="A selection of projects spanning AI agents, automation, and full-stack applications."
        />
      </AnimatedSection>

      {/* Filter Chips */}
      <AnimatedSection delay={0.1} className="mt-8 flex flex-wrap justify-center gap-2 md:mt-10">
        {categories.map((cat) => (
          <Tag
            key={cat}
            interactive
            selected={filter === cat}
            onClick={() => setFilter(cat)}
          >
            {categoryLabels[cat]}
          </Tag>
        ))}
      </AnimatedSection>

      {/* Project Grid */}
      <AnimatedSection stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:mt-12">
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
      <GlassCard interactive padding="none" className="flex h-full flex-col overflow-hidden">
        {/* Gradient Accent Bar */}
        <div
          className="h-40 w-full transition-all duration-300 group-hover:h-44"
          style={{ background: project.gradient }}
        >
          <div className="flex h-full flex-col items-start justify-end p-5">
            {project.featured && (
              <Badge variant="primary" size="sm" className="mb-2">
                Featured
              </Badge>
            )}
            <h3 className="text-lg font-bold text-white drop-shadow-lg">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          <p className="text-fg-muted text-caption mb-2 font-mono uppercase tracking-wider">
            {project.category === 'ai'
              ? 'AI & Agents'
              : project.category === 'automation'
                ? 'Automation'
                : project.category === 'web'
                  ? 'Web App'
                  : 'Mobile'}
          </p>
          <p className="text-fg-secondary text-body-s mb-4 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="mt-auto flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <Tag key={tag} size="sm">
                {tag}
              </Tag>
            ))}
            {project.tags.length > 3 && (
              <Tag size="sm">+{project.tags.length - 3}</Tag>
            )}
          </div>

          {/* Link Affordance */}
          <div className="text-fg-muted mt-4 flex items-center gap-1 text-sm font-medium transition-colors duration-150 group-hover:text-primary">
            View Details
            <ArrowUpRight className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </GlassCard>
    </Link>
  );
}

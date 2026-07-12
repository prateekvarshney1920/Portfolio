'use client';

import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { Section, SectionHeading, GlassCard, Tag } from '@/components/primitives';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { experiences } from '@/content/data';

/**
 * Experience
 * ---------------------------------------------------------------------------
 * Rebuilt to match the Dribbble design reference: card layouts with
 * clean outlines, tiny orange diamond bullets, and custom gradient transitions.
 */
export function Experience() {
  return (
    <Section id="experience">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Employment"
          title={
            <>
              professional{' '}
              <span className="italic-accent font-serif italic text-brand-violet block mt-1">
                trajectory
              </span>
            </>
          }
          description="Where I've applied engineering principles to build production AI and automation tools."
        />
      </AnimatedSection>

      <div className="mt-12 space-y-6 md:mt-16">
        {experiences.map((exp, i) => {
          const isEven = i % 2 === 0;

          return (
            <AnimatedSection key={exp.role} delay={i * 0.1}>
              <GlassCard
                padding="lg"
                interactive
                className={`group border-[var(--border-muted)] ${
                  isEven ? 'glow-cyan' : 'glow-orange'
                }`}
              >
                {/* Header */}
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-fg text-heading-l font-display font-semibold uppercase tracking-wider">
                      {exp.role}
                    </h3>
                    <div className="text-fg-secondary mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-mono">
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase className="size-3.5 text-brand-blue" />
                        {exp.company}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="size-3.5 text-brand-violet" />
                        {exp.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="size-3.5 text-fg-muted" />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-fg-secondary text-body-s mb-5 leading-relaxed">
                  {exp.description}
                </p>

                {/* Highlights using orange diamonds */}
                <ul className="mb-6 space-y-2.5">
                  {exp.highlights.map((h) => (
                    <li key={h} className="text-fg-secondary text-body-s flex items-start gap-2">
                      <span className="mt-1.5 text-[10px] text-brand-violet select-none" aria-hidden="true">
                        ♦
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--glass-subtle-border)]">
                  {exp.technologies.map((tech) => (
                    <Tag key={tech} size="sm" className="font-mono text-[10px]">
                      {tech}
                    </Tag>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>
          );
        })}
      </div>
    </Section>
  );
}

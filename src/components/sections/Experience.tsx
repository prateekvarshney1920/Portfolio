'use client';

import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { Section, SectionHeading, GlassCard, GradientText, Tag } from '@/components/primitives';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { experiences } from '@/content/data';

/**
 * Experience
 * ---------------------------------------------------------------------------
 * Professional experience section with GlassCard entries, role info,
 * achievement highlights, and technology tags.
 */
export function Experience() {
  return (
    <Section id="experience">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              Where I&apos;ve{' '}
              <GradientText>made impact</GradientText>
            </>
          }
          description="From freelance design to AI engineering — each role sharpened a different edge."
        />
      </AnimatedSection>

      <div className="mt-12 space-y-6 md:mt-16">
        {experiences.map((exp, i) => (
          <AnimatedSection key={exp.role} delay={i * 0.1}>
            <GlassCard padding="lg" className="group">
              {/* Header */}
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-fg text-heading-m font-display font-semibold">
                    {exp.role}
                  </h3>
                  <div className="text-fg-secondary mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase className="size-3.5" />
                      {exp.company}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="size-3.5" />
                      {exp.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="size-3.5" />
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-fg-secondary text-body-s mb-4 leading-relaxed">
                {exp.description}
              </p>

              {/* Highlights */}
              <ul className="mb-5 space-y-2">
                {exp.highlights.map((h) => (
                  <li key={h} className="text-fg-secondary text-body-s flex items-start gap-2">
                    <span className="mt-2 inline-block size-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Tag key={tech} size="sm">{tech}</Tag>
                ))}
              </div>
            </GlassCard>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}

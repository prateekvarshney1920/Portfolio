'use client';

import { Sparkles, Code2, Cpu, Zap } from 'lucide-react';
import { Section, SectionHeading, GlassCard, GradientText } from '@/components/primitives';
import { AnimatedSection, AnimatedItem } from '@/components/ui/AnimatedSection';
import { personalInfo, stats } from '@/content/data';

/**
 * About
 * ---------------------------------------------------------------------------
 * Two-column layout: narrative text + animated stat cards. Tells the story
 * with real content and quantified highlights.
 */

const highlightIcons = [Sparkles, Code2, Cpu, Zap];

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Text Column */}
        <AnimatedSection animation="slideLeft">
          <SectionHeading
            eyebrow="About Me"
            title={
              <>
                From Android apps to{' '}
                <GradientText>AI agents</GradientText>
              </>
            }
            description={personalInfo.bio}
          />

          <p className="text-fg-secondary text-body-m mt-6 leading-relaxed">
            {personalInfo.bioExtended}
          </p>
        </AnimatedSection>

        {/* Stats Grid */}
        <AnimatedSection animation="slideRight" stagger>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => {
              const Icon = highlightIcons[i % highlightIcons.length]!;
              return (
                <AnimatedItem key={stat.label}>
                  <GlassCard
                    padding="md"
                    interactive
                    className="group flex flex-col items-start gap-3"
                  >
                    <div className="inline-flex size-10 items-center justify-center rounded-lg bg-[var(--glass-subtle-fill)] transition-colors duration-200 group-hover:bg-primary/10">
                      <Icon className="text-fg-muted size-5 transition-colors duration-200 group-hover:text-primary" />
                    </div>
                    <div>
                      <span className="text-fg font-display text-display-m font-bold">
                        {stat.value}
                      </span>
                      <p className="text-fg-muted text-caption mt-0.5 font-medium">
                        {stat.label}
                      </p>
                    </div>
                  </GlassCard>
                </AnimatedItem>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
}

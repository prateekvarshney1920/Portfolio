'use client';

import { Sparkles, Code2, Cpu, Zap } from 'lucide-react';
import { Section, SectionHeading, GlassCard } from '@/components/primitives';
import { AnimatedSection, AnimatedItem } from '@/components/ui/AnimatedSection';
import { personalInfo, stats } from '@/content/data';

/**
 * About
 * ---------------------------------------------------------------------------
 * Two-column layout: narrative text + Dribbble-style glow metric cards.
 * Integrates Bebas Neue typography for numbers and Playfair serif italic elements.
 */

const highlightIcons = [Sparkles, Code2, Cpu, Zap];

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        {/* Text Column */}
        <AnimatedSection animation="slideLeft">
          <SectionHeading
            eyebrow="Introduction"
            title={
              <>
                driven by the pursuit of{' '}
                <span className="italic-accent lowercase font-serif italic text-brand-violet block mt-1">
                  intelligence
                </span>
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
              const isEven = i % 2 === 0;

              return (
                <AnimatedItem key={stat.label}>
                  <GlassCard
                    padding="md"
                    interactive
                    className={`group flex flex-col items-start gap-3 border-[var(--border-muted)] ${
                      isEven ? 'glow-cyan' : 'glow-orange'
                    }`}
                  >
                    <div className="inline-flex size-10 items-center justify-center rounded-lg bg-[var(--glass-subtle-fill)] transition-colors duration-200 group-hover:bg-primary/10">
                      <Icon className="text-fg-muted size-5 transition-colors duration-200 group-hover:text-primary" />
                    </div>
                    <div>
                      <span className="text-fg font-display text-4xl font-bold tracking-wide">
                        {stat.value}
                      </span>
                      <p className="text-fg-secondary text-[11px] font-mono uppercase tracking-wider mt-1.5 leading-none">
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

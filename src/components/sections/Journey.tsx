'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import {
  Smartphone, Layers, Flame, Palette, Users, Workflow, Brain, Bot,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Section, SectionHeading, GlassCard } from '@/components/primitives';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { journeyMilestones } from '@/content/data';
import { DURATION, EASING } from '@/config/motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

/**
 * Journey
 * ---------------------------------------------------------------------------
 * Rebuilt to match the Dribbble timeline look: vertical connector line,
 * large watermark outlines, and alternating glow cards.
 */

const iconMap: Record<string, LucideIcon> = {
  Smartphone, Layers, Flame, Palette, Users, Workflow, Brain, Bot,
};

export function Journey() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(timelineRef, { once: true, margin: '-100px' });
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section id="journey" className="overflow-hidden">
      <AnimatedSection className="relative z-10">
        <SectionHeading
          align="center"
          eyebrow="Chronology"
          title={
            <>
              from mobile roots to{' '}
              <span className="italic-accent font-serif italic text-brand-violet block mt-1">
                autonomous agents
              </span>
            </>
          }
          description="A chronological timeline of my professional growth and skill acquisition."
        />
      </AnimatedSection>

      {/* Timeline Wrapper */}
      <div ref={timelineRef} className="relative mt-16 md:mt-24 z-10">
        {/* Large Backdrop Watermark Text */}
        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0 overflow-hidden opacity-5">
          <span className="font-display text-[22vw] leading-none text-fg uppercase tracking-widest">
            HISTORY
          </span>
        </div>

        {/* Vertical Center Line */}
        <div className="absolute top-0 left-4 h-full w-px md:left-1/2 md:-translate-x-px" aria-hidden="true">
          <motion.div
            className="h-full w-full origin-top"
            style={{ backgroundImage: 'var(--gradient-signature)' }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: isInView ? 1 : 0 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 1.8, ease: EASING.outSoft, delay: 0.3 }
            }
          />
        </div>

        {/* Milestones list */}
        <div className="relative z-10 space-y-8 md:space-y-16">
          {journeyMilestones.map((milestone, i) => {
            const Icon = iconMap[milestone.icon] ?? Brain;
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : {
                        duration: DURATION.slow,
                        ease: EASING.outSoft,
                        delay: 0.4 + i * 0.12,
                      }
                }
                className={`relative flex items-start gap-6 pl-12 md:gap-0 md:pl-0 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Connector Dot */}
                <div
                  className="absolute left-2.5 top-3.5 z-10 size-4 rounded-full border-2 border-[var(--brand-blue)] bg-[var(--surface-base)] md:left-1/2 md:-translate-x-1/2 transition-colors duration-300 group-hover:bg-primary"
                  style={{
                    boxShadow: isLeft
                      ? '0 0 10px rgba(6, 182, 212, 0.6)'
                      : '0 0 10px rgba(249, 115, 22, 0.6)',
                  }}
                  aria-hidden="true"
                />

                {/* Milestone Card */}
                <div className={`md:w-[calc(50%-2.5rem)] ${isLeft ? 'md:pr-0 md:text-right' : 'md:pl-0 md:text-left'}`}>
                  <GlassCard
                    padding="md"
                    interactive
                    className={`group border-[var(--border-muted)] ${
                      isLeft ? 'glow-cyan' : 'glow-orange'
                    }`}
                  >
                    <div className={`flex items-start gap-4 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                      <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-[var(--glass-subtle-fill)] border border-[var(--glass-subtle-border)] transition-colors duration-200 group-hover:bg-primary/10">
                        <Icon className="size-5 text-fg-secondary transition-colors duration-200 group-hover:text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-brand-violet text-caption mb-1 block font-mono font-semibold">
                          {milestone.year}
                        </span>
                        <h3 className="text-fg text-heading-m mb-2 font-display font-semibold uppercase tracking-wider">
                          {milestone.title}
                        </h3>
                        <p className="text-fg-secondary text-body-s leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </div>

                {/* Spacer */}
                <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

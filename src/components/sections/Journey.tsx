'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import {
  Smartphone, Layers, Flame, Palette, Users, Workflow, Brain, Bot,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Section, SectionHeading, GlassCard, GradientText } from '@/components/primitives';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { journeyMilestones } from '@/content/data';
import { DURATION, EASING } from '@/config/motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

/**
 * Journey
 * ---------------------------------------------------------------------------
 * Interactive vertical timeline showing the career progression with animated
 * connector line and glass milestone cards.
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
      <AnimatedSection>
        <SectionHeading
          align="center"
          eyebrow="My Journey"
          title={
            <>
              The path to{' '}
              <GradientText>building AI</GradientText>
            </>
          }
          description="Every step was a building block — from mobile apps to intelligent agents."
        />
      </AnimatedSection>

      {/* Timeline */}
      <div ref={timelineRef} className="relative mt-16 md:mt-20">
        {/* Vertical Line */}
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

        {/* Milestones */}
        <div className="space-y-8 md:space-y-12">
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
                {/* Dot */}
                <div
                  className="absolute left-2.5 top-2 z-10 size-3 rounded-full border-2 border-[var(--brand-blue)] bg-[var(--surface-base)] md:left-1/2 md:-translate-x-1/2"
                  aria-hidden="true"
                />

                {/* Card */}
                <div className={`md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-0 md:text-right' : 'md:pl-0 md:text-left'}`}>
                  <GlassCard padding="md" interactive className="group">
                    <div className={`flex items-start gap-4 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                      <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-200 group-hover:bg-primary/20">
                        <Icon className="size-5 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-fg-muted text-caption mb-1 block font-mono">
                          {milestone.year}
                        </span>
                        <h3 className="text-fg text-heading-m mb-2 font-display font-semibold">
                          {milestone.title}
                        </h3>
                        <p className="text-fg-secondary text-body-s leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

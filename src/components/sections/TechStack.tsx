'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import {
  FileCode, Component, Globe, Paintbrush, Smartphone, Server,
  Flame, Database, Workflow, Link, Brain, Container as ContainerIcon,
  GitBranch, Triangle, Figma,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Section, SectionHeading, GradientText } from '@/components/primitives';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { techStack } from '@/content/data';
import { DURATION, EASING } from '@/config/motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

/**
 * TechStack
 * ---------------------------------------------------------------------------
 * Animated grid of technology icons grouped by category with hover effects.
 */

const iconMap: Record<string, LucideIcon> = {
  FileCode, Component, Globe, Paintbrush, Smartphone, Server,
  Flame, Database, Workflow, Link, Brain, Container: ContainerIcon,
  GitBranch, Triangle, Figma,
};

// Category colors for subtle visual grouping
const categoryColors: Record<string, string> = {
  Language: 'var(--brand-blue)',
  Frontend: 'var(--brand-cyan)',
  Mobile: 'var(--success)',
  Backend: 'var(--brand-violet)',
  Database: 'var(--warning)',
  Automation: 'var(--error)',
  AI: 'var(--brand-blue)',
  DevOps: 'var(--info)',
  Design: 'var(--brand-violet)',
};

export function TechStack() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, margin: '-60px' });
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section id="tech-stack" className="overflow-hidden">
      <AnimatedSection>
        <SectionHeading
          align="center"
          eyebrow="Tech Stack"
          title={
            <>
              Technologies I{' '}
              <GradientText>work with</GradientText>
            </>
          }
          description="A curated set of tools and frameworks I use to build production systems."
        />
      </AnimatedSection>

      <div
        ref={gridRef}
        className="mt-12 grid grid-cols-3 gap-3 sm:grid-cols-4 md:mt-16 md:grid-cols-6 md:gap-4"
      >
        {techStack.map((tech, i) => {
          const Icon = iconMap[tech.icon] ?? FileCode;
          const color = categoryColors[tech.category] ?? 'var(--brand-blue)';

          return (
            <motion.div
              key={tech.name}
              initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.8 }}
              animate={
                isInView || prefersReducedMotion
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : {
                      duration: DURATION.base,
                      ease: EASING.outSoft,
                      delay: i * 0.04,
                    }
              }
              className="group flex flex-col items-center gap-2.5 rounded-xl border border-[var(--glass-subtle-border)] bg-[var(--glass-subtle-fill)] p-4 backdrop-blur-sm transition-all duration-200 hover:border-[var(--border-strong)] hover:bg-[var(--glass-base-fill)] hover:shadow-[var(--shadow-soft)] md:p-5"
            >
              <div
                className="inline-flex size-10 items-center justify-center rounded-lg transition-colors duration-200 md:size-12"
                style={{ backgroundColor: `color-mix(in srgb, ${color} 12%, transparent)` }}
              >
                <Icon
                  className="size-5 transition-colors duration-200 md:size-6"
                  style={{ color }}
                />
              </div>
              <span className="text-fg-secondary text-caption text-center font-medium transition-colors duration-150 group-hover:text-fg">
                {tech.name}
              </span>
              <span className="text-fg-muted hidden text-[0.625rem] font-mono uppercase tracking-wider md:block">
                {tech.category}
              </span>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

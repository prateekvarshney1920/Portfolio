'use client';

import { Brain, Workflow, Monitor, Server, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Section, SectionHeading, GlassCard } from '@/components/primitives';
import { SkillBar } from '@/components/primitives/SkillBar';
import { AnimatedSection, AnimatedItem } from '@/components/ui/AnimatedSection';
import { skillCategories } from '@/content/data';

/**
 * Skills
 * ---------------------------------------------------------------------------
 * Rebuilt to match the Dribbble reference design: orbital layout with
 * a central cosmic glowing ring, surrounded by styled skill categories.
 */

const iconMap: Record<string, LucideIcon> = { Brain, Workflow, Monitor, Server };

export function Skills() {
  // Let's divide categories to lay them out around a center card on desktop
  const firstHalf = skillCategories.slice(0, 2);
  const secondHalf = skillCategories.slice(2, 4);

  return (
    <Section id="skills" className="relative overflow-hidden">
      {/* Background Neon Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-[100px]"
        style={{ backgroundImage: 'var(--gradient-signature)' }}
        aria-hidden="true"
      />

      <AnimatedSection>
        <SectionHeading
          align="center"
          eyebrow="Competence"
          title={
            <>
              core areas of{' '}
              <span className="italic-accent font-serif italic text-brand-violet block mt-1">
                expertise
              </span>
            </>
          }
          description="A multi-disciplinary skill set spanning AI agents, workflow automation, and modern web tech."
        />
      </AnimatedSection>

      {/* Skills Grid */}
      <div className="mt-12 grid gap-6 md:mt-20 lg:grid-cols-3 lg:items-center">
        {/* Left Columns (AI & Automation) */}
        <AnimatedSection stagger className="space-y-6">
          {firstHalf.map((category) => {
            const Icon = iconMap[category.icon] ?? Brain;
            return (
              <AnimatedItem key={category.name}>
                <GlassCard padding="lg" className="group border-[var(--border-muted)] glow-cyan">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="inline-flex size-9 items-center justify-center rounded-lg bg-[var(--glass-subtle-fill)] border border-[var(--glass-subtle-border)] transition-colors duration-200 group-hover:bg-primary/10">
                      <Icon className="size-4 text-primary" />
                    </div>
                    <h3 className="text-fg text-heading-m font-display font-semibold uppercase tracking-wider">
                      {category.name}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                    ))}
                  </div>
                </GlassCard>
              </AnimatedItem>
            );
          })}
        </AnimatedSection>

        {/* Center Cosmic Ring (Desktop Only) */}
        <div className="hidden lg:flex flex-col items-center justify-center py-10 relative">
          {/* Orbital Circle Border */}
          <div className="relative size-64 rounded-full border border-dashed border-[var(--border-strong)] flex items-center justify-center animate-[spin_40s_linear_infinite]">
            <div className="absolute top-0 size-3 rounded-full bg-brand-blue shadow-[0_0_10px_#06b6d4]" />
            <div className="absolute bottom-0 size-3 rounded-full bg-brand-violet shadow-[0_0_10px_#f97316]" />
          </div>

          {/* Central Glowing Core Card */}
          <div className="absolute size-48 rounded-full border border-[var(--border-muted)] bg-[var(--surface-raised)] p-6 flex flex-col items-center justify-center text-center shadow-2xl glow-orange">
            <Sparkles className="size-6 text-brand-violet animate-pulse mb-3" />
            <span className="font-display text-2xl uppercase tracking-wider leading-none text-fg">
              AGENT
            </span>
            <span className="italic-accent font-serif italic text-brand-blue lowercase leading-none mt-1">
              architecture
            </span>
            <span className="font-mono text-[9px] text-fg-muted uppercase tracking-widest mt-3">
              ready to build
            </span>
          </div>
        </div>

        {/* Right Columns (Frontend & Backend) */}
        <AnimatedSection stagger className="space-y-6">
          {secondHalf.map((category) => {
            const Icon = iconMap[category.icon] ?? Brain;
            return (
              <AnimatedItem key={category.name}>
                <GlassCard padding="lg" className="group border-[var(--border-muted)] glow-orange">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="inline-flex size-9 items-center justify-center rounded-lg bg-[var(--glass-subtle-fill)] border border-[var(--glass-subtle-border)] transition-colors duration-200 group-hover:bg-primary/10">
                      <Icon className="size-4 text-primary" />
                    </div>
                    <h3 className="text-fg text-heading-m font-display font-semibold uppercase tracking-wider">
                      {category.name}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                    ))}
                  </div>
                </GlassCard>
              </AnimatedItem>
            );
          })}
        </AnimatedSection>
      </div>
    </Section>
  );
}

'use client';

import { Brain, Workflow, Monitor, Server } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Section, SectionHeading, GlassCard, GradientText } from '@/components/primitives';
import { SkillBar } from '@/components/primitives/SkillBar';
import { AnimatedSection, AnimatedItem } from '@/components/ui/AnimatedSection';
import { skillCategories } from '@/content/data';

/**
 * Skills
 * ---------------------------------------------------------------------------
 * Categorised skill grid with animated progress bars inside glassmorphism
 * cards.
 */

const iconMap: Record<string, LucideIcon> = { Brain, Workflow, Monitor, Server };

export function Skills() {
  return (
    <Section id="skills">
      <AnimatedSection>
        <SectionHeading
          align="center"
          eyebrow="Skills"
          title={
            <>
              Tools of the{' '}
              <GradientText>trade</GradientText>
            </>
          }
          description="A constantly expanding toolkit honed across mobile, web, automation, and AI."
        />
      </AnimatedSection>

      <AnimatedSection stagger className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2">
        {skillCategories.map((category) => {
          const Icon = iconMap[category.icon] ?? Brain;

          return (
            <AnimatedItem key={category.name}>
              <GlassCard padding="lg" className="group h-full">
                {/* Category Header */}
                <div className="mb-6 flex items-center gap-3">
                  <div className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-200 group-hover:bg-primary/20">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <h3 className="text-fg text-heading-m font-display font-semibold">
                    {category.name}
                  </h3>
                </div>

                {/* Skill Bars */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
                </div>
              </GlassCard>
            </AnimatedItem>
          );
        })}
      </AnimatedSection>
    </Section>
  );
}

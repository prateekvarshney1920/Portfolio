'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { cn } from '@/lib/utils';
import { DURATION, EASING } from '@/config/motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

/**
 * SkillBar
 * ---------------------------------------------------------------------------
 * Animated horizontal progress bar for skills visualization. The bar fills
 * to the given `level` percentage once it scrolls into view.
 *
 * @example
 * <SkillBar name="TypeScript" level={90} />
 */
export interface SkillBarProps {
  name: string;
  level: number;
  className?: string;
}

export function SkillBar({ name, level, className }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const prefersReducedMotion = useReducedMotion();

  return (
    <div ref={ref} className={cn('space-y-2', className)}>
      <div className="flex items-center justify-between">
        <span className="text-body-s text-fg font-medium">{name}</span>
        <span className="text-caption text-fg-muted font-mono">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--glass-subtle-fill)]">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundImage: 'var(--gradient-signature)' }}
          initial={{ width: 0 }}
          animate={{ width: isInView || prefersReducedMotion ? `${level}%` : 0 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: DURATION.cinematic, ease: EASING.outSoft, delay: 0.1 }
          }
        />
      </div>
    </div>
  );
}

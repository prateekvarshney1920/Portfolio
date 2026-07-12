'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants, type UseInViewOptions } from 'motion/react';

import { DURATION, EASING, STAGGER } from '@/config/motion';

/**
 * AnimatedSection
 * ---------------------------------------------------------------------------
 * Scroll-triggered reveal wrapper. Wraps children in a Framer `motion.div`
 * that fades/slides in once it enters the viewport. Respects reduced-motion.
 *
 * @example
 * <AnimatedSection>…content…</AnimatedSection>
 * <AnimatedSection animation="slideUp" delay={0.2}>…</AnimatedSection>
 */

type AnimationPreset = 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale';

const presets: Record<AnimationPreset, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
};

export interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationPreset;
  delay?: number;
  /** Viewport margin — trigger before element is fully visible */
  margin?: UseInViewOptions['margin'];
  /** Stagger children automatically */
  stagger?: boolean;
}

export function AnimatedSection({
  children,
  className,
  animation = 'fadeUp',
  delay = 0,
  margin = '-80px',
  stagger = false,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin });
  const variants = presets[animation];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={
        stagger
          ? {
              hidden: {},
              visible: { transition: { staggerChildren: STAGGER.base } },
            }
          : variants
      }
      transition={{
        duration: DURATION.slow,
        ease: EASING.outSoft,
        delay,
      }}
      className={className}
    >
      {stagger
        ? children
        : children}
    </motion.div>
  );
}

/**
 * AnimatedItem — child of a staggered AnimatedSection.
 */
export function AnimatedItem({
  children,
  className,
  animation = 'fadeUp',
}: {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationPreset;
}) {
  return (
    <motion.div
      variants={presets[animation]}
      transition={{
        duration: DURATION.slow,
        ease: EASING.outSoft,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

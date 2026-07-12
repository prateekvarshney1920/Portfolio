import type { Transition } from 'motion/react';

/**
 * Motion tokens (Design System §6). The single source of truth for JS-driven
 * animation. CSS-driven motion reads the matching `--dur-*` / `--ease-*`
 * variables from globals.css so the two systems stay in lockstep.
 */

/** Durations in seconds (Framer Motion uses seconds, not ms). */
export const DURATION = {
  instant: 0.1,
  fast: 0.15,
  base: 0.3,
  slow: 0.6,
  cinematic: 0.9,
} as const;

/** Cubic-bezier easing curves as 4-tuples (Framer Motion `ease`). */
export const EASING: Record<'standard' | 'inOut' | 'outSoft', [number, number, number, number]> = {
  standard: [0.22, 1, 0.36, 1],
  inOut: [0.65, 0, 0.35, 1],
  outSoft: [0.16, 1, 0.3, 1],
};

/** Spring presets. */
export const SPRING = {
  snappy: { type: 'spring', stiffness: 400, damping: 30, mass: 1 },
  smooth: { type: 'spring', stiffness: 200, damping: 26, mass: 1 },
  gentle: { type: 'spring', stiffness: 120, damping: 20, mass: 1 },
  bouncy: { type: 'spring', stiffness: 300, damping: 14, mass: 1 },
} as const satisfies Record<string, Transition>;

/** Stagger intervals in seconds. */
export const STAGGER = {
  tight: 0.04,
  base: 0.07,
  loose: 0.1,
} as const;

/** House default transition applied globally via MotionConfig. */
export const DEFAULT_TRANSITION: Transition = {
  duration: DURATION.base,
  ease: EASING.standard,
};

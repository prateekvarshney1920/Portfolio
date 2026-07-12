'use client';

import { useReducedMotion as useFramerReducedMotion } from 'motion/react';

/**
 * SSR-safe reduced-motion preference.
 *
 * Wraps Framer Motion's hook to always return a boolean (it returns `null`
 * before hydration). Returning `false` during SSR/first paint means the full
 * experience is the default and we only *reduce* once we positively detect the
 * user preference on the client — never a flash of missing content.
 */
export function useReducedMotion(): boolean {
  return useFramerReducedMotion() ?? false;
}

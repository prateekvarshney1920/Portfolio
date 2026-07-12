'use client';

import { MotionConfig } from 'motion/react';
import type { ReactNode } from 'react';
import { DEFAULT_TRANSITION } from '@/config/motion';

/**
 * Applies the house default transition to every Framer Motion animation and
 * defers to the OS "reduce motion" setting via `reducedMotion="user"`, so any
 * transform/layout animation is automatically neutralised when the user asks.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={DEFAULT_TRANSITION}>
      {children}
    </MotionConfig>
  );
}

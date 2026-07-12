'use client';

import type { ReactNode } from 'react';
import { MotionProvider } from './motion-provider';
import { SmoothScrollProvider } from './smooth-scroll-provider';

/**
 * Single composition point for all client-side providers. Add future providers
 * (analytics, cursor context, etc.) here so the root layout stays a clean
 * server component.
 */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <MotionProvider>
      <SmoothScrollProvider>{children}</SmoothScrollProvider>
    </MotionProvider>
  );
}

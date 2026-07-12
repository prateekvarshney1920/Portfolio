'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

/**
 * PageLoader
 * ---------------------------------------------------------------------------
 * Cinematic boot sequence that plays on initial page load.
 * Shows a staggered text sequence, then fades out with a soft flash
 * to reveal the Hero. Self-destructs after completion.
 */

const BOOT_LINES = [
  'Initializing Experience',
  'Loading Assets',
  'Preparing Interface',
  'Optimizing Motion',
  'Ready',
] as const;

export function PageLoader() {
  const prefersReducedMotion = useReducedMotion();
  const [currentLine, setCurrentLine] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isUnmounted, setIsUnmounted] = useState(false);

  useEffect(() => {
    // Skip loader entirely for reduced motion
    if (prefersReducedMotion) {
      setIsUnmounted(true);
      return;
    }

    const timings = [400, 400, 400, 350, 500]; // ms per line
    let elapsed = 0;

    const timers = timings.map((t, i) => {
      elapsed += t;
      return setTimeout(() => setCurrentLine(i), elapsed);
    });

    // Start flash + fade out
    const flashTimer = setTimeout(() => {
      setIsComplete(true);
    }, elapsed + 300);

    // Unmount
    const unmountTimer = setTimeout(() => {
      setIsUnmounted(true);
    }, elapsed + 900);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(flashTimer);
      clearTimeout(unmountTimer);
    };
  }, [prefersReducedMotion]);

  if (isUnmounted) return null;

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[var(--neutral-950)]"
        >
          {/* Boot text */}
          <div className="flex flex-col items-center gap-3">
            {BOOT_LINES.map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 8 }}
                animate={
                  i <= currentLine
                    ? { opacity: i === currentLine ? 1 : 0.25, y: 0 }
                    : { opacity: 0, y: 8 }
                }
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className={`font-mono text-xs uppercase tracking-[0.3em] select-none ${
                  i === currentLine ? 'text-fg' : 'text-fg-muted'
                }`}
              >
                {line}
                {i < BOOT_LINES.length - 1 && i <= currentLine && (
                  <span className="text-fg-muted">...</span>
                )}
              </motion.span>
            ))}
          </div>

          {/* Progress line */}
          <motion.div
            className="absolute bottom-1/3 left-1/2 h-[1px] -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--brand-blue)] to-transparent"
            initial={{ width: 0, opacity: 0 }}
            animate={{
              width: `${((currentLine + 1) / BOOT_LINES.length) * 120}px`,
              opacity: 0.6,
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Flash overlay */}
          <motion.div
            className="pointer-events-none absolute inset-0 bg-white"
            initial={{ opacity: 0 }}
            animate={isComplete ? { opacity: 0.06 } : { opacity: 0 }}
            transition={{ duration: 0.15 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

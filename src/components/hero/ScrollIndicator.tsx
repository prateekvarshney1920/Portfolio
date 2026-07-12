'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

/**
 * ScrollIndicator
 * ---------------------------------------------------------------------------
 * Premium circular scroll indicator with animated ring, breathing pulse,
 * glowing chevron, and auto-fade on scroll.
 */
export function ScrollIndicator({ onClick }: { onClick?: () => void }) {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();

  // Fade out as user scrolls (0–200px → opacity 1–0)
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.2, duration: 0.8 }}
      style={{ opacity }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 z-10"
    >
      <button
        type="button"
        onClick={onClick}
        className="group relative flex items-center justify-center focus:outline-none"
        aria-label="Scroll to content"
        style={{
          animation: prefersReducedMotion ? 'none' : 'scroll-breathe 4s ease-in-out infinite',
        }}
      >
        {/* Animated Ring */}
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          className="absolute"
          aria-hidden="true"
        >
          <circle
            cx="24"
            cy="24"
            r="22"
            fill="none"
            stroke="rgba(6, 182, 212, 0.15)"
            strokeWidth="1"
          />
          <circle
            cx="24"
            cy="22"
            r="22"
            fill="none"
            stroke="rgba(6, 182, 212, 0.5)"
            strokeWidth="1.5"
            strokeDasharray="138"
            strokeDashoffset="138"
            strokeLinecap="round"
            style={{
              animation: prefersReducedMotion ? 'none' : 'scroll-ring-spin 3s ease-out forwards',
            }}
          />
        </svg>

        {/* Glowing Chevron Arrow */}
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="relative"
          style={{
            animation: prefersReducedMotion ? 'none' : 'scroll-arrow-bounce 2s ease-in-out infinite',
            filter: 'drop-shadow(0 0 4px rgba(6, 182, 212, 0.4))',
          }}
          aria-hidden="true"
        >
          <path
            d="M2 5L7 10L12 5"
            stroke="rgba(6, 182, 212, 0.8)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <span
        className="font-mono text-[9px] uppercase tracking-[0.25em] text-fg-muted mt-1 select-none"
        style={{ opacity: 0.6 }}
      >
        scroll
      </span>
    </motion.div>
  );
}

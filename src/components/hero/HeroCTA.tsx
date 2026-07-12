'use client';

import React, { useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

/**
 * HeroCTA
 * ---------------------------------------------------------------------------
 * Premium CTA buttons for the Hero section with magnetic hover, gradient
 * border, ripple effect, spring physics, and animated arrow.
 * This is a Hero-specific component — does NOT modify the global Button primitive.
 */

interface HeroCTAProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  icon?: boolean;
  'data-cursor-text'?: string;
}

export function HeroCTA({
  children,
  variant = 'primary',
  onClick,
  icon = false,
  ...props
}: HeroCTAProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Magnetic hover tracking
  const magnetX = useMotionValue(0);
  const magnetY = useMotionValue(0);
  const springX = useSpring(magnetX, { stiffness: 200, damping: 20 });
  const springY = useSpring(magnetY, { stiffness: 200, damping: 20 });

  // Ripple state
  const rippleX = useMotionValue(0);
  const rippleY = useMotionValue(0);
  const rippleScale = useMotionValue(0);
  const rippleOpacity = useMotionValue(0);

  // Glow intensity
  const glowOpacity = useMotionValue(0);
  const springGlow = useSpring(glowOpacity, { stiffness: 300, damping: 25 });
  const glowShadow = useTransform(
    springGlow,
    [0, 1],
    variant === 'primary'
      ? ['0 0 0px rgba(6, 182, 212, 0)', '0 4px 30px rgba(6, 182, 212, 0.3), 0 0 60px rgba(6, 182, 212, 0.15)']
      : ['0 0 0px rgba(255, 255, 255, 0)', '0 4px 24px rgba(255, 255, 255, 0.08), 0 0 40px rgba(255, 255, 255, 0.04)']
  );

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (prefersReducedMotion) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    // Magnetic pull (subtle — max 4px)
    magnetX.set(distX * 0.06);
    magnetY.set(distY * 0.06);
  }, [prefersReducedMotion, magnetX, magnetY]);

  const handleMouseEnter = useCallback(() => {
    glowOpacity.set(1);
  }, [glowOpacity]);

  const handleMouseLeave = useCallback(() => {
    magnetX.set(0);
    magnetY.set(0);
    glowOpacity.set(0);
  }, [magnetX, magnetY, glowOpacity]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (!prefersReducedMotion && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      rippleX.set(e.clientX - rect.left);
      rippleY.set(e.clientY - rect.top);
      rippleScale.set(0);
      rippleOpacity.set(0.35);

      // Animate ripple
      requestAnimationFrame(() => {
        rippleScale.set(4);
        rippleOpacity.set(0);
      });
    }
    onClick?.();
  }, [prefersReducedMotion, onClick, rippleX, rippleY, rippleScale, rippleOpacity]);

  const isPrimary = variant === 'primary';

  return (
    <motion.button
      ref={ref}
      type="button"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        x: springX,
        y: springY,
        boxShadow: glowShadow,
      }}
      whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
      whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      className={`
        group relative inline-flex items-center justify-center gap-2.5 overflow-hidden
        rounded-xl px-7 py-3.5 font-medium text-[1.05rem] select-none
        transition-[border-color] duration-300
        ${isPrimary
          ? 'bg-gradient-to-r from-[#06b6d4] to-[#0891b2] text-[var(--text-on-primary)] border border-[rgba(6,182,212,0.3)]'
          : 'glass text-fg border border-[var(--glass-base-border)] hover:border-[var(--border-strong)]'
        }
      `}
      {...props}
    >
      {/* Animated gradient border (primary only) */}
      {isPrimary && (
        <span
          className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(120deg, rgba(6,182,212,0.4), rgba(249,115,22,0.3), rgba(6,182,212,0.4))',
            backgroundSize: '200% 100%',
            animation: 'aurora-gradient-shift 3s ease infinite',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            WebkitMaskComposite: 'xor',
            padding: '1.5px',
          }}
          aria-hidden="true"
        />
      )}

      {/* Ripple effect */}
      <motion.span
        className="pointer-events-none absolute rounded-full bg-white/20"
        style={{
          left: rippleX,
          top: rippleY,
          width: 20,
          height: 20,
          x: -10,
          y: -10,
          scale: rippleScale,
          opacity: rippleOpacity,
        }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        aria-hidden="true"
      />

      {/* Button content */}
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        {icon && (
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
    </motion.button>
  );
}

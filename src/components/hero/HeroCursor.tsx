'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

/**
 * HeroCursor
 * ---------------------------------------------------------------------------
 * Custom glowing cursor rendered only inside the Hero section.
 * - Small glowing circle following mouse with spring physics
 * - Expands on hover over interactive elements
 * - Shows context labels (CONNECT, EXPLORE) on specific targets
 * - Hidden on touch devices and reduced motion
 */
export function HeroCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isTouch, setIsTouch] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 40, mass: 0.3 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 40, mass: 0.3 });

  // Detect touch device
  useEffect(() => {
    const hasTouchPoints = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouch(hasTouchPoints);
  }, []);

  // Track mouse position within Hero
  const handleMouseMove = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);

    // Check if hovering over specific interactive elements
    const target = e.target as HTMLElement;
    const ctaEl = target.closest('[data-cursor-text]') as HTMLElement | null;
    if (ctaEl) {
      setIsHovering(true);
      setCursorText(ctaEl.getAttribute('data-cursor-text') || '');
    } else if (target.closest('a, button')) {
      setIsHovering(true);
      setCursorText('');
    } else {
      setIsHovering(false);
      setCursorText('');
    }
  }, [cursorX, cursorY]);

  // Use IntersectionObserver to show/hide cursor
  useEffect(() => {
    if (prefersReducedMotion || isTouch) return;

    const hero = document.getElementById('hero');
    if (!hero) return;
    heroRef.current = hero;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry?.isIntersecting ?? false);
      },
      { threshold: 0.1 }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, [prefersReducedMotion, isTouch]);

  // Bind mouse events
  useEffect(() => {
    if (!isVisible || prefersReducedMotion || isTouch) return;

    const hero = heroRef.current;
    if (!hero) return;

    hero.classList.add('hero-cursor-none');
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      hero.classList.remove('hero-cursor-none');
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isVisible, prefersReducedMotion, isTouch, handleMouseMove]);

  // Don't render on touch devices or reduced motion
  if (prefersReducedMotion || isTouch || !isVisible) return null;

  const size = isHovering ? 48 : 14;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[var(--z-cursor)] pointer-events-none mix-blend-difference"
      style={{
        x: springX,
        y: springY,
      }}
    >
      <motion.div
        animate={{
          width: size,
          height: size,
          x: -size / 2,
          y: -size / 2,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className="flex items-center justify-center rounded-full border border-[rgba(6,182,212,0.5)] bg-[rgba(6,182,212,0.08)]"
        style={{
          animation: 'cursor-pulse 2s ease-in-out infinite',
          backdropFilter: 'blur(2px)',
        }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="font-mono text-[7px] uppercase tracking-[0.15em] text-[rgba(6,182,212,0.9)] whitespace-nowrap select-none"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}

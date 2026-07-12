'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, ArrowRight } from 'lucide-react';

import { personalInfo } from '@/content/data';
import { GradientText, Button, Container } from '@/components/primitives';
import { DURATION, EASING } from '@/config/motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

/**
 * Hero
 * ---------------------------------------------------------------------------
 * Full-viewport hero with aurora gradient background, animated role rotation,
 * shimmering gradient title, CTA buttons, and a scroll indicator.
 */
export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Aurora Background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: 'var(--gradient-aurora)' }}
        aria-hidden="true"
      />

      {/* Floating orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute -top-32 -left-32 size-96 rounded-full opacity-20 blur-[100px]"
          style={{ background: 'var(--brand-blue)' }}
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute -right-32 -bottom-32 size-96 rounded-full opacity-15 blur-[100px]"
          style={{ background: 'var(--brand-violet)' }}
          animate={{ x: [0, -40, 0], y: [0, -60, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-1/3 left-1/2 size-64 -translate-x-1/2 rounded-full opacity-10 blur-[80px]"
          style={{ background: 'var(--brand-cyan)' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.18, 0.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <Container className="relative z-[1] flex flex-col items-center text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.slow, ease: EASING.outSoft, delay: 0.2 }}
        >
          <span className="text-fg-muted mb-6 inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase md:mb-8 md:text-sm">
            <span className="bg-success inline-block size-2 rounded-full" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.slow, ease: EASING.outSoft, delay: 0.35 }}
          className="font-display text-display-xl mb-4 font-bold tracking-tight md:mb-6"
        >
          <GradientText animate="shimmer">
            {personalInfo.name}
          </GradientText>
        </motion.h1>

        {/* Animated Role Rotation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.slow, ease: EASING.outSoft, delay: 0.5 }}
          className="mb-6 h-10 md:mb-8 md:h-12"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: DURATION.base, ease: EASING.standard }}
              className="text-fg-secondary block text-xl font-medium md:text-2xl lg:text-3xl"
            >
              {personalInfo.roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.slow, ease: EASING.outSoft, delay: 0.65 }}
          className="text-fg-secondary text-body-l mb-10 max-w-xl leading-relaxed md:mb-12"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.slow, ease: EASING.outSoft, delay: 0.8 }}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            onClick={() => handleScroll('#projects')}
          >
            View My Work
            <ArrowRight className="size-4" />
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => handleScroll('#contact')}
          >
            Get In Touch
          </Button>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: DURATION.slow }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          type="button"
          onClick={() => handleScroll('#about')}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-fg-muted hover:text-fg flex flex-col items-center gap-2 transition-colors"
          aria-label="Scroll to content"
        >
          <span className="text-caption font-mono uppercase tracking-widest">Scroll</span>
          <ArrowDown className="size-4" />
        </motion.button>
      </motion.div>
    </section>
  );
}

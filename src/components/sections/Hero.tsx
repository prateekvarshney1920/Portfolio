'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { personalInfo, stats } from '@/content/data';
import { Container } from '@/components/primitives';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { HeroBackground } from '@/components/hero/HeroBackground';
import { HeroCTA } from '@/components/hero/HeroCTA';
import { ScrollIndicator } from '@/components/hero/ScrollIndicator';
import { HeroCursor } from '@/components/hero/HeroCursor';

// ─── Rotating titles for the vertical slide animation ──────────────────────
const ROTATING_TITLES = [
  'AI Engineer',
  'Android Developer',
  'Automation Engineer',
  'Full Stack Developer',
];

/**
 * Hero
 * ---------------------------------------------------------------------------
 * Cinematic Apple/Linear/Vercel-grade Hero experience.
 *
 * Features:
 * - Multi-layer parallax background (HeroBackground)
 * - Cinematic portrait with rim lighting, floating animation, mouse parallax
 * - Staggered orchestrated text reveal
 * - Vertical-slide rotating titles
 * - Premium magnetic CTA buttons
 * - Custom cursor (Hero-only)
 * - Circular scroll indicator with auto-fade
 */
export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  // ── Rotating Title State ────────────────────────────────────────────────
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % ROTATING_TITLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  // ── Mouse Parallax ──────────────────────────────────────────────────────
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Parallax layers (different intensities)
  const bgX = useTransform(mouseX, [-1, 1], [2, -2]);
  const bgY = useTransform(mouseY, [-1, 1], [2, -2]);
  const portraitX = useTransform(mouseX, [-1, 1], [8, -8]);
  const portraitY = useTransform(mouseY, [-1, 1], [8, -8]);
  const headingX = useTransform(mouseX, [-1, 1], [4, -4]);
  const headingY = useTransform(mouseY, [-1, 1], [4, -4]);
  const glowX = useTransform(mouseX, [-1, 1], [10, -10]);
  const glowY = useTransform(mouseY, [-1, 1], [10, -10]);

  // Portrait perspective rotation (max 5°)
  const rotateX = useTransform(mouseY, [-1, 1], [5, -5]);
  const rotateY = useTransform(mouseX, [-1, 1], [-5, 5]);
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  // Spring for smooth parallax
  const springPortraitX = useSpring(portraitX, { stiffness: 100, damping: 20 });
  const springPortraitY = useSpring(portraitY, { stiffness: 100, damping: 20 });
  const springHeadingX = useSpring(headingX, { stiffness: 80, damping: 20 });
  const springHeadingY = useSpring(headingY, { stiffness: 80, damping: 20 });
  const springGlowX = useSpring(glowX, { stiffness: 60, damping: 18 });
  const springGlowY = useSpring(glowY, { stiffness: 60, damping: 18 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (prefersReducedMotion) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1; // -1 to 1
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    },
    [prefersReducedMotion, mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  // Smooth scroll handler
  const handleScroll = useCallback(
    (href: string) => {
      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    },
    [prefersReducedMotion]
  );

  // ── Stagger delay values ────────────────────────────────────────────────
  const D = {
    eyebrow: 0.6,
    heading1: 0.8,
    heading2: 0.95,
    roles: 1.1,
    tagline: 1.25,
    buttons: 1.4,
    stats: 1.6,
    scroll: 1.8,
  };

  return (
    <>
      <HeroCursor />
      <section
        ref={heroRef}
        id="hero"
        className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden pt-24 pb-16 md:pt-32"
        aria-label="Hero"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* ── Living Background ──────────────────────────────────────────── */}
        <motion.div style={{ x: bgX, y: bgY }}>
          <HeroBackground />
        </motion.div>

        {/* ── Foreground Glow (parallax layer) ───────────────────────────── */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-[2]"
          style={{ x: springGlowX, y: springGlowY }}
          aria-hidden="true"
        >
          <div
            className="absolute top-1/2 left-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06] blur-[80px]"
            style={{ background: 'var(--brand-blue)' }}
          />
        </motion.div>

        <Container className="relative z-[5] flex flex-col items-center text-center">
          {/* ── Eyebrow Label ──────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 15, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: D.eyebrow }}
            className="mb-6"
          >
            <span className="glass inline-flex items-center gap-2 rounded-full border border-[var(--glass-base-border)] px-4 py-1.5 font-mono text-[10px] tracking-[0.25em] uppercase text-fg-secondary">
              <span className="bg-success inline-block size-1.5 rounded-full animate-pulse" />
              available for projects
            </span>
          </motion.div>

          {/* ── Display Typography: "FROM IDEA TO impact" ──────────────── */}
          <motion.div
            className="relative mb-6 select-none"
            style={{ x: springHeadingX, y: springHeadingY }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: D.heading1 }}
              className="font-display text-[12vw] leading-[0.85] uppercase text-fg md:text-[8vw] lg:text-[7.5vw] tracking-tighter"
            >
              FROM IDEA TO
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: D.heading2 }}
              className="mt-2 text-center"
            >
              <span className="italic-accent text-[11vw] font-serif font-normal italic lowercase leading-none tracking-wide text-brand-violet md:text-[7.5vw] lg:text-[7vw]">
                impact
              </span>
            </motion.div>
          </motion.div>

          {/* ── Rotating Title + Tagline ────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: D.roles }}
            className="mb-4"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-fg-secondary flex items-center justify-center gap-1.5">
              {personalInfo.name} —{' '}
              <span className="relative inline-block h-[1.4em] w-[180px] overflow-hidden text-left">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={titleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-0 text-brand-blue font-semibold whitespace-nowrap"
                  >
                    {ROTATING_TITLES[titleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: D.tagline }}
            className="text-fg-muted mb-8 max-w-xl text-body-s leading-relaxed md:text-body-m"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* ── Cinematic Portrait ──────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, filter: 'blur(20px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{
              type: 'spring',
              stiffness: 120,
              damping: 20,
              mass: 1,
              delay: D.heading1 - 0.2,
            }}
            style={{
              x: springPortraitX,
              y: springPortraitY,
              rotateX: springRotateX,
              rotateY: springRotateY,
              transformPerspective: 800,
            }}
            className="relative mb-10"
            data-cursor-text="EXPLORE"
          >
            {/* Blue Rim Light (left) */}
            <div
              className="pointer-events-none absolute -left-3 top-4 bottom-4 w-1 rounded-full opacity-60 blur-[6px]"
              style={{ background: 'var(--brand-blue)' }}
              aria-hidden="true"
            />
            {/* Orange Accent Light (right) */}
            <div
              className="pointer-events-none absolute -right-3 top-4 bottom-4 w-1 rounded-full opacity-40 blur-[6px]"
              style={{ background: 'var(--brand-violet)' }}
              aria-hidden="true"
            />
            {/* Outer Glow Bloom */}
            <div
              className="pointer-events-none absolute -inset-4 rounded-[120px] opacity-20 blur-[40px]"
              style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)' }}
              aria-hidden="true"
            />

            {/* Portrait Image Frame */}
            <div
              className="relative z-10 overflow-hidden rounded-t-[100px] rounded-b-[20px] border border-[var(--border-muted)] bg-neutral-900 p-2 shadow-xl"
              style={{
                animation: prefersReducedMotion ? 'none' : 'hero-portrait-float 6s ease-in-out infinite',
              }}
            >
              {/* Glass Reflection */}
              <div className="absolute inset-0 z-20 rounded-t-[100px] rounded-b-[20px] pointer-events-none border border-transparent shadow-[inset_0_0_12px_rgba(255,255,255,0.05)]" />
              {/* Blue rim border */}
              <div className="absolute top-0 bottom-0 left-0 w-1/2 z-20 rounded-tl-[100px] rounded-bl-[20px] pointer-events-none border-l-2 border-t-2 border-[rgba(6,182,212,0.6)] shadow-[inset_12px_12px_12px_-12px_rgba(6,182,212,0.2)]" />
              {/* Orange rim border */}
              <div className="absolute top-0 bottom-0 right-0 w-1/2 z-20 rounded-tr-[100px] rounded-br-[20px] pointer-events-none border-r-2 border-b-2 border-[rgba(249,115,22,0.5)] shadow-[inset_-12px_-12px_12px_-12px_rgba(249,115,22,0.2)]" />

              <div className="relative size-56 overflow-hidden rounded-t-[100px] rounded-b-[16px] md:size-64">
                <Image
                  src="/images/portrait.png"
                  alt="Prateek Varshney portrait"
                  fill
                  priority
                  className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 224px, 256px"
                />
              </div>
            </div>

            {/* Left Floating Spinning Text Badge */}
            <div className="absolute -left-16 bottom-6 z-20 hidden md:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: D.stats, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="glass flex size-24 items-center justify-center rounded-full border border-[var(--glass-base-border)] shadow-lg glow-cyan"
              >
                <svg viewBox="0 0 100 100" className="size-20 rotate-infinite select-none">
                  <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                  <text className="fill-fg font-mono text-[7px] uppercase tracking-[0.16em] font-medium">
                    <textPath href="#circlePath" startOffset="0%">
                      AI ENGINEER • ANDROID DEVELOPER • AUTOMATION •
                    </textPath>
                  </text>
                </svg>
                <Sparkles className="absolute size-4 text-brand-blue" />
              </motion.div>
            </div>

            {/* Right Floating Metric Card */}
            <div className="absolute -right-16 top-10 z-20 hidden md:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: D.stats + 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="glass rounded-xl border border-[var(--glass-base-border)] p-3 shadow-lg glow-orange flex flex-col items-center"
              >
                <span className="font-display text-2xl text-brand-violet font-bold leading-none">
                  {stats.find((s) => s.label.toLowerCase().includes('project'))?.value ?? '6+'}
                </span>
                <span className="font-mono text-[9px] text-fg-muted uppercase tracking-wider mt-1">projects live</span>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Action CTAs ────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: D.buttons }}
            className="flex flex-col items-center gap-4 sm:flex-row"
          >
            <HeroCTA
              variant="primary"
              icon
              onClick={() => handleScroll('#projects')}
              data-cursor-text="CONNECT"
            >
              View My Work
            </HeroCTA>
            <HeroCTA
              variant="secondary"
              onClick={() => handleScroll('#contact')}
              data-cursor-text="CONNECT"
            >
              Get In Touch
            </HeroCTA>
          </motion.div>

          {/* ── Stats Bar ──────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: D.stats }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-10"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="font-display text-2xl text-fg font-bold md:text-3xl">
                  {stat.value}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-fg-muted mt-1">
                  {stat.label}
                </span>
                {i < stats.length - 1 && (
                  <span className="hidden" aria-hidden="true" />
                )}
              </div>
            ))}
          </motion.div>
        </Container>

        {/* ── Scroll Indicator ──────────────────────────────────────────── */}
        <ScrollIndicator onClick={() => handleScroll('#about')} />
      </section>
    </>
  );
}

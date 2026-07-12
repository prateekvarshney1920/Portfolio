'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react';
import { personalInfo } from '@/content/data';
import { Button, Container } from '@/components/primitives';
import { DURATION, EASING } from '@/config/motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

/**
 * Hero
 * ---------------------------------------------------------------------------
 * Rebuilt to match the premium Dribbble reference shot ("From Idea to Impact").
 * Features Bebas Neue display typography, classic serif italic elements,
 * an arched portrait with dual cyan/orange neon glows, and a spinning circular text badge.
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
      className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden pt-24 pb-16 md:pt-32"
      aria-label="Hero"
    >
      {/* Dual Neon Ambient Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Left Electric Cyan Glow */}
        <div
          className="absolute -top-40 -left-40 size-[500px] rounded-full opacity-20 blur-[120px]"
          style={{ background: 'var(--brand-blue)' }}
        />
        {/* Right Red-Orange Glow */}
        <div
          className="absolute -right-40 bottom-10 size-[500px] rounded-full opacity-15 blur-[120px]"
          style={{ background: 'var(--brand-violet)' }}
        />
      </div>

      {/* Ambient Silhouette Background Watermark */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.08] mix-blend-screen bg-cover bg-center md:bg-right-bottom select-none"
        style={{
          backgroundImage: "url('/images/portrait.png')",
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden="true"
      />

      <Container className="relative z-[1] flex flex-col items-center text-center">
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.slow, ease: EASING.outSoft, delay: 0.1 }}
          className="mb-6"
        >
          <span className="glass inline-flex items-center gap-2 rounded-full border border-[var(--glass-base-border)] px-4 py-1.5 font-mono text-[10px] tracking-[0.25em] uppercase text-fg-secondary">
            <span className="bg-success inline-block size-1.5 rounded-full animate-pulse" />
            available for projects
          </span>
        </motion.div>

        {/* Display Typography: "FROM IDEA TO impact" */}
        <div className="relative mb-8 select-none">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASING.outSoft, delay: 0.2 }}
            className="font-display text-[12vw] leading-[0.85] uppercase text-fg md:text-[8vw] lg:text-[7.5vw] tracking-tighter"
          >
            FROM IDEA TO
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASING.outSoft, delay: 0.3 }}
            className="mt-2 text-center"
          >
            <span className="italic-accent text-[11vw] font-serif font-normal italic lowercase leading-none tracking-wide text-brand-violet md:text-[7.5vw] lg:text-[7vw]">
              impact
            </span>
          </motion.div>
        </div>

        {/* Sub-headline / Roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.slow, ease: EASING.outSoft, delay: 0.4 }}
          className="mb-8 max-w-xl"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-fg-secondary">
            {personalInfo.name} — &nbsp;
            <span className="text-brand-blue font-semibold">
              {personalInfo.roles[roleIndex]}
            </span>
          </p>
          <p className="text-fg-muted mt-3 text-body-s leading-relaxed md:text-body-m">
            {personalInfo.tagline}
          </p>
        </motion.div>

        {/* Styled Portrait & Badges Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: DURATION.slow, ease: EASING.outSoft, delay: 0.5 }}
          className="relative mb-10"
        >
          {/* Portrait Image Frame */}
          <div className="relative z-10 overflow-hidden rounded-t-[100px] rounded-b-[20px] border border-[var(--border-muted)] bg-neutral-900 p-2 shadow-xl">
            {/* Dual Glow Borders */}
            <div className="absolute inset-0 z-20 rounded-t-[100px] rounded-b-[20px] pointer-events-none border border-transparent shadow-[inset_0_0_12px_rgba(255,255,255,0.05)]" />
            <div className="absolute top-0 bottom-0 left-0 w-1/2 z-20 rounded-tl-[100px] rounded-bl-[20px] pointer-events-none border-l-2 border-t-2 border-[rgba(6,182,212,0.6)] shadow-[inset_12px_12px_12px_-12px_rgba(6,182,212,0.2)]" />
            <div className="absolute top-0 bottom-0 right-0 w-1/2 z-20 rounded-tr-[100px] rounded-br-[20px] pointer-events-none border-r-2 border-b-2 border-[rgba(249,115,22,0.5)] shadow-[inset_-12px_-12px_12px_-12px_rgba(249,115,22,0.2)]" />

            <div className="relative size-56 overflow-hidden rounded-t-[100px] rounded-b-[16px] md:size-64">
              <Image
                src="/images/portrait.png"
                alt="Prateek Varshney portrait"
                fill
                priority
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-w-768px) 224px, 256px"
              />
            </div>
          </div>

          {/* Left Floating Spinning Text Badge */}
          <div className="absolute -left-16 bottom-6 z-20 hidden md:block">
            <div className="glass flex size-24 items-center justify-center rounded-full border border-[var(--glass-base-border)] shadow-lg glow-cyan">
              <svg viewBox="0 0 100 100" className="size-20 rotate-infinite select-none">
                <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                <text className="fill-fg font-mono text-[7px] uppercase tracking-[0.16em] font-medium">
                  <textPath href="#circlePath" startOffset="0%">
                    AI AGENT BUILDER • AUTOMATION SPECIALIST •
                  </textPath>
                </text>
              </svg>
              <Sparkles className="absolute size-4 text-brand-blue" />
            </div>
          </div>

          {/* Right Floating Metric Card */}
          <div className="absolute -right-16 top-10 z-20 hidden md:block">
            <div className="glass rounded-xl border border-[var(--glass-base-border)] p-3 shadow-lg glow-orange flex flex-col items-center">
              <span className="font-display text-2xl text-brand-violet font-bold leading-none">9+</span>
              <span className="font-mono text-[9px] text-fg-muted uppercase tracking-wider mt-1">projects live</span>
            </div>
          </div>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.slow, ease: EASING.outSoft, delay: 0.6 }}
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

      {/* Scroll Down */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: DURATION.slow }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <button
          type="button"
          onClick={() => handleScroll('#about')}
          className="text-fg-muted hover:text-fg flex flex-col items-center gap-1.5 transition-colors font-mono text-[10px] uppercase tracking-[0.2em]"
          aria-label="Scroll to content"
        >
          Scroll Down
          <ArrowDown className="size-3.5 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}

'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navLinks } from '@/content/data';
import { DURATION, EASING, STAGGER } from '@/config/motion';
import { GradientText } from '@/components/primitives';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

/**
 * Navbar
 * ---------------------------------------------------------------------------
 * Premium glass-morphism navigation bar.
 * - Transparent at top, glass-filled on scroll
 * - Hides on scroll down, reveals on scroll up
 * - Floating effect with enhanced backdrop blur
 * - Animated logo with hover glow
 * - Mobile hamburger with animated slide-in panel
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const lastScrollY = useRef(0);

  const { scrollY } = useScroll();

  // Track scroll direction for hide/reveal
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = lastScrollY.current;
    const direction = latest > previous ? 'down' : 'up';
    lastScrollY.current = latest;

    setScrolled(latest > 32);

    // Only hide/reveal after scrolling past 200px threshold
    if (latest > 200) {
      setHidden(direction === 'down');
    } else {
      setHidden(false);
    }
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileOpen(false);
      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    },
    [prefersReducedMotion],
  );

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{
          y: hidden ? -100 : 0,
          opacity: hidden ? 0 : 1,
        }}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.35,
          ease: [0.16, 1, 0.3, 1],
          ...(hidden ? {} : { delay: 0.1 }),
        }}
        className={cn(
          'fixed top-0 right-0 left-0 z-[var(--z-nav)] transition-[background-color,border-color,box-shadow] duration-500',
          scrolled
            ? 'border-b border-[rgba(255,255,255,0.06)] bg-[rgba(3,3,4,0.72)] backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
            : 'border-b border-transparent bg-transparent',
          scrolled && 'translate-y-0',
        )}
        style={{
          backdropFilter: scrolled ? 'blur(20px) saturate(1.2)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(1.2)' : 'none',
        }}
      >
        <nav
          className="mx-auto flex h-16 max-w-page items-center justify-between px-6 md:h-[4.5rem] md:px-12"
          aria-label="Main navigation"
        >
          {/* Logo / Name — with hover glow + rotation */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
            }}
            className="text-fg group relative font-display text-lg font-bold tracking-tight transition-all duration-300"
          >
            <motion.span
              initial={{ opacity: 0, filter: 'blur(4px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-block transition-transform duration-300 group-hover:rotate-6"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.15))',
              }}
            >
              <GradientText animate="shimmer">PV</GradientText>
            </motion.span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-fg-secondary hover:text-fg rounded-md px-3 py-2 text-[0.9375rem] font-medium transition-colors duration-150"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden items-center gap-1.5 rounded-md px-4 py-2 text-[0.9375rem] font-medium transition-all duration-150 md:inline-flex"
              style={{ backgroundImage: 'var(--gradient-signature)', color: 'var(--text-on-primary)' }}
            >
              Let&apos;s Talk
              <ArrowUpRight className="size-4" />
            </a>
            <button
              type="button"
              className="text-fg-secondary hover:text-fg inline-flex size-10 items-center justify-center rounded-md transition-colors md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: DURATION.fast }}
            className="fixed inset-0 z-[calc(var(--z-nav)-1)] bg-[var(--surface-overlay)] backdrop-blur-md md:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: DURATION.base, ease: EASING.outSoft }}
            className="fixed top-0 right-0 bottom-0 z-[var(--z-nav)] flex w-72 flex-col border-l border-[var(--glass-base-border)] bg-[var(--surface-base)] p-6 pt-20 md:hidden"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * STAGGER.base, duration: DURATION.base, ease: EASING.outSoft }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-fg-secondary hover:text-fg hover:bg-surface-raised block rounded-md px-4 py-3 text-lg font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="mt-auto">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="flex w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-center font-medium"
                style={{ backgroundImage: 'var(--gradient-signature)', color: 'var(--text-on-primary)' }}
              >
                Let&apos;s Talk
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

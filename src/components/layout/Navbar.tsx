'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navLinks } from '@/content/data';
import { DURATION, EASING, STAGGER } from '@/config/motion';
import { GradientText } from '@/components/primitives';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

/**
 * Navbar
 * ---------------------------------------------------------------------------
 * Sticky glass-morphism navigation bar. Transparent on top, glass-filled on
 * scroll. Mobile hamburger with animated slide-in panel. Smooth-scrolls to
 * section anchors.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
        initial={prefersReducedMotion ? {} : { y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: DURATION.slow, ease: EASING.outSoft, delay: 0.1 }}
        className={cn(
          'fixed top-0 right-0 left-0 z-[var(--z-nav)] transition-[background-color,border-color,backdrop-filter] duration-300',
          scrolled
            ? 'border-b border-[var(--glass-base-border)] bg-[var(--surface-overlay)] backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <nav
          className="mx-auto flex h-16 max-w-page items-center justify-between px-6 md:h-[4.5rem] md:px-12"
          aria-label="Main navigation"
        >
          {/* Logo / Name */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
            }}
            className="text-fg group relative font-display text-lg font-bold tracking-tight"
          >
            <GradientText animate="shimmer">PV</GradientText>
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

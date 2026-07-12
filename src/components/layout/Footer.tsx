'use client';

import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { navLinks, personalInfo } from '@/content/data';
import { Container, Divider } from '@/components/primitives';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { motion } from 'motion/react';

/**
 * Redesigned Premium Footer
 * ---------------------------------------------------------------------------
 * Clean layout, custom branding, quick navigation link lists, social links,
 * copyright block, back to top hover action, and dark premium aesthetic.
 */

const socialLinks = [
  { icon: Github, href: siteConfig.links.github, label: 'GitHub' },
  { icon: Linkedin, href: siteConfig.links.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: siteConfig.links.email, label: 'Email' },
];

export function Footer() {
  const prefersReducedMotion = useReducedMotion();
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <footer className="relative bg-[#030304] border-t border-[var(--border-muted)] overflow-hidden z-10">
      
      {/* Top Subtle Neon Highlight Line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] opacity-35 z-10"
        style={{ backgroundImage: 'var(--gradient-signature)' }}
        aria-hidden="true"
      />

      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Logo & Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              {/* PV Premium Logo Block */}
              <div className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-orange-500 p-[1px]">
                <div className="flex size-full items-center justify-center rounded-[7px] bg-[#030304] text-xs font-mono font-bold text-fg">
                  PV
                </div>
              </div>
              <span className="font-display text-2xl font-bold uppercase tracking-wider text-fg">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-fg-secondary text-body-s max-w-sm leading-relaxed">
              {personalInfo.tagline}
            </p>
            
            {/* Social Connect Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-fg-muted hover:text-fg hover:border-fg hover:bg-[var(--glass-subtle-fill)] inline-flex size-10 items-center justify-center rounded-lg border border-[var(--border-subtle)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
              <a
                key="X"
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="text-fg-muted hover:text-fg hover:border-fg hover:bg-[var(--glass-subtle-fill)] inline-flex size-10 items-center justify-center rounded-lg border border-[var(--border-subtle)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="font-bold text-xs">𝕏</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-fg text-caption font-mono uppercase tracking-widest font-semibold">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-fg-secondary hover:text-cyan-400 text-body-s transition-colors duration-200 inline-block hover:translate-x-1 transform transition-transform"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-fg text-caption font-mono uppercase tracking-widest font-semibold">
              Get In Touch
            </h3>
            <p className="text-fg-secondary text-body-s leading-relaxed">
              Have a project in mind or want to talk? Let&apos;s build something amazing together.
            </p>
            <div className="pt-2">
              <a
                href={siteConfig.links.email}
                className="text-fg-secondary hover:text-orange-400 text-body-s font-medium underline underline-offset-4 decoration-[var(--border-muted)] transition-colors duration-200"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar Divider */}
        <Divider tone="subtle" className="my-10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-fg-muted text-caption text-center sm:text-left">
            &copy; {year} {personalInfo.name}. All rights reserved. Crafted with precision and style.
          </p>
          
          {/* Animated Scroll to Top */}
          <motion.button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            whileHover={{ y: -3 }}
            className="text-fg-muted hover:text-fg hover:border-fg inline-flex size-10 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--glass-subtle-fill)] transition-colors duration-200"
          >
            <ArrowUp className="size-4" />
          </motion.button>
        </div>
      </Container>
    </footer>
  );
}

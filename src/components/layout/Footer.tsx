'use client';

import { ArrowUp, Github, Linkedin, Twitter, Mail } from 'lucide-react';

import { siteConfig } from '@/config/site';
import { navLinks, personalInfo } from '@/content/data';
import { Container, Divider, GradientText } from '@/components/primitives';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

/**
 * Footer
 * ---------------------------------------------------------------------------
 * Multi-column glass footer with social links, navigation shortcuts,
 * copyright, and a back-to-top button. Topped with a gradient divider.
 */

const socialLinks = [
  { icon: Github, href: siteConfig.links.github, label: 'GitHub' },
  { icon: Linkedin, href: siteConfig.links.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: siteConfig.links.twitter, label: 'Twitter / X' },
  { icon: Mail, href: siteConfig.links.email, label: 'Email' },
];

export function Footer() {
  const prefersReducedMotion = useReducedMotion();
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <footer className="relative mt-24 border-t border-[var(--border-subtle)] bg-[var(--surface-raised)]">
      {/* Gradient accent line at top */}
      <div
        className="absolute top-0 right-0 left-0 h-px"
        style={{ backgroundImage: 'var(--gradient-signature)' }}
        aria-hidden="true"
      />

      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand Column */}
          <div className="space-y-4">
            <GradientText className="font-display text-2xl font-bold">
              {personalInfo.name}
            </GradientText>
            <p className="text-fg-secondary text-body-s max-w-xs leading-relaxed">
              {personalInfo.tagline}
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-fg-muted hover:text-fg inline-flex size-10 items-center justify-center rounded-lg border border-[var(--border-subtle)] transition-all duration-150 hover:border-[var(--border-strong)] hover:bg-[var(--glass-subtle-fill)]"
                >
                  <social.icon className="size-[1.125rem]" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-fg text-label mb-4 font-mono font-medium uppercase">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-fg-secondary hover:text-fg text-body-s transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch Column */}
          <div>
            <h3 className="text-fg text-label mb-4 font-mono font-medium uppercase">
              Get In Touch
            </h3>
            <p className="text-fg-secondary text-body-s mb-4 leading-relaxed">
              Have a project in mind or want to collaborate? I&apos;d love to hear from you.
            </p>
            <a
              href={siteConfig.links.email}
              className="text-fg-secondary hover:text-fg text-body-s underline decoration-[var(--border-muted)] underline-offset-4 transition-colors duration-150"
            >
              {personalInfo.email}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <Divider tone="subtle" className="my-8" />

        <div className="flex items-center justify-between">
          <p className="text-fg-muted text-caption">
            &copy; {year} {personalInfo.name}. Crafted with precision.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="text-fg-muted hover:text-fg inline-flex size-10 items-center justify-center rounded-lg border border-[var(--border-subtle)] transition-all duration-150 hover:border-[var(--border-strong)] hover:bg-[var(--glass-subtle-fill)]"
          >
            <ArrowUp className="size-4" />
          </button>
        </div>
      </Container>
    </footer>
  );
}

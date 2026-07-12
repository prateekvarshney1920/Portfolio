'use client';

import { useState, type FormEvent } from 'react';
import { Send, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { Section, GlassCard, Button } from '@/components/primitives';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { personalInfo } from '@/content/data';
import { siteConfig } from '@/config/site';

/**
 * Contact
 * ---------------------------------------------------------------------------
 * Rebuilt to match the Dribbble reference: centered, cinematic CTA layout
 * with a huge backdrop watermark, large header typography, and a glowing form card.
 */
export function Contact() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('sending');

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setTimeout(() => setFormState('sent'), 500);
    setTimeout(() => setFormState('idle'), 3000);
  };

  return (
    <Section id="contact" className="overflow-hidden relative pb-10">
      {/* Huge Backdrop Watermark */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0 overflow-hidden opacity-5">
        <span className="font-display text-[15vw] leading-none text-fg uppercase tracking-widest text-center whitespace-nowrap">
          WHENEVER READY
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Main CTA Headline */}
        <AnimatedSection className="mb-12">
          <span className="text-brand-blue font-mono text-[10px] uppercase tracking-[0.2em] mb-4 block">
            GET IN TOUCH
          </span>
          <h2 className="font-display text-display-l uppercase tracking-tight text-fg leading-none max-w-2xl mx-auto">
            Let&apos;s build something{' '}
            <span className="italic-accent font-serif italic text-brand-violet block mt-2 lowercase">
              meaningful together
            </span>
          </h2>
        </AnimatedSection>

        {/* Info Grid & Form Container */}
        <div className="grid gap-8 w-full md:grid-cols-5 text-left items-start mt-4">
          {/* Quick Info (2 Columns) */}
          <AnimatedSection animation="slideLeft" className="md:col-span-2 space-y-6">
            <div className="space-y-4">
              <a
                href={siteConfig.links.email}
                className="group flex items-center gap-4 transition-colors"
              >
                <div className="inline-flex size-10 items-center justify-center rounded-lg bg-[var(--glass-subtle-fill)] border border-[var(--border-muted)] transition-colors duration-200 group-hover:bg-primary/10">
                  <Mail className="size-4 text-primary" />
                </div>
                <div>
                  <p className="text-fg-muted text-[10px] font-mono uppercase tracking-wider">
                    Direct Email
                  </p>
                  <p className="text-fg-secondary text-body-s transition-colors duration-150 group-hover:text-fg">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="inline-flex size-10 items-center justify-center rounded-lg bg-[var(--glass-subtle-fill)] border border-[var(--border-muted)]">
                  <MapPin className="size-4 text-primary" />
                </div>
                <div>
                  <p className="text-fg-muted text-[10px] font-mono uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-fg-secondary text-body-s">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Pill Links */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--glass-subtle-border)]">
              <Button asChild variant="secondary" size="sm" className="font-mono text-[10px] h-8 px-3">
                <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
                  GITHUB <ArrowUpRight className="size-3" />
                </a>
              </Button>
              <Button asChild variant="secondary" size="sm" className="font-mono text-[10px] h-8 px-3">
                <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
                  LINKEDIN <ArrowUpRight className="size-3" />
                </a>
              </Button>
              <Button asChild variant="secondary" size="sm" className="font-mono text-[10px] h-8 px-3">
                <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer">
                  X / TWITTER <ArrowUpRight className="size-3" />
                </a>
              </Button>
            </div>
          </AnimatedSection>

          {/* Form (3 Columns) */}
          <AnimatedSection animation="slideRight" className="md:col-span-3 w-full">
            <GlassCard padding="lg" className="border-[var(--border-muted)] glow-cyan">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="text-fg-secondary font-mono text-[10px] uppercase tracking-wider mb-1.5 block">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="text-fg placeholder:text-fg-disabled w-full rounded-md border border-[var(--border-subtle)] bg-[var(--glass-subtle-fill)] px-4 py-2.5 text-sm outline-none transition-colors duration-150 focus:border-primary focus:ring-1 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="text-fg-secondary font-mono text-[10px] uppercase tracking-wider mb-1.5 block">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="text-fg placeholder:text-fg-disabled w-full rounded-md border border-[var(--border-subtle)] bg-[var(--glass-subtle-fill)] px-4 py-2.5 text-sm outline-none transition-colors duration-150 focus:border-primary focus:ring-1 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="text-fg-secondary font-mono text-[10px] uppercase tracking-wider mb-1.5 block">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project or inquiry..."
                    className="text-fg placeholder:text-fg-disabled w-full resize-none rounded-md border border-[var(--border-subtle)] bg-[var(--glass-subtle-fill)] px-4 py-2.5 text-sm outline-none transition-colors duration-150 focus:border-primary focus:ring-1 focus:ring-primary/20"
                  />
                </div>

                <Button type="submit" size="md" className="w-full font-mono text-xs uppercase tracking-wider mt-2" isLoading={formState === 'sending'}>
                  {formState === 'sent' ? (
                    'Redirecting to mail client...'
                  ) : (
                    <>
                      SEND MESSAGE
                      <Send className="size-3.5" />
                    </>
                  )}
                </Button>
              </form>
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>
    </Section>
  );
}

'use client';

import { useState, type FormEvent } from 'react';
import { Send, Mail, MapPin, ArrowUpRight, Github, Linkedin, MessageSquare } from 'lucide-react';
import { Section, GlassCard, Button } from '@/components/primitives';
import { AnimatedSection, AnimatedItem } from '@/components/ui/AnimatedSection';
import { personalInfo } from '@/content/data';
import { siteConfig } from '@/config/site';
import { motion } from 'motion/react';

/**
 * Contact Section
 * ---------------------------------------------------------------------------
 * Completely redesigned premium contact experience featuring a high-end glassmorphism
 * form, subtle radial gradient glows, animated interactive inputs, and updated links.
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
    <Section id="contact" className="overflow-hidden relative pt-20 pb-24 md:pb-32">
      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden z-0" aria-hidden="true">
        <div
          className="absolute -right-40 top-1/4 size-[400px] rounded-full opacity-10 blur-[120px]"
          style={{ background: 'var(--brand-blue)' }}
        />
        <div
          className="absolute -left-40 bottom-1/4 size-[400px] rounded-full opacity-10 blur-[120px]"
          style={{ background: 'var(--brand-violet)' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Column 1: Copy, Watermark, Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <AnimatedSection>
              <span className="text-brand-blue font-mono text-[10px] uppercase tracking-[0.2em] mb-3 block">
                GET IN TOUCH
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-fg leading-[1.05]">
                Let&apos;s build <br className="hidden lg:block" /> something{' '}
                <span className="italic-accent font-serif italic text-brand-violet block mt-1 lowercase">
                  meaningful together
                </span>
              </h2>
              <p className="text-fg-secondary text-body-m mt-6 max-w-md leading-relaxed">
                Have a project in mind, want to collaborate, or just want to say hi? Drop a message or reach out on social media.
              </p>
            </AnimatedSection>

            {/* Structured Contact Cards */}
            <AnimatedSection stagger className="space-y-4 pt-4">
              <AnimatedItem>
                <a
                  href={siteConfig.links.email}
                  className="group flex items-center gap-4 rounded-xl border border-[var(--glass-subtle-border)] bg-[var(--glass-subtle-fill)] p-4 transition-all duration-300 hover:border-[var(--brand-cyan)] hover:bg-[var(--glass-base-fill)] glow-cyan-hover"
                >
                  <div className="inline-flex size-10 items-center justify-center rounded-lg bg-[var(--glass-subtle-fill)] border border-[var(--border-muted)] transition-colors duration-300 group-hover:bg-cyan-500/10">
                    <Mail className="size-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-fg-muted text-[10px] font-mono uppercase tracking-wider">
                      Email Address
                    </p>
                    <p className="text-fg-secondary text-body-s font-medium transition-colors duration-150 group-hover:text-fg">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>
              </AnimatedItem>

              <AnimatedItem>
                <div className="flex items-center gap-4 rounded-xl border border-[var(--glass-subtle-border)] bg-[var(--glass-subtle-fill)] p-4">
                  <div className="inline-flex size-10 items-center justify-center rounded-lg bg-[var(--glass-subtle-fill)] border border-[var(--border-muted)]">
                    <MapPin className="size-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-fg-muted text-[10px] font-mono uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-fg-secondary text-body-s font-medium">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </AnimatedItem>
            </AnimatedSection>

            {/* Social Connect links */}
            <AnimatedSection className="pt-6 border-t border-[var(--glass-subtle-border)]">
              <p className="text-fg-muted text-[10px] font-mono uppercase tracking-widest mb-3">
                FIND ME ON
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[var(--glass-subtle-fill)] border border-[var(--border-muted)] px-4 py-2 text-xs font-mono font-medium text-fg-secondary transition-all duration-300 hover:border-fg hover:text-fg hover:scale-[1.03]"
                >
                  <Github className="size-4" /> GITHUB <ArrowUpRight className="size-3 opacity-60" />
                </a>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[var(--glass-subtle-fill)] border border-[var(--border-muted)] px-4 py-2 text-xs font-mono font-medium text-fg-secondary transition-all duration-300 hover:border-fg hover:text-fg hover:scale-[1.03]"
                >
                  <Linkedin className="size-4" /> LINKEDIN <ArrowUpRight className="size-3 opacity-60" />
                </a>
                <a
                  href={siteConfig.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[var(--glass-subtle-fill)] border border-[var(--border-muted)] px-4 py-2 text-xs font-mono font-medium text-fg-secondary transition-all duration-300 hover:border-fg hover:text-fg hover:scale-[1.03]"
                >
                  <span className="font-bold text-sm leading-none select-none">𝕏</span> TWITTER <ArrowUpRight className="size-3 opacity-60" />
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Column 2: Redesigned Form with Glassmorphism (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatedSection animation="slideRight">
              <GlassCard
                padding="lg"
                className="border-[var(--glass-subtle-border)] bg-[var(--glass-base-fill)] glow-orange relative"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                  <MessageSquare className="size-16 text-brand-violet" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid gap-6 sm:grid-cols-2">
                    {/* Name input */}
                    <div className="relative group">
                      <label
                        htmlFor="contact-name"
                        className="text-fg-secondary font-mono text-[10px] uppercase tracking-wider mb-2 block transition-colors group-focus-within:text-brand-cyan"
                      >
                        Your Name
                      </label>
                      <div className="relative">
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          placeholder="John Doe"
                          className="w-full text-fg placeholder:text-fg-disabled/40 rounded-lg border border-[var(--border-subtle)] bg-[var(--glass-subtle-fill)] px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10 focus:bg-[var(--glass-base-fill)]"
                        />
                        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-blue transition-all duration-300 group-focus-within:w-full" />
                      </div>
                    </div>

                    {/* Email input */}
                    <div className="relative group">
                      <label
                        htmlFor="contact-email"
                        className="text-fg-secondary font-mono text-[10px] uppercase tracking-wider mb-2 block transition-colors group-focus-within:text-brand-cyan"
                      >
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          placeholder="john@example.com"
                          className="w-full text-fg placeholder:text-fg-disabled/40 rounded-lg border border-[var(--border-subtle)] bg-[var(--glass-subtle-fill)] px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10 focus:bg-[var(--glass-base-fill)]"
                        />
                        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-blue transition-all duration-300 group-focus-within:w-full" />
                      </div>
                    </div>
                  </div>

                  {/* Message input */}
                  <div className="relative group">
                    <label
                      htmlFor="contact-message"
                      className="text-fg-secondary font-mono text-[10px] uppercase tracking-wider mb-2 block transition-colors group-focus-within:text-brand-violet"
                    >
                      Your Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell me about your project, timing, and details..."
                        className="w-full text-fg placeholder:text-fg-disabled/40 resize-none rounded-lg border border-[var(--border-subtle)] bg-[var(--glass-subtle-fill)] px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 focus:bg-[var(--glass-base-fill)]"
                      />
                      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-violet transition-all duration-300 group-focus-within:w-full" />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full font-mono text-xs uppercase tracking-wider bg-gradient-to-r from-brand-blue to-brand-violet border-none hover:opacity-90 h-12 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                      isLoading={formState === 'sending'}
                    >
                      {formState === 'sent' ? (
                        'Redirecting to mail client...'
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          SEND MESSAGE
                          <Send className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </span>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </GlassCard>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </Section>
  );
}

'use client';

import { useState, type FormEvent } from 'react';
import { Send, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { Section, SectionHeading, GlassCard, GradientText, Button } from '@/components/primitives';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { personalInfo } from '@/content/data';
import { siteConfig } from '@/config/site';

/**
 * Contact
 * ---------------------------------------------------------------------------
 * Contact section with a glass-morphism form, social links, and email CTA.
 */
export function Contact() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('sending');

    // Build mailto link from form data
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setTimeout(() => setFormState('sent'), 500);
    setTimeout(() => setFormState('idle'), 3000);
  };

  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — Info */}
        <AnimatedSection animation="slideLeft">
          <SectionHeading
            eyebrow="Contact"
            title={
              <>
                Let&apos;s build something{' '}
                <GradientText>together</GradientText>
              </>
            }
            description="Have a project in mind, need an AI agent, or want to collaborate on automation? I'd love to hear from you."
          />

          <div className="mt-8 space-y-4">
            {/* Email */}
            <a
              href={siteConfig.links.email}
              className="group flex items-center gap-3 transition-colors"
            >
              <div className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-200 group-hover:bg-primary/20">
                <Mail className="size-5 text-primary" />
              </div>
              <div>
                <p className="text-fg-muted text-caption font-mono uppercase tracking-wider">
                  Email
                </p>
                <p className="text-fg-secondary text-body-s transition-colors duration-150 group-hover:text-fg">
                  {personalInfo.email}
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-3">
              <div className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/10">
                <MapPin className="size-5 text-primary" />
              </div>
              <div>
                <p className="text-fg-muted text-caption font-mono uppercase tracking-wider">
                  Location
                </p>
                <p className="text-fg-secondary text-body-s">
                  {personalInfo.location}
                </p>
              </div>
            </div>
          </div>

          {/* Social CTA */}
          <div className="mt-8 flex gap-3">
            <Button asChild variant="secondary" size="sm">
              <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
                GitHub
                <ArrowUpRight className="size-3.5" />
              </a>
            </Button>
            <Button asChild variant="secondary" size="sm">
              <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
                <ArrowUpRight className="size-3.5" />
              </a>
            </Button>
            <Button asChild variant="secondary" size="sm">
              <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer">
                Twitter
                <ArrowUpRight className="size-3.5" />
              </a>
            </Button>
          </div>
        </AnimatedSection>

        {/* Right — Form */}
        <AnimatedSection animation="slideRight">
          <GlassCard padding="lg">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="text-fg text-body-s mb-1.5 block font-medium">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="text-fg placeholder:text-fg-disabled w-full rounded-md border border-[var(--border-subtle)] bg-[var(--glass-subtle-fill)] px-4 py-3 text-[0.9375rem] outline-none transition-colors duration-150 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="text-fg text-body-s mb-1.5 block font-medium">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="text-fg placeholder:text-fg-disabled w-full rounded-md border border-[var(--border-subtle)] bg-[var(--glass-subtle-fill)] px-4 py-3 text-[0.9375rem] outline-none transition-colors duration-150 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="text-fg text-body-s mb-1.5 block font-medium">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="text-fg placeholder:text-fg-disabled w-full resize-none rounded-md border border-[var(--border-subtle)] bg-[var(--glass-subtle-fill)] px-4 py-3 text-[0.9375rem] outline-none transition-colors duration-150 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              {/* Submit */}
              <Button type="submit" size="lg" className="w-full" isLoading={formState === 'sending'}>
                {formState === 'sent' ? (
                  'Message Opened!'
                ) : (
                  <>
                    Send Message
                    <Send className="size-4" />
                  </>
                )}
              </Button>
            </form>
          </GlassCard>
        </AnimatedSection>
      </div>
    </Section>
  );
}

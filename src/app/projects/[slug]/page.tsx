import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, ArrowUpRight, Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import { projects } from '@/content/data';
import { siteConfig } from '@/config/site';
import { Container, GlassCard, GradientText, Tag, Button, Divider } from '@/components/primitives';

/**
 * Project Detail Page — /projects/[slug]
 * ---------------------------------------------------------------------------
 * Dynamic route for individual project detail pages with SSG via
 * generateStaticParams.
 */

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} — ${siteConfig.name}`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="min-h-dvh bg-[var(--surface-base)]">
      {/* Hero Banner */}
      <div className="relative overflow-hidden">
        <div
          className="h-64 w-full md:h-80"
          style={{ background: project.gradient }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, var(--surface-base) 0%, transparent 50%, transparent 100%)',
          }}
        />
      </div>

      <Container className="relative -mt-20 pb-24">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="text-fg-secondary hover:text-fg mb-8 inline-flex items-center gap-2 text-sm font-medium transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back to Projects
        </Link>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <span className="text-fg-muted text-caption mb-2 block font-mono uppercase tracking-wider">
              {project.category === 'ai'
                ? 'AI & Agents'
                : project.category === 'automation'
                  ? 'Automation'
                  : project.category === 'web'
                    ? 'Web App'
                    : 'Mobile'}
            </span>

            <h1 className="text-fg font-display text-display-l mb-3 font-bold">
              <GradientText>{project.title}</GradientText>
            </h1>

            <p className="text-fg-secondary text-body-l mb-2 italic">
              {project.tagline}
            </p>

            <Divider tone="subtle" className="my-8" />

            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-fg text-heading-m font-display font-semibold">
                About This Project
              </h2>
              <p className="text-fg-secondary text-body-m leading-relaxed whitespace-pre-line">
                {project.longDescription}
              </p>
            </div>

            {/* Features */}
            <div className="mt-10 space-y-4">
              <h2 className="text-fg text-heading-m font-display font-semibold">
                Key Features
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-fg-secondary text-body-s flex items-start gap-3"
                  >
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tech Stack Card */}
            <GlassCard padding="md">
              <h3 className="text-fg text-label mb-3 font-mono font-medium uppercase">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag} size="sm">
                    {tag}
                  </Tag>
                ))}
              </div>
            </GlassCard>

            {/* Links Card */}
            <GlassCard padding="md">
              <h3 className="text-fg text-label mb-3 font-mono font-medium uppercase">
                Links
              </h3>
              <div className="space-y-2">
                {project.links.github && (
                  <Button asChild variant="secondary" size="sm" className="w-full justify-start">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="size-4" />
                      View Source
                      <ArrowUpRight className="ml-auto size-3.5" />
                    </a>
                  </Button>
                )}
                {project.links.live && (
                  <Button asChild variant="secondary" size="sm" className="w-full justify-start">
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="size-4" />
                      Live Demo
                      <ArrowUpRight className="ml-auto size-3.5" />
                    </a>
                  </Button>
                )}
              </div>
            </GlassCard>

            {/* CTA Card */}
            <GlassCard padding="md" className="text-center">
              <p className="text-fg-secondary text-body-s mb-3">
                Interested in something similar?
              </p>
              <Button asChild size="sm" className="w-full">
                <Link href="/#contact">
                  Let&apos;s Talk
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </Button>
            </GlassCard>
          </div>
        </div>
      </Container>
    </main>
  );
}

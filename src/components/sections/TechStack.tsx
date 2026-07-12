'use client';

import React, { useState, useRef, MouseEvent } from 'react';
import { motion, useMotionValue, useTransform, useSpring, useInView } from 'motion/react';
import { FileCode } from 'lucide-react';
import { Section, SectionHeading, GradientText } from '@/components/primitives';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { techStack, type TechItem } from '@/content/data';
import { brandLogosMap } from '@/components/icons/BrandLogos';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

// Premium brand categories accent colors
const categoryColors: Record<string, string> = {
  Language: '#3b82f6',     // Blue
  Frontend: '#06b6d4',     // Cyan/Electric Cyan
  Mobile: '#10b981',       // Emerald/Green
  Backend: '#8b5cf6',      // Purple/Violet
  Database: '#f59e0b',     // Amber/Orange
  Automation: '#ef4444',   // Red
  AI: '#10a37f',           // OpenAI Emerald
  DevOps: '#2563eb',       // Indigo
  Design: '#ec4899',       // Pink/Figma Red
};

export function TechStack() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, margin: '-100px' });

  return (
    <Section id="tech-stack" className="overflow-hidden pt-20 pb-24">
      <AnimatedSection>
        <SectionHeading
          align="center"
          eyebrow="Tech Stack"
          title={
            <>
              Technologies I <GradientText>work with</GradientText>
            </>
          }
          description="A curated collection of frameworks, platforms, and languages I use to build production systems."
        />
      </AnimatedSection>

      <div
        ref={gridRef}
        className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mt-16 md:grid-cols-4 lg:grid-cols-6"
      >
        {techStack.map((tech, i) => (
          <TechCard key={tech.name} tech={tech} index={i} isInView={isInView} />
        ))}
      </div>
    </Section>
  );
}

// ─── Interactive 3D Tilt Tech Card Component ─────────────────────────────────────

function TechCard({ tech, index, isInView }: { tech: TechItem; index: number; isInView: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Mouse position values for 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [hoverBg, setHoverBg] = useState('rgba(255, 255, 255, 0)');
  const [isHovered, setIsHovered] = useState(false);

  // Map mouse coordinates to degrees of rotation (tilt limit is 8 degrees)
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);

  // Spring dynamics settings (duration ~250-350ms, snappy config)
  const springConfig = { damping: 22, stiffness: 280, mass: 0.5 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate relative cursor position from card center (-0.5 to 0.5)
    const relativeX = (e.clientX - rect.left) / width - 0.5;
    const relativeY = (e.clientY - rect.top) / height - 0.5;

    mouseX.set(relativeX);
    mouseY.set(relativeY);

    // Track light cursor glow position
    const posX = e.clientX - rect.left;
    const posY = e.clientY - rect.top;
    const accentColor = categoryColors[tech.category] ?? '#06b6d4';

    setHoverBg(
      `radial-gradient(120px circle at ${posX}px ${posY}px, color-mix(in srgb, ${accentColor} 18%, transparent), transparent 75%)`
    );
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  // Retrieve matching official SVG logo component
  const LogoComponent = brandLogosMap[tech.name];
  const accentColor = categoryColors[tech.category] ?? '#06b6d4';

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, y: 35, filter: 'blur(8px)', scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }
          : { opacity: 0, y: 35, filter: 'blur(8px)', scale: 0.95 }
      }
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : {
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1], // Custom outSoft bezier curve
              delay: index * 0.05,
            }
      }
      className="group relative h-36 w-full cursor-default overflow-hidden rounded-xl border border-[var(--glass-subtle-border)] bg-[var(--glass-subtle-fill)] p-5 backdrop-blur-sm transition-all duration-300 hover:border-[var(--border-strong)] hover:shadow-2xl flex flex-col items-center justify-center gap-3 select-none"
    >
      {/* 3D Depth Spotlight Cursor Tracking Glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: hoverBg }}
        aria-hidden="true"
      />

      {/* Inner Glow and Border Glow Reflection */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 border border-transparent rounded-xl transition-all duration-500 group-hover:opacity-100"
        style={{
          boxShadow: `inset 0 0 12px color-mix(in srgb, ${accentColor} 8%, transparent)`,
          borderColor: `color-mix(in srgb, ${accentColor} 30%, transparent)`,
        }}
        aria-hidden="true"
      />

      {/* Brand Icon Wrapper with Hover Scale & Rotation */}
      <motion.div
        animate={isHovered ? { scale: 1.12, rotate: 3 } : { scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 350, damping: 18 }}
        className="relative z-10 flex items-center justify-center transition-all duration-300"
        style={{
          filter: isHovered
            ? `drop-shadow(0 0 10px color-mix(in srgb, ${accentColor} 45%, transparent))`
            : 'none',
        }}
      >
        {LogoComponent ? (
          <LogoComponent
            className="transition-colors duration-300 text-fg-muted group-hover:text-fg h-11 w-11 md:h-12 md:w-12 lg:h-14 lg:w-14"
            size={56}
          />
        ) : (
          <FileCode
            className="transition-colors duration-300 text-fg-muted group-hover:text-fg h-11 w-11 md:h-12 md:w-12 lg:h-14 lg:w-14"
            style={{ color: isHovered ? accentColor : undefined }}
          />
        )}
      </motion.div>

      {/* Title & Category Details */}
      <div className="relative z-10 flex flex-col items-center text-center select-none" style={{ transform: 'translateZ(15px)' }}>
        <span className="text-fg-secondary text-[13px] font-semibold tracking-wide transition-colors duration-200 group-hover:text-fg">
          {tech.name}
        </span>
        <span className="text-fg-muted text-[9px] font-mono uppercase tracking-widest mt-1 block">
          {tech.category}
        </span>
      </div>
    </motion.div>
  );
}

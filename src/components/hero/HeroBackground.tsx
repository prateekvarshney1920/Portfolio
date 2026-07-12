'use client';

import { useReducedMotion } from '@/hooks/use-reduced-motion';

/**
 * HeroBackground
 * ---------------------------------------------------------------------------
 * Multi-layer living ambient background for the Hero section.
 * Layers: Mesh Gradient → Noise → Floating Blur Orbs → Aurora Sweep → Cursor Glow
 * All CSS-driven (no JS RAF loops), GPU-composited via transform/opacity only.
 */
export function HeroBackground() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Layer 1: Animated Mesh Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 20% 20%, rgba(6, 182, 212, 0.12) 0%, transparent 60%), ' +
            'radial-gradient(ellipse 70% 50% at 80% 80%, rgba(249, 115, 22, 0.08) 0%, transparent 60%), ' +
            'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(139, 92, 246, 0.06) 0%, transparent 70%)',
          backgroundSize: '200% 200%',
          animation: prefersReducedMotion ? 'none' : 'hero-mesh-drift 25s ease-in-out infinite',
        }}
      />

      {/* Layer 2: SVG Noise Texture */}
      <div className="absolute inset-0 opacity-[0.025]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="hero-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#hero-noise)" />
        </svg>
      </div>

      {/* Layer 3: Floating Blur Orbs */}
      {!prefersReducedMotion && (
        <>
          {/* Cyan Orb — top left */}
          <div
            className="absolute -top-20 -left-20 size-[420px] rounded-full opacity-[0.10] blur-[100px]"
            style={{
              background: 'var(--brand-blue)',
              animation: 'hero-float-1 18s ease-in-out infinite',
              willChange: 'transform',
            }}
          />
          {/* Orange Orb — bottom right */}
          <div
            className="absolute -right-16 -bottom-16 size-[380px] rounded-full opacity-[0.08] blur-[110px]"
            style={{
              background: 'var(--brand-violet)',
              animation: 'hero-float-2 22s ease-in-out infinite',
              willChange: 'transform',
            }}
          />
          {/* Violet Orb — center floating */}
          <div
            className="absolute top-1/3 left-1/2 size-[300px] -translate-x-1/2 rounded-full opacity-[0.06] blur-[120px]"
            style={{
              background: '#8b5cf6',
              animation: 'hero-float-3 20s ease-in-out infinite',
              willChange: 'transform',
            }}
          />
        </>
      )}

      {/* Static orb fallback for reduced motion */}
      {prefersReducedMotion && (
        <>
          <div
            className="absolute -top-20 -left-20 size-[420px] rounded-full opacity-[0.10] blur-[100px]"
            style={{ background: 'var(--brand-blue)' }}
          />
          <div
            className="absolute -right-16 -bottom-16 size-[380px] rounded-full opacity-[0.08] blur-[110px]"
            style={{ background: 'var(--brand-violet)' }}
          />
        </>
      )}

      {/* Layer 4: Aurora Light Sweep */}
      {!prefersReducedMotion && (
        <div
          className="absolute top-1/2 left-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: 'conic-gradient(from 0deg, transparent 0%, rgba(6, 182, 212, 0.06) 25%, transparent 50%, rgba(249, 115, 22, 0.04) 75%, transparent 100%)',
            animation: 'hero-aurora-sweep 30s linear infinite',
            willChange: 'transform',
          }}
        />
      )}

      {/* Layer 5: Bottom fade to ensure smooth transition to next section */}
      <div
        className="absolute right-0 bottom-0 left-0 h-32"
        style={{
          background: 'linear-gradient(to top, var(--neutral-950) 0%, transparent 100%)',
        }}
      />
    </div>
  );
}

import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * GlassCard
 * -----------------------------------------------------------------------------
 * The one canonical glass surface (Design System §7.3). Three blur/opacity
 * tiers, all sharing the top-lit hairline + inner-highlight recipe (bundled in
 * `--shadow-glass`). `interactive` adds the §7.2 hover affordance: a 4px lift,
 * stronger border, deeper shadow, and a subtle signature-gradient wash layered
 * over the glass fill.
 *
 * Glass only reads as glass over a *varied* background — place it above an
 * AuroraBackground / GridBackground, never a flat fill. `interactive` is a
 * visual affordance only; for real click targets nest a Button or link.
 *
 * @example
 * <GlassCard>…</GlassCard>
 * <GlassCard variant="strong" radius="xl" padding="lg">…</GlassCard>
 * <GlassCard interactive>…</GlassCard>
 */
const glassCardVariants = cva('relative border', {
  variants: {
    variant: {
      subtle:
        'bg-[var(--glass-subtle-fill)] border-[var(--glass-subtle-border)] backdrop-blur-[12px] shadow-[var(--shadow-glass)]',
      base: 'bg-[var(--glass-base-fill)] border-[var(--glass-base-border)] backdrop-blur-[16px] shadow-[var(--shadow-glass)]',
      strong:
        'bg-[var(--glass-strong-fill)] border-[var(--glass-strong-border)] backdrop-blur-[24px] shadow-[var(--shadow-glass)]',
    },
    radius: {
      lg: 'rounded-lg',
      xl: 'rounded-xl',
    },
    padding: {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    },
    interactive: {
      true: 'transition-[transform,box-shadow,border-color,background] duration-300 ease-standard hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-large)] hover:bg-[image:var(--gradient-signature-soft)]',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'base',
    radius: 'lg',
    padding: 'md',
    interactive: false,
  },
});

export interface GlassCardProps
  extends React.ComponentPropsWithoutRef<'div'>, VariantProps<typeof glassCardVariants> {}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(function GlassCard(
  { className, variant, radius, padding, interactive, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(glassCardVariants({ variant, radius, padding, interactive }), className)}
      {...props}
    />
  );
});

export { glassCardVariants };

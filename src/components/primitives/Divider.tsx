import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Divider
 * -----------------------------------------------------------------------------
 * A hairline separator. Decorative by default (hidden from assistive tech); set
 * `decorative={false}` to expose it as a semantic `separator` with the correct
 * `aria-orientation`.
 *
 * @example
 * <Divider />
 * <Divider tone="gradient" />
 * <Divider orientation="vertical" tone="muted" decorative={false} />
 */
const dividerVariants = cva('shrink-0 border-0', {
  variants: {
    orientation: {
      horizontal: 'h-px w-full',
      vertical: 'h-full w-px self-stretch',
    },
    tone: {
      subtle: 'bg-[var(--border-subtle)]',
      muted: 'bg-[var(--border-muted)]',
      strong: 'bg-[var(--border-strong)]',
      gradient: 'bg-[image:var(--gradient-signature)]',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
    tone: 'subtle',
  },
});

export interface DividerProps
  extends
    Omit<React.ComponentPropsWithoutRef<'div'>, 'role' | 'aria-orientation'>,
    VariantProps<typeof dividerVariants> {
  /** When false, exposes a semantic separator to assistive tech. */
  decorative?: boolean;
}

export const Divider = forwardRef<HTMLDivElement, DividerProps>(function Divider(
  { className, orientation = 'horizontal', tone, decorative = true, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      role={decorative ? 'none' : 'separator'}
      aria-orientation={decorative ? undefined : (orientation ?? 'horizontal')}
      className={cn(dividerVariants({ orientation, tone }), className)}
      {...props}
    />
  );
});

import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Badge
 * -----------------------------------------------------------------------------
 * A small, non-interactive status/label chip. State variants use the §1.9
 * tint-fill + border + on-tint-text recipe so meaning is never conveyed by
 * colour alone (always pair with text/icon in the children).
 *
 * @example
 * <Badge>New</Badge>
 * <Badge variant="success">Shipped</Badge>
 * <Badge variant="primary" size="md">Featured</Badge>
 */
const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-sm border font-medium leading-none whitespace-nowrap transition-colors duration-150',
  {
    variants: {
      variant: {
        neutral: 'border-[var(--border-muted)] bg-surface-raised-2 text-fg-secondary',
        primary: 'border-[var(--border-primary)] bg-primary/10 text-primary',
        success: 'border-success-border bg-success-tint text-success-fg',
        warning: 'border-warning-border bg-warning-tint text-warning-fg',
        error: 'border-error-border bg-error-tint text-error-fg',
        info: 'border-info-border bg-info-tint text-info-fg',
        outline: 'border-[var(--border-muted)] bg-transparent text-fg-secondary',
      },
      size: {
        sm: 'h-[1.375rem] px-2 text-[0.75rem]',
        md: 'h-6 px-2.5 text-[0.8125rem]',
      },
    },
    defaultVariants: {
      variant: 'neutral',
      size: 'sm',
    },
  },
);

export interface BadgeProps
  extends React.ComponentPropsWithoutRef<'span'>, VariantProps<typeof badgeVariants> {}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { className, variant, size, ...props },
  ref,
) {
  return <span ref={ref} className={cn(badgeVariants({ variant, size }), className)} {...props} />;
});

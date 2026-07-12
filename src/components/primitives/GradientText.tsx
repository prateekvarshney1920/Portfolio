import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * GradientText
 * -----------------------------------------------------------------------------
 * Clips the Aurora signature gradient to its text (uses the `.text-gradient`
 * foundation utility). `animate="shimmer"` slowly drifts the gradient for a
 * premium sheen — gated behind `motion-safe:` so it is silent under
 * `prefers-reduced-motion`, falling back to a static gradient.
 *
 * Use `asChild` to apply the gradient to a heading or any element without an
 * extra wrapper.
 *
 * @example
 * <GradientText>AI Engineer</GradientText>
 * <GradientText animate="shimmer" asChild><h1 className="font-display text-display-xl">Prateek</h1></GradientText>
 */
const gradientTextVariants = cva('text-gradient', {
  variants: {
    animate: {
      none: '',
      shimmer:
        'bg-[length:200%_auto] motion-safe:animate-[aurora-gradient-shift_6s_ease-in-out_infinite]',
    },
  },
  defaultVariants: {
    animate: 'none',
  },
});

export interface GradientTextProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof gradientTextVariants> {
  /** Render the single child element with the gradient applied (Radix Slot). */
  asChild?: boolean;
}

export const GradientText = forwardRef<HTMLElement, GradientTextProps>(function GradientText(
  { className, animate, asChild = false, ...props },
  ref,
) {
  const Comp = asChild ? Slot : 'span';
  return <Comp ref={ref} className={cn(gradientTextVariants({ animate }), className)} {...props} />;
});

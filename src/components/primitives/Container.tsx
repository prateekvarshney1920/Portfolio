import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Container
 * -----------------------------------------------------------------------------
 * Horizontally centres content, applies the responsive page gutters
 * (Design System §3.4: 24px mobile → 48px desktop) and caps the content width
 * at one of the Aurora width tokens.
 *
 * @example
 * <Container>…</Container>                // 1200px page width
 * <Container size="reading">…</Container> // 680px prose measure
 */
const containerVariants = cva('mx-auto w-full px-6 md:px-12', {
  variants: {
    size: {
      /** 1200px — standard content width */
      page: 'max-w-page',
      /** 1440px — wide sections, featured grids */
      wide: 'max-w-wide',
      /** 800px — case-study main column */
      content: 'max-w-content',
      /** 680px (~68ch) — long-form reading measure */
      reading: 'max-w-reading',
      /** no width cap (gutters retained) */
      full: 'max-w-none',
    },
  },
  defaultVariants: {
    size: 'page',
  },
});

/** Union of the available Container widths. */
export type ContainerSize = NonNullable<VariantProps<typeof containerVariants>['size']>;

export interface ContainerProps
  extends React.ComponentPropsWithoutRef<'div'>, VariantProps<typeof containerVariants> {}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container(
  { className, size, ...props },
  ref,
) {
  return <div ref={ref} className={cn(containerVariants({ size }), className)} {...props} />;
});

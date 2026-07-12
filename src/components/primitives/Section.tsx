import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Container, type ContainerSize } from './Container';

/**
 * Section
 * -----------------------------------------------------------------------------
 * The semantic building block for every page section. Provides the "keynote"
 * vertical rhythm (Design System §3.3), `position: relative` so absolutely
 * positioned background layers (AuroraBackground, GridBackground, etc.) can be
 * dropped in as siblings, and an optional inner Container.
 *
 * Pass `container={false}` for full-bleed sections that manage their own layout.
 *
 * @example
 * <Section id="about">…</Section>
 * <Section spacing="compact" container="content">…</Section>
 * <Section container={false}><FullBleedThing /></Section>
 */
const sectionVariants = cva('relative w-full', {
  variants: {
    spacing: {
      /** Compressed premium rhythm - 64px to 96px to 112px */
      default: 'py-16 md:py-24 lg:py-28',
      /** Tighter sections */
      compact: 'py-10 md:py-14 lg:py-18',
      /** no vertical padding (caller controls spacing) */
      none: '',
    },
  },
  defaultVariants: {
    spacing: 'default',
  },
});

export interface SectionProps
  extends React.ComponentPropsWithoutRef<'section'>, VariantProps<typeof sectionVariants> {
  /** Wrap children in a Container of this size, or `false` for full-bleed. */
  container?: ContainerSize | false;
}

export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { className, spacing, container = 'page', children, ...props },
  ref,
) {
  return (
    <section ref={ref} className={cn(sectionVariants({ spacing }), className)} {...props}>
      {container === false ? children : <Container size={container}>{children}</Container>}
    </section>
  );
});

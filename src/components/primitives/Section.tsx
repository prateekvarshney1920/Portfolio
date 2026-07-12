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
      /** 96 → 128 → 192px — the standard confident rhythm */
      default: 'py-24 md:py-32 lg:py-48',
      /** 64 → 80 → 96px — tighter sections */
      compact: 'py-16 md:py-20 lg:py-24',
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

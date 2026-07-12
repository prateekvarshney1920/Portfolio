import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * SectionHeading
 * -----------------------------------------------------------------------------
 * The canonical section-heading composition (Design System §5.2):
 * eyebrow label → oversized display title → supporting line. Not a page section
 * itself — a reusable heading used *inside* sections.
 *
 * Renders the title as `<h2>` by default (keep a single `<h1>` in the Hero).
 * Pass a `<GradientText>` node as `title` to gradient part or all of it.
 *
 * @example
 * <SectionHeading eyebrow="Selected work" title="Things I've built" />
 * <SectionHeading align="center" title={<>Building <GradientText>AI products</GradientText></>} description="…" as="h2" />
 */
const sectionHeadingVariants = cva('flex flex-col', {
  variants: {
    align: {
      left: 'items-start text-left',
      center: 'items-center text-center',
    },
  },
  defaultVariants: {
    align: 'left',
  },
});

export interface SectionHeadingProps
  extends
    Omit<React.ComponentPropsWithoutRef<'div'>, 'title'>,
    VariantProps<typeof sectionHeadingVariants> {
  /** Small tracked/uppercase label above the title. */
  eyebrow?: React.ReactNode;
  /** The heading content (string or node, e.g. wrapping GradientText). */
  title: React.ReactNode;
  /** Optional supporting paragraph below the title. */
  description?: React.ReactNode;
  /** Heading level for correct document outline. Defaults to `h2`. */
  as?: 'h1' | 'h2' | 'h3';
  /** Escape hatch to tweak the title's typographic classes. */
  titleClassName?: string;
}

export const SectionHeading = forwardRef<HTMLDivElement, SectionHeadingProps>(
  function SectionHeading(
    { className, align, eyebrow, title, description, as = 'h2', titleClassName, ...props },
    ref,
  ) {
    const Heading = as;
    return (
      <div ref={ref} className={cn(sectionHeadingVariants({ align }), className)} {...props}>
        {eyebrow ? (
          <span className="text-fg-muted text-label mb-3 font-mono font-medium uppercase md:mb-4">
            {eyebrow}
          </span>
        ) : null}
        <Heading
          className={cn(
            'text-fg font-display text-display-l font-bold text-balance',
            titleClassName,
          )}
        >
          {title}
        </Heading>
        {description ? (
          <p
            className={cn('text-fg-secondary text-body-l mt-5', align === 'center' && 'max-w-2xl')}
          >
            {description}
          </p>
        ) : null}
      </div>
    );
  },
);

import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Tag
 * -----------------------------------------------------------------------------
 * A pill-shaped chip for skills, tech, and filters (Design System §7.6).
 * Non-interactive by default (renders a `<span>`). Set `interactive` to render
 * a real, keyboard-accessible `<button>` with `aria-pressed` reflecting the
 * `selected` state — the correct semantics for filter/toggle chips.
 *
 * @example
 * <Tag>TypeScript</Tag>
 * <Tag selected>React</Tag>
 * <Tag interactive selected={active} onClick={toggle}>AI</Tag>
 */
const tagVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full border font-medium leading-none whitespace-nowrap transition-colors duration-150',
  {
    variants: {
      variant: {
        default:
          'border-[var(--glass-subtle-border)] bg-[var(--glass-subtle-fill)] text-fg-secondary',
        selected: 'border-[var(--border-primary)] bg-primary/10 text-primary',
      },
      size: {
        sm: 'h-7 px-2.5 text-[0.8125rem]',
        md: 'h-[1.875rem] px-3 text-[0.9375rem]',
      },
      interactive: {
        true: 'cursor-pointer hover:border-[var(--border-strong)] hover:text-fg',
        false: '',
      },
    },
    compoundVariants: [
      // Keep the accent text on hover when a chip is already selected.
      { variant: 'selected', interactive: true, class: 'hover:text-primary' },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'md',
      interactive: false,
    },
  },
);

export interface TagProps
  extends
    React.HTMLAttributes<HTMLElement>,
    Omit<VariantProps<typeof tagVariants>, 'variant' | 'interactive'> {
  /** Applies the selected (accent) styling and, when interactive, aria-pressed. */
  selected?: boolean;
  /** Render as an accessible <button> instead of a <span>. */
  interactive?: boolean;
}

export const Tag = forwardRef<HTMLElement, TagProps>(function Tag(
  { className, size, selected = false, interactive = false, ...props },
  ref,
) {
  const classes = cn(
    tagVariants({ variant: selected ? 'selected' : 'default', size, interactive }),
    className,
  );

  if (interactive) {
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type="button"
        aria-pressed={selected}
        className={classes}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      />
    );
  }

  return <span ref={ref as React.Ref<HTMLSpanElement>} className={classes} {...props} />;
});

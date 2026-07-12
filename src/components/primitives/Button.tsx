import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Button
 * -----------------------------------------------------------------------------
 * The primary interactive element (Design System §7.1). Hover scales to 1.02
 * with an optional glow, presses to 0.98; the global `:focus-visible` ring
 * provides the accessible focus state. Every size meets the 44px touch target
 * except `sm` (36px), which is reserved for dense desktop UI.
 *
 * - `asChild` renders the child element (e.g. a Next `<Link>`) with button
 *   styling via Radix Slot — no wrapper, correct semantics.
 * - `isLoading` locks the width, hides the label, and shows a centred spinner
 *   while setting `aria-busy` and disabling interaction (native button only).
 *
 * Icon-only buttons MUST pass an `aria-label`.
 *
 * @example
 * <Button>Get in touch</Button>
 * <Button variant="secondary" size="lg">View work</Button>
 * <Button asChild><Link href="/resume">Resume</Link></Button>
 * <Button size="icon" aria-label="Open menu"><Menu /></Button>
 */
const buttonVariants = cva(
  [
    'relative inline-flex items-center justify-center gap-2 rounded-md font-medium whitespace-nowrap select-none',
    'transition-[transform,box-shadow,background-color,border-color,color] duration-150 ease-standard',
    'hover:scale-[1.02] active:scale-[0.98]',
    'disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40',
  ],
  {
    variants: {
      variant: {
        primary:
          'bg-[image:var(--gradient-signature)] text-[var(--text-on-primary)] hover:shadow-[var(--glow-primary)]',
        secondary:
          'glass text-fg hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-large)]',
        ghost: 'bg-transparent text-fg-secondary hover:bg-surface-raised-2 hover:text-fg',
      },
      size: {
        sm: 'h-9 px-4 text-[0.9375rem]',
        md: 'h-11 px-5 text-[1rem]',
        lg: 'h-[3.25rem] px-6 text-[1.125rem]',
        icon: 'size-11',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  /** Render the single child element with button styling (Radix Slot). */
  asChild?: boolean;
  /** Show a centred spinner and disable the button (native button only). */
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    className,
    variant,
    size,
    asChild = false,
    isLoading = false,
    disabled,
    children,
    type,
    ...props
  },
  ref,
) {
  const classes = cn(buttonVariants({ variant, size }), className);

  // asChild delegates rendering to the child; loading/spinner is not injected
  // because Slot requires a single child.
  if (asChild) {
    return (
      <Slot ref={ref} className={classes} {...props}>
        {children}
      </Slot>
    );
  }

  return (
    <button
      ref={ref}
      type={type ?? 'button'}
      className={classes}
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
      {...props}
    >
      {isLoading && <Loader2 className="absolute size-4 animate-spin" aria-hidden="true" />}
      <span className={cn('inline-flex items-center gap-2', isLoading && 'invisible')}>
        {children}
      </span>
    </button>
  );
});

export { buttonVariants };

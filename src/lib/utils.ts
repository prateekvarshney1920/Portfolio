import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge class names intelligently: `clsx` handles conditional/array/object
 * inputs, `tailwind-merge` de-duplicates conflicting Tailwind utilities so the
 * last one wins (e.g. `cn('p-2', 'p-4')` -> `'p-4'`).
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

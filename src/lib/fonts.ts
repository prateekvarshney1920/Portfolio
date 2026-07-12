import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

/**
 * Font foundation.
 *
 * Body / UI  -> Geist Sans   (self-hosted by the `geist` package, no network fetch)
 * Mono       -> Geist Mono   (self-hosted)
 * Display    -> Clash Display (design-system target, self-hosted via next/font/local)
 *
 * The display face is not yet bundled (the .woff2 files must be added — see
 * public/fonts/README.md). Until then `--font-display` falls back to Geist Sans
 * via the CSS mapping in globals.css, so the app builds and runs immediately.
 * Activating Clash Display is a 3-line change documented in that README.
 */
export const fontSans = GeistSans;
export const fontMono = GeistMono;

/** Space-separated `next/font` variable classes applied to <html>. */
export const fontVariables = `${GeistSans.variable} ${GeistMono.variable}`;

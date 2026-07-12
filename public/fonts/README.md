# Fonts

Body and mono fonts (**Geist Sans** / **Geist Mono**) are provided by the `geist`
npm package and self-hosted automatically by Next — no files needed here.

## Activating the display font (Clash Display)

The Aurora Design System specifies **Clash Display** for large headings. It is a
free, self-hostable font from Fontshare. It is not bundled yet, so `--font-display`
currently falls back to Geist Sans. To activate it:

1. Download Clash Display from https://www.fontshare.com/fonts/clash-display and
   place these `.woff2` files in this folder (`public/fonts/`):
   - `ClashDisplay-Semibold.woff2`
   - `ClashDisplay-Bold.woff2`

2. In `src/lib/fonts.ts`, add a local loader and export its variable:

   ```ts
   import localFont from 'next/font/local';

   export const fontDisplay = localFont({
     variable: '--font-display-face',
     display: 'swap',
     src: [
       { path: '../../public/fonts/ClashDisplay-Semibold.woff2', weight: '600', style: 'normal' },
       { path: '../../public/fonts/ClashDisplay-Bold.woff2', weight: '700', style: 'normal' },
     ],
   });

   export const fontVariables = `${GeistSans.variable} ${GeistMono.variable} ${fontDisplay.variable}`;
   ```

3. Done. `globals.css` already reads `--font-display-face` first for
   `--font-display`, so all `font-display` utilities switch over automatically.

No other changes are required.

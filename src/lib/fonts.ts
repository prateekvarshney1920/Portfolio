import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Bebas_Neue, Playfair_Display } from 'next/font/google';

/**
 * Font foundation.
 * 
 * Sans       -> Geist Sans (body/UI)
 * Mono       -> Geist Mono (labels/mono text)
 * Display    -> Bebas Neue (tall, impactful headings)
 * Serif      -> Playfair Display (sophisticated keyword accents)
 */
export const fontSans = GeistSans;
export const fontMono = GeistMono;

export const fontBebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
});

export const fontPlayfair = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
});

/** Space-separated font variable classes applied to <html>. */
export const fontVariables = `${GeistSans.variable} ${GeistMono.variable} ${fontBebas.variable} ${fontPlayfair.variable}`;

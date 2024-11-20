
// src/fonts/font-data.ts
import type { DesignFont, } from '../types/design_fonts';
//FontPairing
export const fonts: Record<string, DesignFont> = {
  inter: {
    id: 'inter',
    name: 'Inter',
    category: 'sans',
    variants: [
      { weight: '400', style: 'normal', src: '/fonts/Inter-Regular.woff2' },
      { weight: '500', style: 'normal', src: '/fonts/Inter-Medium.woff2' },
      { weight: '600', style: 'normal', src: '/fonts/Inter-SemiBold.woff2' },
    ],
    fallback: 'sans-serif',
    preview: {
      text: 'The quick brown fox jumps over the lazy dog',
      sizes: [16, 20, 24],
    },
    recommended: {
      heading: '600',
      body: '400',
    },
  },
  roboto: {
    id: 'roboto',
    name: 'Roboto Mono',
    category: 'mono',
    variants: [
      { weight: '400', style: 'normal', src: '/fonts/RobotoMono-Regular.woff2' },
      { weight: '700', style: 'normal', src: '/fonts/RobotoMono-Bold.woff2' },
    ],
    fallback: 'monospace',
    preview: {
      text: 'const hello = "world";',
      sizes: [14, 16, 18],
    },
    recommended: {
      code: '400',
    },
  },
};

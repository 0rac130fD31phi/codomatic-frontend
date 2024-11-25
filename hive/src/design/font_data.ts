// src/fonts/font-data.ts
import type { DesignFont } from '../types/design_fonts';

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
  lato: {
    id: 'lato',
    name: 'Lato',
    category: 'sans',
    variants: [
      { weight: '400', style: 'normal', src: '/fonts/Lato-Regular.woff2' },
      { weight: '700', style: 'normal', src: '/fonts/Lato-Bold.woff2' },
    ],
    fallback: 'sans-serif',
    preview: {
      text: 'The quick brown fox jumps over the lazy dog',
      sizes: [16, 20, 24],
    },
    recommended: {
      heading: '700',
      body: '400',
    },
  },
  merriweather: {
    id: 'merriweather',
    name: 'Merriweather',
    category: 'serif',
    variants: [
      { weight: '400', style: 'normal', src: '/fonts/Merriweather-Regular.woff2' },
      { weight: '700', style: 'normal', src: '/fonts/Merriweather-Bold.woff2' },
    ],
    fallback: 'serif',
    preview: {
      text: 'The quick brown fox jumps over the lazy dog',
      sizes: [16, 20, 24],
    },
    recommended: {
      heading: '700',
      body: '400',
    },
  },
  openSans: {
    id: 'openSans',
    name: 'Open Sans',
    category: 'sans',
    variants: [
      { weight: '400', style: 'normal', src: '/fonts/OpenSans-Regular.woff2' },
      { weight: '700', style: 'normal', src: '/fonts/OpenSans-Bold.woff2' },
    ],
    fallback: 'sans-serif',
    preview: {
      text: 'The quick brown fox jumps over the lazy dog',
      sizes: [16, 20, 24],
    },
    recommended: {
      heading: '700',
      body: '400',
    },
  },
  pacifico: {
    id: 'pacifico',
    name: 'Pacifico',
    category: 'handwriting',
    variants: [
      { weight: '400', style: 'normal', src: '/fonts/Pacifico-Regular.woff2' },
    ],
    fallback: 'cursive',
    preview: {
      text: 'The quick brown fox jumps over the lazy dog',
      sizes: [16, 20, 24],
    },
    recommended: {
      heading: '400',
      body: '400',
    },
  },
  lobster: {
    id: 'lobster',
    name: 'Lobster',
    category: 'display',
    variants: [
      { weight: '400', style: 'normal', src: '/fonts/Lobster-Regular.woff2' },
    ],
    fallback: 'cursive',
    preview: {
      text: 'The quick brown fox jumps over the lazy dog',
      sizes: [16, 20, 24],
    },
    recommended: {
      heading: '400',
      body: '400',
    },
  },
  playfairDisplay: {
    id: 'playfairDisplay',
    name: 'Playfair Display',
    category: 'serif',
    variants: [
      { weight: '400', style: 'normal', src: '/fonts/PlayfairDisplay-Regular.woff2' },
      { weight: '700', style: 'normal', src: '/fonts/PlayfairDisplay-Bold.woff2' },
    ],
    fallback: 'serif',
    preview: {
      text: 'The quick brown fox jumps over the lazy dog',
      sizes: [16, 20, 24],
    },
    recommended: {
      heading: '700',
      body: '400',
    },
  },
  raleway: {
    id: 'raleway',
    name: 'Raleway',
    category: 'sans',
    variants: [
      { weight: '400', style: 'normal', src: '/fonts/Raleway-Regular.woff2' },
      { weight: '700', style: 'normal', src: '/fonts/Raleway-Bold.woff2' },
    ],
    fallback: 'sans-serif',
    preview: {
      text: 'The quick brown fox jumps over the lazy dog',
      sizes: [16, 20, 24],
    },
    recommended: {
      heading: '700',
      body: '400',
    },
  },
  bebasNeue: {
    id: 'bebasNeue',
    name: 'Bebas Neue',
    category: 'display',
    variants: [
      { weight: '400', style: 'normal', src: '/fonts/BebasNeue-Regular.woff2' },
    ],
    fallback: 'sans-serif',
    preview: {
      text: 'The quick brown fox jumps over the lazy dog',
      sizes: [16, 20, 24],
    },
    recommended: {
      heading: '400',
      body: '400',
    },
  },
};

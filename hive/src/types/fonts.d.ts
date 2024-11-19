// src/types/font.ts

export type FontWeight =
  | '100' | '200' | '300' | '400' | '500'
  | '600' | '700' | '800' | '900';

export type FontStyle = 'normal' | 'italic';

export type FontCategory = 'sans' | 'serif' | 'mono' | 'display';

export interface FontVariant {
  weight: FontWeight;
  style: FontStyle;
  src: string;  // URL or path to the font file
}

export interface Font {
  id: string;
  name: string;
  category: FontCategory;
  variants: FontVariant[];
  author?: string;
  license?: string;
  variable?: boolean;
  fallback: string;
  preview: {
    text: string;
    sizes: number[];
  };
  recommended: {
    heading?: FontWeight;
    body?: FontWeight;
    code?: FontWeight;
  };
}

export interface FontPairing {
  id: string;
  name: string;
  heading: Font;
  body: Font;
  description?: string;
}

export interface FontSettings {
  primary: {
    font: Font;
    weight: FontWeight;
    style: FontStyle;
  };
  heading: {
    font: Font;
    weight: FontWeight;
    style: FontStyle;
  };
  mono: {
    font: Font;
    weight: FontWeight;
    style: FontStyle;
  };
  scale: number; // Base font size multiplier
  smoothing: boolean;
}

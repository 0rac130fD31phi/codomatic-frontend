// Define font weight values based on common typography standards.
export type FontWeight =
  | '100' // Thin
  | '200' // Extra Light
  | '300' // Light
  | '400' // Normal (Regular)
  | '500' // Medium
  | '600' // Semi Bold
  | '700' // Bold
  | '800' // Extra Bold
  | '900'; // Black

// Define available font styles.
export type FontStyle = 'normal' | 'italic';

// Define font categories for classification.
export type FontCategory = 'sans' | 'serif' | 'mono' | 'display';

// Interface for individual font variants (e.g., weight and style combinations).
export interface FontVariant {
  weight: FontWeight; // The font weight for the variant.
  style: FontStyle; // The font style (e.g., normal or italic).
  src: string; // URL or path to the font file.
}

// Interface for describing a design font and its attributes.
export interface DesignFont {
  id: string; // Unique identifier for the font.
  name: string; // Human-readable name of the font.
  category: FontCategory; // Classification of the font.
  variants: FontVariant[]; // Available variants for the font.
  author?: string; // Optional author/creator of the font.
  license?: string; // Optional license information (e.g., Open Font License).
  variable?: boolean; // Indicates if the font is variable (supports weight interpolation).
  fallback: string; // CSS fallback font (e.g., 'sans-serif').
  preview: {
    text: string; // Sample text to preview the font.
    sizes: number[]; // Font sizes for preview.
  };
  recommended: {
    heading?: FontWeight; // Recommended weight for headings.
    body?: FontWeight; // Recommended weight for body text.
    code?: FontWeight; // Recommended weight for monospace/code blocks.
  };
}

// Interface for pairing two fonts (e.g., heading and body fonts).
export interface FontPairing {
  id: string; // Unique identifier for the pairing.
  name: string; // Human-readable name of the pairing.
  heading: DesignFont; // Font used for headings.
  body: DesignFont; // Font used for body text.
  description?: string; // Optional description of the pairing.
}

// Interface for font settings, including the primary, heading, and monospace fonts.
export interface FontSettings {
  primary: {
    font: DesignFont; // The primary font used for body text.
    weight: FontWeight; // The weight of the primary font.
    style: FontStyle; // The style of the primary font.
  };
  heading: {
    font: DesignFont; // The font used for headings.
    weight: FontWeight; // The weight of the heading font.
    style: FontStyle; // The style of the heading font.
  };
  mono: {
    font: DesignFont; // The font used for monospace/code blocks.
    weight: FontWeight; // The weight of the monospace font.
    style: FontStyle; // The style of the monospace font.
  };
  scale: number; // Base font size multiplier for responsiveness.
  smoothing: boolean; // Whether font smoothing (anti-aliasing) is enabled.
}

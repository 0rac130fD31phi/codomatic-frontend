// src/config/site.ts
import { fonts } from '../design/font_data';
import type { FontSettings } from '../types/design_fonts';

export type SiteMode = 'default' | 'customizable' | 'locked';

export interface SiteConfig {
  name: string;
  description: string;
  mode: SiteMode;
  defaultTheme: string;
  defaultFontSettings: FontSettings;
  features: {
    themeSelector: boolean;
    fontSelector: boolean;
    gradients: boolean;
  };
}

export const siteConfig: SiteConfig = {
  name: 'DevIDE',
  description: 'Next-gen development environment',
  mode: 'customizable', // 'default' | 'customizable' | 'locked'
  defaultTheme: 'cyber',
  defaultFontSettings: {
    primary: {
      font: fonts.inter, // Access by property name
      weight: '400',
      style: 'normal'
    },
    heading: {
      font: fonts.inter, // Access by property name
      weight: '600',
      style: 'normal'
    },
    mono: {
      font: fonts.roboto, // Access by property name
      weight: '400',
      style: 'normal'
    },
    scale: 1,
    smoothing: true
  },
  features: {
    themeSelector: true,
    fontSelector: true,
    gradients: true
  }
};
// src/types/theme.ts

import { FontSettings } from './font';

export type ColorShade = {
  light: string;
  DEFAULT: string;
  dark: string;
};

export type GradientConfig = {
  enabled: boolean;
  from: string;
  via?: string;
  to: string;
  direction?: 'to-r' | 'to-l' | 'to-t' | 'to-b' | 'to-tr' | 'to-tl' | 'to-br' | 'to-bl';
  hover?: boolean;
  opacity?: number;
};

export type Surfaces = {
  primary: string;
  secondary: string;
  tertiary: string;
  elevated: string;
  interactive: string;
  hover: string;
  active: string;
};

export type TextStyles = {
  primary: string;
  secondary: string;
  tertiary: string;
  accent: string;
  error: string;
  success: string;
  warning: string;
};

export interface Theme {
  id: string;
  name: string;
  author?: string;
  description?: string;

  // Colors
  bgPrimary: string;
  accent: ColorShade;

  // Fonts
  fontSettings: FontSettings;  // Link to the FontSettings type defined in font.ts

  // Text
  text: TextStyles;

  // Surfaces
  surfaces: Surfaces;

  // Borders
  border: {
    color: string;
    hover: string;
    active: string;
    width: string;
    radius: string;
  };

  // Gradient configurations
  gradient?: GradientConfig;

  // Shadows
  shadow: {
    sm: string;
    DEFAULT: string;
    lg: string;
    focus: string;
  };

  // States
  states: {
    hover: string;
    focus: string;
    active: string;
    disabled: string;
  };
}

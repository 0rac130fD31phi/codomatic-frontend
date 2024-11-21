import { DesignTheme } from '../types/design_theme';

export const themes: Record<string, DesignTheme> = {
  cyber: {
    id: 'cyber',
    name: 'Cyber',
    bgPrimary: 'bg-gray-900',
    accent: {
      light: 'text-teal-300',
      DEFAULT: 'text-teal-400',
      dark: 'text-teal-500',
    },
    text: {
      primary: 'text-gray-50',
      secondary: 'text-gray-400',
      tertiary: 'text-gray-500',
      accent: 'text-teal-400',
      error: 'text-red-400',
      success: 'text-green-400',
      warning: 'text-yellow-400',
    },
    surfaces: {
      primary: 'bg-gray-900',
      secondary: 'bg-gray-800',
      tertiary: 'bg-gray-700',
      elevated: 'bg-gray-800',
      interactive: 'bg-gray-700',
      hover: 'bg-gray-600',
      active: 'bg-gray-500',
    },
    border: {
      color: 'border-gray-700',
      hover: 'border-gray-600',
      active: 'border-gray-500',
      width: 'border',
      radius: 'rounded-lg',
    },
    gradient: {
      enabled: true,
      from: 'from-teal-400',
      to: 'to-blue-500',
      direction: 'to-r',
    },
    shadow: {
      sm: 'shadow-sm',
      DEFAULT: 'shadow',
      lg: 'shadow-lg',
      focus: 'ring-2 ring-teal-500/50',
    },
    states: {
      hover: 'hover:bg-gray-700',
      focus: 'focus:ring-2 focus:ring-teal-500/50',
      active: 'active:bg-gray-600',
      disabled: 'opacity-50 cursor-not-allowed',
    },
  },
  minimal: {
    id: 'minimal',
    name: 'Minimal',
    bgPrimary: 'bg-white',
    accent: {
      light: 'text-blue-300',
      DEFAULT: 'text-blue-500',
      dark: 'text-blue-700',
    },
    text: {
      primary: 'text-gray-900',
      secondary: 'text-gray-600',
      tertiary: 'text-gray-400',
      accent: 'text-blue-500',
      error: 'text-red-500',
      success: 'text-green-500',
      warning: 'text-yellow-500',
    },
    surfaces: {
      primary: 'bg-white',
      secondary: 'bg-gray-50',
      tertiary: 'bg-gray-100',
      elevated: 'bg-white',
      interactive: 'bg-gray-50',
      hover: 'bg-gray-100',
      active: 'bg-gray-200',
    },
    border: {
      color: 'border-gray-200',
      hover: 'border-gray-300',
      active: 'border-gray-400',
      width: 'border',
      radius: 'rounded-lg',
    },
    shadow: {
      sm: 'shadow-sm',
      DEFAULT: 'shadow',
      lg: 'shadow-lg',
      focus: 'ring-2 ring-blue-500/50',
    },
    states: {
      hover: 'hover:bg-gray-50',
      focus: 'focus:ring-2 focus:ring-blue-500/50',
      active: 'active:bg-gray-100',
      disabled: 'opacity-50 cursor-not-allowed',
    },
  },
  dark: {
    id: 'dark',
    name: 'Dark',
    bgPrimary: 'bg-black',
    accent: {
      light: 'text-purple-300',
      DEFAULT: 'text-purple-500',
      dark: 'text-purple-700',
    },
    text: {
      primary: 'text-white',
      secondary: 'text-gray-400',
      tertiary: 'text-gray-600',
      accent: 'text-purple-500',
      error: 'text-red-500',
      success: 'text-green-500',
      warning: 'text-yellow-500',
    },
    surfaces: {
      primary: 'bg-black',
      secondary: 'bg-gray-800',
      tertiary: 'bg-gray-700',
      elevated: 'bg-gray-800',
      interactive: 'bg-gray-700',
      hover: 'bg-gray-600',
      active: 'bg-gray-500',
    },
    border: {
      color: 'border-gray-600',
      hover: 'border-gray-500',
      active: 'border-gray-400',
      width: 'border',
      radius: 'rounded-md',
    },
    shadow: {
      sm: 'shadow-sm',
      DEFAULT: 'shadow',
      lg: 'shadow-lg',
      focus: 'ring-2 ring-purple-500/50',
    },
    states: {
      hover: 'hover:bg-gray-800',
      focus: 'focus:ring-2 focus:ring-purple-500/50',
      active: 'active:bg-gray-700',
      disabled: 'opacity-40 cursor-not-allowed',
    },
  },
  retro: {
    id: 'retro',
    name: 'Retro',
    bgPrimary: 'bg-yellow-50',
    accent: {
      light: 'text-orange-300',
      DEFAULT: 'text-orange-500',
      dark: 'text-orange-700',
    },
    text: {
      primary: 'text-gray-900',
      secondary: 'text-gray-700',
      tertiary: 'text-gray-500',
      accent: 'text-orange-500',
      error: 'text-red-600',
      success: 'text-green-600',
      warning: 'text-yellow-600',
    },
    surfaces: {
      primary: 'bg-yellow-50',
      secondary: 'bg-yellow-100',
      tertiary: 'bg-yellow-200',
      elevated: 'bg-yellow-50',
      interactive: 'bg-yellow-100',
      hover: 'bg-yellow-200',
      active: 'bg-yellow-300',
    },
    border: {
      color: 'border-yellow-300',
      hover: 'border-yellow-400',
      active: 'border-yellow-500',
      width: 'border',
      radius: 'rounded-lg',
    },
    shadow: {
      sm: 'shadow-sm',
      DEFAULT: 'shadow-md',
      lg: 'shadow-lg',
      focus: 'ring-2 ring-orange-500/50',
    },
    states: {
      hover: 'hover:bg-yellow-200',
      focus: 'focus:ring-2 focus:ring-orange-500/50',
      active: 'active:bg-yellow-300',
      disabled: 'opacity-50 cursor-not-allowed',
    },
  },
  pastel: {
    id: 'pastel',
    name: 'Pastel',
    bgPrimary: 'bg-pink-50',
    accent: {
      light: 'text-pink-300',
      DEFAULT: 'text-pink-500',
      dark: 'text-pink-700',
    },
    text: {
      primary: 'text-gray-800',
      secondary: 'text-gray-600',
      tertiary: 'text-gray-400',
      accent: 'text-pink-500',
      error: 'text-red-500',
      success: 'text-green-500',
      warning: 'text-yellow-500',
    },
    surfaces: {
      primary: 'bg-pink-50',
      secondary: 'bg-pink-100',
      tertiary: 'bg-pink-200',
      elevated: 'bg-pink-100',
      interactive: 'bg-pink-200',
      hover: 'bg-pink-300',
      active: 'bg-pink-400',
    },
    border: {
      color: 'border-pink-300',
      hover: 'border-pink-400',
      active: 'border-pink-500',
      width: 'border',
      radius: 'rounded-full',
    },
    shadow: {
      sm: 'shadow-sm',
      DEFAULT: 'shadow',
      lg: 'shadow-lg',
      focus: 'ring-2 ring-pink-500/50',
    },
    states: {
      hover: 'hover:bg-pink-200',
      focus: 'focus:ring-2 focus:ring-pink-500/50',
      active: 'active:bg-pink-300',
      disabled: 'opacity-50 cursor-not-allowed',
    },
  },
  neon: {
    id: 'neon',
    name: 'Neon',
    bgPrimary: 'bg-black',
    accent: {
      light: 'text-cyan-300',
      DEFAULT: 'text-cyan-500',
      dark: 'text-cyan-700',
    },
    text: {
      primary: 'text-white',
      secondary: 'text-gray-400',
      tertiary: 'text-gray-500',
      accent: 'text-cyan-500',
      error: 'text-red-400',
      success: 'text-green-400',
      warning: 'text-yellow-400',
    },
    surfaces: {
      primary: 'bg-black',
      secondary: 'bg-gray-800',
      tertiary: 'bg-gray-700',
      elevated: 'bg-gray-900',
      interactive: 'bg-gray-800',
      hover: 'bg-gray-600',
      active: 'bg-gray-500',
    },
    border: {
      color: 'border-cyan-500',
      hover: 'border-cyan-400',
      active: 'border-cyan-300',
      width: 'border',
      radius: 'rounded-lg',
    },
    shadow: {
      sm: 'shadow-sm',
      DEFAULT: 'shadow-md',
      lg: 'shadow-lg',
      focus: 'ring-2 ring-cyan-500/50',
    },
    states: {
      hover: 'hover:bg-gray-800',
      focus: 'focus:ring-2 focus:ring-cyan-500/50',
      active: 'active:bg-gray-700',
      disabled: 'opacity-50 cursor-not-allowed',
    },
  },
  forest: {
    id: 'forest',
    name: 'Forest',
    bgPrimary: 'bg-green-900',
    accent: {
      light: 'text-green-300',
      DEFAULT: 'text-green-500',
      dark: 'text-green-700',
    },
    text: {
      primary: 'text-gray-50',
      secondary: 'text-gray-300',
      tertiary: 'text-gray-400',
      accent: 'text-green-500',
      error: 'text-red-500',
      success: 'text-green-300',
      warning: 'text-yellow-300',
    },
    surfaces: {
      primary: 'bg-green-900',
      secondary: 'bg-green-800',
      tertiary: 'bg-green-700',
      elevated: 'bg-green-800',
      interactive: 'bg-green-700',
      hover: 'bg-green-600',
      active: 'bg-green-500',
    },
    border: {
      color: 'border-green-500',
      hover: 'border-green-400',
      active: 'border-green-300',
      width: 'border',
      radius: 'rounded-lg',
    },
    shadow: {
      sm: 'shadow-sm',
      DEFAULT: 'shadow-md',
      lg: 'shadow-lg',
      focus: 'ring-2 ring-green-500/50',
    },
    states: {
      hover: 'hover:bg-green-800',
      focus: 'focus:ring-2 focus:ring-green-500/50',
      active: 'active:bg-green-700',
      disabled: 'opacity-50 cursor-not-allowed',
    },
  },
  sunset: {
    id: 'sunset',
    name: 'Sunset',
    bgPrimary: 'bg-gradient-to-br from-red-400 to-orange-400',
    accent: {
      light: 'text-yellow-300',
      DEFAULT: 'text-yellow-500',
      dark: 'text-yellow-700',
    },
    text: {
      primary: 'text-white',
      secondary: 'text-gray-200',
      tertiary: 'text-gray-400',
      accent: 'text-yellow-500',
      error: 'text-red-500',
      success: 'text-green-500',
      warning: 'text-yellow-500',
    },
    surfaces: {
      primary: 'bg-gradient-to-br from-red-400 to-orange-400',
      secondary: 'bg-red-500',
      tertiary: 'bg-orange-400',
      elevated: 'bg-orange-500',
      interactive: 'bg-orange-600',
      hover: 'bg-orange-700',
      active: 'bg-orange-800',
    },
    border: {
      color: 'border-yellow-500',
      hover: 'border-yellow-400',
      active: 'border-yellow-300',
      width: 'border',
      radius: 'rounded-lg',
    },
    shadow: {
      sm: 'shadow-sm',
      DEFAULT: 'shadow',
      lg: 'shadow-lg',
      focus: 'ring-2 ring-yellow-500/50',
    },
    states: {
      hover: 'hover:bg-orange-500',
      focus: 'focus:ring-2 focus:ring-yellow-500/50',
      active: 'active:bg-orange-600',
      disabled: 'opacity-50 cursor-not-allowed',
    },
  },
  ocean: {
    id: 'ocean',
    name: 'Ocean',
    bgPrimary: 'bg-blue-900',
    accent: {
      light: 'text-blue-300',
      DEFAULT: 'text-blue-500',
      dark: 'text-blue-700',
    },
    text: {
      primary: 'text-white',
      secondary: 'text-blue-300',
      tertiary: 'text-blue-400',
      accent: 'text-blue-500',
      error: 'text-red-500',
      success: 'text-green-500',
      warning: 'text-yellow-500',
    },
    surfaces: {
      primary: 'bg-blue-900',
      secondary: 'bg-blue-800',
      tertiary: 'bg-blue-700',
      elevated: 'bg-blue-800',
      interactive: 'bg-blue-700',
      hover: 'bg-blue-600',
      active: 'bg-blue-500',
    },
    border: {
      color: 'border-blue-500',
      hover: 'border-blue-400',
      active: 'border-blue-300',
      width: 'border',
      radius: 'rounded-md',
    },
    shadow: {
      sm: 'shadow-sm',
      DEFAULT: 'shadow',
      lg: 'shadow-lg',
      focus: 'ring-2 ring-blue-500/50',
    },
    states: {
      hover: 'hover:bg-blue-800',
      focus: 'focus:ring-2 focus:ring-blue-500/50',
      active: 'active:bg-blue-700',
      disabled: 'opacity-40 cursor-not-allowed',
    },
  },
  metallic: {
    id: 'metallic',
    name: 'Metallic',
    bgPrimary: 'bg-gradient-to-br from-gray-600 to-gray-800',
    accent: {
      light: 'text-gray-300',
      DEFAULT: 'text-gray-400',
      dark: 'text-gray-500',
    },
    text: {
      primary: 'text-white',
      secondary: 'text-gray-300',
      tertiary: 'text-gray-500',
      accent: 'text-gray-400',
      error: 'text-red-400',
      success: 'text-green-400',
      warning: 'text-yellow-400',
    },
    surfaces: {
      primary: 'bg-gradient-to-br from-gray-600 to-gray-800',
      secondary: 'bg-gray-700',
      tertiary: 'bg-gray-600',
      elevated: 'bg-gray-700',
      interactive: 'bg-gray-600',
      hover: 'bg-gray-500',
      active: 'bg-gray-400',
    },
    border: {
      color: 'border-gray-500',
      hover: 'border-gray-400',
      active: 'border-gray-300',
      width: 'border',
      radius: 'rounded-lg',
    },
    shadow: {
      sm: 'shadow-sm',
      DEFAULT: 'shadow-md',
      lg: 'shadow-lg',
      focus: 'ring-2 ring-gray-400/50',
    },
    states: {
      hover: 'hover:bg-gray-700',
      focus: 'focus:ring-2 focus:ring-gray-400/50',
      active: 'active:bg-gray-600',
      disabled: 'opacity-50 cursor-not-allowed',
    },
  },  lava: {
    id: 'lava',
    name: 'Lava',
    bgPrimary: 'bg-black',
    accent: {
      light: 'text-red-400',
      DEFAULT: 'text-red-600',
      dark: 'text-red-800',
    },
    text: {
      primary: 'text-white',
      secondary: 'text-gray-400',
      tertiary: 'text-gray-500',
      accent: 'text-red-600',
      error: 'text-red-500',
      success: 'text-green-500',
      warning: 'text-yellow-500',
    },
    surfaces: {
      primary: 'bg-black',
      secondary: 'bg-red-900',
      tertiary: 'bg-red-800',
      elevated: 'bg-red-700',
      interactive: 'bg-red-800',
      hover: 'bg-red-600',
      active: 'bg-red-500',
    },
    border: {
      color: 'border-red-600',
      hover: 'border-red-500',
      active: 'border-red-400',
      width: 'border',
      radius: 'rounded-lg',
    },
    shadow: {
      sm: 'shadow-sm',
      DEFAULT: 'shadow-md',
      lg: 'shadow-lg',
      focus: 'ring-2 ring-red-500/50',
    },
    states: {
      hover: 'hover:bg-red-800',
      focus: 'focus:ring-2 focus:ring-red-500/50',
      active: 'active:bg-red-700',
      disabled: 'opacity-50 cursor-not-allowed',
    },
  },
  aurora: {
    id: 'aurora',
    name: 'Aurora',
    bgPrimary: 'bg-gradient-to-br from-green-400 to-blue-600',
    accent: {
      light: 'text-green-300',
      DEFAULT: 'text-green-500',
      dark: 'text-green-700',
    },
    text: {
      primary: 'text-white',
      secondary: 'text-gray-300',
      tertiary: 'text-gray-400',
      accent: 'text-green-500',
      error: 'text-red-500',
      success: 'text-blue-500',
      warning: 'text-yellow-500',
    },
    surfaces: {
      primary: 'bg-green-600',
      secondary: 'bg-green-500',
      tertiary: 'bg-blue-500',
      elevated: 'bg-blue-600',
      interactive: 'bg-green-500',
      hover: 'bg-green-400',
      active: 'bg-blue-400',
    },
    border: {
      color: 'border-green-400',
      hover: 'border-green-300',
      active: 'border-blue-300',
      width: 'border',
      radius: 'rounded-lg',
    },
    shadow: {
      sm: 'shadow-sm',
      DEFAULT: 'shadow-md',
      lg: 'shadow-lg',
      focus: 'ring-2 ring-green-400/50',
    },
    states: {
      hover: 'hover:bg-green-500',
      focus: 'focus:ring-2 focus:ring-green-500/50',
      active: 'active:bg-green-600',
      disabled: 'opacity-50 cursor-not-allowed',
    },
  },
  desert: {
    id: 'desert',
    name: 'Desert',
    bgPrimary: 'bg-yellow-900',
    accent: {
      light: 'text-orange-300',
      DEFAULT: 'text-orange-500',
      dark: 'text-orange-700',
    },
    text: {
      primary: 'text-gray-800',
      secondary: 'text-gray-600',
      tertiary: 'text-gray-400',
      accent: 'text-orange-500',
      error: 'text-red-600',
      success: 'text-green-600',
      warning: 'text-yellow-600',
    },
    surfaces: {
      primary: 'bg-yellow-900',
      secondary: 'bg-orange-800',
      tertiary: 'bg-orange-700',
      elevated: 'bg-orange-600',
      interactive: 'bg-orange-700',
      hover: 'bg-orange-500',
      active: 'bg-orange-400',
    },
    border: {
      color: 'border-orange-500',
      hover: 'border-orange-400',
      active: 'border-orange-300',
      width: 'border',
      radius: 'rounded-md',
    },
    shadow: {
      sm: 'shadow-sm',
      DEFAULT: 'shadow',
      lg: 'shadow-lg',
      focus: 'ring-2 ring-orange-500/50',
    },
    states: {
      hover: 'hover:bg-orange-800',
      focus: 'focus:ring-2 focus:ring-orange-500/50',
      active: 'active:bg-orange-700',
      disabled: 'opacity-50 cursor-not-allowed',
    },
  },
  galaxy: {
    id: 'galaxy',
    name: 'Galaxy',
    bgPrimary: 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600',
    accent: {
      light: 'text-pink-300',
      DEFAULT: 'text-purple-500',
      dark: 'text-purple-700',
    },
    text: {
      primary: 'text-white',
      secondary: 'text-gray-200',
      tertiary: 'text-gray-400',
      accent: 'text-pink-500',
      error: 'text-red-500',
      success: 'text-blue-500',
      warning: 'text-yellow-500',
    },
    surfaces: {
      primary: 'bg-indigo-900',
      secondary: 'bg-purple-800',
      tertiary: 'bg-pink-700',
      elevated: 'bg-purple-900',
      interactive: 'bg-purple-700',
      hover: 'bg-pink-600',
      active: 'bg-indigo-600',
    },
    border: {
      color: 'border-purple-500',
      hover: 'border-pink-500',
      active: 'border-indigo-500',
      width: 'border',
      radius: 'rounded-md',
    },
    shadow: {
      sm: 'shadow-sm',
      DEFAULT: 'shadow-md',
      lg: 'shadow-lg',
      focus: 'ring-2 ring-purple-500/50',
    },
    states: {
      hover: 'hover:bg-purple-800',
      focus: 'focus:ring-2 focus:ring-purple-500/50',
      active: 'active:bg-purple-900',
      disabled: 'opacity-50 cursor-not-allowed',
    },
  },
  monochrome: {
    id: 'monochrome',
    name: 'Monochrome',
    bgPrimary: 'bg-gray-900',
    accent: {
      light: 'text-gray-400',
      DEFAULT: 'text-gray-500',
      dark: 'text-gray-700',
    },
    text: {
      primary: 'text-gray-50',
      secondary: 'text-gray-400',
      tertiary: 'text-gray-500',
      accent: 'text-gray-500',
      error: 'text-red-500',
      success: 'text-green-500',
      warning: 'text-yellow-500',
    },
    surfaces: {
      primary: 'bg-gray-900',
      secondary: 'bg-gray-800',
      tertiary: 'bg-gray-700',
      elevated: 'bg-gray-800',
      interactive: 'bg-gray-700',
      hover: 'bg-gray-600',
      active: 'bg-gray-500',
    },
    border: {
      color: 'border-gray-700',
      hover: 'border-gray-600',
      active: 'border-gray-500',
      width: 'border',
      radius: 'rounded-md',
    },
    shadow: {
      sm: 'shadow-sm',
      DEFAULT: 'shadow',
      lg: 'shadow-lg',
      focus: 'ring-2 ring-gray-500/50',
    },
    states: {
      hover: 'hover:bg-gray-800',
      focus: 'focus:ring-2 focus:ring-gray-500/50',
      active: 'active:bg-gray-700',
      disabled: 'opacity-40 cursor-not-allowed',
    },
  },
};


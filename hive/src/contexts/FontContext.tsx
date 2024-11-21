import { createContext, useState, useEffect, useContext } from 'react';
import { fonts } from '../design/font_data';
import type { FontSettings, DesignFont, FontWeight, FontStyle } from '../types/design_fonts';

interface FontContextType {
  settings: FontSettings;
  updateSettings: (newSettings: Partial<FontSettings>) => void;
  setFontFamily: (
    category: 'primary' | 'heading' | 'mono',
    font: DesignFont,
    weight?: FontWeight,
    style?: FontStyle
  ) => void;
  fonts: Record<string, DesignFont>;
}

const defaultSettings: FontSettings = {
  primary: {
    font: fonts.inter || {
      id: 'default',
      name: 'Default Sans',
      category: 'sans',
      variants: [],
      fallback: 'sans-serif',
      preview: {
        text: 'Default Sans Preview',
        sizes: [16, 18, 20],
      },
      recommended: { body: '400' },
    },
    weight: '400',
    style: 'normal',
  },
  heading: {
    font: fonts.inter || {
      id: 'default-heading',
      name: 'Default Heading',
      category: 'sans',
      variants: [],
      fallback: 'sans-serif',
      preview: {
        text: 'Default Heading Preview',
        sizes: [24, 28, 32],
      },
      recommended: { heading: '600' },
    },
    weight: '600',
    style: 'normal',
  },
  mono: {
    font: fonts.roboto || {
      id: 'default-mono',
      name: 'Default Mono',
      category: 'mono',
      variants: [],
      fallback: 'monospace',
      preview: {
        text: 'const code = true;',
        sizes: [14, 16, 18],
      },
      recommended: { code: '400' },
    },
    weight: '400',
    style: 'normal',
  },
  scale: 1,
  smoothing: true,
};

const FontContext = createContext<FontContextType | undefined>(undefined);

export const FontProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<FontSettings>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('fontSettings');
      if (saved) {
        try {
          return JSON.parse(saved) as FontSettings;
        } catch (e) {
          console.error('Invalid fontSettings in localStorage:', e);
        }
      }
    }
    return defaultSettings;
  });

  useEffect(() => {
    try {
      localStorage.setItem('fontSettings', JSON.stringify(settings));
    } catch (e) {
      console.error('Failed to save fontSettings to localStorage:', e);
    }
  }, [settings]);

  const setFontFamily = (
    category: 'primary' | 'heading' | 'mono',
    font: DesignFont,
    weight?: FontWeight,
    style?: FontStyle
  ) => {
    if (!font || !font.name || !font.fallback) {
      console.warn(`Invalid font passed to setFontFamily: ${JSON.stringify(font)}`);
      return;
    }
    setSettings(prev => ({
      ...prev,
      [category]: {
        font,
        weight: weight || prev[category].weight,
        style: style || prev[category].style,
      },
    }));
  };

  const updateSettings = (newSettings: Partial<FontSettings>) => {
    setSettings(prev => ({
      ...prev,
      ...newSettings,
    }));
  };

  const value: FontContextType = {
    settings,
    updateSettings,
    setFontFamily,
    fonts,
  };

  return <FontContext.Provider value={value}>{children}</FontContext.Provider>;
};

export const useFont = () => {
  const context = useContext(FontContext);
  if (!context) {
    throw new Error('useFont must be used within a FontProvider');
  }
  return context;
};

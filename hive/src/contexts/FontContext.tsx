// src/contexts/FontContext.tsx
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
  fonts: Record<string, DesignFont[]>;
}

const defaultSettings: FontSettings = {
  primary: {
    font: fonts.inter,
    weight: '400',
    style: 'normal'
  },
  heading: {
    font: fonts.inter,
    weight: '600',
    style: 'normal'
  },
  mono: {
    font: fonts.robotoMono,
    weight: '400',
    style: 'normal'
  },
  scale: 1,
  smoothing: true
};

const FontContext = createContext<FontContextType | undefined>(undefined);

export const FontProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<FontSettings>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('fontSettings');
      if (saved) {
        return JSON.parse(saved);
      }
    }
    return defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem('fontSettings', JSON.stringify(settings));
  }, [settings]);

  const setFontFamily = (
    category: 'primary' | 'heading' | 'mono',
    font: DesignFont,
    weight?: FontWeight,
    style?: FontStyle
  ) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        font,
        ...(weight && { weight }),
        ...(style && { style })
      }
    }));
  };

  const updateSettings = (newSettings: Partial<FontSettings>) => {
    setSettings(prev => ({
      ...prev,
      ...newSettings
    }));
  };

  const value: FontContextType = {
    settings,
    updateSettings,
    setFontFamily,
    fonts: Object.fromEntries(
      Object.entries(fonts).map(([key, font]) => [key, [font]])
    )
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

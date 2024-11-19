// src/context/ThemeContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import themes from '@/types/themes';
import type { Theme } from '@/types/theme';

interface ThemeContextType {
  currentTheme: string;
  theme: Theme;
  setTheme: (theme: string) => void;
  isGradientEnabled: boolean;
  toggleGradient: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load theme from localStorage or default to 'cyber'
  const [currentTheme, setCurrentTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'cyber';
    }
    return 'cyber';
  });

  const [isGradientEnabled, setIsGradientEnabled] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('gradientEnabled') !== 'false';
    }
    return true;
  });

  useEffect(() => {
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  useEffect(() => {
    localStorage.setItem('gradientEnabled', String(isGradientEnabled));
  }, [isGradientEnabled]);

  const value = {
    currentTheme,
    theme: themes[currentTheme],
    setTheme: setCurrentTheme,
    isGradientEnabled,
    toggleGradient: () => setIsGradientEnabled(prev => !prev)
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// src/context/FontContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { fonts } from '@/config/fonts';

interface FontSettings {
  sans: string;
  mono: string;
}

interface FontContextType {
  currentFont: FontSettings;
  setFont: (category: 'sans' | 'mono', value: string) => void;
  fonts: typeof fonts;
}

const FontContext = createContext<FontContextType | undefined>(undefined);

export const FontProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentFont, setCurrentFont] = useState<FontSettings>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('fontSettings');
      if (saved) {
        return JSON.parse(saved);
      }
    }
    return {
      sans: 'font-inter',
      mono: 'font-jetbrains'
    };
  });

  useEffect(() => {
    localStorage.setItem('fontSettings', JSON.stringify(currentFont));
  }, [currentFont]);

  const value = {
    currentFont,
    setFont: (category: 'sans' | 'mono', value: string) => {
      setCurrentFont(prev => ({
        ...prev,
        [category]: value
      }));
    },
    fonts
  };

  return (
    <FontContext.Provider value={value}>
      {children}
    </FontContext.Provider>
  );
};

export const useFont = () => {
  const context = useContext(FontContext);
  if (context === undefined) {
    throw new Error('useFont must be used within a FontProvider');
  }
  return context;
};

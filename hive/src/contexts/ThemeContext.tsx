import { createContext, useContext, useState, useEffect } from 'react';
import { themes } from '../design/theme_data';
import { DesignTheme } from '../types/design_theme';

// Define the context type
interface ThemeContextType {
  currentTheme: string;
  theme: DesignTheme;
  setTheme: (theme: string) => void;
  isGradientEnabled: boolean;
  toggleGradient: () => void;
  isCustomizable: boolean;
}

// Create the context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Default theme key
const DEFAULT_THEME = 'cyber'; // Replace with your actual default theme key

// Theme Provider component
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // State: current theme
  const [currentTheme, setCurrentTheme] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme && themes[savedTheme] ? savedTheme : DEFAULT_THEME;
    }
    return DEFAULT_THEME;
  });

  // State: gradient enabled
  const [isGradientEnabled, setIsGradientEnabled] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('gradientEnabled') !== 'false';
    }
    return true;
  });

  // Sync state with local storage
  useEffect(() => {
    localStorage.setItem('theme', currentTheme);
    localStorage.setItem('gradientEnabled', String(isGradientEnabled));
  }, [currentTheme, isGradientEnabled]);

  // Context value
  const value: ThemeContextType = {
    currentTheme,
    theme: themes[currentTheme] || themes[DEFAULT_THEME], // Fallback to default theme
    setTheme: (theme) => {
      if (themes[theme]) {
        setCurrentTheme(theme);
      } else {
        console.warn(`Invalid theme key: "${theme}". Falling back to default.`);
        setCurrentTheme(DEFAULT_THEME);
      }
    },
    isGradientEnabled,
    toggleGradient: () => setIsGradientEnabled((prev) => !prev),
    isCustomizable: true,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

// Hook to access the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

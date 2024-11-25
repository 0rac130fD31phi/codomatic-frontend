import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { FontSelector } from '../components/shared/design/FontSelector';
import { ThemeSelector } from '../components/shared/design/ThemeSelector';

interface BaseLayoutProps {
  children: React.ReactNode;
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={`flex flex-col min-h-screen ${theme.bgPrimary}`}>
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 0% 0%, ${theme.accent.light}15 0%, transparent 50%),
              radial-gradient(circle at 100% 100%, ${theme.accent.DEFAULT}15 0%, transparent 50%)
            `
          }}
        />
      </div>
      
      {/* Navigation */}
      <header className={`
        sticky top-0 z-50
        border-b ${theme.border.color}
        backdrop-blur-sm
      `}>
        <Navigation />
      </header>

      {/* Main Content */}
      <main className="relative flex-grow z-10 pt-20">
        <FontSelector />
        <ThemeSelector />
        {children}
      </main>

      {/* Footer */}
      <footer className={`relative z-10 border-t ${theme.border.color}`}>
        <Footer />
      </footer>
    </div>
  );
};

import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface LoggedOutLayoutProps {
  children: React.ReactNode;
}

export const LoggedOutLayout: React.FC<LoggedOutLayoutProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={`flex flex-col min-h-screen ${theme.bgPrimary}`}>
      {/* Main Content */}
      <main className="relative flex-grow z-10 pt-20">
        {children}
      </main>
    </div>
  );
};

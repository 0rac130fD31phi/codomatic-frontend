import React, { useState } from 'react';
import { Settings, X } from 'lucide-react';

import themes from './types/themes';
type ThemeSelectorProps = {
  currentTheme: string;
  onThemeChange: (theme: string) => void;
};

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ currentTheme, onThemeChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-24 right-6 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white/10 backdrop-blur-lg rounded-full p-2 mb-2 hover:bg-white/20 transition-colors"
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <Settings className="w-6 h-6 text-white" />}
      </button>

      {/* Theme Selection Menu */}
      {isOpen && (
        <div className="bg-black/30 backdrop-blur-xl rounded-lg p-4 border border-white/20">
          <h3 className="text-white text-sm font-medium mb-3">Select Theme</h3>
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(themes).map(([key, theme]) => (
              <button
                key={key}
                onClick={() => {
                  onThemeChange(key);
                  setIsOpen(false); // Close the menu after selection
                }}
                className={`group relative py-3 px-4 rounded-lg transition-all ${
                  currentTheme === key
                    ? `bg-gradient-to-r ${theme.gradientFrom} ${theme.gradientTo} text-black`
                    : 'bg-gray-800/50 hover:bg-gray-800 text-white'
                }`}
              >
                <span className="text-sm font-medium">{theme.name}</span>
                {/* Hover Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${theme.gradientFrom} ${theme.gradientTo} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity`}
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;

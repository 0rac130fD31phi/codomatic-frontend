import React, { useState } from 'react';
import { ThemeSelector } from './ThemeSelector';
import { FontSelector } from './FontSelector';
import { useTheme } from '../../../contexts/ThemeContext';

export const DesignSelector = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<'theme' | 'font'>('theme');

  return (
    <div className="fixed top-24 right-6 z-50">
      <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 w-80">
        <div className="flex space-x-2 mb-4">
          <button
            onClick={() => setActiveTab('theme')}
            className={`
              px-3 py-1 rounded text-sm
              ${activeTab === 'theme' 
                ? theme.accent.DEFAULT 
                : theme.surfaces.interactive}
              hover:${theme.states.hover}
              transition-colors
            `}
          >
            Theme
          </button>
          <button
            onClick={() => setActiveTab('font')}
            className={`
              px-3 py-1 rounded text-sm
              ${activeTab === 'font' 
                ? theme.accent.DEFAULT 
                : theme.surfaces.interactive}
              hover:${theme.states.hover}
              transition-colors
            `}
          >
            Font
          </button>
        </div>

        <div className="max-h-96 overflow-y-auto">
          {activeTab === 'theme' && <ThemeSelector />}
          {activeTab === 'font' && <FontSelector />}
        </div>
      </div>
    </div>
  );
};

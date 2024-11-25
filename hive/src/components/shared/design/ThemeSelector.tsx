import React, { useState } from 'react';
import { Settings, X } from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';
import { themes } from '../../../design/theme_data';

export const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-24 right-6 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white/10 backdrop-blur-lg rounded-full p-2 mb-2 hover:bg-white/20 transition-colors"
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <Settings className="w-6 h-6 text-white" />}
      </button>

      {isOpen && (
        <div className={`
          p-4 rounded-lg border w-72 max-h-96 overflow-y-auto
          ${theme.surfaces.secondary}
          ${theme.border.color}
        `}>
          <h3 className={`text-sm font-medium mb-3 ${theme.text.primary}`}>
            Select Theme
          </h3>
          
          <div className="space-y-2">
            {Object.values(themes).map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id);
                  setIsOpen(false);
                }}
                className={`
                  w-full p-3 rounded-lg flex items-center justify-between
                  ${theme.id === t.id ? t.accent.DEFAULT : t.surfaces.interactive}
                  hover:${t.states.hover}
                  transition-colors
                `}
              >
                <span>{t.name}</span>
                {theme.id === t.id && (
                  <div className={`w-2 h-2 rounded-full ${t.accent.DEFAULT}`} />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

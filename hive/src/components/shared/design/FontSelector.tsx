import React, { useState } from 'react';
import { Type, X } from 'lucide-react';
import { useFont } from '../../../contexts/FontContext';
import { useTheme } from '../../../contexts/ThemeContext';
import type { DesignFont } from '../../../types/design_fonts';
import {fonts} from '../../../design/font_data';

export const FontSelector = () => {
  const { settings, setFontFamily, updateSettings } = useFont();
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'primary' | 'heading' | 'mono'>('primary');

  return (
    <div className="fixed top-24 left-6 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white/10 backdrop-blur-lg rounded-full p-2 mb-2 hover:bg-white/20 transition-colors"
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <Type className="w-6 h-6 text-white" />}
      </button>

      {isOpen && (
        <div className={`
          p-4 rounded-lg border w-80 
          ${theme.surfaces.secondary} 
          ${theme.border.color}
        `}>
          <h3 className={`text-sm font-medium mb-3 ${theme.text.primary}`}>
            Typography Settings
          </h3>

          {/* Category Selector */}
          <div className="flex space-x-2 mb-4">
            {(['primary', 'heading', 'mono'] as const).map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-3 py-1 rounded text-sm
                  ${activeCategory === category 
                    ? theme.accent.DEFAULT 
                    : theme.surfaces.interactive}
                  hover:${theme.states.hover}
                  transition-colors
                `}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Font Selection */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className={`text-sm ${theme.text.secondary}`}>
                Font Family
              </label>
              <div className="space-y-1">
                {Object.values(fonts)
                  .filter(font => {
                    if (activeCategory === 'mono') return font.category === 'mono';
                    return font.category === 'sans' || font.category === 'serif';
                  })
                  .map(font => (
                    <FontOption
                      key={font.id}
                      font={font}
                      isSelected={settings[activeCategory].font.id === font.id}
                      onSelect={() => setFontFamily(
                        activeCategory,
                        font,
                        font.recommended[activeCategory === 'heading' ? 'heading' : 'body']
                      )}
                    />
                  ))}
              </div>
            </div>

            {/* Font Size Scale */}
            <div className="space-y-2">
              <label className={`text-sm ${theme.text.secondary}`}>
                Size Scale
              </label>
              <input
                type="range"
                min="0.8"
                max="1.2"
                step="0.05"
                value={settings.scale}
                onChange={(e) => updateSettings({ scale: parseFloat(e.target.value) })}
                className="w-full"
              />
            </div>

            {/* Font Smoothing */}
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={settings.smoothing}
                onChange={(e) => updateSettings({ smoothing: e.target.checked })}
              />
              <span className={`text-sm ${theme.text.secondary}`}>
                Font Smoothing
              </span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

// Font Option Component
const FontOption: React.FC<{
  font: DesignFont;
  isSelected: boolean;
  onSelect: () => void;
}> = ({ font, isSelected, onSelect }) => {
  const { theme } = useTheme();
  
  return (
    <button
      onClick={onSelect}
      className={`
        w-full p-3 rounded-lg text-left
        ${theme.surfaces.interactive}
        hover:${theme.states.hover}
        ${isSelected ? `ring-2 ring-${theme.accent.DEFAULT}` : ''}
        transition-all
      `}
    >
      <div 
        style={{ 
          fontFamily: `${font.name}, ${font.fallback}`,
          fontWeight: font.recommended.body,
        }}
      >
        <div className={`text-sm ${theme.text.primary}`}>
          {font.name}
        </div>
        <div className={`text-xs ${theme.text.secondary}`}>
          {font.preview.text}
        </div>
      </div>
    </button>
  );
};

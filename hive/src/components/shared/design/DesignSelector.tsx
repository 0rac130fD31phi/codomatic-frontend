import React, { useState } from "react";
import { Settings } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useFont } from "../contexts/FontContext";
import { themes } from "../design/theme_data";

const DesignSelector: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { settings, updateSettings, fonts } = useFont();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-20 right-6 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
      >
        <Settings className="text-white" />
      </button>
      {isOpen && (
        <div
          className={`p-4 bg-gray-900 text-white rounded-lg shadow-lg border ${theme.border.color}`}
        >
          <h3 className="text-lg font-semibold mb-4">Design Selector</h3>

          {/* Theme Selector */}
          <h4 className="text-md font-medium mb-2">Themes</h4>
          <div className="space-y-2">
            {Object.values(themes).map((t) => (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                className={`
                  w-full text-left px-4 py-2 rounded-lg 
                  ${theme.id === t.id ? t.accent.DEFAULT : t.surfaces.interactive}
                  hover:${t.states.hover} transition-colors
                `}
              >
                {t.name}
              </button>
            ))}
          </div>

          {/* Font Selector */}
          <h4 className="text-md font-medium mt-4 mb-2">Fonts</h4>
          <div className="space-y-2">
            {Object.keys(fonts).map((fontKey) => (
              <button
                key={fontKey}
                onClick={() =>
                  updateSettings({
                    heading: {
                      font: fonts[fontKey][0],
                      weight: "600",
                      style: "normal",
                    },
                  })
                }
                className={`
                  w-full text-left px-4 py-2 rounded-lg 
                  ${settings.heading.font.name === fonts[fontKey][0].name
                    ? theme.accent.DEFAULT
                    : "bg-gray-800 hover:bg-gray-700"}
                `}
              >
                {fonts[fontKey][0].name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DesignSelector;

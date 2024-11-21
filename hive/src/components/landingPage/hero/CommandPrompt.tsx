import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Send, Sparkles, Layout, LineChart, Bot } from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';
import { useFont } from '../../../contexts/FontContext';
import type { Suggestion } from '../../../types/landing/hero';

export const CommandPrompt: React.FC = () => {
  const { theme } = useTheme();
  const { settings } = useFont();
  const [command, setCommand] = useState('');
  const showSuggestions = true;

  // Define fallback styles for safety
  const monoFontStyle = {
    fontFamily: `${settings?.mono?.font?.name || 'monospace'}, ${settings?.mono?.font?.fallback || 'monospace'}`,
    fontWeight: settings?.mono?.weight || '400',
    fontStyle: settings?.mono?.style || 'normal',
  };

  const suggestions: Suggestion[] = [
    {
      id: 'app',
      text: 'Build a SaaS application with authentication and payments',
      type: 'app',
      icon: Layout,
    },
    {
      id: 'analysis',
      text: 'Analyze market trends in the AI industry',
      type: 'analysis',
      icon: LineChart,
    },
    {
      id: 'automation',
      text: 'Create an automated customer support system',
      type: 'automation',
      icon: Bot,
    },
  ];

  return (
    <div
      className={`
        max-w-3xl mx-auto
        ${theme.surfaces.secondary}
        border ${theme.border.color}
        rounded-2xl
        backdrop-blur-lg
        shadow-lg
        overflow-hidden
      `}
    >
      <div className="p-6">
        {/* Prompt Header */}
        <div className="flex items-center gap-3 mb-4">
          <Terminal className={`w-5 h-5 ${theme.text.accent}`} />
          <span
            className={`text-lg ${theme.text.primary} font-semibold`}
            style={monoFontStyle}
          >
            What would you like to create?
          </span>
        </div>

        {/* Command Input */}
        <div
          className={`
            flex items-center gap-3
            p-4 rounded-lg
            ${theme.surfaces.interactive}
            border ${theme.border.hover}
          `}
        >
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            placeholder="Describe your idea..."
            className={`
              flex-1 bg-transparent outline-none
              ${theme.text.primary}
              text-base
            `}
            style={monoFontStyle}
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`
              p-3 rounded-full
              ${theme.accent.DEFAULT}
              hover:${theme.states.hover}
              transition-all duration-200
            `}
          >
            <Send className="w-5 h-5 text-white" />
          </motion.button>
        </div>

        {/* Suggestions */}
        <AnimatePresence>
          {showSuggestions && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-6 space-y-3"
            >
              {suggestions.map((suggestion) => (
                <motion.div
                  key={suggestion.id}
                  whileHover={{
                    scale: 1.03,
                    translateY: -3,
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`
                    flex items-center gap-4 p-4
                    rounded-lg cursor-pointer
                    ${theme.surfaces.secondary}
                    hover:${theme.states.hover}
                    transition-all duration-300
                    group
                  `}
                  onClick={() => setCommand(suggestion.text)}
                >
                  <div
                    className={`
                      flex items-center justify-center
                      p-3 rounded-full
                      ${theme.surfaces.interactive}
                      group-hover:${theme.accent.light}
                      transition-all duration-200
                    `}
                  >
                    <suggestion.icon className={`w-6 h-6 ${theme.text.accent}`} />
                  </div>
                  <div>
                    <p className={`text-sm ${theme.text.primary} font-medium`}>
                      {suggestion.text}
                    </p>
                  </div>
                  <Sparkles
                    className={`
                      w-4 h-4 ml-auto
                      text-yellow-400 opacity-0
                      group-hover:opacity-100
                      transition-opacity duration-200
                    `}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

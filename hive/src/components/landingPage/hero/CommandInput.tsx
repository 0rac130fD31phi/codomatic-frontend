import React, { useState } from 'react';
import { Command } from 'cmdk';
import { Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '../../../contexts/ThemeContext';
import { useFont } from '../../../contexts/FontContext';
import { Server, Smartphone, Code } from 'lucide-react';
interface Suggestion {
  id: string;
  text: string;
  icon: React.ReactNode;
}

export const CommandInput: React.FC = () => {
  const { theme } = useTheme();
  const { settings } = useFont();
  const [input, setInput] = useState('');

  const suggestions: Suggestion[] = [
    {
      id: 'saas',
      text: 'Build a SaaS application with user auth and payments',
      icon: <Server className={theme.text.accent} />
    },
    {
      id: 'mobile',
      text: 'Create a cross-platform mobile app',
      icon: <Smartphone className={theme.text.accent} />
    },
    {
      id: 'api',
      text: 'Design and implement a REST API',
      icon: <Code className={theme.text.accent} />
    }
  ];

  return (
    <div className={`
      ${theme.surfaces.secondary}
      rounded-lg
      backdrop-blur-sm
    `}>
      <Command
        className="relative"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            // Handle command submission
          }
        }}
      >
        <div className={`
          flex items-center gap-3 p-2
          border-b ${theme.border.color}
        `}>
          <Sparkles className={`w-4 h-4 ${theme.text.accent}`} />
          <Command.Input
            value={input}
            onValueChange={setInput}
            placeholder="Describe what you want to build..."
            className={`
              flex-1 outline-none bg-transparent
              ${theme.text.primary}
            `}
            style={{
              fontFamily: `${settings.mono.font}, ${settings.mono.font}`,
              fontWeight: settings.mono.weight,
            }}
          />
          <Button 
            size="sm"
            className={`${theme.accent.DEFAULT} hover:${theme.states.hover}`}
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>

        {input.length > 0 && (
          <Command.List className="p-2 space-y-1">
            {suggestions.map((suggestion) => (
              <Command.Item
                key={suggestion.id}
                value={suggestion.text}
                className={`
                  flex items-center gap-2 p-2 rounded-lg
                  ${theme.surfaces.interactive}
                  hover:${theme.states.hover}
                  cursor-pointer
                `}
                onSelect={() => setInput(suggestion.text)}
              >
                {suggestion.icon}
                <span className={`text-sm ${theme.text.secondary}`}>
                  {suggestion.text}
                </span>
              </Command.Item>
            ))}
          </Command.List>
        )}
      </Command>
    </div>
  );
};
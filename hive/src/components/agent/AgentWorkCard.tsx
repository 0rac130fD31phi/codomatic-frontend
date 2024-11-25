import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Code, Server, Database, Cpu } from 'lucide-react';
import { Progress } from '../ui/progress';
import { useTheme } from '../../contexts/ThemeContext';
import { useFont } from '../../contexts/FontContext';

interface AgentWorkCardProps {
  agent: string;
  task: string;
  progress: number;
  delay?: number;
}

const agentIcons = {
  "UI Designer": Code,
  "Backend Engineer": Server,
  "DevOps": Database,
  "Data Scientist": Cpu,
  "Default": Bot
} as const;

export const AgentWorkCard: React.FC<AgentWorkCardProps> = ({
  agent,
  task,
  progress,
  delay = 0
}) => {
  const { theme } = useTheme();
  const { settings } = useFont();
  const Icon = agentIcons[agent as keyof typeof agentIcons] || agentIcons.Default;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`
        p-4 rounded-lg border
        ${theme.surfaces.interactive}
        ${theme.border.color}
        hover:${theme.states.hover}
        transition-all duration-200
      `}
    >
      <div className="flex items-start gap-3">
        <div className={`
          p-2 rounded-lg
          ${theme.surfaces.secondary}
        `}>
          <Icon className={`w-4 h-4 ${theme.text.accent}`} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <h3 
              className={`text-sm font-medium ${theme.text.primary}`}
              style={{
                fontFamily: `${settings.heading.font.name}, ${settings.heading.font.fallback}`,
                fontWeight: settings.heading.weight,
              }}
            >
              {agent}
            </h3>
            <span className={`text-xs ${theme.text.secondary}`}>
              {progress}%
            </span>
          </div>

          <p className={`text-xs ${theme.text.tertiary} mb-3`}>
            {task}
          </p>

          <Progress 
            value={progress} 
            className="h-1"
            indicatorClassName={theme.accent.DEFAULT}
          />
        </div>
      </div>
    </motion.div>
  );
};

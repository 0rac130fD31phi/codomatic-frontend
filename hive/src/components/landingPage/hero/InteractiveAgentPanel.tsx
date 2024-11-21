import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Code, Server, Terminal, GitBranch, CheckCircle2, Loader2, Clock } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useFont } from '@/contexts/FontContext';
import AnimatedCircularProgressBar from '@/components/ui/animated-circular-progress-bar';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Agent {
  id: string;
  name: string;
  icon: React.ElementType;
  tasks: string[];
  currentTaskIndex: number;
  progress: number;
  status: 'planning' | 'executing' | 'complete' | 'waiting';
}

export const InteractiveAgentPanel: React.FC = () => {
  const { theme } = useTheme();
  const { settings } = useFont();

  const agents: Agent[] = [
    {
      id: 'ui',
      name: 'UI Designer',
      icon: Code,
      tasks: [
        'Analyzing requirements...',
        'Generating components...',
        'Optimizing layouts...',
        'Implementing styles...'
      ],
      currentTaskIndex: 0,
      progress: 75,
      status: 'executing'
    },
    {
      id: 'backend',
      name: 'Backend Engineer',
      icon: Server,
      tasks: [
        'Designing API...',
        'Building endpoints...',
        'Setting up database...',
        'Testing connections...'
      ],
      currentTaskIndex: 1,
      progress: 45,
      status: 'executing'
    },
    {
      id: 'devops',
      name: 'DevOps',
      icon: Terminal,
      tasks: [
        'Preparing environment...',
        'Configuring CI/CD...',
        'Setting up monitoring...',
        'Deploying services...'
      ],
      currentTaskIndex: 0,
      progress: 30,
      status: 'planning'
    }
  ];

  return (
    <Card className={`
      overflow-hidden
      border ${theme.border.color}
      ${theme.surfaces.secondary}
      backdrop-blur-md
    `}>
      {/* Header */}
      <div className={`
        p-4 border-b ${theme.border.color}
        flex items-center justify-between
      `}>
        <div className="flex items-center gap-3">
          <GitBranch className={`w-5 h-5 ${theme.text.accent}`} />
          <h3 
            className={theme.text.primary}
            style={{
              fontFamily: `${settings.heading.font.name}, ${settings.heading.font.fallback}`,
              fontWeight: settings.heading.weight,
            }}
          >
            Build Process
          </h3>
        </div>
        <Badge variant="outline" className={theme.text.accent}>
          Live
        </Badge>
      </div>

      {/* Agents */}
      <div className="p-4 space-y-4">
        {agents.map((agent) => (
          <motion.div
            key={agent.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`
              p-4 rounded-lg
              ${theme.surfaces.interactive}
              border ${theme.border.color}
              hover:${theme.states.hover}
              transition-all duration-200
            `}
          >
            <div className="flex items-start gap-3">
              <div className={`
                p-2 rounded-lg
                ${theme.surfaces.secondary}
                ${agent.status === 'executing' ? 'animate-pulse' : ''}
              `}>
                <agent.icon className={theme.text.accent} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 
                      className={`font-medium ${theme.text.primary}`}
                      style={{
                        fontFamily: `${settings.heading.font.name}, ${settings.heading.font.fallback}`,
                        fontWeight: settings.heading.weight,
                      }}
                    >
                      {agent.name}
                    </h4>
                    <motion.p 
                      key={agent.tasks[agent.currentTaskIndex]}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`text-sm ${theme.text.secondary}`}
                    >
                      {agent.tasks[agent.currentTaskIndex]}
                    </motion.p>
                  </div>
                  <StatusIndicator status={agent.status} theme={theme} />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className={theme.text.tertiary}>Progress</span>
                    <span className={theme.text.secondary}>{agent.progress}%</span>
                  </div>
                  <AnimatedCircularProgressBar 
                    value={agent.progress} 
                    className="h-1"
                  />
                </div>

                {/* Task Timeline */}
                <div className="mt-4 flex items-center gap-2">
                  {agent.tasks.map((_, idx) => (
                    <motion.div
                      key={idx}
                      className={`
                        flex-1 h-1 rounded-full
                        ${idx <= agent.currentTaskIndex ? theme.accent.DEFAULT : theme.surfaces.secondary}
                      `}
                      animate={idx === agent.currentTaskIndex ? {
                        opacity: [0.5, 1, 0.5],
                        scale: [0.98, 1, 0.98]
                      } : {}}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 pointer-events-none">
        {agents.map((agent, idx) => {
          if (idx === agents.length - 1) return null;
          return (
            <motion.path
              key={agent.id}
              d={`M ${idx * 100} 50 L ${(idx + 1) * 100} 50`}
              stroke={theme.accent.DEFAULT}
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          );
        })}
      </svg>
    </Card>
  );
};

const StatusIndicator: React.FC<{ status: Agent['status']; theme: any }> = ({ status, theme }) => {
  const variants = {
    planning: {
      icon: Loader2,
      className: `${theme.text.warning} animate-spin`,
      text: 'Planning'
    },
    executing: {
      icon: Loader2,
      className: `${theme.text.accent} animate-spin`,
      text: 'Executing'
    },
    complete: {
      icon: CheckCircle2,
      className: theme.text.success,
      text: 'Complete'
    },
    waiting: {
      icon: Clock,
      className: theme.text.secondary,
      text: 'Waiting'
    }
  };

  const { icon: Icon, className, text } = variants[status];

  return (
    <div className="flex items-center gap-1">
      <Icon className={`w-4 h-4 ${className}`} />
      <span className={`text-xs ${theme.text.tertiary}`}>{text}</span>
    </div>
  );
};

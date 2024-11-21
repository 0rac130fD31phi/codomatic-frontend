
// components/landing/sections/HowItWorks.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  GitBranch, 
  Play, 
  RefreshCw,

  Zap,
  Bot
} from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';
import { useFont } from '../../../contexts/FontContext';
import type { DesignTheme } from '../../../types/design_theme';

interface Step {
  id: string;
  title: string;
  description: string;
  icon: React.FC<{ className?: string }>;
  color: keyof DesignTheme['text'];
  animation?: {
    delay: number;
    duration: number;
  };
}

export const HowItWorksSection: React.FC = () => {
  const { theme } = useTheme();
  const { settings } = useFont();
  
  const steps: Step[] = [
    {
      id: 'input',
      title: 'Describe Your Vision',
      description: 'Tell Haive what you want to build using natural language.',
      icon: MessageSquare,
      color: 'accent',
      animation: {
        delay: 0,
        duration: 2
      }
    },
    {
      id: 'planning',
      title: 'AI Planning',
      description: 'Automated digital entities break down your goal into actionable steps.',
      icon: GitBranch,
      color: 'success',
      animation: {
        delay: 0.2,
        duration: 2
      }
    },
    {
      id: 'execution',
      title: 'Autonomous Execution',
      description: 'Specialized agents collaborate to bring your vision to life.',
      icon: Bot,
      color: 'warning',
      animation: {
        delay: 0.4,
        duration: 2
      }
    },
    {
      id: 'delivery',
      title: 'Continuous Improvement',
      description: 'Your solution evolves and improves based on feedback and usage.',
      icon: RefreshCw,
      color: 'success',
      animation: {
        delay: 0.6,
        duration: 2
      }
    }
  ];

  return (
    <section className={`relative`}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 
          className={`text-4xl mb-6 ${theme.text.primary}`}
          style={{
            fontFamily: `${settings.heading.font.name}, ${settings.heading.font.fallback}`,
            fontWeight: settings.heading.weight,
          }}
        >
          How Haive Works
        </h2>
        <p className={`text-xl max-w-2xl mx-auto ${theme.text.secondary}`}>
          Experience a seamless journey from idea to implementation with our 
          AI-powered workflow.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="relative">
        {/* Connection Line */}
        <div 
          className={`absolute top-1/2 left-0 w-full h-px ${theme.border.color}`}
          style={{ transform: 'translateY(-50%)' }}
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative"
            >
              {/* Step Number */}
              <div className={`
                w-12 h-12 rounded-full
                ${theme.surfaces.interactive}
                border-4 ${theme.border.color}
                flex items-center justify-center
                mx-auto mb-6
                relative z-10
                ${theme.bgPrimary}
              `}>
                <motion.span 
                  className={`text-lg font-bold ${theme.text[step.color]}`}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.8, 1] 
                  }}
                  transition={{ 
                    duration: step.animation?.duration || 2,
                    delay: step.animation?.delay || 0,
                    repeat: Infinity 
                  }}
                >
                  {idx + 1}
                </motion.span>
              </div>

              {/* Step Content */}
              <div className="text-center">
                <div className="mb-4">
                  <step.icon className={`w-6 h-6 mx-auto ${theme.text[step.color]}`} />
                </div>
                <h3 
                  className={`text-lg mb-2 ${theme.text.primary}`}
                  style={{
                    fontFamily: `${settings.heading.font.name}, ${settings.heading.font.fallback}`,
                    fontWeight: settings.heading.weight,
                  }}
                >
                  {step.title}
                </h3>
                <p className={theme.text.secondary}>
                  {step.description}
                </p>
              </div>

              {/* Visual Enhancement Elements */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                  opacity: [0.1, 0.2, 0.1],
                  scale: [0.95, 1, 0.95]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: idx * 0.5
                }}
              >
                <div className={`
                  absolute inset-0 rounded-lg opacity-10
                  bg-gradient-to-br from-${theme.text[step.color]} to-transparent
                `} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Demo Area */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`
            mt-16 p-8 rounded-xl
            ${theme.surfaces.secondary}
            border ${theme.border.color}
          `}
        >
          <div className="flex items-center justify-between mb-6">
            <h4 
              className={`text-lg ${theme.text.primary}`}
              style={{
                fontFamily: `${settings.heading.font.name}, ${settings.heading.font.fallback}`,
                fontWeight: settings.heading.weight,
              }}
            >
              See It In Action
            </h4>
            <button className={`
              px-4 py-2 rounded-lg
              ${theme.surfaces.interactive}
              hover:${theme.states.hover}
              transition-all
              flex items-center gap-2
            `}>
              <Play className="w-4 h-4" />
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Demo Preview Area */}
          <div className={`
            aspect-video rounded-lg
            ${theme.surfaces.interactive}
            flex items-center justify-center
          `}>
            <Zap className={`w-8 h-8 ${theme.text.accent}`} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

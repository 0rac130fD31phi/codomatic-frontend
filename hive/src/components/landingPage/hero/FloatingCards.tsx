import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Brain, Rocket } from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';
import { useFont } from '../../../contexts/FontContext';
import { FloatingCard } from '../../../types/landing/hero';

export const FloatingCards: React.FC = () => {
  const { theme } = useTheme();
  const { settings } = useFont();

  const cards: FloatingCard[] = [
    {
      id: 'card-1',
      type: 'code',
      title: 'Frontend Generation',
      content: 'Building React components with neural architecture...',
      status: 'generating',
      progress: 75,
    },
    {
      id: 'card-2',
      type: 'analysis',
      title: 'System Analysis',
      content: 'Optimizing database schema and API endpoints...',
      status: 'complete',
    },
    {
      id: 'card-3',
      type: 'deployment',
      title: 'Cloud Deployment',
      content: 'Configuring serverless infrastructure...',
      status: 'processing',
      progress: 45,
    },
  ];

  return (
    <div className="relative max-w-7xl mx-auto px-6 py-12">
      <AnimatePresence>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          style={{
            marginTop: '2rem',
          }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { delay: index * 0.2 },
              }}
              exit={{ opacity: 0, scale: 0.9 }}
              className={`
                ${theme.surfaces.secondary}
                border ${theme.border.color}
                backdrop-blur-lg
                rounded-xl p-6
                shadow-lg
              `}
            >
              {/* Card Header */}
              <div className="flex items-start gap-4">
                <div
                  className={`
                    p-3 rounded-lg
                    ${theme.surfaces.interactive}
                  `}
                >
                  {card.type === 'code' && <Code className={theme.text.accent} />}
                  {card.type === 'analysis' && (
                    <Brain className={theme.text.accent} />
                  )}
                  {card.type === 'deployment' && (
                    <Rocket className={theme.text.accent} />
                  )}
                </div>

                {/* Card Title & Content */}
                <div className="flex-1">
                  <h4
                    className={`text-sm font-medium mb-1 ${theme.text.primary}`}
                    style={{
                      fontFamily: settings.heading.font.name,
                      fontWeight: settings.heading.weight,
                    }}
                  >
                    {card.title}
                  </h4>
                  <p className={`text-xs ${theme.text.tertiary}`}>
                    {card.content}
                  </p>
                </div>
              </div>

              {/* Progress Bar (if applicable) */}
              {card.progress !== undefined && (
                <div className="mt-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-xs ${theme.text.secondary}`}>
                      {card.status}
                    </span>
                    <span className={`text-xs ${theme.text.secondary}`}>
                      {card.progress}%
                    </span>
                  </div>
                  <div
                    className={`h-1 rounded-full ${theme.surfaces.interactive}`}
                  >
                    <motion.div
                      className={`h-full rounded-full ${theme.accent.DEFAULT}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${card.progress}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};


// components/landing/demos/index.tsx
import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { motion } from 'framer-motion';
import { Code, Terminal, Database, GitBranch, Lock, ShoppingBag, Shield } from 'lucide-react';

// Code Preview Demo
export const CodePreview: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`rounded-lg ${theme.surfaces.secondary} p-4`}>
      <pre className={`text-sm ${theme.text.secondary} font-mono`}>
        <code>{`function buildComponent() {
  const ui = await ai.generate({
    type: "react",
    spec: "dashboard"
  });
  return ui.compile();
}`}</code>
      </pre>
    </div>
  );
};

// Orchestration Demo
export const OrchestrationDemo: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className="flex items-center gap-2">
      {['Frontend', 'Backend', 'Testing'].map((agent, idx) => (
        <motion.div
          key={agent}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, delay: idx * 0.3, repeat: Infinity }}
          className={`
            px-3 py-1 rounded-full text-xs
            ${theme.surfaces.interactive}
            ${theme.text.secondary}
          `}
        >
          {agent}
        </motion.div>
      ))}
    </div>
  );
};

// Learning Metrics Demo
export const LearningMetrics: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className="space-y-2">
      {[
        { label: 'Performance', value: 92 },
        { label: 'Accuracy', value: 88 },
        { label: 'Speed', value: 95 }
      ].map(metric => (
        <div key={metric.label} className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className={theme.text.secondary}>{metric.label}</span>
            <span className={theme.text.accent}>{metric.value}%</span>
          </div>
          <div className={`h-1 rounded-full ${theme.surfaces.interactive}`}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${metric.value}%` }}
              className={`h-full rounded-full ${theme.accent.DEFAULT}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

// Scaling Visual Demo
export const ScalingVisual: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className="grid grid-cols-3 gap-2">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
          className={`
            aspect-square rounded-lg
            ${theme.surfaces.interactive}
            flex items-center justify-center
          `}
        >
          <Terminal className={`w-4 h-4 ${theme.text.accent}`} />
        </motion.div>
      ))}
    </div>
  );
};

// Security Features Demo
export const SecurityFeatures: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className="flex items-center justify-between">
      {[Lock, Shield, Database].map((Icon, idx) => (
        <motion.div
          key={idx}
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ duration: 4, delay: idx * 0.5, repeat: Infinity }}
          className={`
            p-2 rounded-lg
            ${theme.surfaces.interactive}
          `}
        >
          <Icon className={`w-4 h-4 ${theme.text.accent}`} />
        </motion.div>
      ))}
    </div>
  );
};

// Marketplace Preview Demo
export const MarketplacePreview: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className="flex gap-2">
      {[
        { name: 'E-commerce', icon: ShoppingBag },
        { name: 'Analytics', icon: GitBranch },
        { name: 'API', icon: Code }
      ].map(item => (
        <div
          key={item.name}
          className={`
            flex-1 p-2 rounded-lg
            ${theme.surfaces.interactive}
            text-center
          `}
        >
          <item.icon className={`w-4 h-4 mx-auto mb-1 ${theme.text.accent}`} />
          <span className={`text-xs ${theme.text.secondary}`}>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

import { motion } from 'framer-motion';
import { useTheme } from '../../../contexts/ThemeContext';
import { useFont } from '../../../contexts/FontContext';
import { 
  Brain, Network, GitBranch, Layers, 
  Shield, Store, 
} from 'lucide-react';
import {
  CodePreview,
  OrchestrationDemo,
  LearningMetrics,
  ScalingVisual,
  SecurityFeatures,
  MarketplacePreview
} from '../demos/demo';
import type { Feature } from '../../../types/landing/hero';

const FeatureCard: React.FC<Feature> = ({ title, description, icon: Icon, color, demo }) => {
  const { theme } = useTheme();
  const { settings } = useFont();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`
        p-6 rounded-2xl
        ${theme.surfaces.interactive}
        border ${theme.border.color}
        hover:${theme.states.hover}
        transition-all duration-200
      `}
    >
      <div className={`
        w-12 h-12 rounded-lg
        ${theme.surfaces.secondary}
        flex items-center justify-center
        mb-6
      `}>
        <Icon className={`w-6 h-6 ${color}`} />
      </div>

      <h3 
        className={`text-xl mb-3 ${theme.text.primary}`}
        style={{
          fontFamily: `${settings.heading.font.name}, ${settings.heading.font.fallback}`,
          fontWeight: settings.heading.weight,
        }}
      >
        {title}
      </h3>

      <p className={`${theme.text.secondary} mb-6`}>
        {description}
      </p>

      {demo && (
        <div className="mt-6 pt-6 border-t border-dashed border-gray-700">
          {demo}
        </div>
      )}
    </motion.div>
  );
};

export const FeaturesSection: React.FC = () => {
  const { theme } = useTheme();

  const features: Feature[] = [
    {
      id: 'autonomous',
      title: 'Autonomous Development',
      description: 'AI agents collaborate to build complete software solutions with minimal human intervention.',
      icon: Brain,
      color: theme.text.accent,
      demo: <CodePreview />
    },
    {
      id: 'intelligent',
      title: 'Intelligent Orchestration',
      description: 'Smart task distribution and resource management across your AI workforce.',
      icon: Network,
      color: theme.text.success,
      demo: <OrchestrationDemo />
    },
    {
      id: 'adaptive',
      title: 'Adaptive Learning',
      description: 'Systems that evolve and improve based on feedback and performance data.',
      icon: GitBranch,
      color: theme.text.warning,
      demo: <LearningMetrics />
    },
    {
      id: 'scalable',
      title: 'Infinite Scalability',
      description: 'Run multiple projects simultaneously with automatic resource allocation.',
      icon: Layers,
      color: theme.text.accent,
      demo: <ScalingVisual />
    },
    {
      id: 'secure',
      title: 'Enterprise Security',
      description: 'Built-in security protocols and compliance measures for peace of mind.',
      icon: Shield,
      color: theme.text.success,
      demo: <SecurityFeatures />
    },
    {
      id: 'marketplace',
      title: 'Workflow Marketplace',
      description: 'Share and monetize custom workflows and agent configurations.',
      icon: Store,
      color: theme.text.accent,
      demo: <MarketplacePreview />
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map(feature => (
        <FeatureCard key={feature.id} {...feature} />
      ))}
    </div>
  );
};
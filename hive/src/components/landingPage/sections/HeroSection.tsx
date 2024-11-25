import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';
import { Button } from '../../ui/button';
import { useTheme } from '../../../contexts/ThemeContext';
import { useFont } from '../../../contexts/FontContext';
import { AgentWorkCard } from '../hero/AgentCard';
import Particles from '../../ui/particles';

interface AgentWork {
  agent: string;
  task: string;
  progress: number;
}

export const HeroSection: React.FC = () => {
  const { theme } = useTheme();
  const { settings } = useFont();

  const agents: AgentWork[] = [
    {
      agent: "UI Designer",
      task: "Generating React components...",
      progress: 75
    },
    {
      agent: "Backend Engineer",
      task: "Building API endpoints...",
      progress: 45
    },
    {
      agent: "DevOps",
      task: "Configuring deployment...",
      progress: 30
    }
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center">
      <div className="absolute inset-0 -z-11">
        <Particles />
      </div>

      {/* Top Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`
          inline-flex items-center gap-2 
          ${theme.surfaces.interactive} 
          rounded-full px-4 py-2 mb-6
        `}
      >
        <Sparkles className={`w-4 h-4 ${theme.text.accent}`} />
        <span className={theme.text.secondary}>
          AI Development at Human Speed
        </span>
      </motion.div>

      {/* Main Content */}
      <div className="space-y-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-2"
          style={{
            fontFamily: `${settings.heading.font.name}, ${settings.heading.font.fallback}`,
            fontWeight: settings.heading.weight,
          }}
        >
          <div className="text-3xl md:text-4xl">
            <span className={theme.text.primary}>Think It.</span>{' '}
            <span className={theme.text.secondary}>Build It.</span>
          </div>
          <div className={`text-4xl md:text-5xl ${theme.text.accent}`}>
            Your AI Dev Team
          </div>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`text-xl ${theme.text.secondary} max-w-xl mx-auto`}
          style={{
            fontFamily: `${settings.primary.font.name}, ${settings.primary.font.fallback}`,
          }}
        >
          Turn ideas into working software with AI developers that code, 
          test, and deploy 24/7. No coding required.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-4"
        >
          <Button className="group">
            Start Building
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="secondary">
            See It Work
          </Button>
        </motion.div>
      </div>

      {/* Agent Work Cards */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8"
      >
        {agents.map((agent, index) => (
          <AgentWorkCard
            key={agent.agent}
            agent={agent.agent}
            task={agent.task}
            progress={agent.progress}
            delay={index * 0.1}
          />
        ))}
      </motion.div>
    </section>
  );
};

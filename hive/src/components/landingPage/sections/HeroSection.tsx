// components/landing/sections/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '../../../contexts/ThemeContext';
import { useFont } from '../../../contexts/FontContext';
import { CommandInput } from '../hero/CommandInput'
import { AgentWorkCard } from '../hero/AgentCard';
import { InteractiveAgentPanel } from '../hero/InteractiveAgentPanel';
import FlickeringGrid from '@/components/ui/flickering-grid';
import Particles from '@/components/ui/particles';
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
    <section className="relative min-h-screen">
      <div className="absolute inset-0 -z-11">
        <Particles />
      </div>
      {/* Flickering Grid as Background 
      <div className="absolute inset-0 -z-11">
        <FlickeringGrid color={theme.text.secondary} />
      </div>
     Flickering Grid as Background */}

      {/* Left Side: Content */}
      <div className="grid grid-cols-2 max-w-7xl mx-auto px-6 py-20 gap-12">
        <div className="space-y-8">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`
              inline-flex items-center gap-2 
              ${theme.surfaces.interactive} 
              rounded-full px-4 py-2
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
              className={`text-xl ${theme.text.secondary} max-w-xl`}
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
              className="flex items-center gap-4"
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

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-3 gap-6 pt-8"
          >
            {[
              { label: 'Faster Development', value: '10x' },
              { label: 'Projects Completed', value: '10k+' },
              { label: 'Time Saved', value: '1M+ hrs' }
            ].map(stat => (
              <div key={stat.label}>
                <div className={`text-2xl font-bold ${theme.text.accent}`}>
                  {stat.value}
                </div>
                <div className={`text-sm ${theme.text.secondary}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Side: Visual Demo */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="relative"
        >
          <div className={`
            rounded-xl overflow-hidden border
            ${theme.surfaces.secondary}
            ${theme.border.color}
          `}>
            {/* Live Demo Area */}
            <div className="p-4 space-y-4">
              {agents.map((agent, index) => (
                <AgentWorkCard
                  key={agent.agent}
                  agent={agent.agent}
                  task={agent.task}
                  progress={agent.progress}
                  delay={index * 0.1}
                />
              ))}
            </div>

            {/* Command Input */}
            <div className={`border-t ${theme.border.color} p-4`}>
              <CommandInput />
            </div>
          </div>

          {/* New Interactive Agent Panel */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative z-10"
            >
              <InteractiveAgentPanel />
            </motion.div>
            
            {/* Background Effect */}
            <div 
              className="absolute inset-0 -z-10 opacity-50"
              style={{
                background: `
                  radial-gradient(circle at 50% 50%, ${theme.accent.DEFAULT}10 0%, transparent 70%)
                `
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className={`absolute inset-0 opacity-30 ${theme.surfaces.primary}`} />
        <div className="absolute inset-0">
          {/* Add animated grid/particles */}
        </div>
      </div>
    </section>
  );
};

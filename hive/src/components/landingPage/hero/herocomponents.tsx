import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Play,
  ChevronDown,
  //RefreshCw
} from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';
import { useFont } from '../../../contexts/FontContext';
import { ParticleField } from './ParticleField';
import { CommandPrompt } from './CommandPrompt';
import { FloatingCards } from './FloatingCards';
import { AgentGrid } from './AgentGrid';
import  TesseractViewer  from '../tesseract/Tesseract';
export const HeroSection: React.FC = () => {
  const { theme } = useTheme();
  const { settings } = useFont();
  const { scrollYProgress } = useScroll();
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated Background with Particles */}
      <motion.div 
        style={{ y: backgroundY }}
        className={`absolute inset-0 ${theme.surfaces.primary}`}
      >
        <ParticleField />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
      </motion.div>

      {/* Main Hero Content */}
      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`
                inline-flex items-center gap-2 
                px-4 py-2 rounded-full mb-8
                ${theme.surfaces.interactive}
                border ${theme.border.color}
              `}
            >
              <Sparkles className={`w-4 h-4 ${theme.text.accent}`} />
              <span className={theme.text.secondary}>
                The Future of Creation is Here
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                fontFamily: `${settings.heading.font.name}, ${settings.heading.font.fallback}`,
                fontWeight: settings.heading.weight,
              }}
              className={`text-5xl md:text-7xl mb-6 ${theme.text.primary}`}
            >
              Transform Ideas into
              <span className={`block ${theme.text.accent}`}>
                Self-Sustaining Systems
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`text-xl mb-12 ${theme.text.secondary}`}
            >
              Experience the next generation of development with AI-powered teams 
              that think, build, and evolve autonomously.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <button 
                className={`
                  px-8 py-4 rounded-lg
                  ${theme.accent.DEFAULT}
                  hover:${theme.states.hover}
                  transition-all duration-200
                  flex items-center gap-2
                  text-white
                `}
              >
                <Zap className="w-5 h-5" />
                Start Creating
              </button>
              <button
                className={`
                  px-8 py-4 rounded-lg
                  ${theme.surfaces.interactive}
                  hover:${theme.states.hover}
                  transition-all duration-200
                  flex items-center gap-2
                  ${theme.text.primary}
                `}
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </motion.div>

            {/* Interactive Elements */}
            <div className="mt-24 space-y-12">
              {/* Command Prompt */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className={`
                  ${theme.surfaces.secondary}
                  border ${theme.border.color}
                  rounded-xl
                  backdrop-blur-md
                `}
              >
                <CommandPrompt />
              </motion.div>

              {/* Agent Grid Visualization */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="relative h-[300px]"
              >
                <AgentGrid />
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="relative"
              >
                <FloatingCards />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className={`
            flex flex-col items-center gap-2
            ${theme.text.secondary}
          `}
        >
          <span className="text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
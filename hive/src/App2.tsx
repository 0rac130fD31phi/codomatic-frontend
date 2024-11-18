import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Terminal,
  Sparkles,
  Braces,
  Network,
  Code,
  Play,
  PauseCircle,
  RotateCcw,
  Maximize2,
  Database,
  Globe,
} from 'lucide-react';

// Smooth scroll behavior for commands
const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [children]);

  return (
    <div 
      ref={scrollRef}
      className="overflow-auto scrollbar-hidden"
      style={{ scrollBehavior: 'smooth' }}
    >
      {children}
    </div>
  );
};

// Enhanced terminal with interactive elements
const EnhancedTerminal: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'command' | 'agent' | 'code'>('command');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      mode: 'command',
      content: 'create fullstack-app my-project',
      agentName: 'System Architect',
      agentColor: 'text-purple-400',
      output: 'Analyzing project requirements...',
    },
    {
      mode: 'agent',
      content: 'Designing database schema',
      agentName: 'Database Engineer',
      agentColor: 'text-blue-400',
      output: '• Users\n• Products\n• Orders\n• Payments',
    },
    {
      mode: 'code',
      content: 'Generating API endpoints',
      agentName: 'Backend Developer',
      agentColor: 'text-green-400',
      output: '📝 Creating REST endpoints...\n🔒 Implementing auth...\n💾 Setting up database...',
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isPaused]);

  return (
    <div className={`
      ${isFullscreen ? 'fixed inset-4 z-50' : 'w-full'}
      transition-all duration-500
    `}>
      <div className="relative h-full bg-gradient-to-b from-gray-900 to-black rounded-xl border border-purple-500/20 overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between p-4 bg-black/50 border-b border-purple-500/20">
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="text-sm font-mono text-purple-400">haive_terminal</div>
          </div>
          
          {/* Control Buttons */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsPaused(!isPaused)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {isPaused ? <Play className="w-4 h-4" /> : <PauseCircle className="w-4 h-4" />}
            </button>
            <button 
              onClick={() => setCurrentStep(0)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mode Selector */}
        <div className="flex border-b border-purple-500/20">
          {['command', 'agent', 'code'].map((mode) => (
            <button
              key={mode}
              onClick={() => setActiveMode(mode as any)}
              className={`
                flex-1 px-4 py-2 font-mono text-sm transition-all
                ${activeMode === mode ? 'bg-purple-500/20 text-purple-400' : 'text-gray-400'}
              `}
            >
              {mode.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Terminal Content */}
        <div className="p-6 h-[400px] font-mono">
          <SmoothScroll>
            {steps.slice(0, currentStep + 1).map((step, index) => (
              <AnimatePresence key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className={step.agentColor}>[{step.agentName}]</span>
                    <span className="text-gray-400">{step.content}</span>
                  </div>
                  <div className="pl-6 text-gray-500 whitespace-pre">{step.output}</div>
                </motion.div>
              </AnimatePresence>
            ))}
          </SmoothScroll>
        </div>

        {/* Agent Status Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 border-t border-purple-500/20 p-2">
          <div className="flex items-center gap-4">
            {['System', 'Database', 'Backend', 'Frontend'].map((agent) => (
              <div 
                key={agent}
                className="flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                <span className="text-xs text-gray-400">{agent}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Cyberpunk-style button
const CyberButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  primary?: boolean;
}> = ({ children, onClick, primary }) => (
  <button
    onClick={onClick}
    className={`
      relative px-8 py-3 rounded-md overflow-hidden group
      ${primary ? 'bg-purple-500 hover:bg-purple-600' : 'bg-gray-900 hover:bg-gray-800'}
      transition-all duration-300
    `}
  >
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </div>
    <span className="relative z-10 flex items-center gap-2">
      {children}
    </span>
  </button>
);

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated background patterns */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
      </div>

      <main className="relative z-10 container mx-auto px-6 py-24">
        {/* Hero Section with Terminal Focus */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-sm">AI Development Network</span>
            </div>
            
            <h1 className="text-7xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Create,
              </span>
              <br />
              Don't Code
            </h1>
          </div>

          <EnhancedTerminal />

          <div className="flex justify-center gap-4 mt-8">
            <CyberButton primary>
              <Play className="w-4 h-4" />
              Start Building
            </CyberButton>
            <CyberButton>
              <Terminal className="w-4 h-4" />
              Try Demo
            </CyberButton>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
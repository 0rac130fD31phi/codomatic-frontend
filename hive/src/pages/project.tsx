import React, { useState } from 'react';
import { 
  Brain, Terminal, 
  Code, Database, Layout,
  ChevronRight, ArrowLeft,
  Settings, Check,
  Server, Zap
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useFont } from '../contexts/FontContext';

type ProjectType = 'web' | 'api' | 'analysis' | 'custom';
type InitializationStep = 'type' | 'config' | 'agents' | 'review';

interface ProjectConfig {
  name: string;
  description: string;
  type: ProjectType;
  agents: string[];
  settings: {
    autonomy: number;
    complexity: number;
    optimization: number;
  }
}

const HaiveProjectCreation = () => {
  const { theme } = useTheme();
  const { settings: fontSettings } = useFont();
  
  const [step, setStep] = useState<InitializationStep>('type');
  const [config, setConfig] = useState<ProjectConfig>({
    name: '',
    description: '',
    type: 'web',
    agents: [],
    settings: {
      autonomy: 75,
      complexity: 50,
      optimization: 60
    }
  });

  const projectTypes = [
    {
      id: 'web',
      name: 'Web Application',
      icon: Layout,
      description: 'Full-stack web application with UI, API, and database',
      agents: ['UI Generation', 'API Design', 'Database Optimization']
    },
    {
      id: 'api',
      name: 'API Service',
      icon: Server,
      description: 'Standalone API service with auto-scaling and documentation',
      agents: ['API Architecture', 'Testing Suite', 'Documentation']
    },
    {
      id: 'analysis',
      name: 'Data Analysis',
      icon: Brain,
      description: 'Advanced data analysis and pattern recognition system',
      agents: ['Data Processing', 'Pattern Recognition', 'Insight Generation']
    },
    {
      id: 'custom',
      name: 'Custom Project',
      icon: Settings,
      description: 'Build a custom project with selected agents',
      agents: ['Customizable']
    }
  ];

  const renderTypeSelection = () => (
    <div className="space-y-6">
      <h2 
        className={`text-2xl mb-4 ${theme.text.primary}`} 
        style={{ 
          color: theme.text.secondary, 
          fontFamily: fontSettings.heading.font.name,
          fontWeight: fontSettings.heading.weight,
          fontStyle: fontSettings.heading.style
        }}
      >
        Select Project Type
      </h2>
      
      <div className="grid grid-cols-2 gap-4">
        {projectTypes.map((type) => (
          <div
            key={type.id}
            onClick={() => {
              setConfig(prev => ({ ...prev, type: type.id as ProjectType }));
              setStep('config');
            }}
            className={`p-6 rounded-xl cursor-pointer transition-all ${theme.surfaces.primary} border ${config.type === type.id ? theme.accent.DEFAULT : theme.border.color} hover:${theme.surfaces.hover} hover:border-${theme.border.hover}`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`p-2 rounded-lg bg-${theme.accent.DEFAULT}20`}>
                <type.icon className="w-6 h-6" style={{ color: theme.accent.DEFAULT }} />
              </div>
              <h3 className={`text-lg ${theme.text.primary}`} style={{ 
                  color: theme.text.secondary, 
                  fontFamily: fontSettings.heading.font.name,
                  fontWeight: fontSettings.heading.weight,
                  fontStyle: fontSettings.heading.style
                }}>
                {type.name}
              </h3>
            </div>
            <p className={`text-sm ${theme.text.secondary}`}>
              {type.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {type.agents.map((agent, idx) => (
                <span 
                  key={idx}
                  className={`px-2 py-1 rounded-full text-xs bg-${theme.accent.DEFAULT}15 text-${theme.accent.light}`}
                >
                  {agent}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderConfiguration = () => (
    <div className="space-y-6">
      <h2 className={`text-2xl mb-4 ${theme.text.primary}`} style={fontSettings.heading as unknown as React.CSSProperties}>
        Configure Project
      </h2>
      
      <div className="space-y-4">
        <div>
          <label className={`text-sm mb-2 block ${theme.text.secondary}`}>
            Project Name
          </label>
          <input
            type="text"
            value={config.name}
            onChange={(e) => setConfig(prev => ({ ...prev, name: e.target.value }))}
            className={`w-full px-4 py-2 rounded-lg ${theme.surfaces.secondary} border ${theme.border.color} ${theme.text.primary} focus:border-${theme.accent.DEFAULT} focus:shadow-${theme.shadow.focus}`}
            placeholder="Enter project name..."
          />
        </div>

        <div>
          <label className={`text-sm mb-2 block ${theme.text.secondary}`}>
            Description
          </label>
          <textarea
            value={config.description}
            onChange={(e) => setConfig(prev => ({ ...prev, description: e.target.value }))}
            className={`w-full px-4 py-2 rounded-lg ${theme.surfaces.secondary} border ${theme.border.color} ${theme.text.primary} focus:border-${theme.accent.DEFAULT} focus:shadow-${theme.shadow.focus}`}
            rows={3}
            placeholder="Describe your project..."
          />
        </div>

        {/* Sliders for settings */}
        <div className="space-y-4">
          {Object.entries(config.settings).map(([key, value]) => (
            <div key={key}>
              <div className="flex justify-between mb-2">
                <label className={`text-sm capitalize ${theme.text.secondary}`}>
                  {key}
                </label>
                <span className={`text-sm ${theme.text.primary}`}>
                  {value}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={(e) => setConfig(prev => ({
                  ...prev,
                  settings: {
                    ...prev.settings,
                    [key]: parseInt(e.target.value)
                  }
                }))}
                className={`w-full range-track-${theme.surfaces.secondary} range-thumb-${theme.accent.DEFAULT} range-progress-${theme.accent.light}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAgentSelection = () => (
    <div className="space-y-6">
      <h2 className={`text-2xl mb-4 ${theme.text.primary}`} style={fontSettings.heading as unknown as React.CSSProperties}>
        Select Agents
      </h2>
      
      {/* Agent selection grid */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { id: 'ui', name: 'UI Generation', icon: Layout },
          { id: 'api', name: 'API Design', icon: Terminal },
          { id: 'db', name: 'Database', icon: Database },
          { id: 'test', name: 'Testing', icon: Check },
          { id: 'opt', name: 'Optimization', icon: Zap },
          { id: 'doc', name: 'Documentation', icon: Code }
        ].map((agent) => (
          <div
            key={agent.id}
            onClick={() => setConfig(prev => ({
              ...prev,
              agents: prev.agents.includes(agent.id)
                ? prev.agents.filter(a => a !== agent.id)
                : [...prev.agents, agent.id]
            }))}
            className={`p-4 rounded-lg cursor-pointer transition-all ${theme.surfaces.primary} border ${config.agents.includes(agent.id) ? theme.accent.DEFAULT : theme.border.color} hover:${theme.surfaces.hover}`}
          >
            <div className="flex items-center gap-3">
              <agent.icon 
                className="w-5 h-5"
                style={{ color: config.agents.includes(agent.id) ? theme.accent.DEFAULT : theme.text.secondary }} 
              />
              <span className={theme.text.primary}>
                {agent.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderReview = () => (
    <div className="space-y-6">
      <h2 className={`text-2xl mb-4 ${theme.text.primary}`} style={fontSettings.heading as unknown as React.CSSProperties}>
        Review Configuration
      </h2>
      
      <div className="space-y-4">
        {/* Project summary card */}
        <div 
          className={`p-6 rounded-xl ${theme.surfaces.primary} border ${theme.border.color}`}
        >
          <h3 className={`text-lg mb-4 ${theme.text.primary}`} >
            Project Summary
          </h3>
          
          <div className="space-y-3">
            {[
              { label: 'Name', value: config.name },
              { label: 'Type', value: projectTypes.find(t => t.id === config.type)?.name },
              { label: 'Agents', value: `${config.agents.length} selected` },
              { label: 'Autonomy', value: `${config.settings.autonomy}%` },
              { label: 'Complexity', value: `${config.settings.complexity}%` }
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between">
                <span className={theme.text.secondary}>{item.label}</span>
                <span className={theme.text.primary}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch(step) {
      case 'type': return renderTypeSelection();
      case 'config': return renderConfiguration();
      case 'agents': return renderAgentSelection();
      case 'review': return renderReview();
      default: return null;
    }
  };

  return (
    <div className={`min-h-screen ${theme.bgPrimary}`}>
      {/* Steps indicator */}
      <div className={`sticky top-0 z-10 mb-8 ${theme.surfaces.primary} border-b ${theme.border.color}`}>
        <div className="max-w-3xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {['type', 'config', 'agents', 'review'].map((s, idx) => (
              <div key={s} className="flex items-center">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${step === s ? theme.accent.DEFAULT : theme.surfaces.secondary} ${step === s ? theme.surfaces.primary : theme.text.secondary}`}
                >
                  {idx + 1}
                </div>
                {idx < 3 && (
                  <div 
                    className={`w-24 h-px mx-2 ${idx < ['type', 'config', 'agents', 'review'].indexOf(step) ? theme.accent.DEFAULT : theme.border.color}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-3xl mx-auto px-6 pb-6">
        {renderStepContent()}

        {/* Navigation buttons */}
        <div className="mt-8 flex justify-between">
          {step !== 'type' && (
            <button
              onClick={() => {
                const steps: InitializationStep[] = ['type', 'config', 'agents', 'review'];
                const currentIdx = steps.indexOf(step);
                setStep(steps[currentIdx - 1]);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${theme.surfaces.interactive} border ${theme.border.color} ${theme.text.primary} hover:${theme.surfaces.hover}`}
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          )}
          
          <button
            onClick={() => {
              const steps: InitializationStep[] = ['type', 'config', 'agents', 'review'];
              const currentIdx = steps.indexOf(step);
              if (currentIdx < steps.length - 1) {
                setStep(steps[currentIdx + 1]);
              } else {
                // Handle project creation
                console.log('Create project:', config);
              }
            }}
            className={`flex items-center gap-2 px-6 py-2 rounded-lg transition-all ml-auto ${theme.accent.DEFAULT} ${theme.surfaces.primary} hover:${theme.accent.dark}`}
          >
            {step === 'review' ? 'Create Project' : 'Next'}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HaiveProjectCreation;
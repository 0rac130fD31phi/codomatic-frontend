
import React, { useState } from 'react';
import { 
  Code, GitBranch, Package, Terminal,
  Layers, Braces, CheckCircle2, PlayCircle
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useFont } from '../contexts/FontContext';
import type { DesignTheme } from '../types/design_theme';
import type { FontSettings } from '../types/design_fonts';

interface BuildStep {
  id: string;
  name: string;
  status: 'pending' | 'active' | 'complete' | 'error';
  output?: string[];
  code?: {
    file: string;
    content: string;
  }[];
}

interface BuildAgent {
  id: string;
  name: string;
  role: string;
  status: 'thinking' | 'coding' | 'testing' | 'idle';
  currentTask?: string;
}

const HaiveProjectBuilder = () => {
  const { theme } = useTheme();
  const { settings: fontSettings } = useFont();

  const [buildSteps, setBuildSteps] = useState<BuildStep[]>([
    {
      id: 'requirements',
      name: 'Requirements Analysis',
      status: 'pending',
      output: []
    },
    {
      id: 'architecture',
      name: 'Architecture Design',
      status: 'pending',
      output: []
    },
    {
      id: 'components',
      name: 'Component Development',
      status: 'pending',
      code: []
    },
    {
      id: 'testing',
      name: 'Testing & Optimization',
      status: 'pending',
      output: []
    }
  ]);

  const [activeAgents, setActiveAgents] = useState<BuildAgent[]>([
    {
      id: 'architect',
      name: 'System Architect',
      role: 'Planning',
      status: 'idle'
    },
    {
      id: 'developer',
      name: 'Component Builder',
      role: 'Development',
      status: 'idle'
    },
    {
      id: 'tester',
      name: 'Quality Assurance',
      role: 'Testing',
      status: 'idle'
    }
  ]);

  const [preview, setPreview] = useState<{
    active: boolean;
    component?: string;
  }>({ active: false });

  return (
    <div className="flex h-screen">
      {/* Build Process Panel */}
      <div className="w-1/2 border-r" style={{ 
        background: theme.surfaces.primary,
        borderColor: theme.border.color 
      }}>
        <div className="p-6">
          <h2 style={{ 
            color: theme.text.primary,
            fontFamily: fontSettings.heading.font.name,
            fontWeight: fontSettings.heading.weight
          }} className="text-2xl mb-6">
            Project Builder
          </h2>

          {/* Build Steps */}
          <div className="space-y-4">
            {buildSteps.map((step) => (
              <div 
                key={step.id}
                className="rounded-lg p-4"
                style={{
                  background: theme.surfaces.secondary,
                  border: `${theme.border.width} solid ${
                    step.status === 'active' ? theme.accent.DEFAULT : theme.border.color
                  }`
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span style={{
                      color: step.status === 'active' ? theme.accent.DEFAULT : theme.text.primary
                    }}>
                      {step.name}
                    </span>
                    {step.status === 'complete' && (
                      <CheckCircle2 className="w-4 h-4" style={{ color: theme.accent.DEFAULT }} />
                    )}
                  </div>
                  {step.status === 'active' && (
                    <span className="text-xs px-2 py-1 rounded" style={{
                      background: `${theme.accent.DEFAULT}20`,
                      color: theme.accent.DEFAULT
                    }}>
                      In Progress
                    </span>
                  )}
                </div>

                {/* Code or Output Display */}
                {(step.output?.length > 0 || step.code?.length > 0) && (
                  <div className="mt-3 space-y-2">
                    {step.output?.map((line, idx) => (
                      <div key={idx} className="text-sm" style={{ color: theme.text.secondary }}>
                        {line}
                      </div>
                    ))}
                    {step.code?.map((file, idx) => (
                      <div 
                        key={idx}
                        className="rounded p-2"
                        style={{ background: theme.surfaces.tertiary }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm" style={{ color: theme.text.secondary }}>
                            {file.file}
                          </span>
                          <button 
                            className="text-xs px-2 py-1 rounded"
                            style={{
                              background: theme.surfaces.interactive,
                              color: theme.accent.DEFAULT
                            }}
                            onClick={() => setPreview({ active: true, component: file.content })}
                          >
                            Preview
                          </button>
                        </div>
                        <pre 
                          className="text-sm p-2 rounded"
                          style={{
                            background: theme.surfaces.elevated,
                            color: theme.text.primary,
                            fontFamily: fontSettings.mono.font.name
                          }}
                        >
                          {file.content}
                        </pre>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Preview & Agent Panel */}
      <div className="w-1/2 flex flex-col">
        {/* Component Preview */}
        <div 
          className="flex-1 border-b p-6"
          style={{
            background: theme.surfaces.secondary,
            borderColor: theme.border.color
          }}
        >
          <h3 style={{
            color: theme.text.primary,
            fontFamily: fontSettings.heading.font.name,
            fontWeight: fontSettings.heading.weight
          }} className="text-lg mb-4">
            Live Preview
          </h3>
          
          <div 
            className="rounded-lg h-[calc(100%-2rem)]"
            style={{
              background: theme.surfaces.primary,
              border: `${theme.border.width} solid ${theme.border.color}`
            }}
          >
            {preview.active ? (
              <div className="p-4">
                {/* Component preview would render here */}
                <div style={{ color: theme.text.primary }}>
                  Preview of component...
                </div>
              </div>
            ) : (
              <div 
                className="h-full flex items-center justify-center"
                style={{ color: theme.text.secondary }}
              >
                Select a component to preview
              </div>
            )}
          </div>
        </div>

        {/* Active Agents */}
        <div className="h-64 p-6" style={{ background: theme.surfaces.primary }}>
          <h3 style={{
            color: theme.text.primary,
            fontFamily: fontSettings.heading.font.name,
            fontWeight: fontSettings.heading.weight
          }} className="text-lg mb-4">
            Active Agents
          </h3>

          <div className="grid grid-cols-3 gap-4">
            {activeAgents.map((agent) => (
              <div
                key={agent.id}
                className="rounded-lg p-4"
                style={{
                  background: theme.surfaces.secondary,
                  border: `${theme.border.width} solid ${theme.border.color}`
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span style={{ color: theme.text.primary }}>{agent.name}</span>
                  <span 
                    className="text-xs px-2 py-1 rounded"
                    style={{
                      background: `${theme.accent.DEFAULT}20`,
                      color: theme.accent.DEFAULT
                    }}
                  >
                    {agent.status}
                  </span>
                </div>
                <p className="text-sm" style={{ color: theme.text.secondary }}>
                  {agent.currentTask || `Waiting for ${agent.role} tasks...`}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HaiveProjectBuilder;

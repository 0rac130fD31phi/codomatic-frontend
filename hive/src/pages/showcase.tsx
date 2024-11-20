import React, { useState } from 'react';
import { 
  Brain, Circle, Command, 
  Hexagon, Network, Plus, 
  Orbit, Maximize2, Settings,
  AlertTriangle, CheckCircle2, Activity
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useFont } from '../contexts/FontContext';

const HaiveCommand = () => {
  const [selectedNode, setSelectedNode] = useState<number | null>(null);
  const { theme } = useTheme();
  const { settings } = useFont();

  const nodes = [
    {
      id: 1,
      name: "Primary Node",
      type: "Controller",
      status: "Optimal",
      health: 96,
      agents: [
        { name: "UI Generation", load: 85, status: "active" },
        { name: "API Evolution", load: 62, status: "active" },
        { name: "Neural Testing", load: 45, status: "learning" }
      ],
      metrics: {
        throughput: 92,
        latency: 15,
        efficiency: 88
      }
    },
    {
      id: 2,
      name: "Analysis Node",
      type: "Processor",
      status: "Learning",
      health: 88,
      agents: [
        { name: "Data Analysis", load: 75, status: "active" },
        { name: "Pattern Recognition", load: 82, status: "active" }
      ],
      metrics: {
        throughput: 85,
        latency: 22,
        efficiency: 78
      }
    }
  ];

  return (
    <div className={`min-h-screen ${theme.bgPrimary} ${theme.text.primary}`}>
      {/* Neural Grid Background */}
      <div className={`fixed inset-0 ${theme.surfaces.primary}`} />

      {/* Top Bar */}
      <div className={`sticky top-0 ${theme.surfaces.secondary} ${theme.border.color} backdrop-blur-sm p-4`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Command className="w-8 h-8 text-emerald-400" />
            <h1 className={`text-xl font-bold ${theme.text.secondary}`}>Haive Neural Hub</h1>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              {[
                { icon: Brain, text: "8 Agents", active: true },
                { icon: Network, text: "92% Efficiency", active: true },
                { icon: AlertTriangle, text: "0 Issues", active: false }
              ].map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <stat.icon className={`w-4 h-4 ${stat.active ? theme.text.accent : 'text-gray-500'}`} />
                  <span className={`text-sm ${stat.active ? theme.text.secondary : 'text-gray-500'}`}>
                    {stat.text}
                  </span>
                </div>
              ))}
            </div>
            <button className={`flex items-center gap-2 px-4 py-2 ${theme.surfaces.interactive} rounded-lg border ${theme.border.color} hover:${theme.states.hover} transition-colors`}>
              <Plus className={`w-4 h-4 ${theme.text.accent}`} />
              <span className={theme.text.secondary}>New Node</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Neural Nodes */}
          <div className="col-span-8">
            {nodes.map((node) => (
              <div
                key={node.id}
                className={`mb-6 ${theme.surfaces.secondary} border ${
                  selectedNode === node.id ? theme.border.active : theme.border.color
                } rounded-xl p-6 cursor-pointer transition-all hover:${theme.border.hover}`}
                onClick={() => setSelectedNode(node.id)}
              >
                {/* Node Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Hexagon className={`w-5 h-5 ${theme.text.accent}`} />
                      <h3 className={`text-lg font-semibold ${theme.text.secondary}`}>{node.name}</h3>
                      <span className={`px-2 py-1 ${theme.surfaces.interactive} rounded-full text-xs ${theme.text.accent}`}>
                        {node.type}
                      </span>
                    </div>
                    <div className={`flex items-center gap-4 text-sm ${theme.text.tertiary}`}>
                      <span className="flex items-center gap-1">
                        <Circle className={`w-3 h-3 ${theme.text.accent}`} />
                        {node.status}
                      </span>
                      <span>{node.health}% Health</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className={`p-2 hover:${theme.states.hover} rounded-lg transition-colors`}>
                      <Maximize2 className={`w-5 h-5 ${theme.text.secondary} hover:${theme.text.accent}`} />
                    </button>
                    <button className={`p-2 hover:${theme.states.hover} rounded-lg transition-colors`}>
                      <Settings className={`w-5 h-5 ${theme.text.secondary} hover:${theme.text.accent}`} />
                    </button>
                  </div>
                </div>

                {/* Agent Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {node.agents.map((agent, idx) => (
                    <div
                      key={idx}
                      className={`${theme.surfaces.interactive} ${theme.border.color} rounded-lg p-4 hover:${theme.states.hover} transition-all`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-sm font-medium ${theme.text.secondary}`}>{agent.name}</span>
                        <span className={`text-xs ${theme.text.tertiary}`}>{agent.load}%</span>
                      </div>
                      <div className={`h-1 ${theme.surfaces.primary} rounded-full overflow-hidden`}>
                        <div
                          className={`h-full rounded-full ${theme.accent.DEFAULT}`}
                          style={{ width: `${agent.load}%` }}
                        />
                      </div>
                      <div className="mt-2 flex items-center gap-1">
                        <div className={`w-1.5 h-1.5 rounded-full ${theme.text.accent} animate-pulse`} />
                        <span className={`text-xs ${theme.text.tertiary} capitalize`}>{agent.status}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(node.metrics).map(([key, value]) => (
                    <div key={key} className={`${theme.surfaces.interactive} rounded-lg p-3`}>
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-xs ${theme.text.tertiary} capitalize`}>{key}</span>
                        <span className={`text-sm ${theme.text.secondary}`}>{value}%</span>
                      </div>
                      <div className={`h-1 ${theme.surfaces.primary} rounded-full overflow-hidden`}>
                        <div
                          className={`h-full rounded-full ${theme.accent.DEFAULT}`}
                          style={{ width: `${value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Sidebar */}
          <div className="col-span-4">
            <div className="sticky top-24">
              <div className={`${theme.surfaces.secondary} ${theme.border.color} rounded-xl p-6 mb-6`}>
                <h3 className={`text-lg font-semibold ${theme.text.secondary} mb-4 flex items-center gap-2`}>
                  <Orbit className={`w-5 h-5 ${theme.text.accent}`} />
                  System Overview
                </h3>
                <div className="space-y-4">
                  {[
                    { label: "Total Throughput", value: "92%", trend: "up" },
                    { label: "Neural Efficiency", value: "88%", trend: "up" },
                    { label: "System Health", value: "96%", trend: "stable" }
                  ].map((metric, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className={`text-sm ${theme.text.tertiary}`}>{metric.label}</span>
                      <span className={`text-sm ${theme.text.secondary}`}>{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`${theme.surfaces.secondary} ${theme.border.color} rounded-xl p-6`}>
                <h3 className={`text-lg font-semibold ${theme.text.secondary} mb-4 flex items-center gap-2`}>
                  <Activity className={`w-5 h-5 ${theme.text.accent}`} />
                  Recent Activity
                </h3>
                <div className="space-y-4">
                  {[
                    { text: "Pattern recognition optimized", time: "2m ago", status: "success" },
                    { text: "New agent deployed", time: "5m ago", status: "success" },
                    { text: "System update completed", time: "15m ago", status: "success" }
                  ].map((activity, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-4 h-4 ${theme.text.accent} mt-0.5`} />
                      <div>
                        <p className={`text-sm ${theme.text.secondary}`}>{activity.text}</p>
                        <span className={`text-xs ${theme.text.tertiary}`}>{activity.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HaiveCommand;

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Activity, Brain, Circle, Code, 
  Database, Grid, Layout, 
  PlayCircle, PauseCircle, Settings, 
  Terminal, TestTube, Zap, CheckCircle2,
  AlertCircle, ChevronRight, Command
} from 'lucide-react';
  Terminal, TestTube, Zap, CheckCircle2,
  AlertCircle, ChevronRight, Command
} from 'lucide-react';

const HaiveCommandCenter = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      name: "Quantum Commerce",
      description: "AI-powered e-commerce platform",
      progress: 65,
      status: "active",
      agents: {
        frontend: { status: 'active', task: 'Generating UI components', progress: 75 },
        backend: { status: 'active', task: 'Optimizing API architecture', progress: 45 },
        testing: { status: 'queued', task: 'Neural testing queued', progress: 20 }
      },
      timeline: [
        { time: '10:45', event: 'API Gateway optimized', status: 'success' },
        { time: '10:30', event: 'Component architecture refined', status: 'success' },
        { time: '10:15', event: 'Neural testing initiated', status: 'pending' }
      ]
    },
    {
      id: 2,
      name: "Neural Analytics",
      description: "Market intelligence system",
      progress: 30,
      status: "warning",
      agents: {
        research: { status: 'active', task: 'Deep data mining', progress: 35 },
        analysis: { status: 'active', task: 'Pattern recognition', progress: 25 }
      },
      timeline: [
        { time: '10:40', event: 'Data correlation detected', status: 'success' },
        { time: '10:20', event: 'Market pattern analysis', status: 'warning' }
      ]
    }
  ];

  const systemMetrics = {
    agentUtilization: 85,
    systemLoad: 65,
    networkEfficiency: 92,
    activeAgents: 12
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(67,94,190,0.15)_0%,rgba(13,18,24,0)_100%)]" />
      
      {/* Header Section */}
      <div className="relative flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Circle className="w-10 h-10 text-blue-500 animate-pulse absolute" />
            <Command className="w-10 h-10 text-blue-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Haive Command Center
            </h1>
            <p className="text-gray-400">12 Active Neural Agents • 4 Running Projects</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-blue-500 bg-opacity-20 border border-blue-400 border-opacity-20 text-blue-300 rounded-lg hover:bg-opacity-30 transition-all group">
            <PlayCircle className="w-5 h-5 group-hover:text-blue-400" />
            Initialize New Project
          </button>
          <div className="w-10 h-10 flex items-center justify-center bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors">
            <Settings className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Main Project Area */}
        <div className="col-span-8 space-y-6">
          {/* System Overview */}
          <div className="grid grid-cols-4 gap-4">
            {Object.entries(systemMetrics).map(([key, value]) => (
              <div key={key} className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-blue-900 transition-all">
                <h3 className="text-gray-400 text-sm mb-2 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <div className="flex items-end justify-between">
                  <span className="text-2xl font-bold text-gray-100">{value}%</span>
                  <div className="w-20 h-8 relative">
                    <div 
                      className="absolute bottom-0 w-2 bg-blue-500 rounded-sm transition-all duration-500"
                      style={{ 
                        height: `${value}%`,
                        left: '0%'
                      }}
                    />
                    <div 
                      className="absolute bottom-0 w-2 bg-blue-500 opacity-50 rounded-sm transition-all duration-500"
                      style={{ 
                        height: `${value * 0.85}%`,
                        left: '25%'
                      }}
                    />
                    <div 
                      className="absolute bottom-0 w-2 bg-blue-500 opacity-25 rounded-sm transition-all duration-500"
                      style={{ 
                        height: `${value * 0.7}%`,
                        left: '50%'
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Projects */}
          <div className="space-y-4">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className={`bg-gray-900 border ${selectedProject === project.id ? 'border-blue-500' : 'border-gray-800'} rounded-lg p-6 cursor-pointer hover:border-blue-900 transition-all`}
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-100">{project.name}</h2>
                    <p className="text-gray-400">{project.description}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-400">{project.progress}%</span>
                    <div className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                      <PauseCircle className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1 bg-gray-800 rounded-full mb-6 overflow-hidden">
                  <div 
                    className="h-full rounded-full relative"
                    style={{ 
                      width: `${project.progress}%`,
                      background: 'linear-gradient(90deg, #3B82F6 0%, #8B5CF6 100%)'
                    }}
                  >
                    <div className="absolute top-0 right-0 w-2 h-full bg-blue-300 animate-pulse" />
                  </div>
                </div>

                {/* Agent Status */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {Object.entries(project.agents).map(([agent, details], idx) => (
                    <div key={idx} className="bg-gray-800 bg-opacity-50 rounded-lg p-4 border border-gray-700">
                      <div className="flex items-center gap-2 mb-2">
                        <Brain className="w-4 h-4 text-blue-400" />
                        <span className="font-medium capitalize text-gray-200">{agent}</span>
                      </div>
                      <p className="text-sm text-gray-400 mb-2">{details.task}</p>
                      <div className="w-full bg-gray-700 rounded-full h-1">
                        <div 
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                          style={{ width: `${details.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Timeline */}
                <div className="space-y-2">
                  {project.timeline.map((event, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm">
                      <span className="text-gray-500">{event.time}</span>
                      {event.status === 'success' ? (
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                      ) : event.status === 'warning' ? (
                        <AlertCircle className="w-4 h-4 text-yellow-500" />
                      ) : (
                        <Circle className="w-4 h-4 text-blue-500 animate-pulse" />
                      )}
                      <span className="text-gray-300">{event.event}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="col-span-4 space-y-6">
          {/* Quick Actions */}
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-400" />
                Quick Actions
              </h3>
              <div className="space-y-3">
                {['Deploy New Agent', 'Create Workflow', 'View Analytics'].map((action, idx) => (
                  <button 
                    key={idx}
                    className="w-full flex items-center justify-between p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-left"
                  >
                    <span>{action}</span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* System Activity */}
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-400" />
                System Activity
              </h3>
              <div className="space-y-4">
                {[
                  { message: 'New agent deployed', time: '2m ago', icon: Brain },
                  { message: 'Performance optimization complete', time: '5m ago', icon: Zap },
                  { message: 'Neural network training', time: '15m ago', icon: Grid }
                ].map((activity, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1">
                      <activity.icon className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-gray-200">{activity.message}</p>
                      <span className="text-sm text-gray-500">{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HaiveCommandCenter;
import React, { useState, useRef } from 'react';
import { 
  Upload, Send, FileText, Bot
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useFont } from '../contexts/FontContext';

interface Message {
  id: string;
  type: 'user' | 'system' | 'agent' | 'process';
  content: string;
  timestamp: Date;
  status?: 'processing' | 'complete' | 'error';
  agent?: {
    name: string;
    type: string;
    action: string;
  };
  files?: Array<{
    name: string;
    type: string;
    size: number;
  }>;
}

interface ActiveAgent {
  id: string;
  name: string;
  type: string;
  action: string;
  progress: number;
  status: 'analyzing' | 'processing' | 'complete' | 'error';
}

const HaiveChat = () => {
  const { theme } = useTheme();
  const { settings: fontSettings } = useFont();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'system',
      content: 'Hello! I can help you analyze documents, process data, or build solutions. What would you like to do?',
      timestamp: new Date()
    }
  ]);
  
  const [activeAgents, setActiveAgents] = useState<ActiveAgent[]>([]);
  const [input, setInput] = useState('');

  const handleFileUpload = (files: FileList) => {
    // Create new message for file upload
    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: 'Uploaded documents for analysis',
      timestamp: new Date(),
      files: Array.from(files).map(file => ({
        name: file.name,
        type: file.type,
        size: file.size
      }))
    };
    
    setMessages(prev => [...prev, newMessage]);
    
    // Simulate agent activation for document processing
    setActiveAgents(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        name: 'Document Analyzer',
        type: 'analysis',
        action: 'Processing documents',
        progress: 0,
        status: 'analyzing'
      },
      {
        id: (Date.now() + 1).toString(),
        name: 'Content Extractor',
        type: 'processing',
        action: 'Extracting information',
        progress: 0,
        status: 'processing'
      }
    ]);
    
    // Simulate processing
    simulateProcessing();
  };

  const simulateProcessing = () => {
    // Simulate agent progress
    const progressInterval = setInterval(() => {
      setActiveAgents(prev => 
        prev.map(agent => ({
          ...agent,
          progress: Math.min(agent.progress + 5, 100),
          status: agent.progress + 5 >= 100 ? 'complete' : agent.status
        }))
      );
    }, 500);

    // Simulate completion after 5 seconds
    setTimeout(() => {
      clearInterval(progressInterval);
      
      // Add agent response
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          type: 'agent',
          content: 'I\'ve analyzed the documents. Here are my findings...',
          timestamp: new Date(),
          agent: {
            name: 'Document Analyzer',
            type: 'analysis',
            action: 'Analysis complete'
          }
        }
      ]);
      
      // Clear completed agents
      setActiveAgents([]);
    }, 5000);
  };

  return (
    <div className="flex h-screen" style={{ background: theme.bgPrimary }}>
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Message List */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className="max-w-[80%] rounded-lg p-4"
                  style={{
                    background: message.type === 'user' ? theme.accent.DEFAULT : theme.surfaces.primary,
                    border: `${theme.border.width} solid ${theme.border.color}`,
                    color: message.type === 'user' ? theme.surfaces.primary : theme.text.primary
                  }}
                >
                  {message.files && (
                    <div className="mb-3 space-y-2">
                      {message.files.map((file, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 p-2 rounded"
                          style={{ background: `${theme.accent.DEFAULT}20` }}
                        >
                          <FileText className="w-4 h-4" style={{ color: theme.accent.DEFAULT }} />
                          <span className="text-sm" style={{ color: theme.text.primary }}>
                            {file.name}
                          </span>
                          <span className="text-xs" style={{ color: theme.text.secondary }}>
                            ({(file.size / 1024).toFixed(1)} KB)
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex items-start gap-3">
                    {message.type === 'agent' && (
                      <Bot className="w-5 h-5" style={{ color: theme.accent.DEFAULT }} />
                    )}
                    <div>
                      {message.agent && (
                        <div className="text-xs mb-1" style={{ color: theme.accent.light }}>
                          {message.agent.name} • {message.agent.action}
                        </div>
                      )}
                      <div className="message-content">{message.content}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Agents Display */}
        {activeAgents.length > 0 && (
          <div 
            className="border-t p-4"
            style={{ 
              background: theme.surfaces.secondary,
              borderColor: theme.border.color
            }}
          >
            <div className="max-w-4xl mx-auto">
              <h4 
                className="text-sm mb-3"
                style={{ 
                  color: theme.text.secondary, 
                  fontFamily: fontSettings.heading.font.name,
                  fontWeight: fontSettings.heading.weight,
                  fontStyle: fontSettings.heading.style
                }}
              >
                Active Neural Agents
              </h4>
              <div className="grid grid-cols-3 gap-4">
                {activeAgents.map((agent) => (
                  <div
                    key={agent.id}
                    className="rounded-lg p-4"
                    style={{
                      background: theme.surfaces.primary,
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
                    <p 
                      className="text-sm mb-2"
                      style={{ color: theme.text.secondary }}
                    >
                      {agent.action}
                    </p>
                    <div 
                      className="h-1 rounded-full"
                      style={{ background: theme.surfaces.secondary }}
                    >
                      <div
                        className="h-full rounded-full transition-all duration-200"
                        style={{
                          width: `${agent.progress}%`,
                          background: theme.accent.DEFAULT
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Input Area */}
        <div 
          className="border-t p-4"
          style={{ 
            background: theme.surfaces.primary,
            borderColor: theme.border.color
          }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="p-2 rounded-lg transition-all"
                style={{
                  background: theme.surfaces.interactive,
                }}
              >
                <Upload 
                  className="w-5 h-5"
                  style={{ color: theme.accent.DEFAULT }}
                />
              </button>
              
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message or drop files..."
                className="flex-1 px-4 py-2 rounded-lg"
                style={{
                  background: theme.surfaces.secondary,
                  border: `${theme.border.width} solid ${theme.border.color}`,
                  color: theme.text.primary,
                }}
              />
              
              <button
                onClick={() => {/* Handle send */}}
                className="p-2 rounded-lg transition-all"
                style={{
                  background: theme.accent.DEFAULT,
                }}
              >
                <Send className="w-5 h-5" style={{ color: theme.surfaces.primary }} />
              </button>
            </div>
            
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              multiple
              onChange={(e) => e.target.files && handleFileUpload(e.target.files)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HaiveChat;

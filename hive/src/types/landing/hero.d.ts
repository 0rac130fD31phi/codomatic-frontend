// components/hero/types.ts
export interface ParticleNode {
    id: string;
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    type: 'agent' | 'connection' | 'data';
    connected: string[];
  }
  export interface Feature {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
    demo?: React.ReactNode;
  }
  export interface TextStyles {
    primary: string;
    secondary: string;
    tertiary: string;
    accent: string;
    error: string;
    success: string;
    warning: string;
    info: string;
  }
  export interface GridNode {
    id: string;
    type: 'frontend' | 'backend' | 'data' | 'testing';
    status: 'active' | 'idle' | 'processing';
    position: { x: number; y: number };
  }
  export interface FloatingCard {
    id: string;
    type: 'code' | 'analysis' | 'deployment';
    title: string;
    content: string;
    status: 'generating' | 'complete' | 'processing';
    progress?: number;
  }
  export interface Suggestion {
    id: string;
    text: string;
    type: 'app' | 'analysis' | 'automation';
    icon: LucideIcon;
  }
// components/hero/AgentGrid.tsx
import React, { useRef, useState, useEffect, } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../../contexts/ThemeContext';
// fonts would be here  
interface GridNode {
    id: string;
    type: 'frontend' | 'backend' | 'data' | 'testing';
    status: 'active' | 'idle' | 'processing';
    position: { x: number; y: number };
  }
  
  export const AgentGrid: React.FC = () => {
    const { theme } = useTheme(); // Use theme from context
    const gridRef = useRef<HTMLDivElement>(null);
    const [nodes, setNodes] = useState<GridNode[]>([]);
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  
    useEffect(() => {
      // Generate grid nodes
      const generateNodes = () => {
        const newNodes: GridNode[] = [];
        const gridSize = 8;
        
        for (let i = 0; i < gridSize * gridSize; i++) {
          if (Math.random() > 0.7) { // 30% chance of having a node
            newNodes.push({
              id: `node-${i}`,
              type: ['frontend', 'backend', 'data', 'testing'][Math.floor(Math.random() * 4)] as GridNode['type'],
              status: ['active', 'idle', 'processing'][Math.floor(Math.random() * 3)] as GridNode['status'],
              position: {
                x: (i % gridSize) * 60,
                y: Math.floor(i / gridSize) * 60
              }
            });
          }
        }
        setNodes(newNodes);
      };
  
      generateNodes();
    }, []);
  
    return (
      <div 
        ref={gridRef}
        className={`relative w-full h-[480px] overflow-hidden`}
      >
        {/* Background Grid */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, ${theme.border.color} 1px, transparent 1px),
              linear-gradient(to bottom, ${theme.border.color} 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
  
        {/* Nodes */}
        <AnimatePresence>
          {nodes.map((node) => (
            <motion.div
              key={node.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                x: node.position.x,
                y: node.position.y
              }}
              exit={{ scale: 0, opacity: 0 }}
              className={`
                absolute w-8 h-8
                rounded-lg
                ${theme.surfaces.interactive}
                border ${theme.border.color}
                cursor-pointer
                transition-colors duration-200
              `}
              style={{
                transform: `translate(${node.position.x}px, ${node.position.y}px)`
              }}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div className={`
                absolute inset-0
                rounded-lg
                ${node.status === 'active' ? 'animate-pulse' : ''}
                ${theme.accent.DEFAULT}
                opacity-20
              `} />
  
              {hoveredNode === node.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className={`
                    absolute top-full mt-2 left-1/2 -translate-x-1/2
                    px-3 py-1.5 rounded-lg
                    ${theme.surfaces.elevated}
                    border ${theme.border.color}
                    whitespace-nowrap
                    z-10
                  `}
                >
                  <span className={`text-xs ${theme.text.secondary}`}>
                    {node.type} Agent • {node.status}
                  </span>
                </motion.div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
  
        {/* Connection Lines */}
        <svg className="absolute inset-0">
          {nodes.map((node, i) => (
            nodes.slice(i + 1).map((otherNode) => {
              const distance = Math.sqrt(
                Math.pow(node.position.x - otherNode.position.x, 2) +
                Math.pow(node.position.y - otherNode.position.y, 2)
              );
  
              if (distance < 120) {
                return (
                  <motion.line
                    key={`${node.id}-${otherNode.id}`}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.2 }}
                    x1={node.position.x + 16}
                    y1={node.position.y + 16}
                    x2={otherNode.position.x + 16}
                    y2={otherNode.position.y + 16}
                    stroke={theme.accent.DEFAULT}
                    strokeWidth="1"
                  />
                );
              }
              return null;
            })
          ))}
        </svg>
      </div>
    );
  };
import React from 'react';

interface Agent {
  id: string;
  name: string;
  role: string;
}

interface AgentGridProps {
  agents: Agent[];
}

export const AgentGrid: React.FC<AgentGridProps> = ({ agents }) => {
  return (
    <div>
      <h3>Agent Grid</h3>
      <ul>
        {agents.map((agent) => (
          <li key={agent.id}>{agent.name} - {agent.role}</li>
        ))}
      </ul>
    </div>
  );
};

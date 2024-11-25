import React from 'react';

interface ResourceUtilizationProps {
  team: { id: string; name: string; role: string }[];
}

export const ResourceUtilization: React.FC<ResourceUtilizationProps> = ({ team }) => {
  return (
    <div>
      <h3>Resource Utilization</h3>
      <ul>
        {team.map((agent) => (
          <li key={agent.id}>{agent.name} - {agent.role}</li>
        ))}
      </ul>
    </div>
  );
};

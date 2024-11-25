import React from 'react';

interface AgentActivitiesProps {
  team: { id: string; name: string; role: string }[];
}

export const AgentActivities: React.FC<AgentActivitiesProps> = ({ team }) => {
  return (
    <div>
      <h3>Agent Activities</h3>
      <ul>
        {team.map((agent) => (
          <li key={agent.id}>{agent.name} - {agent.role}</li>
        ))}
      </ul>
    </div>
  );
};

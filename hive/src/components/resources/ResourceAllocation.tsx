import React from 'react';

interface Task {
  id: string;
  type: string;
  status: 'planning' | 'in_progress' | 'reviewing' | 'complete';
  assignedAgents: string[];
  dependencies: string[];
  progress: number;
  created: string;
  updated: string;
}

interface Conversation {
  id: string;
  messages: string[];
}

interface Resources {
  files: string[];
  links: string[];
  databases: string[];
}

interface Output {
  code?: string;
  research?: string;
  automation?: string;
}

interface ResourceAllocationProps {
  team: string | null;
  project: {
    name?: string;
    description?: string;
    teamId?: string;
    status?: string;
    tasks?: Task[];
    conversations?: Conversation[];
    resources?: Resources;
    output?: Output;
  };
}

export const ResourceAllocation: React.FC<ResourceAllocationProps> = ({ team, project }) => {
  return (
    <div>
      <h3>Resource Allocation</h3>
      <p>Team: {team}</p>
      <p>Project: {JSON.stringify(project)}</p>
    </div>
  );
};

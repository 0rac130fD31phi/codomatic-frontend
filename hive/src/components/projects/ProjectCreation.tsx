import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { createProject } from '../../api/projects';
import { TeamSelection } from '../teams/TeamSelection';
import { ResourceAllocation } from '../resources/ResourceAllocation';
import { CommandInput } from '../ui/CommandInput';

export const ProjectCreation: React.FC = () => {
  const { user } = useAuth();
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const [projectDraft, setProjectDraft] = useState<any>({});

  const handleProjectCreation = async (input: string) => {
    const projectData = {
      name: input,
      description: '',
      teamId: selectedTeam,
      status: 'planning',
      tasks: [],
      conversations: [],
      resources: {},
      output: {}
    };
    const projectId = await createProject(projectData);
    console.log('Project created with ID:', projectId);
  };

  return (
    <div className="p-6 rounded-xl">
      <CommandInput onSubmit={handleProjectCreation} suggestions={[]} />
      <TeamSelection userTeams={user.teams} onSelect={setSelectedTeam} />
      <ResourceAllocation team={selectedTeam} project={projectDraft} />
    </div>
  );
};

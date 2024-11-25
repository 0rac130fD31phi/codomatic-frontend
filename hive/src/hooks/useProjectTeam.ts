import { useState, useEffect } from 'react';
import { listAgents } from '../api/agents';

interface Agent {
  id: string;
  name: string;
  role: string;
}

export const useProjectTeam = (projectId: string) => {
  const [team, setTeam] = useState<Agent[]>([]);

  useEffect(() => {
    const fetchTeam = async () => {
      const teamAgents = await listAgents(projectId);
      setTeam(teamAgents);
    };

    fetchTeam();
  }, [projectId]);

  return { team };
};

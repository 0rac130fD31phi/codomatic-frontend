import { useState, useEffect } from 'react';
import { getTeam, getTeamMetrics } from '../api/teams';

interface Team {
  agents: { id: string; name: string; role: string }[];
  specializations: string[];
}

interface Metrics {
  performance: number;
  utilization: number;
}

export const useTeam = (teamId: string) => {
  const [team, setTeam] = useState<Team>({ agents: [], specializations: [] });
  const [metrics, setMetrics] = useState<Metrics>({ performance: 0, utilization: 0 });

  useEffect(() => {
    const fetchTeam = async () => {
      const teamData = await getTeam(teamId);
      setTeam(teamData);
    };

    const fetchMetrics = async () => {
      const teamMetrics = await getTeamMetrics(teamId);
      setMetrics(teamMetrics);
    };

    fetchTeam();
    fetchMetrics();
  }, [teamId]);

  return { team, metrics };
};

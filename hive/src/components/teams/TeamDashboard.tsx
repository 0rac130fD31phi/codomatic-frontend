import React from 'react';
import { useTeam } from '../../hooks/useTeam';
import { AgentGrid } from '../ui/AgentGrid';
import { PerformanceMetrics } from '../ui/PerformanceMetrics';
import { TeamSpecializations } from '../ui/TeamSpecializations';
import { ResourceUtilization } from '../ui/ResourceUtilization';

export const TeamDashboard: React.FC<{ teamId: string }> = ({ teamId }) => {
  const { team, metrics } = useTeam(teamId);

  return (
    <div className="grid grid-cols-12 gap-6">
      <AgentGrid agents={team.agents} />
      <PerformanceMetrics metrics={metrics} />
      <TeamSpecializations team={team} />
      <ResourceUtilization team={team} />
    </div>
  );
};

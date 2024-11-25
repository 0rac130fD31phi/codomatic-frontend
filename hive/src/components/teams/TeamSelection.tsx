import React from 'react';

interface TeamSelectionProps {
  userTeams: string[];
  onSelect: (teamId: string) => void;
}

export const TeamSelection: React.FC<TeamSelectionProps> = ({ userTeams, onSelect }) => {
  return (
    <div>
      <h3>Select a Team</h3>
      <ul>
        {userTeams.map((team) => (
          <li key={team} onClick={() => onSelect(team)}>
            {team}
          </li>
        ))}
      </ul>
    </div>
  );
};

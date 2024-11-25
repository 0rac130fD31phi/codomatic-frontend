import React from 'react';

interface TeamSpecializationsProps {
  team: { specializations: string[] };
}

export const TeamSpecializations: React.FC<TeamSpecializationsProps> = ({ team }) => {
  return (
    <div>
      <h3>Team Specializations</h3>
      <ul>
        {team.specializations.map((specialization, index) => (
          <li key={index}>{specialization}</li>
        ))}
      </ul>
    </div>
  );
};

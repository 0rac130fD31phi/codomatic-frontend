import React from 'react';
import Particles from '../../ui/particles';
import Meteors from '../../ui/meteors';

export const ParticleField: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Particles Background */}
      <Particles
        quantity={100}
        staticity={70}
        size={0.6}
        color="#4ade80"
        ease={100}
        vx={0.1}
        vy={0.1}
      />
      {/* Meteors Animation */}
      <Meteors number={15} />
    </div>
  );
};

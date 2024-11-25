import React, { useEffect } from 'react';

const ThrowError: React.FC = () => {
  useEffect(() => {
    throw new Error('Test error for logging');
  }, []);

  return null;
};

export default ThrowError;

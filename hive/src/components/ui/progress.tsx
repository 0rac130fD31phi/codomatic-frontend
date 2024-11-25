import React from 'react';

interface ProgressProps {
  value: number;
  className?: string;
  indicatorClassName?: string;
}

export const Progress: React.FC<ProgressProps> = ({ value, className, indicatorClassName }) => {
  return (
    <div className={`relative w-full bg-gray-200 rounded ${className}`}>
      <div
        className={`absolute top-0 left-0 h-full rounded ${indicatorClassName}`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

import React from 'react';

interface Metrics {
  performance: number;
  utilization: number;
}

interface PerformanceMetricsProps {
  metrics: Metrics;
}

export const PerformanceMetrics: React.FC<PerformanceMetricsProps> = ({ metrics }) => {
  return (
    <div>
      <h3>Performance Metrics</h3>
      <p>Performance: {metrics.performance}</p>
      <p>Utilization: {metrics.utilization}</p>
    </div>
  );
};

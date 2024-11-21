import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import AnimatedTesseract from './AnimatedTesseract';
import { useTheme } from '../../../contexts/ThemeContext';
import { useFont } from '../../../contexts/FontContext';
import { themes } from '../../../themes/themes';

const TesseractHero: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { font } = useFont();

  // State to dynamically adjust properties based on the selected theme
  const [lineColor, setLineColor] = useState(theme.text.accent);
  const [nodeColor, setNodeColor] = useState(theme.text.primary);
  const [glassColor, setGlassColor] = useState(theme.text.secondary);
  const [backgroundColor, setBackgroundColor] = useState(theme.bgPrimary);

  const [lineThickness, setLineThickness] = useState(0.1);
  const [lineOpacity, setLineOpacity] = useState(0.8);
  const [metallicFinish, setMetallicFinish] = useState(0.9);
  const [roughnessValue, setRoughnessValue] = useState(0.1);
  const [glassOpacity, setGlassOpacity] = useState(0.3);
  const [nodeSize, setNodeSize] = useState(0.15);
  const [rotationSpeed, setRotationSpeed] = useState(0.02);

  // Lighting properties
  const ambientLightIntensity = 0.5;
  const spotlightSettings = {
    position: [5, 5, 5],
    angle: 0.6,
    penumbra: 0.4,
    intensity: 1.2,
    color: theme.text.accent,
    shadowMapSize: { width: 2048, height: 2048 },
  };
  const pointLightSettings = {
    position: [-5, -5, 5],
    intensity: 0.8,
    color: theme.text.primary,
  };
  const directionalLightSettings = {
    position: [0, 5, -10],
    intensity: 1.0,
    color: theme.text.secondary,
    shadowMapSize: { width: 2048, height: 2048 },
  };

  useEffect(() => {
    // Update visual properties when the theme changes
    setLineColor(theme.text.accent);
    setNodeColor(theme.text.primary);
    setGlassColor(theme.text.secondary);
    setBackgroundColor(theme.bgPrimary);
  }, [theme]);

  return (
    <div
      className="w-full h-screen"
      style={{
        backgroundColor: backgroundColor,
        fontFamily: `${font}`,
      }}
    >
      <Canvas>
        <Suspense fallback={null}>
          {/* 3D Orbit Controls */}
          <OrbitControls />
          {/* Lighting Configurations */}
          <ambientLight intensity={ambientLightIntensity} />
          <spotLight {...spotlightSettings} />
          <pointLight {...pointLightSettings} />
          <directionalLight {...directionalLightSettings} />
          {/* Animated Tesseract */}
          <AnimatedTesseract
            lineColor={lineColor}
            nodeColor={nodeColor}
            glassColor={glassColor}
            lineThickness={lineThickness}
            lineOpacity={lineOpacity}
            metallicFinish={metallicFinish}
            roughnessValue={roughnessValue}
            glassOpacity={glassOpacity}
            showGlassSurfaces={true}
            rotationSpeed={rotationSpeed}
            nodeSize={nodeSize}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default TesseractHero;

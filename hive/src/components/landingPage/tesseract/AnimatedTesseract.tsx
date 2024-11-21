import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

class LineCurve3D extends THREE.Curve<THREE.Vector3> {
  private start: THREE.Vector3;
  private end: THREE.Vector3;

  constructor(start: THREE.Vector3, end: THREE.Vector3) {
    super();
    this.start = start;
    this.end = end;
  }

  getPoint(t: number) {
    return new THREE.Vector3().lerpVectors(this.start, this.end, t);
  }
}

interface AnimatedTesseractProps {
  lineColor: string;
  nodeColor: string;
  lineThickness: number;
  lineOpacity: number;
  metallicFinish: number;
  roughnessValue: number;
  glassOpacity: number;
  showGlassSurfaces: boolean;
  rotationSpeed: number;
  glassColor: string;
  nodeSize: number;
  onRotationUpdate?: (info: { angleXY: number; angleZW: number }) => void;
  onPositionUpdate?: (positions: number[][]) => void;
}

const AnimatedTesseract: React.FC<AnimatedTesseractProps> = ({
  lineColor,
  nodeColor,
  lineThickness,
  lineOpacity,
  metallicFinish,
  roughnessValue,
  rotationSpeed,
  nodeSize,
  onRotationUpdate,
  onPositionUpdate,
}) => {
  const linesRef = useRef<THREE.Group>(null);
  const nodesRef = useRef<THREE.Group>(null);

  const verticesRef = useRef<number[][]>([
    [-1, -1, -1, -1],
    [1, -1, -1, -1],
    [-1, 1, -1, -1],
    [1, 1, -1, -1],
    [-1, -1, 1, -1],
    [1, -1, 1, -1],
    [-1, 1, 1, -1],
    [1, 1, 1, -1],
    [-1, -1, -1, 1],
    [1, -1, -1, 1],
    [-1, 1, -1, 1],
    [1, 1, -1, 1],
    [-1, -1, 1, 1],
    [1, -1, 1, 1],
    [-1, 1, 1, 1],
    [1, 1, 1, 1],
  ]);

  const edges = [
    [0, 1], [0, 2], [0, 4], [0, 8],
    [1, 3], [1, 5], [1, 9],
    [2, 3], [2, 6], [2, 10],
    [3, 7], [3, 11],
    [4, 5], [4, 6], [4, 12],
    [5, 7], [5, 13],
    [6, 7], [6, 14],
    [7, 15],
    [8, 9], [8, 10], [8, 12],
    [9, 11], [9, 13],
    [10, 11], [10, 14],
    [11, 15],
    [12, 13], [12, 14],
    [13, 15],
    [14, 15],
  ];

  const rotate4D = (vertices: number[][], angleXW: number, angleYZ: number) => {
    const cosXW = Math.cos(angleXW);
    const sinXW = Math.sin(angleXW);
    const cosYZ = Math.cos(angleYZ);
    const sinYZ = Math.sin(angleYZ);

    return vertices.map(([x, y, z, w]) => {
      const newX = cosXW * x - sinXW * w;
      const newY = cosYZ * y - sinYZ * z;
      const newZ = sinYZ * y + cosYZ * z;
      const newW = sinXW * x + cosXW * w;
      return [newX, newY, newZ, newW];
    });
  };

  useFrame(() => {
    if (!linesRef.current || !nodesRef.current) return;

    const angleXY = rotationSpeed;
    const angleZW = rotationSpeed;

    const newVertices = rotate4D(verticesRef.current, angleXY, angleZW);

    const projectedVertices = newVertices.map(([x, y, z, w]) => {
      const scale = 2 / (2 - w);
      return [x * scale, y * scale, z * scale] as [number, number, number];
    });

    // Update edges
    edges.forEach(([start, end], index) => {
      const v0 = new THREE.Vector3(...projectedVertices[start]);
      const v1 = new THREE.Vector3(...projectedVertices[end]);

      const curve = new LineCurve3D(v0, v1);
      const geometry = new THREE.TubeGeometry(curve, 20, lineThickness, 8, false);

      const line = linesRef.current?.children[index] as THREE.Mesh;
      if (line) {
        line.geometry.dispose();
        line.geometry = geometry;
        line.material = new THREE.MeshStandardMaterial({
          color: lineColor,
          opacity: lineOpacity,
          transparent: true,
          metalness: metallicFinish,
          roughness: roughnessValue,
        });
      }
    });

    // Update node positions
    nodesRef.current?.children.forEach((node, index) => {
      const position = projectedVertices[index];
      node.position.set(...position);
    });

    // Update refs
    verticesRef.current = newVertices;

    // Callback updates
    onRotationUpdate?.({ angleXY, angleZW });
    onPositionUpdate?.(projectedVertices);
  });

  return (
    <>
      <group ref={linesRef}>
        {edges.map((_, index) => (
          <mesh key={index}>
            <tubeGeometry />
            <meshStandardMaterial />
          </mesh>
        ))}
      </group>
      <group ref={nodesRef}>
        {verticesRef.current.map((vertex, index) => (
          <mesh key={index}>
            <sphereGeometry args={[nodeSize, 16, 16]} />
            <meshStandardMaterial color={nodeColor} />
          </mesh>
        ))}
      </group>
    </>
  );
};

export default AnimatedTesseract;

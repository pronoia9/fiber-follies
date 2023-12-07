import { MeshBasicMaterial } from 'three';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

// Renders flashing LED's
export const Leds = ({ instances }) => {
  const ref = useRef();
  const { nodes } = useGLTF('/src/pages/1-Monitors/assets/computers_1-transformed.glb');

  useMemo(() => {
    nodes.Sphere.material = new MeshBasicMaterial();
    nodes.Sphere.material.toneMapped = false;
  }, []);

  useFrame((state) => {
    ref.current?.children?.forEach((instance) => {
      const rand = Math.abs(2 + instance.position.x);
      const t = Math.round((1 + Math.sin(rand * 10000 + state.clock.elapsedTime * rand)) / 2);
      instance.color.setRGB(0, t * 1.1, t);
    });
  });

  return (
    <group ref={ref}>
      <instances.Sphere position={[-0.41, 1.1, -2.21]} scale={0.005} color={[1, 2, 1]} />
      <instances.Sphere position={[0.59, 1.32, -2.22]} scale={0.005} color={[1, 2, 1]} />
      <instances.Sphere position={[1.77, 1.91, -1.17]} scale={0.005} color={[1, 2, 1]} />
      <instances.Sphere position={[2.44, 1.1, -0.79]} scale={0.005} color={[1, 2, 1]} />
      <instances.Sphere position={[4.87, 3.8, -0.1]} scale={0.005} color={[1, 2, 1]} />
      <instances.Sphere position={[1.93, 3.8, -3.69]} scale={0.005} color={[1, 2, 1]} />
      <instances.Sphere position={[-2.35, 3.8, -3.48]} scale={0.005} color={[1, 2, 1]} />
      <instances.Sphere position={[-4.71, 4.59, -1.81]} scale={0.005} color={[1, 2, 1]} />
      <instances.Sphere position={[-3.03, 2.85, 1.19]} scale={0.005} color={[1, 2, 1]} />
      <instances.Sphere position={[-1.21, 1.73, -1.49]} scale={0.005} color={[1, 2, 1]} />
    </group>
  );
};

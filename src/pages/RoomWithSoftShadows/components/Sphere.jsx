import { Float } from "@react-three/drei";

export const Sphere = ({ color = 'hotpink', floatIntensity = 15, position = [0, 5, -8], scale = 1 }) => {
  return (
    <Float floatIntensity={floatIntensity}>
      <mesh castShadow position={position} scale={scale}>
        <sphereGeometry />
        <meshBasicMaterial color={color} roughness={1} />
      </mesh>
    </Float>
  );
};

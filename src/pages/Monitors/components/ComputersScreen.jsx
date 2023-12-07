import { useGLTF, RenderTexture } from '@react-three/drei';

// This component renders a monitor (taken out of the gltf model)
// It renders a custom scene into a texture and projects it onto monitors screen
export const Screen = ({ frame, panel, children, ...props }) => {
  const { nodes, materials } = useGLTF('/src/pages/Monitors/assets/computers_1-transformed.glb');

  return (
    <group {...props}>
      <mesh castShadow receiveShadow geometry={nodes[frame].geometry} material={materials.Texture} />
      <mesh geometry={nodes[panel].geometry}>
        <meshBasicMaterial toneMapped={false}>
          <RenderTexture width={512} height={512} attach='map' anisotropy={16}>
            {children}
          </RenderTexture>
        </meshBasicMaterial>
      </mesh>
    </group>
  );
};

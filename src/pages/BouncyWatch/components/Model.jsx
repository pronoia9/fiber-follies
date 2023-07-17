import { useGLTF, Html } from '@react-three/drei';

const path = '/src/pages/BouncyWatch/assets/watch-v1.glb';

export const Model = (props) => {
  const { nodes, materials } = useGLTF(path);
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object005_glass_0.geometry} material={materials.glass}>
        <Html scale={100} rotation={[Math.PI / 2, 0, 0]} position={[180, -350, 50]} transform occlude>
          <div className='annotation'>
            6.550 $ <span style={{ fontSize: '1.5em' }}>🥲</span>
          </div>
        </Html>
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Object006_watch_0.geometry} material={materials.watch} />
    </group>
  );
};

useGLTF.preload(path);

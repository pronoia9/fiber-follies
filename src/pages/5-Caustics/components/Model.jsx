import { AdditiveBlending, FrontSide, MeshStandardMaterial } from 'three';
import { Caustics, Center, MeshTransmissionMaterial, useGLTF } from '@react-three/drei';

const path = '/src/pages/5-Caustics/assets/glass-transformed.glb';
const innerMaterial = new MeshStandardMaterial({
  transparent: true,
  opacity: 1,
  color: 'black',
  roughness: 0,
  side: FrontSide,
  blending: AdditiveBlending,
  polygonOffset: true,
  polygonOffsetFactor: 1,
  envMapIntensity: 2,
});

export const Model = (props) => {
  const { nodes, materials } = useGLTF(path);

  return (
    <group {...props} dispose={null}>
      <mesh castShadow rotation={[0, -0.5, 0]} geometry={nodes.cake.geometry} material={materials.FruitCakeSlice_u1_v1} />
      <mesh castShadow geometry={nodes.straw_1.geometry} material={materials.straw_2} />
      <mesh castShadow geometry={nodes.straw_2.geometry} material={materials.straw_1} />
      <mesh castShadow position={[0, -0.005, 0]} geometry={nodes.straw001_1.geometry} material={materials.straw_2} />
      <mesh castShadow position={[0, -0.005, 0]} geometry={nodes.straw001_2.geometry} material={materials.straw_1} />
      <Center rotation={[0, -0.4, 0]} position={[-1, -0.01, -2]} top>
        <mesh scale={1.2} castShadow geometry={nodes.flowers.geometry} material={materials['draifrawer_u1_v1.001']} />
      </Center>
      <mesh castShadow geometry={nodes.fork.geometry} material={materials.ForkAndKnivesSet001_1K} material-color='#999' />

      <Caustics
        backfaces
        color={[1, 0.8, 0.8]}
        focus={[0, -1.2, 0]}
        lightSource={[-2, 2.5, -2.5]}
        frustum={1.75}
        intensity={0.005}
        worldRadius={0.66 / 10}
        ior={0.6}
        backfaceIor={1.26}
      >
        <mesh castShadow receiveShadow geometry={nodes.glass.geometry}>
          <MeshTransmissionMaterial
            thickness={0.2}
            chromaticAberration={0.05}
            anisotropy={1.5}
            clearcoat={1}
            clearcoatRoughness={0.2}
            envMapIntensity={3}
          />
        </mesh>
      </Caustics>

      {/** Some hacks to get some back face reflections, otherwise the glass would look fake */}
      <mesh scale={[0.95, 1, 0.95]} geometry={nodes.glass_back.geometry} material={innerMaterial} />
      <mesh geometry={nodes.glass_inner.geometry} material={innerMaterial} />
    </group>
  );
};

useGLTF.preload(path);

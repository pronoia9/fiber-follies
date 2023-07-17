import { useEffect, useRef, useState } from 'react';
import { Color, MathUtils } from 'three';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations, PerspectiveCamera } from '@react-three/drei';

const color = new Color();
const path = '/src/pages/CameraScroll/assets/model.glb';

export const Model = ({ scroll, ...props }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(path);
  const { actions } = useAnimations(animations, group);
  const [hover, setHover] = useState();
  const extras = { receiveShadow: true, castShadow: true, 'material-envMapIntensity': 0.2 };

  useEffect(() => {
    actions['CameraAction.005'].play().paused = true;
  }, []);

  useEffect(() => {
    if (hover) group.current.getObjectByName(hover).material.color.set('white');
    document.body.style.cursor = hover ? 'pointer' : 'auto';
  }, [hover]);

  const handleHover = (e, pointerOver) => {
    e.stopPropagation();
    setHover(pointerOver ? e.object.name : null);
  };

  useFrame((state) => {
    actions['CameraAction.005'].time = MathUtils.lerp(
      actions['CameraAction.005'].time,
      actions['CameraAction.005'].getClip().duration * scroll.current,
      0.05
    );
    group.current.children[0].children.forEach((child, index) => {
      child.material.color.lerp(color.set(hover === child.name ? 'tomato' : '#202020'), hover ? 0.1 : 0.05);
      const et = state.clock.elapsedTime;
      child.position.y = Math.sin((et + index * 2000) / 2) * 1;
      child.rotation.x = Math.sin((et + index * 2000) / 3) / 10;
      child.rotation.y = Math.cos((et + index * 2000) / 2) / 10;
      child.rotation.z = Math.sin((et + index * 2000) / 3) / 10;
    });
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group onPointerOver={(e) => handleHover(e, true)} onPointerOut={handleHover} position={[0.06, 4.04, 0.35]} scale={[0.25, 0.25, 0.25]}>
        <mesh name='Headphones' geometry={nodes.Headphones.geometry} material={materials.M_Headphone} {...extras} />
        <mesh name='Notebook' geometry={nodes.Notebook.geometry} material={materials.M_Notebook} {...extras} />
        <mesh name='Rocket003' geometry={nodes.Rocket003.geometry} material={materials.M_Rocket} {...extras} />
        <mesh name='Roundcube001' geometry={nodes.Roundcube001.geometry} material={materials.M_Roundcube} {...extras} />
        <mesh name='Table' geometry={nodes.Table.geometry} material={materials.M_Table} {...extras} />
        <mesh name='VR_Headset' geometry={nodes.VR_Headset.geometry} material={materials.M_Headset} {...extras} />
        <mesh name='Zeppelin' geometry={nodes.Zeppelin.geometry} material={materials.M_Zeppelin} v />
      </group>
      <group name='Camera' position={[-1.78, 2.04, 23.58]} rotation={[1.62, 0.01, 0.11]}>
        <PerspectiveCamera makeDefault far={100} near={0.1} fov={28} rotation={[-Math.PI / 2, 0, 0]}>
          <directionalLight
            castShadow
            position={[10, 20, 15]}
            shadow-camera-right={8}
            shadow-camera-top={8}
            shadow-camera-left={-8}
            shadow-camera-bottom={-8}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            intensity={2}
            shadow-bias={-0.0001}
          />
        </PerspectiveCamera>
      </group>
    </group>
  );
};

useGLTF.preload(path);

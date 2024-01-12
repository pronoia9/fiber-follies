import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';

import { Carla, Ground, Intro, Overlay, VideoText } from '.';

export const GroundReflectionsAndVideoTextures = () => {
  return (
    <Container>
      <Canvas concurrent gl={{ alpha: false }} pixelRatio={[1, 1.5]} camera={{ position: [0, 3, 100], fov: 15 }}>
        <color attach='background' args={['black']} />
        <fog attach='fog' args={['black', 15, 20]} />

        <Suspense fallback={null}>
          <group position={[0, -1, 0]}>
            <Carla rotation={[0, Math.PI - 0.4, 0]} position={[-1.2, 0, 0.6]} scale={[0.26, 0.26, 0.26]} />
            <VideoText position={[0, 1.3, -2]} />
            <Ground />
          </group>

          {/* Lights */}
          <ambientLight intensity={0.5} />
          <spotLight position={[0, 10, 0]} intensity={0.3} />
          <directionalLight position={[-50, 0, -40]} intensity={0.7} />

          <Intro />
        </Suspense>
      </Canvas>

      <Overlay />
    </Container>
  );
};

const Container = styled.div``;

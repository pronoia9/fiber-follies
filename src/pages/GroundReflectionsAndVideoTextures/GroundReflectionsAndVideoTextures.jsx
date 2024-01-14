import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';

import { Carla, Ground, Intro, Overlay, VideoText } from '.';
import '@pmndrs/branding/styles.css';

export const GroundReflectionsAndVideoTextures = () => {
  return (
    <Container>
      <Canvas concurrent gl={{ alpha: false }} pixelRatio={[1, 1.5]} camera={{ position: [0, 3, 100], fov: 15 }}>
        {/* Background Effects */}
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

          {/* Mouse/Camera */}
          <Intro />
        </Suspense>
      </Canvas>

      <Overlay />
    </Container>
  );
};

const Container = styled.div`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    width: 100vw;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  body {
    font-family: 'Inter var', sans-serif;
    color: white;
    background: #101010;
    user-select: none;
  }

  .fullscreen {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 1s;
  }

  .bg {
    background: #101010;
  }

  .fullscreen.notready {
    color: #606060;
  }

  .menu {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    color: #808080;
    padding: 40px;
    pointer-events: none;
    justify-content: center;
    align-items: flex-end;
    flex-direction: row;
    font-size: 10px;
    line-height: 1.5em;
  }

  .menu.left {
    justify-content: flex-start;
  }

  .menu.right {
    justify-content: flex-end;
  }

  .menu > div {
    word-wrap: none;
    word-break: none;
    white-space: pre;
    padding-left: 25px;
    padding-right: 25px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
  }

  .menu > div b {
    font-weight: 600;
    color: #b0b0b0;
  }

  .fullscreen.ready > div {
    cursor: pointer;
  }

  .fullscreen.clicked {
    pointer-events: none;
    opacity: 0;
  }

  .menu a {
    pointer-events: all;
    cursor: pointer;
    color: inherit;
    text-decoration: none;
  }
  .menu a:hover {
    text-decoration: underline;
    color: inherit;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  canvas {
    opacity: 0;
    touch-action: none;
    animation: fade-in 2s ease 0.5s forwards;
  }
`;

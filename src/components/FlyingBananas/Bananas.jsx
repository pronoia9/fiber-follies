import { Canvas } from '@react-three/fiber';
// https://github.com/pmndrs/drei
import { Environment } from '@react-three/drei';
// https://github.com/pmndrs/react-postprocessing
// https://github.com/vanruesc/postprocessing
import { EffectComposer, DepthOfField } from '@react-three/postprocessing';

import { Banana } from '.';

export const Bananas = ({ speed = 1, count = 80, depth = 80, easing = (x) => Math.sqrt(1 - Math.pow(x - 1, 2)) }) => {
  return (
    // No need for antialias (faster), dpr clamps the resolution to 1.5 (also faster than full resolution)
    <Canvas gl={{ antialias: false }} dpr={[1, 1.5]} camera={{ position: [0, 0, 10], fov: 20, near: 0.01, far: depth + 15 }}>
      <color attach='background' args={['#ffbf40']} />
      <spotLight position={[10, 20, 10]} penumbra={1} intensity={3} color='orange' />
      {/* Using cubic easing here to spread out objects a little more interestingly, i wanted a sole big object up front ... */}
      {Array.from({ length: count }, (_, i) => (
        <Banana key={i} index={i} z={Math.round(easing(i / count) * depth)} speed={speed} />
      ))}
      <Environment preset='sunset' />
      {/* Multisampling (MSAA) is WebGL2 antialeasing, we don't need it (faster) */}
      <EffectComposer multisampling={0}>
        <DepthOfField target={[0, 0, 60]} focalLength={0.4} bokehScale={14} height={700} />
      </EffectComposer>
    </Canvas>
  );
};

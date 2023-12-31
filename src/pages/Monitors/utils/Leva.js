import { folder } from 'leva';

export const levaProps = {
  canvas: [
    {
      shadows: { value: true },
      dpr: { value: [1, 2] },
      color: { value: 'black' },
    },
    { collapsed: true },
  ],

  camera: [
    {
      position: { value: [-1.5, 1, 5.5] },
      fov: { value: 45 },
      near: { value: 1 },
      far: { value: 20 },
    },
    { collapsed: true },
  ],

  hemisphereLight: [
    {
      intensity: { value: 0.15 },
      groundColor: { value: 'black' },
    },
    { collapsed: true },
  ],

  spotLight: [
    {
      position: { value: [10, 20, 10] },
      angle: { value: 0.12 },
      penumbra: { value: 1 },
      intensity: { value: 1 },
      castShadow: true,
      'shadow-mapSize': { value: 1024 },
    },
    { collapsed: true },
  ],

  pointLight: [
    {
      distance: { value: 1.5 },
      intensity: { value: 1 },
      position: { value: [-0.15, 0.7 - 1, 0] },
      color: 'orange',
    },
    { collapsed: true },
  ],

  scene: [
    {
      position: { value: [-0, -1, 0] },
    },
    { collapsed: true },
  ],

  computers: [
    {
      scale: { value: 0.5 },
    },
    { collapsed: true },
  ],

  bunny: [
    {
      scale: { value: 0.325 },
      position: { value: [0, 0, 0.5] },
      rotation: { value: [0, -Math.PI * 0.85, 0] },
    },
    { collapsed: true },
  ],

  floor: [
    {
      receiveShadow: true,
      rotation: { value: [-Math.PI / 2, 0, 0] },
    },
    { collapsed: true },
  ],

  floorMaterial: [
    {
      blur: { value: [300, 30] },
      resolution: { value: 2048 },
      mixBlur: { value: 1 },
      mixStrength: { value: 80 },
      roughness: { value: 1 },
      depthScale: { value: 1.2 },
      minDepthThreshold: { value: 0.4 },
      maxDepthThreshold: { value: 1.4 },
      color: '#202020',
      metalness: { value: 0.8 },
    },
    { collapsed: true },
  ],

  effects: [
    {
      'Bloom': folder({
        luminanceThreshold: { value: 0 },
        mipmapBlur: { value: true },
        luminanceSmoothing: { value: 0.0 },
        intensity: { value: 6 },
      }),
      'Depth Of Field': folder({
        target: { value: [0, 0, 13] },
        focalLength: { value: 0.3 },
        bokehScale: { value: 15 },
        height: { value: 700 },
      }),
    },
    { collapsed: true },
  ],
};

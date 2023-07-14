export const levaProps = {
  canvas: {
    shadows: { value: true },
    dpr: { value: [1, 2] },
  },

  camera: {
    position: { value: [-1.5, 1, 5.5] },
    fov: { value: 45 },
    near: { value: 1 },
    far: { value: 20 },
  },

  hemisphereLight: {
    intensity: { value: 0.15 },
    groundColor: { value: 'black' },
  },

  spotLight: {
    position: { value: [10, 20, 10] },
    angle: { value: 0.12 },
    penumbra: { value: 1 },
    intensity: { value: 1 },
    castShadow: true,
    'shadow-mapSize': { value: 1024 },
  },
};

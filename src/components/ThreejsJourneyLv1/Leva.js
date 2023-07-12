export const levaProps = {
  canvas: {
    flat: { value: true },
    dpr: { value: [1, 2] },
    color: { value: '#e0b7ff' },
  },

  camera: {
    fov: { value: 25 },
    position: { value: [0, 0, 0] },
  },

  presentationControls: {
    snap: { value: true },
    global: { value: true },
    zoom: { value: 0.8 },
    rotation: { value: [0, -Math.PI / 4, 0] },
    polar: { value: [0, Math.PI / 4] },
    azimuth: { value: [-Math.PI / 4, Math.PI / 4] },
  },
};

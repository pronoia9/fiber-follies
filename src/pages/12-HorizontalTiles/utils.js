import { BufferGeometry, LineBasicMaterial, MathUtils, Vector3 } from "three";
import { proxy } from "valtio";

export const damp = MathUtils.damp;

export const geometry = new BufferGeometry().setFromPoints([new Vector3(0, -0.5, 0), new Vector3(0, 0.5, 0)]);

export const material = new LineBasicMaterial({ color: 'white' });

export const state = proxy({
  clicked: null,
  urls: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 5, 7, 8, 2, 4, 9, 6].map((u) => `/src/pages/12-HorizontalTiles/assets/${u}.jpg`),
});

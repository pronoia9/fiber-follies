import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'normalize.css/normalize.css';
import App from './App';
import {
  /* 01 */ Monitors,
  /* 02 */ FlyingBananas,
  /* 03 */ RoomWithSoftShadows,
  /* 05 */ Caustics,
  /* 11 */ ImageGallery,
  /* 12 */ HorizontalTiles,
  /* 25 */ GroundReflectionsAndVideoTextures,
  /* 26 */ ThreejsJourneyLv1,
  /* 28 */ MixingHtmlAndWebglWithOcclusion,
  /* 36 */ GltfAnimationsTiedToScroll,
  /* 67 */ BouncyWatch,
  /* 71 */ ScrollControlsGltf,
  /* 77 */ CameraScroll,
} from './pages';

const examples = [
  { /* 01 */ path: 'monitors', element: <Monitors /> },
  { /* 02 */ path: 'flying-bananas', element: <FlyingBananas /> },
  { /* 03 */ path: 'room-with-soft-shadows', element: <RoomWithSoftShadows /> },
  { /* 04 */ path: 'tshirt-configurator', element: <></> },
  { /* 05 */ path: 'caustics', element: <Caustics /> },
  { /* 06 */ path: 'volumetric-light-godray', element: <></> },
  { /* 07 */ path: 'enter-portals', element: <></> },
  { /* 08 */ path: 'pass-through-portals', element: <></> },
  { /* 09 */ path: 'magic-box', element: <></> },
  { /* 10 */ path: 'glass-flower', element: <></> },
  { /* 11 */ path: 'image-gallery', element: <ImageGallery /> },
  { /* 12 */ path: 'horizontal-tiles', element: <HorizontalTiles /> },
  { /* 13 */ path: 'best-served-bold-christmas-baubles', element: <></> },
  { /* 14 */ path: 'the-three-graces', element: <></> },
  { /* 15 */ path: 'frosted-glass', element: <></> },
  { /* 16 */ path: 'gltfjsx-400kb-drone', element: <></> },
  { /* 17 */ path: 'star-wars', element: <></> },
  { /* 18 */ path: 'bruno-simons-20k-challenge', element: <></> },
  { /* 19 */ path: 'scrollcontrols-and-lens-refraction', element: <></> },
  { /* 20 */ path: 'building-dynamic-envmaps', element: <></> },
  { /* 21 */ path: 'nextjs-prism', element: <></> },
  { /* 22 */ path: 'building-live-envmaps', element: <></> },
  { /* 23 */ path: 'shoe-configurator', element: <></> },
  { /* 24 */ path: 'audio-analyser', element: <></> },
  { /* 25 */ path: 'ground-reflections-and-video-textures', element: <GroundReflectionsAndVideoTextures /> },
  { /* 26 */ path: 'threejs-journey-lv1', element: <ThreejsJourneyLv1 /> },
  { /* 27 */ path: 'threejs-journey-portal', element: <></> },
  { /* 28 */ path: 'mixing-html-and-webgl-w-occlusion', element: <MixingHtmlAndWebglWithOcclusion /> },
  { /* 29 */ path: 'interactive-spline-scene-live-html', element: <></> },
  { /* 30 */ path: 'diamond-refraction', element: <></> },
  { /* 31 */ path: 'diamond-ring', element: <></> },
  { /* 32 */ path: 'envmap-ground-projection', element: <></> },
  { /* 33 */ path: 'spline-glass-shapes', element: <></> },
  { /* 34 */ path: 'csg-bunny-usegroups', element: <></> },
  { /* 35 */ path: 'csg-house', element: <></> },
  { /* 36 */ path: 'gltf-animations-tied-to-scroll', element: <GltfAnimationsTiedToScroll /> },
  { /* 37 */ path: 'object-clump', element: <></> },
  { /* 38 */ path: 'html-input-fields', element: <></> },
  { /* 39 */ path: 'useintersect-and-scrollcontrols', element: <></> },
  { /* 40 */ path: 'infinite-scroll', element: <></> },
  { /* 41 */ path: 'scrollcontrols-with-minimap', element: <></> },
  { /* 42 */ path: 'instanced-particles-effects', element: <></> },
  { /* 43 */ path: 'dbismut-furniture', element: <></> },
  { /* 44 */ path: 'portal-shapes', element: <></> },
  { /* 45 */ path: 'aquarium', element: <></> },
  { /* 46 */ path: 'portals', element: <></> },
  { /* 47 */ path: 'inter-epoxy-resin', element: <></> },
  { /* 48 */ path: 'stage-presets-gltfjsx', element: <></> },
  { /* 49 */ path: 'react-ellipsecurve', element: <></> },
  { /* 50 */ path: 'iridescent-decals', element: <></> },
  { /* 51 */ path: 'baking-soft-shadows', element: <></> },
  { /* 52 */ path: 'ssr-test', element: <></> },
  { /* 53 */ path: 'csg-operations-rapier-physics', element: <></> },
  { /* 54 */ path: 'faucets-select-highlight', element: <></> },
  { /* 55 */ path: 'rapier-physics', element: <></> },
  { /* 56 */ path: 'bloom-hdr-workflow-gltf', element: <></> },
  { /* 57 */ path: 'ground-projected-envmaps-lamina', element: <></> },
  { /* 58 */ path: 'basic-ballpit', element: <></> },
  { /* 59 */ path: 'backdrop-and-cables', element: <></> },
  { /* 60 */ path: 'clones', element: <></> },
  { /* 61 */ path: 'lamina-1x', element: <></> },
  { /* 62 */ path: 'react-pp-outlines', element: <></> },
  { /* 63 */ path: 'gatsby-stars', element: <></> },
  { /* 64 */ path: 'pmndrs-vercel', element: <></> },
  { /* 65 */ path: 'sport-hall', element: <></> },
  { /* 66 */ path: 'night-train', element: <></> },
  { /* 67 */ path: 'bouncy-watch', element: <BouncyWatch /> },
  { /* 68 */ path: 'transparent-aesop-bottles', element: <></> },
  { /* 69 */ path: 'raycast-cycling', element: <></> },
  { /* 70 */ path: 'landing-page', element: <></> },
  { /* 71 */ path: 'scrollcontrols-gltf', element: <ScrollControlsGltf /> },
  { /* 72 */ path: 'merged-instance', element: <></> },
  { /* 73 */ path: 'gpgpu-curl-noise-dof', element: <></> },
  { /* 74 */ path: 'hi-key-bubbles', element: <></> },
  { /* 75 */ path: 'floating-instanced-shoes', element: <></> },
  { /* 76 */ path: 'simple-audio-analyser', element: <></> },
  { /* 77 */ path: 'camera-scroll', element: <CameraScroll /> },
  { /* 78 */ path: 'springy-boxes', element: <></> },
  { /* 79 */ path: 'floating-diamonds', element: <></> },
  { /* 80 */ path: 'gltf-animations', element: <></> },
  { /* 81 */ path: 'sparks-and-effects', element: <></> },
  { /* 82 */ path: 'camera-shake', element: <></> },
  { /* 83 */ path: 'ragdoll-physics', element: <></> },
  { /* 84 */ path: 'react-spring-animations', element: <></> },
  { /* 85 */ path: 'mount-transitions', element: <></> },
  { /* 86 */ path: 'floating-laptop', element: <></> },
  { /* 87 */ path: 'zustand-site', element: <></> },
  { /* 88 */ path: 'cell-fracture', element: <></> },
  { /* 89 */ path: 'router-transitions', element: <></> },
  { /* 90 */ path: 'soft-shadows', element: <></> },
  { /* 91 */ path: 'lulaby-city', element: <></> },
  { /* 92 */ path: 'viking-ship', element: <></> },
  { /* 93 */ path: 'wobbling-sphere', element: <></> },
  { /* 94 */ path: 'moksha', element: <></> },
  { /* 95 */ path: 'flexbox-yoga-in-webgl', element: <></> },
  { /* 96 */ path: 'confetti', element: <></> },
  { /* 97 */ path: 'learn-with-jason', element: <></> },
  { /* 98 */ path: 'volumetric-spotlight', element: <></> },
];

const router = createBrowserRouter([{ path: '/', element: <App />, children: examples }]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
);

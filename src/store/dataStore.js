import { create } from 'zustand';

import {
  // Showcase
  monitors,
  flyingBananas,
  roomWithSoftShadows,
  tshirtConfigurator,
  caustics,
  volumetricLightGodray,
  enterPortals,
  passThroughPortals,
  magicBox,
  glassFlower,
  imageGallery,
  horizontalTiles,
  bestServedBoldChristmasBaubles,
  theThreeGraces,
  frostedGlass,
  gltfjsx400kbDrone,
  starWars,
  brunoSimons20kChallenge,
  scrollcontrolsAndLensRefraction,
  buildingDynamicEnvmaps,
  nextjsPrism,
  buildingLiveEnvmaps,
  shoeConfigurator,
  audioAnalyser,
  groundReflectionsAndVideoTextures,
  threejsJourneyLv1,
  threejsJourneyPortal,
  mixingHtmlAndWebglWithOcclusion,
  interactiveSplineSceneLiveHtml,
  diamondRefraction,
  diamondRing,
  envmapGroundProjection,
  splineGlassShapes,
  csgBunnyUsegroups,
  csgHouse,
  gltfAnimationsTiedToScroll,
  objectClump,
  htmlInputFields,
  useintersectAndScrollcontrols,
  infiniteScroll,
  scrollcontrolsWithMinimap,
  instancedParticlesEffects,
  dbismutFurniture,
  portalShapes,
  aquarium,
  portals,
  interEpoxyResin,
  stagePresetsGltfjsx,
  reactEllipsecurve,
  iridescentDecals,
  bakingSoftShadows,
  ssrTest,
  csgOperationsRapierPhysics,
  faucetsSelectHighlight,
  rapierPhysics,
  bloomHdrWorkflowGltf,
  groundProjectedEnvmapsLamina,
  basicBallpit,
  backdropAndCables,
  clones,
  lamina1x,
  reactPpOutlines,
  gatsbyStars,
  pmndrsVercel,
  sportHall,
  nightTrain,
  bouncyWatch,
  transparentAesopBottles,
  raycastCycling,
  landingPage,
  scrollcontrolsGltf,
  mergedInstance,
  gpgpuCurlNoiseDof,
  hiKeyBubbles,
  floatingInstancedShoes,
  simpleAudioAnalyser,
  cameraScroll,
  springyBoxes,
  floatingDiamonds,
  gltfAnimations,
  sparksAndEffects,
  cameraShake,
  ragdollPhysics,
  reactSpringAnimations,
  mountTransitions,
  floatingLaptop,
  zustandSite,
  cellFracture,
  routerTransitions,
  softShadows,
  lulabyCity,
  vikingShip,
  wobblingSphere,
  moksha,
  flexboxYogaInWebgl,
  confetti,
  learnWithJason,
  volumetricSpotlight,
  // Game Prototypes
  racingGame,
  pinballIn70Lines,
  spaceGame,
  minecraft,
  arkanoid,
  pingPong,
  arkanoidUnder60Loc,
  // Basic Examples
} from '../assets';
import { getSystemTheme } from '../utils/utils';

export const dataStore = create((set) => ({
  theme: getSystemTheme(),
  setTheme: (theme) => set({ theme }),
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),

  tab: 'showcase',
  setTab: (tab) => set({ tab }),

  data: {
    showcase: [
      { title: 'Monitors', path: 'monitors', image: monitors },
      { title: 'Flying Bananas', path: 'flying-bananas', image: flyingBananas },
      { title: 'Room With Soft Shadows', path: 'room-with-soft-shadows', image: roomWithSoftShadows },
      { title: 'Tshirt Configurator', path: 'tshirt-configurator', image: tshirtConfigurator },
      { title: 'Caustics', path: 'caustics', image: caustics },
      { title: 'Volumetric Light Godray', path: 'volumetric-light-godray', image: volumetricLightGodray },
      { title: 'Enter Portals', path: 'enter-portals', image: enterPortals },
      { title: 'Pass Through Portals', path: 'pass-through-portals', image: passThroughPortals },
      { title: 'Magic Box', path: 'magic-box', image: magicBox },
      { title: 'Glass Flower', path: 'glass-flower', image: glassFlower },
      { title: 'Image Gallery', path: 'image-gallery', image: imageGallery },
      { title: 'Horizontal Tiles', path: 'horizontal-tiles', image: horizontalTiles },
      { title: 'Best Served Bold Christmas Baubles', path: 'best-served-bold-christmas-baubles', image: bestServedBoldChristmasBaubles },
      { title: 'The Three Graces', path: 'the-three-graces', image: theThreeGraces },
      { title: 'Frosted Glass', path: 'frosted-glass', image: frostedGlass },
      { title: 'Gltfjsx-400kb Drone', path: 'gltfjsx-400kb-drone', image: gltfjsx400kbDrone },
      { title: 'Star Wars', path: 'star-wars', image: starWars },
      { title: 'Bruno Simons-20k Challenge', path: 'bruno-simons-20k-challenge', image: brunoSimons20kChallenge },
      { title: 'Scrollcontrols And Lens Refraction', path: 'scrollcontrols-and-lens-refraction', image: scrollcontrolsAndLensRefraction },
      { title: 'Building Dynamic Envmaps', path: 'building-dynamic-envmaps', image: buildingDynamicEnvmaps },
      { title: 'Nextjs Prism', path: 'nextjs-prism', image: nextjsPrism },
      { title: 'Building Live Envmaps', path: 'building-live-envmaps', image: buildingLiveEnvmaps },
      { title: 'Shoe Configurator', path: 'shoe-configurator', image: shoeConfigurator },
      { title: 'Audio Analyser', path: 'audio-analyser', image: audioAnalyser },
      { title: 'Ground Reflections And Video Textures', path: 'ground-reflections-and-video-textures', image: groundReflectionsAndVideoTextures },
      { title: 'Threejs Journey Lv1', path: 'threejs-journey-lv1', image: threejsJourneyLv1 },
      { title: 'Threejs Journey Portal', path: 'threejs-journey-portal', image: threejsJourneyPortal },
      { title: 'Mixing Html And Webgl W Occlusion', path: 'mixing-html-and-webgl-w-occlusion', image: mixingHtmlAndWebglWithOcclusion },
      { title: 'Interactive Spline Scene Live Html', path: 'interactive-spline-scene-live-html', image: interactiveSplineSceneLiveHtml },
      { title: 'Diamond Refraction', path: 'diamond-refraction', image: diamondRefraction },
      { title: 'Diamond Ring', path: 'diamond-ring', image: diamondRing },
      { title: 'Envmap Ground Projection', path: 'envmap-ground-projection', image: envmapGroundProjection },
      { title: 'Spline Glass Shapes', path: 'spline-glass-shapes', image: splineGlassShapes },
      { title: 'Csg Bunny Usegroups', path: 'csg-bunny-usegroups', image: csgBunnyUsegroups },
      { title: 'Csg House', path: 'csg-house', image: csgHouse },
      { title: 'Gltf Animations Tied To Scroll', path: 'gltf-animations-tied-to-scroll', image: gltfAnimationsTiedToScroll },
      { title: 'Object Clump', path: 'object-clump', image: objectClump },
      { title: 'Html Input Fields', path: 'html-input-fields', image: htmlInputFields },
      { title: 'Useintersect And Scrollcontrols', path: 'useintersect-and-scrollcontrols', image: useintersectAndScrollcontrols },
      { title: 'Infinite Scroll', path: 'infinite-scroll', image: infiniteScroll },
      { title: 'Scrollcontrols With Minimap', path: 'scrollcontrols-with-minimap', image: scrollcontrolsWithMinimap },
      { title: 'Instanced Particles Effects', path: 'instanced-particles-effects', image: instancedParticlesEffects },
      { title: 'Dbismut Furniture', path: 'dbismut-furniture', image: dbismutFurniture },
      { title: 'Portal Shapes', path: 'portal-shapes', image: portalShapes },
      { title: 'Aquarium', path: 'aquarium', image: aquarium },
      { title: 'Portals', path: 'portals', image: portals },
      { title: 'Inter Epoxy Resin', path: 'inter-epoxy-resin', image: interEpoxyResin },
      { title: 'Stage Presets Gltfjsx', path: 'stage-presets-gltfjsx', image: stagePresetsGltfjsx },
      { title: 'React Ellipsecurve', path: 'react-ellipsecurve', image: reactEllipsecurve },
      { title: 'Iridescent Decals', path: 'iridescent-decals', image: iridescentDecals },
      { title: 'Baking Soft Shadows', path: 'baking-soft-shadows', image: bakingSoftShadows },
      { title: 'Ssr Test', path: 'ssr-test', image: ssrTest },
      { title: 'Csg Operations Rapier Physics', path: 'csg-operations-rapier-physics', image: csgOperationsRapierPhysics },
      { title: 'Faucets Select Highlight', path: 'faucets-select-highlight', image: faucetsSelectHighlight },
      { title: 'Rapier Physics', path: 'rapier-physics', image: rapierPhysics },
      { title: 'Bloom Hdr Workflow Gltf', path: 'bloom-hdr-workflow-gltf', image: bloomHdrWorkflowGltf },
      { title: 'Ground Projected Envmaps Lamina', path: 'ground-projected-envmaps-lamina', image: groundProjectedEnvmapsLamina },
      { title: 'Basic Ballpit', path: 'basic-ballpit', image: basicBallpit },
      { title: 'Backdrop And Cables', path: 'backdrop-and-cables', image: backdropAndCables },
      { title: 'Clones', path: 'clones', image: clones },
      { title: 'Lamina-1x', path: 'lamina-1x', image: lamina1x },
      { title: 'React Pp Outlines', path: 'react-pp-outlines', image: reactPpOutlines },
      { title: 'Gatsby Stars', path: 'gatsby-stars', image: gatsbyStars },
      { title: 'Pmndrs Vercel', path: 'pmndrs-vercel', image: pmndrsVercel },
      { title: 'Sport Hall', path: 'sport-hall', image: sportHall },
      { title: 'Night Train', path: 'night-train', image: nightTrain },
      { title: 'Bouncy Watch', path: 'bouncy-watch', image: bouncyWatch },
      { title: 'Transparent Aesop Bottles', path: 'transparent-aesop-bottles', image: transparentAesopBottles },
      { title: 'Raycast Cycling', path: 'raycast-cycling', image: raycastCycling },
      { title: 'Landing Page', path: 'landing-page', image: landingPage },
      { title: 'Scrollcontrols Gltf', path: 'scrollcontrols-gltf', image: scrollcontrolsGltf },
      { title: 'Merged-Instance', path: 'merged-instance', image: mergedInstance },
      { title: 'Gpgpu Curl Noise Dof', path: 'gpgpu-curl-noise-dof', image: gpgpuCurlNoiseDof },
      { title: 'Hi Key Bubbles', path: 'hi-key-bubbles', image: hiKeyBubbles },
      { title: 'Floating Instanced Shoes', path: 'floating-instanced-shoes', image: floatingInstancedShoes },
      { title: 'Simple Audio Analyser', path: 'simple-audio-analyser', image: simpleAudioAnalyser },
      { title: 'Camera Scroll', path: 'camera-scroll', image: cameraScroll },
      { title: 'Springy Boxes', path: 'springy-boxes', image: springyBoxes },
      { title: 'Floating Diamonds', path: 'floating-diamonds', image: floatingDiamonds },
      { title: 'Gltf Animations', path: 'gltf-animations', image: gltfAnimations },
      { title: 'Sparks And Effects', path: 'sparks-and-effects', image: sparksAndEffects },
      { title: 'Camera Shake', path: 'camera-shake', image: cameraShake },
      { title: 'Ragdoll Physics', path: 'ragdoll-physics', image: ragdollPhysics },
      { title: 'React Spring Animations', path: 'react-spring-animations', image: reactSpringAnimations },
      { title: 'Mount Transitions', path: 'mount-transitions', image: mountTransitions },
      { title: 'Floating Laptop', path: 'floating-laptop', image: floatingLaptop },
      { title: 'Zustand Site', path: 'zustand-site', image: zustandSite },
      { title: 'Cell Fracture', path: 'cell-fracture', image: cellFracture },
      { title: 'Router Transitions', path: 'router-transitions', image: routerTransitions },
      { title: 'Soft Shadows', path: 'soft-shadows', image: softShadows },
      { title: 'Lulaby City', path: 'lulaby-city', image: lulabyCity },
      { title: 'Viking Ship', path: 'viking-ship', image: vikingShip },
      { title: 'Wobbling Sphere', path: 'wobbling-sphere', image: wobblingSphere },
      { title: 'Moksha', path: 'moksha', image: moksha },
      { title: 'Flexbox Yoga In Webgl', path: 'flexbox-yoga-in-webgl', image: flexboxYogaInWebgl },
      { title: 'Confetti', path: 'confetti', image: confetti },
      { title: 'Learn With Jason', path: 'learn-with-jason', image: learnWithJason },
      { title: 'Volumetric Spotlight', path: 'volumetric-spotlight', image: volumetricSpotlight },
    ],
    'game prototypes': [
      { title: 'Racing Game', path: 'racing-game', image: racingGame },
      { title: 'Pinball In 70 Lines', path: 'pinball-in-70-lines', image: pinballIn70Lines },
      { title: 'Space Game', path: 'space-game', image: spaceGame },
      { title: 'Minecraft', path: 'Arkanoid', image: minecraft },
      { title: 'Arkanoid', path: 'Ping-Pong', image: arkanoid },
      { title: 'Ping-Pong', path: 'ping-pong', image: pingPong },
      { title: 'Arkanoid Under 60 LOC', path: 'arkanoid-under-60-loc', image: arkanoidUnder60Loc },
    ],
    'basic examples': [],
  },
}));

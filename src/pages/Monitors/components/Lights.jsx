export const Lights = () => {
  return (
    <>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight position={[10, 20, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      <pointLight distance={1.5} intensity={1} position={[-0.15, 0.7 - 1, 0]} color='orange' />
    </>
  );
};

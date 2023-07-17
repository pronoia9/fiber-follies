export const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.03} />
      <spotLight angle={0.14} color='#ffd0d0' penumbra={1} position={[25, 50, -20]} shadow-mapSize={[2048, 2048]} shadow-bias={-0.0001} castShadow />
    </>
  );
};

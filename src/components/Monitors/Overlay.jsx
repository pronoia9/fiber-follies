export const Overlay = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <div style={{ position: 'absolute', top: 32, left: 32, fontSize: '13px' }}>ok —</div>
      <a href='https://pmnd.rs/' style={{ position: 'absolute', bottom: 32, left: 80, fontSize: '13px' }}>
        pmnd.rs
        <br />
        dev collective
      </a>
      <div style={{ position: 'absolute', bottom: 32, right: 32, fontSize: '13px' }}>16/12/2022</div>
    </div>
  );
};

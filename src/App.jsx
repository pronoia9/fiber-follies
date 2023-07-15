import { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider, styled } from 'styled-components';

import { Home } from './pages';
import { dataStore } from './store/dataStore';
import { GlobalStyles } from './styles/GlobalStyles.js';
import { getTheme, systemThemeChangeHandler } from './utils/utils.js';

export default function App() {
  const { theme, setTheme } = dataStore((state) => ({ theme: state.theme, setTheme: state.setTheme }));
  const cursorRefs = useRef([]);

  // Event listener for system theme change
  useEffect(() => {
    const systemThemeWatcher = window.matchMedia('(prefers-color-scheme: dark)');
    systemThemeWatcher.addEventListener('change', (e) => systemThemeChangeHandler(e, setTheme));
    return () => { systemThemeWatcher.removeEventListener('change', systemThemeChangeHandler); };
  }, []);

  // Event listener for animated cursor
  useEffect(() => {
    const handleMouseMove = (e) => { cursorRefs?.current?.forEach((c) => (c.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`)); };
    document.addEventListener('mousemove', handleMouseMove);
    return () => { document.removeEventListener('mousemove', handleMouseMove); };
  }, []);

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <GlobalStyles />
      <Home />
      <Outlet />
      {/* <Cursor> */}
        <div ref={(ref) => (cursorRefs.current[0] = ref)} className='cursor' />
        <div ref={(ref) => (cursorRefs.current[1] = ref)} className='cursor cursor2' />
      {/* </Cursor> */}
    </ThemeProvider>
  );
}

const Cursor = styled.div``;
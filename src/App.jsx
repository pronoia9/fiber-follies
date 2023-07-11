import { useEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import { Routes } from './components';
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
    const handleMouseMove = (e) => { cursorRefs?.current?.forEach((c) => c.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`); };
    document.addEventListener('mousemove', handleMouseMove);
    return () => { document.removeEventListener('mousemove', handleMouseMove); };
  }, []);

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <GlobalStyles />
      <Routes />

      <div ref={(ref) => (cursorRefs.current[0] = ref)} className='cursor' />
      <div ref={(ref) => (cursorRefs.current[1] = ref)} className='cursor cursor2' />
    </ThemeProvider>
  );
}

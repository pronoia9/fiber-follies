import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Carousel, Layout, Logo, Socials } from './components';
import { dataStore } from './store/dataStore';
import { GlobalStyles } from './styles/GlobalStyles.js';
import { getTheme, systemThemeChangeHandler } from './utils/utils.js';

export default function App() {
  const location = useLocation();
  const { theme, setTheme, setLogoPosition } = dataStore((state) => ({
    theme: state.theme,
    setTheme: state.setTheme,
    setLogoPosition: state.setLogoPosition,
  }));
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

  useEffect(() => { location.pathname === '/' && setLogoPosition('top right'); }, [location]);

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <GlobalStyles />
      <Logo />
      {location.pathname === '/' && (
        <>
          <Carousel />
          <Layout />
          <Socials />
        </>
      )}
      <Outlet />
      <div ref={(ref) => (cursorRefs.current[0] = ref)} className='cursor' />
      <div ref={(ref) => (cursorRefs.current[1] = ref)} className='cursor cursor2' />
    </ThemeProvider>
  );
}

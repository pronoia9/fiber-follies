import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { Routes } from './components';
import { dataStore } from './store/dataStore';
import { GlobalStyles } from './styles/GlobalStyles.js';
import { getTheme, systemThemeChangeHandler } from './utils/utils.js';

export default function App() {
  const { theme, setTheme } = dataStore((state) => ({ theme: state.theme, setTheme: state.setTheme }));

  useEffect(() => {
    const systemThemeWatcher = window.matchMedia('(prefers-color-scheme: dark)');
    systemThemeWatcher.addEventListener('change', (e) => systemThemeChangeHandler(e, setTheme));
    return () => { systemThemeWatcher.removeEventListener('change', systemThemeChangeHandler); };
  }, []);

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

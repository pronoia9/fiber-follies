import { create } from 'zustand';

import { getSystemTheme } from '../utils/utils';

export const dataStore = create((set) => ({
  theme: getSystemTheme(),
  setTheme: (theme) => { set({ theme }); },
  toggleTheme: () => { set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })); },

  logoPosition: 'top right',
  setLogoPosition: (logoPosition) => { set({ logoPosition }); },

  tab: 'showcase',
  setTab: (tab) => { set({ tab }); },
  selected: 0,
  setSelected: (selected) => { set({ selected }); },
}));

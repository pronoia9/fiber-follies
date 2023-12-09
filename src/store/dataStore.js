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
  // active: 0,
  // setActive: (active) => { set({ active }); },
  // progress: 0,
  // setProgress: (progress) => { set({ progress }); },
  
  // progress: { showcase: 0, 'game prototypes': 0, 'basic examples': 0 },
  // active: { showcase: 0, 'game prototypes': 0, 'basic examples': 0 },
  // setProgress: (progress) => {
  //   set((state) => {
  //     let prev = state.progresses;
  //     prev[state.tab] = progress;
  //     return prev;
  //   });
  // },
  // setActive: (active) => {
  //   set((state) => ({ active: { ...state.active, [state.tab]: active } }));
  // },
}));

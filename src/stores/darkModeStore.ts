import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface DarkModeState {
  isDark: boolean;
  toggle: () => void;
}

// Function to detect user's system preference
const getSystemPreference = (): boolean => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  return false;
};

// Function to apply dark mode to document element
const applyDarkMode = (isDark: boolean) => {
  if (typeof document !== 'undefined') {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
};

export const useDarkModeStore = create<DarkModeState>()(
  persist(
    (set, get) => ({
      isDark: getSystemPreference(), // Initialize with system preference
      toggle: () => {
        const newIsDark = !get().isDark;
        set({ isDark: newIsDark });
        applyDarkMode(newIsDark);
      },
    }),
    {
      name: 'dark-mode-storage',
      onRehydrateStorage: () => state => {
        // Apply the rehydrated state (or initial state) to DOM
        if (state) {
          applyDarkMode(state.isDark);
        }
      },
    }
  )
);

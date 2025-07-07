import { useDarkModeStore } from '../stores/darkModeStore';

/**
 * Custom hook for dark mode functionality
 * Provides easy access to dark mode state and controls
 */
export const useDarkMode = () => {
  const { isDark, toggle } = useDarkModeStore();

  return {
    isDark,
    toggle,
    isLight: !isDark,
  };
};

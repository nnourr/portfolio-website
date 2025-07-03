import { create } from 'zustand';

interface ScrollState {
  isScrolling: boolean;
  showTopBar: boolean;
  setIsScrolling: (isScrolling: boolean) => void;
  setShowTopBar: (showTopBar: boolean) => void;
}

export const useScrollStore = create<ScrollState>(set => {
  let inactivityTimeout: NodeJS.Timeout | null = null;

  const setIsScrolling = (isScrolling: boolean) => {
    // Clear any existing timeout
    if (inactivityTimeout) {
      clearTimeout(inactivityTimeout);
      inactivityTimeout = null;
    }

    // Set the state
    set({ isScrolling });

    // If setting to false (showing the bar), start auto-hide timer
    if (!isScrolling) {
      inactivityTimeout = setTimeout(() => {
        set({ isScrolling: true });
      }, 2000);
    }
  };

  return {
    isScrolling: false,
    showTopBar: false,
    setIsScrolling,
    setShowTopBar: showTopBar => set({ showTopBar }),
  };
});

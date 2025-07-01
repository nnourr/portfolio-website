import { create } from 'zustand';

interface ScrollState {
  isScrolling: boolean;
  showTopBar: boolean;
  setIsScrolling: (isScrolling: boolean) => void;
  setShowTopBar: (showTopBar: boolean) => void;
}

export const useScrollStore = create<ScrollState>(set => ({
  isScrolling: false,
  showTopBar: false,
  setIsScrolling: isScrolling => set({ isScrolling }),
  setShowTopBar: showTopBar => set({ showTopBar }),
}));

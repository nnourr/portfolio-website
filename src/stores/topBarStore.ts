import { create } from 'zustand';

interface TopBarState {
  showTopBar: boolean;
  setShowTopBar: (showTopBar: boolean) => void;
}

export const useTopBarStore = create<TopBarState>(set => {
  return {
    showTopBar: false,
    setShowTopBar: showTopBar => set({ showTopBar }),
  };
});

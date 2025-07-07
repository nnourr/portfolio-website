import { create } from 'zustand';

interface BarHideState {
  hide: boolean;
  setOpen: () => void;
  keepOpen: () => void;
  close: () => void;
}

export const useBarHideStore = create<BarHideState>(set => {
  let inactivityTimeout = setTimeout(() => {
    set({ hide: true });
  }, 5000);
  const setOpen = () => {
    // Clear any existing timeout
    if (inactivityTimeout) {
      clearTimeout(inactivityTimeout);
    }

    // Set the state
    set({ hide: false });

    // If setting to false (showing the bar), start auto-hide timer
    inactivityTimeout = setTimeout(() => {
      set({ hide: true });
    }, 2000);
  };

  const keepOpen = () => {
    if (inactivityTimeout) {
      clearTimeout(inactivityTimeout);
    }

    set({ hide: false });
  };

  const close = () => {
    if (inactivityTimeout) {
      clearTimeout(inactivityTimeout);
    }
    set({ hide: true });
  };

  return {
    hide: false,
    setOpen,
    keepOpen,
    close,
  };
});

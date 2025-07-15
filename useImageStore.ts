// stores/useImageStore.ts
import { create } from "zustand";

interface ImageStore {
  loadedImages: Record<string, boolean>; // keeps track of which image URLs are "loaded"
  markAsLoaded: (url: string) => void;
  isLoaded: (url: string) => boolean;
}

const useImageStore = create<ImageStore>((set, get) => ({
  loadedImages: {},
  markAsLoaded: (url) =>
    set((state) => ({
      loadedImages: { ...state.loadedImages, [url]: true },
    })),
  isLoaded: (url) => !!get().loadedImages[url],
}));

export default useImageStore;

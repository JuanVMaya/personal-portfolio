import { create } from "zustand";

const useMarkerStore = create((set) => ({
  colombiaMarkerActive: false,
  canadaMarkerActive: false,
  activateColombia: () =>
    set({
      canadaMarkerActive: false,
      colombiaMarkerActive: true,
    }),
  activateCanada: () =>
    set({
      canadaMarkerActive: true,
      colombiaMarkerActive: false,
    }),
}));

export default useMarkerStore;

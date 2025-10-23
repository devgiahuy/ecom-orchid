import { create } from "zustand";
import type { Orchid } from "../../../model/orchid";
import { persist } from "zustand/middleware";

type SelectedItemStore = {
  selectedItem: Orchid | null;
  setselectedItem: (item: Orchid) => void;
  clearselectedItemm: () => void;
};

export const useSelectedItemStore = create(
  persist<SelectedItemStore>(
    (set) => ({
      selectedItem: null,
      setselectedItem: (item) => set({ selectedItem: item }),
      clearselectedItemm: () => set({ selectedItem: null }),
    }),
    {
      name: "selectd-item-storage",
    }
  )
);

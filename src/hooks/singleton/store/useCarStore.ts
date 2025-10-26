import { create } from "zustand"
import type { Orchid } from "../../../model/orchid"
import type { OrchidStore } from "../../../model/orchidStore"

export const useOrchidStore = create<OrchidStore>((set) => ({
    orchids: [],
    select: null,

    setOrchid: (orchids: Orchid[]) => set({ orchids }),
    setSelect: (select: Orchid | null) => set({ select }),
    clearSelected: () => set({ select: null })
}))

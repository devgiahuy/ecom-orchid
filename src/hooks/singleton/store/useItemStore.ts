import { create } from "zustand"
import type { Orchid } from "../../../model/orchid"
import { persist } from "zustand/middleware"

// interface OrchidStore {
//     orchids: Orchid[]
//     select: Orchid | null
//     setOrchid: (orchid: Orchid[]) => void
//     setSelect: (select: Orchid | null) => void
//     clearSelected: () => void
// }

// export const useOrchidStore = create<OrchidStore>((set) => ({
//     orchids: [],
//     select: null,

//     setOrchid: (orchids: Orchid[]) => set({ orchids }),
//     setSelect: (select: Orchid | null) => set({ select }),
//     clearSelected: () => set({ select: null })
// }))

type SelectedItemStore = {
    selectedItem?: Orchid | null
    // eslint-disable-next-line no-unused-vars
    setSelectedItem: (item: Orchid) => void
    clearselectedItemm?: () => void
}

export const useItemStore = create(
    persist<SelectedItemStore>(
        (set) => ({
            selectedItem: null,
            setSelectedItem: (item) => set({ selectedItem: item }),
            clearselectedItemm: () => set({ selectedItem: null })
        }),
        {
            name: "selectd-item-storage"
        }
    )
)

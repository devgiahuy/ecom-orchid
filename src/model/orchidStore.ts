import type { Orchid } from "./orchid"

export type OrchidStore = {
    orchids: Orchid[]
    select: Orchid | null
    setOrchid: (orchid: Orchid[]) => void
    setSelect: (select: Orchid | null) => void
    clearSelected: () => void
}

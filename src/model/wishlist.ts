import type { Orchid } from "./orchid"

export interface WishlistItem {
    id: string
    userId: string
    orchidId: string
    createdAt: string
    /** Mở rộng khi dùng ?_expand=orchid */
    orchid?: Orchid
}

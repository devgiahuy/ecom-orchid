import type { Orchid } from "./orchid"

export interface CartItem {
    id?: string
    cartId: string
    orchidId: string
    quantity: number
    createdAt: string
    /** Mở rộng khi dùng ?_expand=orchid */
    orchid?: Orchid
}

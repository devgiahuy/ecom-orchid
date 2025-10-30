import type { Orchid } from "./orchid"

export interface OrderItem {
    id: string
    orderId: string
    orchidId: string
    quantity: number
    price: number
    createdAt: string
    /** Mở rộng khi dùng ?_expand=orchid */
    orchid?: Orchid
}

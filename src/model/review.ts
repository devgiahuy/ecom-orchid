import type { Orchid } from "./orchid"
import type { UserData } from "./user"

export interface Review {
    id: string
    userId: string
    orchidId: string
    rating: number
    comment: string
    createdAt: string

    /** Mở rộng khi dùng ?_expand=user hoặc ?_expand=orchid */
    user?: UserData
    orchid?: Orchid
}

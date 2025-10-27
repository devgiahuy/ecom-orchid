/* eslint-disable no-unused-vars */
import type { Orchid } from "./orchid"

export type CartItem = {
    id: string
    orchid: Orchid
    quantity: number
    total: number
}

export type CartState = {
    items: CartItem[]
}

export type CartActions = {
    add: (orchid: Orchid, qty?: number) => void
    setQuantity: (id: string, qty: number) => void
    increase: (id: string, step?: number) => void
    decrease: (id: string, step?: number) => void
    remove: (id: string) => void
    clear: () => void
}

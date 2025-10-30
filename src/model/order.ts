export type OrderStatus = "pending" | "completed" | "cancelled"

export interface Order {
    id: string
    userId: string
    createdAt: string
    totalPrice: number
    status: OrderStatus
    paymentMethod: "Momo" | "Cash" | "Card"
}

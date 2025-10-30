import { http } from "@/api/http"
import type { CartItem } from "@/model/cartItem"

export const cartApi = {
    getCartItem: (cartId: string) =>
        http.get<CartItem[]>(`/cartItems?cartId=${cartId}&_expand=orchid`),
    addToCart: (payload: CartItem) => http.post<CartItem>("/cartItems", payload),
    updateQuantity: (id: string, quantity: number) =>
        http.put<CartItem>(`/cartItems/${id}`, { quantity }),
    delete: (id: string) => http.delete<void>(`/cartItems/${id}`),
    clear: (cartId: string) => http.delete<void>(`/cartItems?cartId=${cartId}`)
}

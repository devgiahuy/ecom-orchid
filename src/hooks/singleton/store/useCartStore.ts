import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import type { CartState, CartActions } from "@/model/cart"
import type { Orchid } from "@/model/orchid"

type Store = CartState & CartActions
const STORAGE_KEY = "orchid_cart"

const calcLineTotal = (orchid: Orchid, quantity: number): number => orchid.price * quantity

export const useCartStore = create<Store>()(
    persist(
        (set, get) => ({
            items: [],

            add: (orchid, quantity = 1) => {
                set((state) => {
                    const existingIndex = state.items.findIndex((x) => x.id === orchid.id)

                    if (existingIndex >= 0) {
                        const items = [...state.items]
                        const nextQty = items[existingIndex].quantity + quantity
                        items[existingIndex] = {
                            ...items[existingIndex],
                            quantity: nextQty,
                            total: calcLineTotal(items[existingIndex].orchid, nextQty)
                        }
                        return { items }
                    }

                    return {
                        items: [
                            ...state.items,
                            {
                                id: orchid.id,
                                orchid,
                                quantity,
                                total: calcLineTotal(orchid, quantity)
                            }
                        ]
                    }
                })
            },

            setQuantity: (id, quantity) => {
                const validQty = Math.max(1, quantity)
                set((state) => ({
                    items: state.items.map((item) =>
                        item.id === id
                            ? {
                                  ...item,
                                  quantity: validQty,
                                  total: calcLineTotal(item.orchid, validQty)
                              }
                            : item
                    )
                }))
            },

            increase: (id, step = 1) => {
                const item = get().items.find((x) => x.id === id)
                if (item) get().setQuantity(id, item.quantity + step)
            },

            decrease: (id, step = 1) => {
                const item = get().items.find((x) => x.id === id)
                if (item) get().setQuantity(id, Math.max(1, item.quantity - step))
            },

            remove: (id) =>
                set((state) => ({
                    items: state.items.filter((x) => x.id !== id)
                })),

            clear: () => set({ items: [] })
        }),
        {
            name: STORAGE_KEY,
            storage: createJSONStorage(() => localStorage)
        }
    )
)

export const useCartItemCount = () =>
    useCartStore((state) => state.items.reduce((sum, i) => sum + i.quantity, 0))

export const useCartTotal = () =>
    useCartStore((state) => state.items.reduce((sum, i) => sum + i.total, 0))

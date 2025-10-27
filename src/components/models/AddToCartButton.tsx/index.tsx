import { ButtonStyled } from "@/components/styled"
import { useCartStore } from "@/hooks/singleton/store/useCartStore"
import type { Orchid } from "@/model/orchid"

export function AddToCartButton({ orchid }: { orchid: Orchid }) {
    const add = useCartStore((s) => s.add)

    return (
        <ButtonStyled
            onClick={() => add(orchid)}
            className="px-4 py-2 rounded-2xl bg-primary text-white hover:opacity-90 transition"
        >
            Thêm vào giỏ
        </ButtonStyled>
    )
}

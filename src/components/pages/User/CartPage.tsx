import { ButtonStyled } from "@/components/styled"
import { useCartStore, useCartTotal } from "@/hooks/singleton/store/useCartStore"
import { formatVND } from "@/utils/helper/currency"
import { Link } from "react-router-dom"
import { ShoppingBasket, ShoppingCart, Trash2 } from "lucide-react"

export default function CartPage() {
    const { items, increase, decrease, setQuantity, remove, clear } = useCartStore()
    const total = useCartTotal()

    if (items.length === 0)
        return (
            <div className="max-w-5xl mx-auto px-6 py-20 text-center">
                <div className="inline-flex flex-col items-center gap-4">
                    <ShoppingCart className="w-16 h-16 text-gray-400" />
                    <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                        Giỏ hàng của bạn đang trống
                    </h1>
                    <p className="text-gray-500">Thêm một vài sản phẩm để làm đầy giỏ hàng nhé!</p>
                    <Link
                        to="/home"
                        className="mt-3 px-6 py-2.5 rounded-2xl bg-primary text-white font-medium hover:opacity-90 transition-all"
                    >
                        Tiếp tục mua sắm
                    </Link>
                </div>
            </div>
        )

    return (
        <div className="max-w-6xl mx-auto px-6 py-10 space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <span className="flex gap-2">
                    <ShoppingBasket size={35} />
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        Giỏ hàng
                    </h1>
                </span>

                <ButtonStyled
                    onPress={clear}
                    className="text-rose-600 border border-rose-300 hover:text-white hover:bg-rose-600 transition-all rounded-2xl"
                >
                    <Trash2 size={16} className="mr-1" /> Xoá tất cả
                </ButtonStyled>
            </div>

            {/* Cart Table */}
            <div
                className="rounded-3xl border border-green-200 dark:border-gray-800 
                bg-gray-200 dark:bg-gray-900 shadow-md overflow-hidden relative"
            >
                {/* Background texture nhẹ */}
                <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/green-dust-and-scratches.png')] pointer-events-none"></div>

                <table className="w-full text-sm md:text-base relative z-10">
                    <thead className="bg-gray-400 dark:bg-gray-800/70 text-gray-700 dark:text-gray-200">
                        <tr>
                            <th className="p-4 text-left">Sản phẩm</th>
                            <th className="p-4 text-center">Giá</th>
                            <th className="p-4 text-center">Số lượng</th>
                            <th className="p-4 text-center">Thành tiền</th>
                            <th className="p-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((it) => (
                            <tr
                                key={it.id}
                                className="border-t border-gray-100 dark:border-gray-800 hover:bg-green-50/40 dark:hover:bg-gray-800/50 transition-colors"
                            >
                                <td className="p-4 flex items-center gap-3">
                                    <img
                                        src={it.orchid.imageUrl}
                                        alt={it.orchid.name}
                                        className="w-16 h-16 object-cover rounded-2xl border border-green-100 dark:border-gray-700 shadow-sm"
                                    />
                                    <div>
                                        <div className="font-medium text-gray-900 dark:text-gray-100">
                                            {it.orchid.name}
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            {it.orchid.color}
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4 text-center text-gray-700 dark:text-gray-200">
                                    {formatVND(it.orchid.price)}
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center justify-center gap-2">
                                        <button
                                            onClick={() => decrease(it.id)}
                                            className="px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                                        >
                                            −
                                        </button>
                                        <input
                                            className="w-12 text-center border border-gray-300 dark:border-gray-600 rounded-lg p-1 bg-transparent"
                                            value={it.quantity}
                                            onChange={(e) => {
                                                const n =
                                                    Number(e.target.value.replace(/\D/g, "")) || 1
                                                setQuantity(it.id, n)
                                            }}
                                        />
                                        <button
                                            onClick={() => increase(it.id)}
                                            className="px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td className="p-4 text-center font-semibold text-gray-800 dark:text-gray-100">
                                    {formatVND(it.total)}
                                </td>
                                <td className="p-4 text-center">
                                    <ButtonStyled
                                        onPress={() => remove(it.id)}
                                        className="text-rose-600 border border-rose-300 hover:text-white hover:bg-rose-600 transition-all rounded-2xl"
                                    >
                                        <Trash2 size={16} className="mr-1" /> Xoá
                                    </ButtonStyled>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Footer */}
            <div
                className="flex flex-col sm:flex-row items-center justify-end gap-6 p-6 
                rounded-3xl bg-gray-200 dark:bg-gray-900/70 backdrop-blur-md border border-green-100 dark:border-gray-800 shadow-inner"
            >
                <div className="text-lg text-gray-700 dark:text-gray-200">
                    Tổng cộng:{" "}
                    <span className="font-bold text-primary text-2xl">{formatVND(total)}</span>
                </div>
                <Link
                    to="/checkout"
                    className="px-8 py-3 rounded-2xl bg-primary text-white font-semibold hover:opacity-90 transition-all shadow-md hover:text-black"
                >
                    Thanh toán
                </Link>
            </div>
        </div>
    )
}

import type { Orchid } from "../../model/orchid"
import { useGetAllOrchids } from "../../hooks/queries/useOrchid"
import { useEffect } from "react"
import { CardOrchid } from "../models/OrchidCard"

export default function DemoPage() {
    const { data: orchids, error, loading, refetch } = useGetAllOrchids()

    useEffect(() => {
        refetch() // tự fetch khi mount
    }, [refetch])

    if (loading) return <p>Đang tải...</p>
    if (error) return <p>Lỗi: {error}</p>
    return (
        <section className="py-16 bg-[#f8fff9]">
            <div className="max-w-6xl mx-auto px-6">
                {/*title */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-[#32CD32] tracking-tight mt-6 mb-2 drop-shadow-sm">
                        Ecom Orchid <span className="text-[#32CD32]/80">— HYCAT 🌿</span>
                    </h1>
                </div>

                {/* list */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
                    {orchids?.map((orchid: Orchid) => (
                        <CardOrchid key={orchid.id} orchid={orchid} />
                    ))}
                </div>
            </div>
        </section>
    )
}

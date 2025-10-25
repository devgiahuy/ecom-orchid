import { useEffect } from "react"
import type { Orchid } from "../../../model/orchid"
import { CardOrchid } from "../../models/OrchidCard"
import { useGetAllOrchids } from "../../../hooks/queries/useOrchid"
import { Link } from "react-router-dom"

export default function NaturalCardList() {
    const { data: orchids, error, loading, refetch } = useGetAllOrchids()
    useEffect(() => {
        refetch()
    }, [refetch])

    if (loading) return <p>Đang tải...</p>
    if (error) return <p>Lỗi: {error}</p>
    return (
        <section className="py-10 bg-[#f8fff9]">
            <div className="max-w-[180rem] px-0">
                {/*title */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-[#32CD32] tracking-tight mt-6 mb-2 drop-shadow-sm">
                        Ecom Orchid <span className="text-[#32CD32]/80">— HYCAT </span>
                    </h1>
                </div>

                {/* list */}
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4 items-center">
                    {orchids?.map((orchid: Orchid) => (
                        <Link to={`/natural/${orchid.id}`}>
                            <CardOrchid key={orchid.id} orchid={orchid} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

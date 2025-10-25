import { useEffect } from "react"
import type { Orchid } from "../../../model/orchid"
import { useGetAllOrchids } from "../../../hooks/queries/useOrchid"
import { CardOrchid } from "../../models/OrchidCard"
import { Spinner } from "@heroui/react"
export default function OrchidsCardList() {
    // const orchids = ListOfOrchids
    const { data: orchids, error, loading, refetch } = useGetAllOrchids()

    useEffect(() => {
        refetch()
    }, [])

    if (loading)
        return (
            <div className="flex justify-center items-center">
                <Spinner />
            </div>
        )
    if (error) return <p>Lỗi: {error}</p>

    return (
        <section className="py-10">
            <div className="max-w-720 ">
                {/*title */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-[#32CD32] tracking-tight mt-6 mb-2 drop-shadow-sm">
                        Ecom Orchid <span className="text-[#32CD32]/80">— HYCAT</span>
                    </h1>
                </div>

                {/* list */}
                <div className="grid gap-6  sm:grid-cols-2 lg:grid-cols-4 items-center">
                    {orchids?.map((orchid: Orchid) => (
                        <CardOrchid key={orchid.id} orchid={orchid} />
                    ))}
                </div>
            </div>
        </section>
    )
}

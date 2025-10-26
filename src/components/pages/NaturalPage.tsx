import { useGetAllOrchids } from "@/hooks/queries/useOrchid"
import { motion } from "framer-motion"
import { CardOrchid } from "../models/OrchidCard"
import type { Orchid } from "@/model/orchid"
import { Spinner } from "@heroui/react"
export default function NaturalPage() {
    const { data: orchids, isLoading } = useGetAllOrchids()

    if (isLoading)
        return (
            <div className="flex justify-center items-center">
                <Spinner />
            </div>
        )
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
        >
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
        </motion.div>
    )
}

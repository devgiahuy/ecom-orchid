import { CardOrchid } from "@/components/models"
import { useGetAllOrchids } from "@/hooks/queries/useOrchid"
import type { Orchid } from "@/model/orchid"
import { Spinner } from "@heroui/react"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
export function HomePage() {
    const { data: orchids, isLoading } = useGetAllOrchids()

    const fullText = "Ecommerce Orchid — HYCAT"
    const [displayText, setDisplayText] = useState("")
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + fullText[index])
                setIndex((prev) => prev + 1)
            }, 80)
            return () => clearTimeout(timeout)
        }
    }, [index])

    if (isLoading)
        return (
            <div className="flex justify-center items-center">
                <Spinner />
            </div>
        )
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 }}
            >
                <section className="py-2">
                    <div className="max-w-720 ">
                        {/*title */}
                        <div className="text-center mt-10 mb-12">
                            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#32CD32] tracking-tight mb-2 drop-shadow-sm">
                                {displayText}
                                <span className="border-r-4 border-[#32CD32] ml-1 animate-cursor" />
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
        </>
    )
}

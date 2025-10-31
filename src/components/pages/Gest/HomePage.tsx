import { CardOrchid } from "@/components/models"
import { InputStyled } from "@/components/styled"
import { useSearchOrchids } from "@/hooks/queries/useOrchid"
import { useDebounce } from "@/hooks/singleton/useDebounce"
import type { Orchid } from "@/model/orchid"

import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { useEffect, useMemo, useState } from "react"

export function HomePage() {
    // ======Search=========================================
    const { data: orchids = [] } = useSearchOrchids("")
    const [search, setSearch] = useState("")
    const debouncedKeyword = useDebounce(search, 400)
    const filteredOrchids = useMemo(() => {
        const keyword = debouncedKeyword.toLowerCase().trim()
        if (!keyword) return orchids
        return orchids.filter(
            (o) =>
                o.name.toLowerCase().includes(keyword) ||
                o.color.toLowerCase().includes(keyword) ||
                o.origin.toLowerCase().includes(keyword)
        )
    }, [debouncedKeyword, orchids])

    // ====Title=============================================
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

    // =====================================================

    // if (isFetching)
    //     return (
    //         <div className="flex justify-center items-center">
    //             <Spinner />
    //         </div>
    //     )
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

                        {/* create search */}
                        <div className="mb-6 relative max-w-3xl mx-auto">
                            <InputStyled
                                label="Search"
                                variant="bordered"
                                type="text"
                                placeholder="Tìm kiếm hoa lan..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                startContent={<Search size={18} className="text-gray-400 " />}
                                radius="lg"
                                color="success"
                                className="bg-white rounded-2xl p-2"
                            />
                        </div>

                        {/* list */}
                        <div className="grid gap-6  sm:grid-cols-2 lg:grid-cols-4 items-center">
                            {filteredOrchids?.map((orchid: Orchid) => (
                                <CardOrchid key={orchid.id} orchid={orchid} />
                            ))}
                        </div>
                    </div>
                </section>
            </motion.div>
        </>
    )
}

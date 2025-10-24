import { Card, CardBody, Image } from "@heroui/react"
import { Link } from "react-router-dom"
import { Star, ArrowRight } from "lucide-react"
import type { Orchid } from "../../../model/orchid"
import { useSelectedItemStore } from "../../../hooks/singleton/store/selectItemStore"
import { ButtonStyled } from "../ButtonStyled"

export default function OrchidCard({ orchid }: { orchid: Orchid }) {
    const setSelectedItem = useSelectedItemStore((s) => s.setselectedItem)

    return (
        <Card
            isPressable
            as={Link}
            to={`detail/${orchid.id}`}
            onPress={() => setSelectedItem(orchid)}
            shadow="none"
            radius="lg"
            className="
                group relative w-full max-w-xs overflow-hidden
                bg-white border border-[#32CD32]/15
                hover:border-[#32CD32]/40
                hover:shadow-[0_10px_25px_rgba(50,205,50,0.12)]
                hover:-translate-y-1
                transition-all duration-300 ease-out
                rounded-2xl
            "
        >
            {/* Viền ánh sáng khi hover */}
            <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                           bg-gradient-to-tr from-[#32CD32]/25 to-transparent blur-[3px]
                           transition-opacity duration-500 pointer-events-none"
            />

            {/* 🌸 Ảnh hoa lan */}
            <div className="overflow-hidden rounded-t-2xl">
                <img
                    src={orchid.image}
                    alt={orchid.name}
                    className="
                        w-full h-52 object-cover 
                        transform group-hover:scale-110 transition-transform duration-700 ease-out
                    "
                />
            </div>

            {/* 🪴 Nội dung chi tiết */}
            <CardBody className="px-5 py-6 text-center relative z-10">
                {/* Tên hoa lan */}
                <h4 className="font-semibold text-lg text-[#32CD32] mb-2 tracking-wide">
                    {orchid.name}
                </h4>

                {/* ⭐ Đánh giá */}
                <div className="flex items-center justify-center gap-1 mb-3">
                    <Star size={16} className="text-yellow-400" />
                    <span className="text-sm text-gray-700">{orchid.rating} / 5</span>
                </div>

                {/* 🌱 Thông tin lan */}
                <div className="text-sm text-gray-600 leading-relaxed mb-5 space-y-0.5">
                    <p>
                        Origin: <span className="font-medium">{orchid.origin}</span>
                    </p>
                    <p>
                        Color: <span className="font-medium">{orchid.color}</span>
                    </p>
                    <p>
                        Category: <span className="font-medium">{orchid.category ?? "N/A"}</span>
                    </p>
                    <p>
                        Natural:{" "}
                        <span className="font-medium">{orchid.isNatural ? "Yes" : "No"}</span>
                    </p>
                </div>

                {/* 🔘 Nút xem chi tiết */}
                <ButtonStyled
                    radius="full"
                    className="
                        bg-[#32CD32] hover:bg-[#28b428]
                        text-white font-semibold 
                        flex items-center justify-center gap-2
                        transition-all duration-300 ease-in-out
                        group-hover:shadow-[0_0_15px_rgba(50,205,50,0.3)]
                    "
                    startContent={<ArrowRight size={16} />}
                >
                    View Detail
                </ButtonStyled>
            </CardBody>
        </Card>
    )
}

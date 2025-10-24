import { CardBody, CardFooter } from "@heroui/react"
import { CardStyled } from "../../styled"
import { Star, MapPin, Palette, Tag, Sprout } from "lucide-react"
import type { Orchid } from "../../../model/orchid"

export function CardOrchid({ orchid }: { orchid: Orchid }) {
    return (
        <CardStyled
            shadow="sm"
            className="group relative overflow-hidden rounded-3xl
                bg-white/95 backdrop-blur-sm border border-gray-100
                hover:shadow-lg hover:-translate-y-1
                transition-all duration-300 ease-out w-[20rem]"
        >
            {/* 🌺 Image */}
            <CardBody className="p-0 relative overflow-hidden">
                <div className="relative w-full h-[240px] overflow-hidden">
                    <img
                        alt={orchid.name}
                        src={orchid.image}
                        className="absolute inset-0 w-full h-full object-cover object-center
                                    transition-transform duration-500 group-hover:scale-105 rounded-xl"
                    />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70"></div>

                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1.5 rounded-full flex items-center gap-1 text-primary text-sm shadow-sm">
                    <Star size={14} className="fill-yellow-500   text-yellow-500" />
                    <span className="font-semibold">{orchid.rating}</span>
                </div>
            </CardBody>

            <CardFooter className="flex flex-col items-start text-sm gap-3 px-5 py-4">
                <h3 className="font-bold text-lg text-gray-800 line-clamp-1">{orchid.name}</h3>

                <div className="flex justify-between items-center w-full text-base">
                    <span className="text-primary font-semibold text-lg">
                        {orchid.price?.toLocaleString("vi-VN") ?? "—"} ₫
                    </span>

                    <div className="flex items-center text-gray-500 gap-1">
                        <MapPin size={16} />
                        <span className="truncate max-w-[120px]">{orchid.origin}</span>
                    </div>
                </div>

                <hr className="border-gray-200 w-full" />

                <div className="grid grid-cols-2 gap-2 text-gray-600 text-sm w-full mt-1">
                    <div className="flex items-center gap-2">
                        <Palette size={16} className="text-primary" />
                        <span>{orchid.color}</span>
                    </div>

                    <div className="flex items-center gap-2 justify-end">
                        <Tag size={16} className="text-primary" />
                        <span>{orchid.category ?? "N/A"}</span>
                    </div>

                    <div className="flex items-center gap-2 col-span-2">
                        <Sprout size={16} className="text-primary" />
                        <span>
                            Natural:{" "}
                            <span
                                className={`font-medium ${
                                    orchid.isNatural ? "text-green-600" : "text-gray-400"
                                }`}
                            >
                                {orchid.isNatural ? "Yes" : "No"}
                            </span>
                        </span>
                    </div>
                </div>
            </CardFooter>

            <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-primary/40 transition-all duration-500 pointer-events-none"></div>
        </CardStyled>
    )
}

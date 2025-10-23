import { Card, CardBody, Image, Button } from "@heroui/react";
import { Link } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";
import type { Orchid } from "../../../model/orchid";
import { useSelectedItemStore } from "../../../hooks/singleton/store/selectItemStore";

export default function OrchidCard({ orchid }: { orchid: Orchid }) {
  const setSelectedItem = useSelectedItemStore((s) => s.setselectedItem);

  return (
    <Card
      isPressable
      onPress={() => setSelectedItem(orchid)}
      as={Link}
      to={`detail/${orchid.id}`}
      shadow="sm"
      radius="lg"
      className="
        group w-full max-w-xs 
        bg-white dark:bg-gray-800 
        border border-green-100 dark:border-gray-700
        hover:shadow-lg hover:scale-[1.02]
        transition-all duration-300
      "
    >
      {/* 🌸 Ảnh sản phẩm */}
      <Image
        src={orchid.image}
        alt={orchid.name}
        className="
          w-full h-52 object-cover rounded-t-lg
          group-hover:scale-105 transition-transform duration-500
        "
      />

      {/* 🪴 Thông tin chi tiết */}
      <CardBody className="px-4 py-5 text-center">
        <h4 className="font-semibold text-green-700 dark:text-green-400 mb-1">
          {orchid.name}
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
          <span className="block">Origin: {orchid.origin}</span>
          <span className="block">Color: {orchid.color}</span>
          <span className="block">Category: {orchid.category ?? "N/A"}</span>
        </p>

        {/* ⭐ Rating */}
        <div className="flex items-center justify-center gap-1 mb-4">
          <Star size={16} className="text-yellow-500" />
          <span className="text-sm text-gray-700 dark:text-gray-300">
            {orchid.rating} / 5
          </span>
        </div>

        {/* 🔘 Nút chi tiết */}
        <Button
          color="success"
          variant="shadow"
          radius="full"
          className="
            font-semibold 
            flex items-center justify-center gap-2 
            group-hover:bg-green-600 transition-colors
          "
          startContent={<ArrowRight size={16} />}
        >
          View Detail
        </Button>
      </CardBody>
    </Card>
  );
}

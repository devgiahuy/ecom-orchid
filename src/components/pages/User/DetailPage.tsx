import {
    MapPin,
    Palette,
    Flower2,
    Star,
    Heart,
    TreePine,
    ShoppingCart,
    ArrowLeft,
    Flower,
    Video,
    MessageCircle,
    Leaf
} from "lucide-react"
import { useGetOrchidById } from "@/hooks/queries/useOrchid"
import { Card, CardBody, Spinner } from "@heroui/react"
import { Link, useParams } from "react-router-dom"
import { ButtonStyled, DetailItem } from "@/components/styled"
import { useCartStore } from "@/hooks/singleton/store/useCartStore"
import { motion } from "framer-motion"
import { useGetFeedbackByOrchidId } from "@/hooks/queries/useFeedback"
import CardReviewUser from "@/components/styled/GrateStyled"
// import { useAuth } from "@/provider/AuthProvider"

export default function DetailPage() {
    const { id } = useParams()
    // const idOrchid = id?.toString
    // const { selectedItem } = useItemStore()
    const { data: selectedItem } = useGetOrchidById(id!)
    const add = useCartStore((s) => s.add)
    // const { userData } = useAuth()

    const { data: feedbacks } = useGetFeedbackByOrchidId(id!)
    console.log("feedbacks", feedbacks)
    if (!selectedItem) {
        return (
            <div className="flex flex-col justify-center items-center py-20 text-center">
                {/* <h4 className="text-gray-600 dark:text-gray-400 text-lg">
                    Không tìm thấy thông tin hoa lan
                </h4> */}
                <Spinner />
                <Link
                    to="/home"
                    className="
            mt-4 px-5 py-2 rounded-full bg-green-600 text-white
            hover:bg-green-700 transition-colors font-semibold shadow-sm
          "
                >
                    Quay lại trang chủ
                </Link>
            </div>
        )
    }

    const fadeUp = (delay = 0) => ({
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } }
    })

    return (
        <section
            className="
        max-w-7xl mx-auto my-16 px-6 lg:px-10 py-12 
        bg-white dark:bg-gray-900 
        rounded-3xl shadow-lg border border-green-100 dark:border-gray-800
        relative overflow-hidden 
      "
        >
            {/* Header */}
            <div className="relative text-center mb-14">
                <h2 className="text-4xl font-extrabold text-green-600 dark:text-green-400 tracking-tight">
                    {selectedItem.name}
                </h2>
                <motion.p
                    variants={fadeUp(0.08)}
                    className="text-lg text-gray-600 dark:text-gray-400 mt-3 flex justify-center items-center gap-2"
                >
                    <motion.span
                        variants={{
                            initial: { y: 0 },
                            animate: {
                                y: [0, -6, 0],
                                transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                            }
                        }}
                        initial="initial"
                        animate="animate"
                        className="inline-flex"
                    >
                        <Flower size={30} color="pink" />
                    </motion.span>
                    Tất cả những gì bạn cần biết về loài lan này
                    <motion.span
                        variants={{
                            initial: { y: 0 },
                            animate: {
                                y: [0, -6, 0],
                                transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                            }
                        }}
                        initial="initial"
                        animate="animate"
                        className="inline-flex"
                    >
                        <Flower size={30} color="pink" />
                    </motion.span>
                </motion.p>
                <div className="mt-4 flex justify-center items-center gap-1 text-yellow-500">
                    {Array.from({ length: Math.round(selectedItem.rating ?? 1) }).map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Hình ảnh */}
                <Card
                    shadow="sm"
                    radius="lg"
                    className="bg-white dark:bg-gray-800 border border-green-100 dark:border-gray-700"
                >
                    <CardBody className="p-4">
                        <img
                            src={selectedItem.imageUrl}
                            alt={selectedItem.name}
                            // radius="lg"
                            className="w-full h-[420px] object-contain transition-transform duration-500 hover:scale-[1.05] rounded-2xl"
                        />
                    </CardBody>
                </Card>

                {/* Mô tả */}
                <div className="relative space-y-6">
                    <h3 className="text-3xl font-bold text-green-600 dark:text-green-400">
                        {(selectedItem.price ?? 590000).toLocaleString()}{" "}
                        <span className="text-lg text-gray-500 dark:text-gray-400 font-normal">
                            VNĐ / Cây
                        </span>
                    </h3>

                    <div
                        className="
              bg-green-50/50 dark:bg-gray-800/80 
              border border-green-100 dark:border-gray-700
              rounded-2xl p-6 shadow-sm
              text-gray-700 dark:text-gray-300
            "
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                            <DetailItem
                                icon={<MapPin />}
                                label="Nguồn gốc"
                                value={selectedItem.origin}
                            />
                            <DetailItem
                                icon={<Palette />}
                                label="Màu sắc"
                                value={selectedItem.color}
                            />
                            <DetailItem
                                icon={<Flower2 />}
                                label="Loại"
                                value={selectedItem.category ?? "Không rõ"}
                            />
                            <DetailItem
                                icon={<Heart className="text-red-500" />}
                                label="Lượt thích"
                                value={selectedItem.numberOfLike ?? 0}
                            />
                            <DetailItem
                                icon={<TreePine />}
                                label="Đặc biệt"
                                value={selectedItem.isSpecial ? "Có" : "Không"}
                            />
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4">
                        <ButtonStyled
                            color="success"
                            radius="full"
                            className="flex-1 font-semibold text-white text-base bg-green-600 hover:bg-green-700 hover:text-black"
                            startContent={<ShoppingCart size={18} />}
                            onPress={() => add(selectedItem)}
                        >
                            Đặt Mua Ngay
                        </ButtonStyled>
                        <Link
                            to="/home"
                            className="
                flex items-center justify-center gap-2
                border border-gray-500 text-green-600 dark:text-green-400
                rounded-full px-5 py-2 font-semibold hover:bg-white dark:hover:bg-gray-800
                transition-colors hover:text-black
              "
                        >
                            <ArrowLeft size={18} /> Quay lại
                        </Link>
                    </div>
                </div>
            </div>

            {selectedItem.linkVideo && (
                <div className="relative mt-16 pt-10 border-t border-green-100 dark:border-gray-700">
                    <h4 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-5 text-center">
                        <span className="flex justify-center items-center gap-2">
                            <Video />
                            Video mô tả chi tiết
                        </span>
                    </h4>
                    <div className="flex justify-center">
                        <div
                            className="
                rounded-2xl overflow-hidden shadow-md border border-green-100 dark:border-gray-700
                w-[560px] h-[315px] max-w-full
              "
                        >
                            <iframe
                                src={selectedItem.linkVideo}
                                title="Orchid Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full block"
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}

            {/* <div>
                <h1>Đánh giá</h1>
                <ButtonStyled>
                    <Link to={`/detail/feedback/${selectedItem.id}`}>Để lại đánh giá</Link>
                </ButtonStyled>
                {feedbacks &&
                    feedbacks.map((item, key) => (
                        <motion.div
                            key={item.id + "-" + key}
                            whileHover={{
                                scale: 1.04,
                                y: -4,
                                boxShadow: "0 10px 25px rgba(16,185,129,0.15)"
                            }}
                            className="snap-center shrink-0 transform-gpu transition-transform duration-300"
                        >
                            <CardReviewUser
                                // name={item.user.name}
                                // avatar={item.user.avatar}
                                name={"a"}
                                avatar={""}
                                rating={item.rating}
                                content={item.comment}
                                createdAt={item.createdAt}
                            />
                        </motion.div>
                    ))}
            </div> */}
            <section
                className="
                mt-10 p-6 rounded-3xl 
                bg-white/90 dark:bg-gray-900/80
                border border-green-100 dark:border-gray-800 
                shadow-md backdrop-blur-sm
                transition-all duration-300
            "
            >
                <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
                    <div className="flex items-center gap-2">
                        <MessageCircle className="text-green-600 dark:text-green-400" size={22} />
                        <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400">
                            Đánh giá
                        </h2>
                    </div>

                    <ButtonStyled
                        as={Link}
                        href={`/detail/feedback/${selectedItem.id}`}
                        className="
                        bg-primary text-white rounded-xl font-medium px-4 py-2
                        hover:bg-green-700 transition-all
                    "
                    >
                        Để lại đánh giá
                    </ButtonStyled>
                </div>

                {feedbacks?.length ? (
                    <div
                        className="
                        grid gap-6 sm:grid-cols-2 lg:grid-cols-3
                        justify-items-center
                    "
                    >
                        {feedbacks.map((item: any, key: number) => (
                            <motion.div
                                key={item.id + "-" + key}
                                whileHover={{
                                    scale: 1.03,
                                    y: -3
                                    // boxShadow: "0 8px 20px rgba(16,185,129,0.15)"
                                }}
                                transition={{ duration: 0.25 }}
                                className="
                                w-full max-w-sm  transform-gpu transition-transform duration-300
                            "
                            >
                                <CardReviewUser
                                    name={item.user?.name ?? "Người dùng ẩn danh"}
                                    avatar={item.user?.avatar ?? ""}
                                    rating={item.rating}
                                    content={item.comment}
                                    createdAt={item.createdAt}
                                />
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-500 dark:text-gray-400 py-8 flex justify-center items-center gap-2">
                        Hiện chưa có đánh giá nào cho sản phẩm này
                        <span>
                            <Leaf />
                        </span>
                    </div>
                )}
            </section>
        </section>
    )
}

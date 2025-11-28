import { Leaf, Flower2, Heart, Flower } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"

const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay }
    }
})

const container = {
    hidden: { opacity: 0 },
    visible: (stagger = 0.08) => ({
        opacity: 1,
        transition: { staggerChildren: stagger }
    })
}

export function AboutPage() {
    const prefersReducedMotion = useReducedMotion()

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            custom={0.07}
            className="
        max-w-7xl mx-auto my-16 px-6 lg:px-10 py-12
        bg-white dark:bg-gray-900
        border border-green-100 dark:border-gray-800
        rounded-3xl shadow-lg relative overflow-hidden
        transition-colors duration-300
        flex-1 w-full 
      "
        >
            {/* background accent nhẹ */}
            <motion.div
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-green-100/50 dark:bg-green-900/30 blur-3xl"
                {...(!prefersReducedMotion && {
                    animate: {
                        scale: [1, 1.05, 1],
                        opacity: [0.5, 0.6, 0.5],
                        transition: { duration: 6, repeat: Infinity }
                    }
                })}
            />

            {/* Tiêu đề */}
            <div className="relative text-center mb-14">
                <motion.h2
                    variants={fadeUp(0)}
                    className="text-4xl font-extrabold text-green-600 dark:text-green-400"
                >
                    Về Orchid Shop
                </motion.h2>

                <motion.p
                    variants={fadeUp(0.08)}
                    className="text-lg text-gray-600 dark:text-gray-400 mt-3 flex justify-center items-center gap-2"
                >
                    Nơi lan tỏa vẻ đẹp tự nhiên qua từng cánh hoa
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
                        <Flower size={22} color="pink" />
                    </motion.span>
                </motion.p>
            </div>

            {/* Nội dung chính */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Ảnh minh họa */}
                <motion.div variants={fadeUp(0.1)} className="flex justify-center">
                    <motion.img
                        variants={{
                            hidden: { opacity: 0, scale: 0.96 },
                            visible: {
                                opacity: 1,
                                scale: 1,
                                transition: { duration: 0.6, ease: "easeOut" }
                            },
                            hover: { scale: 1.03, transition: { duration: 0.25 } }
                        }}
                        whileHover="hover"
                        src="https://24hstore.vn/upload_images/images/hinh-nen-hoa-linh-lan/hinh-nen-hoa-linh-lan-cute-4.jpg"
                        alt="Orchid garden"
                        className="
              w-full max-w-md h-[380px] object-cover rounded-3xl shadow-md
            "
                    />
                </motion.div>

                {/* Mô tả + giá trị cốt lõi */}
                <motion.div variants={container} custom={0.06} className="space-y-6">
                    <motion.h4
                        variants={fadeUp(0.02)}
                        className="text-2xl font-semibold text-green-600 dark:text-green-400 flex items-center gap-2"
                    >
                        <Flower2 className="text-green-500" /> Sứ mệnh của chúng tôi
                    </motion.h4>

                    <motion.p
                        variants={fadeUp(0.05)}
                        className="text-gray-700 dark:text-gray-300 leading-relaxed"
                    >
                        Orchid Shop ra đời với mong muốn mang đến những bông hoa lan chất lượng,
                        tinh tế và tràn đầy sức sống. Chúng tôi hợp tác cùng các nhà vườn uy tín
                        trong và ngoài nước để mang đến cho bạn trải nghiệm mua sắm tuyệt vời nhất —
                        nơi cái đẹp và thiên nhiên hòa quyện trong từng cánh hoa.
                    </motion.p>

                    <motion.ul
                        variants={container}
                        custom={0.05}
                        className="text-gray-700 dark:text-gray-400 text-base space-y-3"
                    >
                        <motion.li variants={fadeUp(0.02)} className="flex items-center gap-3">
                            <Leaf className="text-green-500" size={18} />
                            <span>Chất lượng luôn được đặt lên hàng đầu.</span>
                        </motion.li>
                        <motion.li variants={fadeUp(0.04)} className="flex items-center gap-3">
                            <Heart className="text-green-500" size={18} />
                            <span>
                                Đội ngũ yêu lan, am hiểu về từng loài và không ngừng học hỏi.
                            </span>
                        </motion.li>
                        <motion.li variants={fadeUp(0.06)} className="flex items-center gap-3">
                            <Flower2 className="text-green-500" size={18} />
                            <span>
                                Lan tỏa vẻ đẹp thiên nhiên đến mọi ngóc ngách của cuộc sống.
                            </span>
                        </motion.li>
                    </motion.ul>
                </motion.div>
            </div>

            {/* Trích dẫn */}
            <motion.div variants={fadeUp(0.1)} className="relative text-center mt-16">
                <blockquote
                    className="
            italic text-lg text-green-600 dark:text-green-400
            border-l-4 border-green-500 dark:border-green-400
            pl-6 mx-auto max-w-2xl leading-relaxed
          "
                >
                    “Hoa lan không chỉ là một loài hoa — mà là niềm đam mê và nghệ thuật.”
                </blockquote>
            </motion.div>
        </motion.section>
    )
}

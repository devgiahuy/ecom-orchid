import { Leaf, Flower2, Heart, Flower } from "lucide-react"

export function AboutPage() {
    return (
        <section
            className="
        max-w-7xl mx-auto my-16 px-6 lg:px-10 py-12
        bg-white dark:bg-gray-900
        border border-green-100 dark:border-gray-800
        rounded-3xl shadow-lg relative overflow-hidden
        transition-colors duration-300 
      "
        >
            {/* Tiêu đề */}
            <div className="relative text-center mb-14">
                <h2 className="text-4xl font-extrabold text-green-600 dark:text-green-400">
                    Về Orchid Shop
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mt-3">
                    <span className="flex justify-center items-center">
                        Nơi lan tỏa vẻ đẹp tự nhiên qua từng cánh hoa
                        <Flower color="pink" size={22} />
                    </span>
                </p>
            </div>

            {/* 🪴 Nội dung chính */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Ảnh minh họa */}
                <div className="flex justify-center">
                    <img
                        src="https://24hstore.vn/upload_images/images/hinh-nen-hoa-linh-lan/hinh-nen-hoa-linh-lan-cute-4.jpg"
                        alt="Orchid garden"
                        className="
              w-full max-w-md h-[380px] object-cover rounded-3xl shadow-md
              transition-transform duration-500 hover:scale-[1.04]
            "
                    />
                </div>

                {/* Mô tả */}
                <div className="space-y-6">
                    <h4 className="text-2xl font-semibold text-green-600 dark:text-green-400 flex items-center gap-2">
                        <Flower2 className="text-green-500" /> Sứ mệnh của chúng tôi
                    </h4>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Orchid Shop ra đời với mong muốn mang đến những bông hoa lan chất lượng,
                        tinh tế và tràn đầy sức sống. Chúng tôi hợp tác cùng các nhà vườn uy tín
                        trong và ngoài nước để mang đến cho bạn trải nghiệm mua sắm tuyệt vời nhất —
                        nơi cái đẹp và thiên nhiên hòa quyện trong từng cánh hoa.
                    </p>

                    {/* 🌼 Giá trị cốt lõi */}
                    <ul className="text-gray-700 dark:text-gray-400 text-base space-y-3">
                        <li className="flex items-center gap-3">
                            <Leaf className="text-green-500" size={18} />
                            <span>Chất lượng luôn được đặt lên hàng đầu.</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Heart className="text-green-500" size={18} />
                            <span>
                                Đội ngũ yêu lan, am hiểu về từng loài và không ngừng học hỏi.
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Flower2 className="text-green-500" size={18} />
                            <span>
                                Lan tỏa vẻ đẹp thiên nhiên đến mọi ngóc ngách của cuộc sống.
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* 🌸 Trích dẫn */}
            <div className="relative text-center mt-16">
                <blockquote
                    className="
            italic text-lg text-green-600 dark:text-green-400
            border-l-4 border-green-500 dark:border-green-400
            pl-6 mx-auto max-w-2xl leading-relaxed
          "
                >
                    “Hoa lan không chỉ là một loài hoa — mà là niềm đam mê và nghệ thuật.”
                </blockquote>
            </div>
        </section>
    )
}

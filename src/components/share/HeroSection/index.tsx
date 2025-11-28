// src/components/home/HeroSection.tsx
import { Link } from "react-router-dom"

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-[#fdf9f6]">
            {/* nhẹ nhàng cho full width */}
            <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-4 py-10 md:flex-row md:py-16">
                {/* LEFT: text */}
                <div className="w-full md:w-1/2 space-y-6">
                    {/* small accent text */}
                    <p className="tracking-[0.35em] text-xs font-semibold text-gray-500 uppercase">
                        ECOM ORCHID
                    </p>

                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                            FLOWER
                            <br />
                            <span className="inline-block -mt-1.5">SHOP</span>
                        </h1>
                        <p className="mt-3 text-xl italic text-gray-600">a bouquet of love</p>
                    </div>

                    <p className="max-w-md text-sm md:text-base text-gray-600">
                        Ecom Orchid mang đến những bó hoa và chậu lan được chọn lọc kỹ, phù hợp làm
                        quà tặng, trang trí không gian sống và gửi gắm yêu thương.
                    </p>

                    {/* CTA buttons */}
                    <div className="flex flex-wrap gap-3">
                        <Link
                            to="/orchids"
                            className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-2 text-sm font-semibold text-white shadow-md hover:bg-gray-800 transition"
                        >
                            Purchase
                        </Link>
                        <Link
                            to="/about"
                            className="inline-flex items-center justify-center rounded-full border border-gray-500 px-6 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-900 hover:text-white transition"
                        >
                            Read more
                        </Link>
                    </div>

                    {/* small promo text */}
                    <p className="pt-4 text-sm font-semibold text-gray-800">
                        Get a discount on your first purchase
                    </p>
                </div>

                {/* RIGHT: image */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <div className="relative max-w-md">
                        {/* main bouquet image */}
                        <img
                            src="/images/hero-bouquet.png" // 👉 thay bằng Cloudinary / ảnh của bạn
                            alt="Bouquet"
                            className="w-full h-auto rounded-3xl object-cover shadow-xl"
                        />

                        {/* small caption */}
                        <p className="absolute bottom-6 right-6 text-[11px] text-gray-700">
                            • Name of bouquet
                        </p>
                    </div>
                </div>
            </div>

            {/* optional: floating petals background layer */}
            <div className="pointer-events-none absolute inset-0 opacity-60">
                <div className="bg-[url('/images/petals.png')] bg-contain bg-repeat mix-blend-soft-light w-full h-full" />
            </div>
        </section>
    )
}

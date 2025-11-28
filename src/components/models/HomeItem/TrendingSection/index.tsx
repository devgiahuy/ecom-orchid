import { Heart } from "lucide-react"

const PRODUCTS = [
    {
        id: 1,
        title: "Royal Purple Vanda",
        subtitle: "Hanging Basket",
        price: "$65",
        img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp",
        favorite: true
    },
    {
        id: 2,
        title: "Snow White Phal",
        subtitle: "Ceramic Pot Included",
        price: "$48",
        img: "https://images.unsplash.com/photo-1559563362-c667ba5f5480?q=80&w=800&auto=format&fit=crop",
        badge: "Bestseller"
    },
    {
        id: 3,
        title: "Tiger Orchid",
        subtitle: "Rare Variety",
        price: "$82",
        img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
    }
]

export function TrendingSection() {
    return (
        <section className="py-20 bg-emerald-50/40 w-full">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-10 text-center">
                    Trending this Season
                </h2>

                <div
                    className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:snap-none"
                    style={{ WebkitOverflowScrolling: "touch" }}
                >
                    {PRODUCTS.map((p) => (
                        <article
                            key={p.id}
                            className="min-w-[280px] md:min-w-0 md:w-full bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow snap-center group"
                        >
                            <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-50 mb-4">
                                <img
                                    src={p.img}
                                    alt={p.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                                {p.favorite && (
                                    <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm text-slate-400 hover:text-red-500 transition-colors">
                                        <Heart className="w-4 h-4" />
                                    </button>
                                )}

                                {p.badge && (
                                    <div className="absolute top-3 left-3 px-2 py-1 bg-slate-900/90 text-white text-[10px] font-bold uppercase tracking-wider rounded-md">
                                        {p.badge}
                                    </div>
                                )}
                            </div>

                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-base font-medium text-slate-900">
                                        {p.title}
                                    </h3>
                                    <p className="text-xs text-slate-500 mt-1">{p.subtitle}</p>
                                </div>
                                <span className="text-sm font-semibold text-slate-900">
                                    {p.price}
                                </span>
                            </div>

                            <button className="w-full mt-4 py-2.5 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">
                                Add to Cart
                            </button>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

import { ArrowRight } from "lucide-react"

export function CategoriesSection() {
    return (
        <section className="py-24 max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-12">
                <div>
                    <h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">
                        Curated Collections
                    </h2>
                    <p className="text-slate-500">Browse by species to find your perfect match.</p>
                </div>
                <a
                    href="#"
                    className="hidden md:flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                    View all categories <ArrowRight className="w-4 h-4" />
                </a>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {/* Cat 1 */}
                <a
                    href="#"
                    className="group relative overflow-hidden rounded-2xl aspect-[3/4] md:aspect-auto md:h-[450px]"
                >
                    <img
                        src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"
                        alt="Phalaenopsis"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60 group-hover:opacity-70 transition-opacity"></div>
                    <div className="absolute bottom-0 left-0 p-8">
                        <h3 className="text-xl font-semibold text-white mb-1">Phalaenopsis</h3>
                        <p className="text-slate-200 text-sm opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                            The Moth Orchid
                        </p>
                    </div>
                </a>
                {/* Cat 2 */}
                <a
                    href="#"
                    className="group relative overflow-hidden rounded-2xl aspect-[3/4] md:aspect-auto md:h-[450px]"
                >
                    <img
                        src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"
                        alt="Dendrobium"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60 group-hover:opacity-70 transition-opacity"></div>
                    <div className="absolute bottom-0 left-0 p-8">
                        <h3 className="text-xl font-semibold text-white mb-1">Dendrobium</h3>
                        <p className="text-slate-200 text-sm opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                            Hardy Cane Orchids
                        </p>
                    </div>
                </a>

                {/* Cat 3 */}
                <a
                    href="#"
                    className="group relative overflow-hidden rounded-2xl aspect-[3/4] md:aspect-auto md:h-[450px]"
                >
                    <img
                        src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"
                        alt="Cattleya"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60 group-hover:opacity-70 transition-opacity"></div>
                    <div className="absolute bottom-0 left-0 p-8">
                        <h3 className="text-xl font-semibold text-white mb-1">Cattleya</h3>
                        <p className="text-slate-200 text-sm opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                            Queen of Orchids
                        </p>
                    </div>
                </a>
            </div>
        </section>
    )
}

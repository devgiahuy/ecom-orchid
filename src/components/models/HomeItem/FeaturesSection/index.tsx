import { HeartHandshake, Sun, Truck } from "lucide-react"

export function FeaturesSection() {
    return (
        <section className="py-20 bg-white border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-10">
                    {/* Feature 1 */}
                    <div className="group p-6 rounded-2xl bg-slate-50 hover:bg-emerald-50/50 transition-colors border border-transparent hover:border-emerald-100">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Sun className="w-6 h-6 text-emerald-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                            Thrives in Light
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Most of our orchids love bright, indirect sunlight. Perfect for
                            near-window placement.
                        </p>
                    </div>
                    {/* Feature 2 */}
                    <div className="group p-6 rounded-2xl bg-slate-50 hover:bg-emerald-50/50 transition-colors border border-transparent hover:border-emerald-100">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Truck className="w-6 h-6 text-emerald-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Safe Delivery</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Specialized packaging ensures your blooms arrive intact and fresh,
                            anywhere in the country.
                        </p>
                    </div>
                    {/* Feature 3 */}
                    <div className="group p-6 rounded-2xl bg-slate-50 hover:bg-emerald-50/50 transition-colors border border-transparent hover:border-emerald-100">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <HeartHandshake className="w-6 h-6 text-emerald-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                            Lifetime Support
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Access our expert botanists for care advice anytime after your purchase.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

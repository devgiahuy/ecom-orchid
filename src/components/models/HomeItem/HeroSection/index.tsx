import { ButtonStyled } from "@/components/styled"
import { ArrowRight, Droplets, Plus } from "lucide-react"

export function HeroSection() {
    return (
        <div className="bg-slate-50 text-slate-600 antialiased selection:bg-emerald-200 selection:text-emerald-900 bg-texture">
            <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .animate-fade-in { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-delay-100 { animation-delay: 0.1s; }
        .animate-delay-200 { animation-delay: 0.2s; }
        .animate-delay-300 { animation-delay: 0.3s; }
        .animate-float { animation: float 6s ease-in-out infinite; }

        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

            <header className="relative pt-16 pb-20 lg:pt-30 lg:pb-32 overflow-hidden w-full">
                {/* Background Gradients */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-emerald-50/50 via-white to-white"></div>
                    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-lime-100 rounded-full blur-3xl opacity-40"></div>
                    <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-emerald-100 rounded-full blur-3xl opacity-40"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                    {/* Hero Content */}
                    <div className="max-w-xl animate-fade-in z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                            <span className="text-xs font-medium text-slate-600 uppercase tracking-wide">
                                New Collection Available
                            </span>
                        </div>

                        <h1 className="text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
                            Discover the Beauty of{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-lime-500">
                                Premium Orchids
                            </span>
                        </h1>

                        <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-md">
                            Elevate your space with our hand-selected, sustainably grown orchids.
                            Delivered fresh from our greenhouse to your doorstep with expert care
                            guides included.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <ButtonStyled className="h-15 group relative px-8 py-3.5 bg-slate-900 text-white text-sm font-medium rounded-full shadow-lg hover:shadow-xl hover:bg-slate-800 transition-all duration-300 flex items-center gap-2">
                                Shop Now
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </ButtonStyled>
                            <ButtonStyled className="h-15 px-8 py-3.5 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-full hover:bg-slate-50 transition-all duration-300">
                                Explore Collections
                            </ButtonStyled>
                        </div>

                        <div className="mt-10 flex items-center gap-4 text-sm text-slate-500">
                            <div className="flex -space-x-2">
                                <img
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64"
                                    alt="User"
                                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64"
                                    alt="User"
                                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64"
                                    alt="User"
                                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                                />
                            </div>
                            <p>Loved by 2,000+ plant enthusiasts</p>
                        </div>
                    </div>

                    {/* Hero Image Visual */}
                    <div className="relative lg:h-[600px] flex items-center justify-center animate-fade-in animate-delay-200">
                        {/* Floating Glass Card */}
                        <div className="absolute top-10 right-10 z-20 bg-white/70 backdrop-blur-xl border border-white/40 p-4 rounded-2xl shadow-xl animate-float hidden lg:block max-w-[180px]">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-emerald-100 rounded-full text-emerald-600">
                                    <Droplets className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-slate-900">
                                        Easy Care
                                    </p>
                                    <p className="text-[10px] text-slate-500">Water weekly</p>
                                </div>
                            </div>
                        </div>

                        {/* Main Image */}
                        <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-full rounded-3xl overflow-hidden shadow-2xl bg-slate-200">
                            <img
                                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
                                alt="White Phalaenopsis Orchid"
                                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                            />

                            {/* Overlay Tag */}
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg flex items-center justify-between">
                                    <div>
                                        <h3 className="text-sm font-semibold text-slate-900">
                                            Phalaenopsis White
                                        </h3>
                                        <p className="text-xs text-slate-500">From $45.00</p>
                                    </div>
                                    <button className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-emerald-600 transition-colors">
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

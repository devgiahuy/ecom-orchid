import { Outlet, NavLink } from "react-router-dom"
import { Tag, ShoppingCart, Shield, Flower, Star } from "lucide-react"

export function AdminLayout() {
    //Sidebar
    const navItems = [
        { to: "/admin/orchids", label: "Hoa Lan", icon: <Flower size={18} /> },
        { to: "/admin/categories", label: "Loại Hoa", icon: <Tag size={18} /> },
        { to: "/admin/feedback", label: "Đánh Giá", icon: <Star size={18} /> },
        { to: "/admin/cart", label: "Đơn hàng", icon: <ShoppingCart size={18} /> }
    ]
    return (
        <div className="flex min-h-screen bg-transparent dark:bg-gray-950">
            {/* Sidebar */}
            <aside className="w-64 h-400 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 p-6">
                <h1 className="flex items-center gap-3 text-2xl font-bold text-green-600 mb-6">
                    <Shield size={35} />
                    Orchid Admin
                </h1>
                <nav className="space-y-2">
                    {navItems.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.to}
                            className={({ isActive }) =>
                                `w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                                    isActive
                                        ? "bg-green-100 text-green-700"
                                        : "hover:bg-gray-100 dark:hover:bg-gray-800"
                                }`
                            }
                        >
                            {item.icon}
                            <span className="truncate">{item.label}</span>
                        </NavLink>
                    ))}
                </nav>
            </aside>

            <main className="flex-1 p-4 pt-0  dark:bg-gray-900 overflow-auto">
                <Outlet />
            </main>
        </div>
    )
}

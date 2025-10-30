import { Outlet, NavLink } from "react-router-dom"
import { Tag, ShoppingCart, Shield, Flower } from "lucide-react"

export function AdminLayout() {
    //Sidebar
    const navItems = [
        { to: "/admin/orchids", label: "Hoa Lan", icon: <Flower size={18} /> },
        { to: "/admin/categories", label: "Loại Hoa", icon: <Tag size={18} /> },
        { to: "/admin/cart", label: "Đơn hàng", icon: <ShoppingCart size={18} /> }
    ]
    return (
        <div className="flex min-h-screen bg-transparent dark:bg-gray-950 rounded-2xl">
            {/* Sidebar */}
            <aside className="w-64 h-150 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 p-4 rounded-2xl mt-18">
                <h1 className=" flex gap-2 text-2xl font-bold text-green-600 mb-6">
                    <span>
                        <Shield size={35} />
                    </span>
                    Orchid Admin
                </h1>
                <nav className="space-y-3 ">
                    {navItems.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.to}
                            className={({ isActive }) =>
                                `block px-3 py-2 rounded-lg ${
                                    isActive ? "bg-green-100 text-green-700" : "hover:bg-gray-100"
                                }`
                            }
                        >
                            {item.icon}
                            {item.label}
                        </NavLink>
                    ))}
                </nav>
            </aside>

            <main className="flex-1 pt-8 pr-8 pb-8 shadow-">
                <Outlet />
            </main>
        </div>
    )
}

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react"
import { Link, useLocation } from "react-router-dom"
import { ButtonStyled } from "../../styled"
import ProfileDropdown from "../ProfileDropdown"
import { useAuth } from "@/provider/AuthProvider"
import { useCartItemCount } from "@/hooks/singleton/store/useCartStore"
import { ShoppingCart } from "lucide-react"

export const OrchidLogo = () => (
    <div className="flex items-center gap-2">
        <img src="/HYCAT-ORCHID.png" alt="Orchid Logo" className="h-10 w-10 object-contain" />
        <span className="font-semibold text-2xl tracking-wide text-gray-900 dark:text-gray-100">
            <span className="text-green-600">HYCAT</span>
            <span className="text-gray-700 dark:text-gray-300"> Shop</span>
        </span>
    </div>
)

export default function Header() {
    const { firebaseUser } = useAuth()
    const count = useCartItemCount()
    const location = useLocation()

    const labels = [
        { name: "Home", to: "/home" },
        { name: "Natural", to: "/natural" },
        { name: "About", to: "/about" },
        { name: "Contact", to: "/contact" }
    ]

    return (
        <Navbar
            shouldHideOnScroll
            className="
                bg-white/80 dark:bg-gray-900/80 backdrop-blur-md
                border-b border-primary/10 shadow-sm 
                px-6 py-1 sticky top-0 z-50
            "
        >
            {/* Logo thương hiệu */}
            <NavbarBrand>
                <Link to={"/home"}>
                    <OrchidLogo />
                </Link>
            </NavbarBrand>

            {/* Navigation links */}
            <NavbarContent className="hidden sm:flex gap-8" justify="center">
                {labels.map((label) => {
                    const isActive = location.pathname === label.to
                    return (
                        <NavbarItem key={label.name}>
                            <Link
                                to={!firebaseUser && label.to === "/natural" ? "/login" : label.to}
                                className={`
                                    relative font-medium
                                    ${
                                        isActive
                                            ? "text-primary"
                                            : "text-gray-700 dark:text-gray-300 hover:text-primary"
                                    }
                                    after:content-[''] after:absolute after:left-0 after:bottom-0
                                    after:h-0.5 after:w-0 hover:after:w-full
                                    after:bg-primary after:transition-all after:duration-200
                                `}
                            >
                                {label.name}
                            </Link>
                        </NavbarItem>
                    )
                })}
            </NavbarContent>

            {/* User Actions */}
            <NavbarContent justify="end" className="gap-3">
                {firebaseUser ? (
                    <>
                        <NavbarItem>
                            <ProfileDropdown />
                        </NavbarItem>

                        <NavbarItem>
                            <Link to="/cart" className="relative">
                                <ShoppingCart className="w-6 h-6 text-gray-700 dark:text-gray-200 hover:text-primary" />
                                {count > 0 && (
                                    <span className="absolute -top-2 -right-2 text-xs px-1.5 py-0.5 rounded-full bg-rose-500 text-white font-medium">
                                        {count}
                                    </span>
                                )}
                            </Link>
                        </NavbarItem>
                    </>
                ) : (
                    <NavbarItem className="hidden lg:flex">
                        <ButtonStyled
                            className="
                                px-5 py-2 rounded-xl font-semibold
                                bg-primary text-white 
                                hover:brightness-95 active:brightness-90
                                shadow-[0_4px_12px_rgba(50,205,50,0.25)]
                            "
                        >
                            <Link to={`/login`}>Login</Link>
                        </ButtonStyled>
                    </NavbarItem>
                )}
            </NavbarContent>
        </Navbar>
    )
}

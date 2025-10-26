import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react"
import { Link } from "react-router-dom"
import { ButtonStyled } from "../../styled"

export const OrchidLogo = () => (
    <div className="flex items-center gap-2">
        <img
            src="/HYCAT-ORCHID.png"
            alt="Orchid Logo"
            className="h-30 w-30 object-contain bg-transparent"
        />
        <span className="font-semibold text-xl text-gray-900">
            <span className="text-primary">Ecom</span> Orchid
        </span>
    </div>
)

export default function Header() {
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
        bg-white/90 backdrop-blur-md border-b border-primary/10 
        px-6 py-1 shadow-[0_2px_8px_rgba(50,205,50,0.08)] sticky top-0 z-50
      "
        >
            {/* 🌿 Logo thương hiệu */}
            <NavbarBrand>
                <Link to={"/home"}>
                    <OrchidLogo />
                </Link>
            </NavbarBrand>

            {/* 🔹 Navigation links */}
            <NavbarContent className="hidden sm:flex gap-6" justify="center">
                {labels.map((label) => (
                    <NavbarItem key={label.name}>
                        <Link
                            to={label.to}
                            className="
                text-gray-700 font-medium relative group
                after:content-[''] after:absolute after:w-0 after:h-[2px]
                after:bg-primary after:bottom-0 after:left-0
                after:transition-all after:duration-300 group-hover:after:w-full
                hover:text-primary
              "
                        >
                            {label.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            {/* Login Button */}
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <ButtonStyled
                        className="
              btn-primary px-5 py-2 rounded-xl font-semibold
              bg-primary text-white hover:brightness-95 active:brightness-90
              shadow-[0_4px_12px_rgba(50,205,50,0.25)]
            "
                    >
                        <Link to={`/login`}>Login</Link>
                    </ButtonStyled>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

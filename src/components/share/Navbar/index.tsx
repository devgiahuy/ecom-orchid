import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react"
import { Link } from "react-router-dom"
import { ButtonStyled } from "../../styled"

export const OrchidLogo = () => (
    <div className="flex items-center gap-2">
        <svg fill="none" height="36" viewBox="0 0 32 32" width="36" className="text-primary">
            <path
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
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
        px-6 py-3 shadow-[0_2px_8px_rgba(50,205,50,0.08)] sticky top-0 z-50
      "
        >
            {/* 🌿 Logo thương hiệu */}
            <NavbarBrand>
                <OrchidLogo />
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

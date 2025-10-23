import { Outlet } from "react-router-dom"
import Footer from "../components/share/Footer"
import NavbarV1 from "../components/share/NavbarV1"

export default function App() {
    return (
        <div className="min-h-dvh flex flex-col items-center justify-between bg-white text-gray-800 transition-colors duration-300">
            {/* Navbar */}
            <NavbarV1 />

            {/* Hero title */}

            {/* Main content */}
            <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-8">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}

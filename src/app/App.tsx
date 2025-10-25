import { Outlet } from "react-router-dom"
import Footer from "../components/share/Footer"
import Header from "../components/share/Navbar"

export default function App() {
    return (
        <div className="min-h-dvh flex flex-col items-center justify-between bg-texture text-gray-800 transition-colors duration-300">
            {/* Navbar */}
            <Header />

            {/* Hero title */}

            {/* Main content */}
            <main className="flex-1 w-full max-w-[90rem] mx-auto px-6 py-8">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}

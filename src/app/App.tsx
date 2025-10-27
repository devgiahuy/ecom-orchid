import { Outlet } from "react-router-dom"
import Footer from "../components/share/Footer"
import Header from "../components/share/Navbar"

export default function App() {
    return (
        <>
            {/* Navbar */}
            <Header />
            <div
                className="bg-texture 
                          min-h-dvh flex flex-col items-center justify-between  
                             text-gray-800 transition-colors duration-300"
            >
                {/* Main content */}
                <main className="flex-1 w-full max-w-360 mx-auto px-4 py-2">
                    <Outlet />
                </main>
            </div>
            {/* Footer */}
            <Footer />
        </>
    )
}

import { Outlet, ScrollRestoration } from "react-router-dom"
import Footer from "../components/share/Footer"
import Header from "../components/share/Navbar"

export default function App() {
    return (
        <>
            <div
                className="bg-texture 
                          min-h-dvh flex flex-col items-center justify-between  
                             text-gray-800 transition-colors duration-300"
            >
                {/* Navbar */}
                <Header />
                {/* Main content */}
                {/* className="flex-1 w-full max-w-360 mx-auto px-4 py-2" */}
                <main className="flex-1 w-full mx-auto">
                    <Outlet />
                </main>
                <ScrollRestoration />
            </div>
            {/* Footer */}
            <Footer />
        </>
    )
}

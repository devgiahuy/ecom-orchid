import { Outlet } from "react-router-dom";
import Footer from "../components/share/Footer";
import NavbarV1 from "../components/share/NavbarV1";

/**
 * 🌿 App Layout chính
 * - Bao gồm Navbar, Outlet (nội dung trang), Footer
 * - Hỗ trợ dark mode và responsive container
 */
export default function App() {
  return (
    <div
      className="
        flex flex-col min-h-screen 
        bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100
        transition-colors duration-300"
    >
      {/* Navbar */}
      <NavbarV1 />

      {/* Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

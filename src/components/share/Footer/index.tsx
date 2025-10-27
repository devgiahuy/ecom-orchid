import { Link } from "react-router-dom"
import { Facebook, Instagram, Youtube } from "lucide-react"

export default function Footer() {
    return (
        <footer
            className="
        border-t border-primary/10
        bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-950
        rounded-t-2xl shadow-sm transition-colors duration-300
      "
            aria-labelledby="footer-heading"
        >
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>

            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Brand + intro */}
                    <div>
                        <div className="flex items-center gap-3">
                            <img
                                src="/HYCAT-ORCHID.png"
                                alt="HYCAT Orchid Logo"
                                className="h-12 w-12 object-contain"
                            />
                            <p className="text-2xl font-bold text-green-600 dark:text-green-400 tracking-wide">
                                HYCAT SHOP
                            </p>
                        </div>

                        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            Orchid mang đến những sản phẩm tự nhiên, tinh tế và thân thiện với môi
                            trường. Cảm ơn bạn đã đồng hành cùng chúng tôi.
                        </p>
                    </div>

                    {/* Quick links */}
                    <nav aria-label="Liên kết nhanh">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                            Liên kết nhanh
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <FooterLink to="/home" label="Trang chủ" />
                            </li>
                            <li>
                                <FooterLink to="/about" label="Giới thiệu" />
                            </li>
                            <li>
                                <FooterLink to="/natural" label="Sản phẩm" />
                            </li>
                            <li>
                                <FooterLink to="/contact" label="Liên hệ" />
                            </li>
                        </ul>
                    </nav>

                    {/* Social */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                            Kết nối với chúng tôi
                        </h3>
                        <div className="flex gap-4 text-green-600 dark:text-green-400">
                            <SocialIcon
                                href="https://facebook.com/"
                                title="Facebook"
                                icon={<Facebook size={22} />}
                            />
                            <SocialIcon
                                href="https://instagram.com/"
                                title="Instagram"
                                icon={<Instagram size={22} />}
                            />
                            <SocialIcon
                                href="https://youtube.com/"
                                title="YouTube"
                                icon={<Youtube size={22} />}
                            />
                        </div>

                        {/* Optional: thông tin nhanh */}
                        <address className="not-italic mt-5 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                            <p>123 FPT, TP. Hồ Chí Minh</p>
                            <p>(+84) 123 456 789</p>
                            <p>orchid.support@gmail.com</p>
                        </address>
                    </div>
                </div>

                <hr className="my-10 border-gray-200 dark:border-gray-800" />

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
                    <p className="text-gray-500 dark:text-gray-400">
                        © 2025{" "}
                        <span className="font-semibold text-green-600 dark:text-green-400">
                            HYCAT Orchid
                        </span>
                        . All rights reserved.
                    </p>

                    {/* mini nav phụ (nếu cần) */}
                    <ul className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
                        <li>
                            <Link
                                className="hover:text-green-600 dark:hover:text-green-300"
                                to="/about"
                            >
                                Về chúng tôi
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:text-green-600 dark:hover:text-green-300"
                                to="/contact"
                            >
                                Hỗ trợ
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:text-green-600 dark:hover:text-green-300"
                                to="/home"
                            >
                                Chính sách
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

function FooterLink({ to, label }: { to: string; label: string }) {
    return (
        <Link
            to={to}
            className="
        text-green-700 dark:text-green-300 
        hover:text-green-800 dark:hover:text-green-200 
        underline-offset-4 hover:underline
        transition-colors
      "
        >
            {label}
        </Link>
    )
}

function SocialIcon({ href, title, icon }: { href: string; title: string; icon: React.ReactNode }) {
    return (
        <Link
            to={href}
            title={title}
            target="_blank"
            rel="noreferrer"
            className="
        hover:text-green-800 dark:hover:text-green-300
        transition-transform duration-150
        will-change-transform
      "
        >
            {icon}
        </Link>
    )
}

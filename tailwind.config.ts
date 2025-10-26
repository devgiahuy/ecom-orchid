import { heroui } from "@heroui/theme"
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#e8ffe8",
                    100: "#b7e4b7",
                    200: "#7fd87f",
                    300: "#4fcc4f",
                    400: "#32cd32",
                    500: "#28b428",
                    600: "#229422",
                    700: "#1c751c",
                    800: "#155715",
                    900: "#0d380d",
                    DEFAULT: "#32cd32",
                    foreground: "#ffffff"
                },
                secondary: {
                    DEFAULT: "#f4f4f4",
                    foreground: "#111827"
                },
                accent: {
                    DEFAULT: "#ff66b2"
                }
            }
        }
    },
    plugins: []
}

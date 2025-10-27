import { Button } from "@heroui/react"

export function GoogleLoginButton({ onPress }: { onPress: () => void }) {
    return (
        <Button
            onPress={onPress}
            radius="full"
            variant="flat"
            className="
                w-full sm:w-auto px-5 py-2 font-semibold
                bg-white text-gray-700 hover:bg-gray-200
                border border-gray-300 shadow-sm
                transition-all duration-200
                flex items-center justify-center gap-2 
            "
        >
            {/* Google logo SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
                <path
                    fill="#EA4335"
                    d="M24 9.5c3.94 0 7.16 1.53 9.42 3.97l7-7C36.43 2.47 30.63 0 24 0 14.62 0 6.49 5.42 2.56 13.28l8.22 6.39C12.53 13.72 17.81 9.5 24 9.5z"
                />
                <path
                    fill="#34A853"
                    d="M46.98 24.55c0-1.63-.15-3.2-.43-4.73H24v9.09h12.94c-.58 3.01-2.35 5.56-4.99 7.28l7.77 6.03C43.43 37.16 46.98 31.4 46.98 24.55z"
                />
                <path
                    fill="#FBBC05"
                    d="M10.78 28.67A14.53 14.53 0 019.5 24c0-1.62.29-3.19.78-4.67l-8.22-6.39A23.94 23.94 0 000 24c0 3.85.92 7.48 2.56 10.67l8.22-6z"
                />
                <path
                    fill="#4285F4"
                    d="M24 48c6.48 0 11.92-2.14 15.89-5.83l-7.77-6.03C30.2 37.65 27.29 38.5 24 38.5c-6.19 0-11.47-4.22-13.22-9.83l-8.22 6.01C6.49 42.58 14.62 48 24 48z"
                />
            </svg>
            <span>Đăng nhập với Google</span>
        </Button>
    )
}

import { useNavigate } from "react-router-dom"
import { Leaf, Home } from "lucide-react"
import { ButtonStyled } from "@/components/styled"

export function ErrorPage() {
    const navigate = useNavigate()

    return (
        <section
            className="
        flex flex-col items-center justify-center min-h-[80vh]
        bg-transparent dark:bg-gray-900
        relative overflow-hidden px-6 text-center
      "
        >
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/green-dust-and-scratches.png')] pointer-events-none"></div>

            <div className="relative z-10 max-w-lg">
                <div className="flex justify-center mb-4 gap-4">
                    <h1 className="text-7xl font-extrabold text-green-600 dark:text-green-400 drop-shadow-sm">
                        404
                    </h1>
                    <Leaf size={48} className="text-green-500 animate-bounce" />
                </div>

                <h2 className="text-2xl font-bold mt-4 text-gray-800 dark:text-gray-100">
                    Ôi không! Trang bạn tìm không tồn tại
                </h2>

                <ButtonStyled
                    color="success"
                    radius="full"
                    size="lg"
                    onPress={() => navigate("/home")}
                    startContent={<Home size={18} />}
                    className="font-semibold text-white bg-green-600 hover:bg-green-700 shadow-md transition-all mt-10"
                >
                    Quay lại Trang chủ
                </ButtonStyled>
            </div>
        </section>
    )
}

import { GoogleLoginButton } from "@/components/styled"
import { useAuth } from "@/provider/AuthProvider"
import { Button, Card, CardBody, CardHeader } from "@heroui/react"
import { LogOut } from "lucide-react"

export function LoginPage() {
    const { loginWithGoogle, firebaseUser, logout, role } = useAuth()

    return (
        <section
            className="
        flex items-center justify-center min-h-[80vh]
        bg-transparent dark:bg-gray-900
        relative overflow-hidden 
      "
        >
            {/* Background accent */}
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/green-dust-and-scratches.png')] pointer-events-none"></div>

            <Card
                shadow="lg"
                radius="lg"
                className="
          w-full max-w-md bg-white/95 dark:bg-gray-800/90 
          border border-green-100 dark:border-gray-700 
          backdrop-blur-sm text-center relative z-10 p-4
        "
            >
                <CardHeader className="flex flex-col items-center justify-center py-6 border-b border-green-100 dark:border-gray-700">
                    <img
                        src="/HYCAT-ORCHID.png"
                        alt="Orchid Logo"
                        className="h-40 w-40 object-contain bg-transparent"
                    />
                    <h1 className="text-3xl font-extrabold text-green-600 dark:text-green-400">
                        Orchide Shop
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
                        Đăng nhập để trải nghiệm mua sắm xanh
                    </p>
                </CardHeader>

                <CardBody className="py-10 space-y-6">
                    {firebaseUser ? (
                        <>
                            <p className="text-gray-800 dark:text-gray-200 text-lg">
                                Xin chào,{" "}
                                <span className="font-semibold text-green-600 dark:text-green-400">
                                    {firebaseUser.displayName}
                                </span>
                                !
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                Vai trò:{" "}
                                <span className="font-medium text-green-600 dark:text-green-400">
                                    {role}
                                </span>
                            </p>

                            <Button
                                onPress={logout}
                                color="danger"
                                radius="full"
                                startContent={<LogOut size={18} />}
                                className="mt-4 font-semibold"
                            >
                                Đăng xuất
                            </Button>
                        </>
                    ) : (
                        <>
                            <p className="text-gray-600 dark:text-gray-400 text-sm flex justify-center">
                                Đăng nhập nhanh bằng tài khoản Google của bạn
                            </p>
                            <GoogleLoginButton onPress={loginWithGoogle} />
                        </>
                    )}
                </CardBody>
            </Card>
        </section>
    )
}

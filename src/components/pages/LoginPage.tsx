import { useAuth } from "../../provider/AuthProvider"

export default function LoginPage() {
    const { loginWithGoogle, firebaseUser, logout, role } = useAuth()

    return (
        <div className="p-10 text-center space-y-4">
            <h1 className="text-2xl font-bold">Đăng nhập Orchid Shop</h1>
            {firebaseUser ? (
                <>
                    <p>Xin chào, {firebaseUser.displayName}!</p>
                    <p>Vai trò: {role}</p>
                    <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">
                        Đăng xuất
                    </button>
                </>
            ) : (
                <button
                    onClick={loginWithGoogle}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                >
                    Đăng nhập với Google
                </button>
            )}
        </div>
    )
}

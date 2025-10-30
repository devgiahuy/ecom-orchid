import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../provider/AuthProvider"
import type { Role } from "../model/user"
import { Spinner } from "@heroui/react"

interface ProtectedRouteProps {
    allowRoles: Role[]
    children?: React.ReactNode
}

export function ProtectedRoute({ allowRoles, children }: ProtectedRouteProps) {
    const { firebaseUser, role, loading } = useAuth()

    if (loading) {
        return (
            <div className="text-center p-8">
                <Spinner />
            </div>
        )
    }

    // Nếu chưa login => mặc định guest
    if (!firebaseUser && !allowRoles.includes("guest")) {
        return <Navigate to="/login" replace />
    }

    // Nếu đã login nhưng không có quyền
    if (firebaseUser && !allowRoles.includes(role)) {
        return <Navigate to="/error" replace />
    }

    return <>{children || <Outlet />}</>
}
// export function ProtectedRoute({ allowRoles, children }: ProtectedRouteProps) {
//     const { firebaseUser, role, loading } = useAuth()

//     // 🕒 Khi chưa xác định user (đang load)
//     if (loading) {
//         return (
//             <div className="flex items-center justify-center h-screen">
//                 <Spinner label="Đang xác thực..." />
//             </div>
//         )
//     }

//     // 🚪 Nếu chưa đăng nhập
//     if (!firebaseUser) {
//         // Cho phép guest thì render, không thì chuyển login
//         if (allowRoles.includes("guest")) return <>{children || <Outlet />}</>
//         return <Navigate to="/login" replace />
//     }

//     // ⛔ Nếu đã login nhưng không đủ quyền
//     if (!allowRoles.includes(role)) {
//         return <Navigate to="/error" replace />
//     }

//     // ✅ Nếu hợp lệ
//     console.log("ProtectedRoute:", { firebaseUser, role, loading, allowRoles })

//     return <>{children || <Outlet />}</>
// }

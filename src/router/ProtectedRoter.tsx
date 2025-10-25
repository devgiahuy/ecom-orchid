import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../provider/AuthProvider"
import type { Role } from "../model/user"

export function ProtectedRoute({ allowRoles }: { allowRoles: Role[] }) {
    const { firebaseUser, role, loading } = useAuth()

    if (loading) return <div className="text-center p-8">Đang xác thực...</div>

    // Nếu chưa login => mặc định guest
    if (!firebaseUser && !allowRoles.includes("guest")) {
        return <Navigate to="/login" replace />
    }

    // Nếu đã login nhưng không có quyền
    if (firebaseUser && !allowRoles.includes(role)) {
        return <Navigate to="/unauthorized" replace />
    }

    return <Outlet />
}

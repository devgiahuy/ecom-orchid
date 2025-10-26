import { axiosClient } from "@/api/axiosClient"
import { wrapper } from "../api/wrapper"
import type { UserData } from "../model/user"

const BASE_URL = "/users" // axiosClient đã có baseURL

export const authApi = {
    //   Login – Giả lập login bằng email (MockAPI không có password thật)
    login: (email: string, password: string) =>
        wrapper(
            axiosClient.get<UserData[]>(`/users?email=${email}`).then((res) => {
                const user = res.data[0]
                if (!user) throw new Error("Tài khoản không tồn tại")
                // Giả lập token base
                const token = btoa(`${email}:${password}`)
                return { user, token }
            })
        ),
    // login: (email, password) =>
    //     wrapper(axiosClient.post<{ user: UserData; token: string }>("/login", { email, password })),

    //   Register – Tạo user mới
    register: (payload: UserData) => wrapper(axiosClient.post<UserData>(BASE_URL, payload)),

    //  Logout – Hiện tại chỉ xóa token local, không cần gọi API
    logout: async () => ({ data: { success: true }, error: null })
}

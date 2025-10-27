import type { UserData, UserDataReq } from "../model/user"
import { http } from "@/api/http"

export const userApi = {
    getAll: () => http.get<UserData[]>("/users"),
    getById: (id: string) => http.get<UserData>(`/users/${id}`),
    create: (payload: UserDataReq) => http.post<UserData>("/users", payload),
    update: ({ id, payload }: { id: string; payload: UserData }) =>
        http.put<UserData>(`/users/${id}`, payload),
    delete: (id: string) => http.delete<void>(`/users/${id}`),

    getByEmail: async (email: string) => {
        const res = await http.get<UserData[]>("/users", { email })
        const users = (res as any).data || res
        return users.length > 0 ? users[0] : null
    }
}

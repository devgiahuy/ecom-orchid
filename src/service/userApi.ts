import type { UserData, UserDataReq } from "../model/user"
import { http } from "@/api/http"

// const BASE_URL = "https://68fa6bc0ef8b2e621e7fef06.mockapi.io/users"

// export const userApi = {
//     async getByEmail(email: string): Promise<UserData | null> {
//         const res = await axios.get(`${BASE_URL}?email=${email}`)

//         return res.data[0] || null
//     },

//     async createUser(data: UserData): Promise<UserData> {
//         const res = await axios.post(BASE_URL, data)
//         return res.data
//     }
// }

export const userApi = {
    getAll: () => http.get<UserData[]>("/users"),
    getById: (id: string) => http.get<UserData>(`/users/${id}`),
    getByEmail: (email: string) => http.get<UserData>(`/users?email=${email}`),

    create: (payload: UserDataReq) => http.post<UserData>("/users", payload),
    update: ({ id, payload }: { id: string; payload: UserData }) =>
        http.put<UserData>(`/users/${id}`, payload),
    delete: (id: string) => http.delete<void>(`/users/${id}`)
}

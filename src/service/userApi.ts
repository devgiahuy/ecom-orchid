import axios from "axios"
import type { UserData } from "../model/user"

const BASE_URL = "https://68fa6bc0ef8b2e621e7fef06.mockapi.io/users"

export const userApi = {
    async getByEmail(email: string): Promise<UserData | null> {
        const res = await axios.get(`${BASE_URL}?email=${email}`)
        return res.data[0] || null
    },

    async createUser(data: UserData): Promise<UserData> {
        const res = await axios.post(BASE_URL, data)
        return res.data
    }
}

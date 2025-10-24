// src/api/axiosClient.ts
import axios from "axios"
import { getToken, removeToken } from "../utils/tokent"

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "https://api.example.com",
    headers: { "Content-Type": "application/json" },
    timeout: 10000
})

// ✅ request interceptor
instance.interceptors.request.use((config) => {
    const token = getToken()
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
})

// ✅ response interceptor
instance.interceptors.response.use(
    (res) => res.data,
    (error) => {
        if (error.response?.status === 401) {
            removeToken()
            window.location.href = "/login"
        }
        return Promise.reject(error)
    }
)

const axiosClient = {
    get: <T>(url: string, config?: any) => instance.get<any, T>(url, config),
    post: <T>(url: string, data?: any, config?: any) => instance.post<any, T>(url, data, config),
    put: <T>(url: string, data?: any, config?: any) => instance.put<any, T>(url, data, config),
    delete: <T>(url: string, config?: any) => instance.delete<any, T>(url, config)
}

export default axiosClient
